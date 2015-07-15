goog.provide('anychart.maps.Map');

goog.require('anychart'); // otherwise we can't use anychart.chartTypesMap object.
goog.require('anychart.core.SeparateChart');
goog.require('anychart.core.map.geom');
goog.require('anychart.core.map.scale.Geo');
goog.require('anychart.core.map.series.Base');
goog.require('anychart.core.ui.ColorRange');
goog.require('anychart.core.utils.UnboundRegionsSettings');
goog.require('anychart.utils.GeoJSONParser');
goog.require('goog.dom');



/**
 * AnyChart Map class.
 * @extends {anychart.core.SeparateChart}
 * @constructor
 */
anychart.maps.Map = function() {
  goog.base(this);

  /**
   * Internal represent of geo data.
   * @type {!Array.<anychart.core.map.geom.Point|anychart.core.map.geom.Line|anychart.core.map.geom.Polygon|anychart.core.map.geom.Collection>}
   * @private
   */
  this.internalGeoData_ = [];

  /**
   *
   * @type {Array.<acgraph.vector.Element>}
   */
  this.mapPaths = [];

  /**
   *
   * @type {Array.<acgraph.vector.Element>}
   */
  this.mapPathsPool = [];

  /**
   * Palette for series colors.
   * @type {anychart.palettes.RangeColors|anychart.palettes.DistinctColors}
   * @private
   */
  this.palette_ = null;

  /**
   * @type {anychart.palettes.Markers}
   * @private
   */
  this.markerPalette_ = null;

  /**
   * @type {anychart.palettes.HatchFills}
   * @private
   */
  this.hatchFillPalette_ = null;

  /**
   * @type {!Array.<anychart.core.map.series.Base>}
   * @private
   */
  this.series_ = [];

  /**
   * Geo data settings.
   * @type {Node|string|Object}
   * @private
   */
  this.geoData_ = null;


  this.unboundRegions(true);
  this.defaultSeriesType(anychart.enums.MapSeriesType.CHOROPLETH);
  this.bindHandlersToComponent(this, this.handleMouseOverAndMove, this.handleMouseOut, this.handleMouseClick, this.handleMouseOverAndMove);
};
goog.inherits(anychart.maps.Map, anychart.core.SeparateChart);


/**
 * Supported consistency states. Adds AXES, AXES_MARKERS, GRIDS to anychart.core.SeparateChart states.
 * @type {number}
 */
anychart.maps.Map.prototype.SUPPORTED_CONSISTENCY_STATES =
    anychart.core.SeparateChart.prototype.SUPPORTED_CONSISTENCY_STATES |
    anychart.ConsistencyState.APPEARANCE |
    anychart.ConsistencyState.MAP_SERIES |
    anychart.ConsistencyState.MAP_SCALE |
    anychart.ConsistencyState.MAP_GEO_DATA |
    anychart.ConsistencyState.MAP_PALETTE |
    anychart.ConsistencyState.MAP_COLOR_RANGE |
    anychart.ConsistencyState.MAP_HATCH_FILL_PALETTE;


/**
 * Map z-index in chart root layer.
 * @type {number}
 */
anychart.maps.Map.ZINDEX_MAP = 10;


/**
 * Series labels z-index in chart root layer.
 * @type {number}
 */
anychart.maps.Map.ZINDEX_CHORPLETH_LABELS = 20;


/**
 * Series markers z-index in chart root layer.
 * @type {number}
 */
anychart.maps.Map.ZINDEX_CHORPLETH_MARKERS = 20;


/**
 * Series hatch fill z-index in chart root layer.
 * @type {number}
 */
anychart.maps.Map.ZINDEX_CHORPLETH_HATCH_FILL = 30;


/**
 * Axis z-index in chart root layer.
 * @type {number}
 */
anychart.maps.Map.ZINDEX_AXIS = 35;


/**
 * Map layer.
 * @type {acgraph.vector.Layer}
 * @private
 */
anychart.maps.Map.prototype.mapLayer_;


/**
 * Geo scale.
 * @type {anychart.core.map.scale.Geo}
 * @private
 */
anychart.maps.Map.prototype.scale_;


/**
 * Internal map getter/setter.
 * @param {anychart.enums.MapSeriesType=} opt_value Series type.
 * @return {anychart.maps.Map|anychart.enums.MapSeriesType}
 */
anychart.maps.Map.prototype.defaultSeriesType = function(opt_value) {
  if (goog.isDef(opt_value)) {
    this.defaultSeriesType_ = opt_value;
    return this;
  }
  return this.defaultSeriesType_;
};


/** @inheritDoc */
anychart.maps.Map.prototype.getType = function() {
  return anychart.enums.MapTypes.MAP;
};


//----------------------------------------------------------------------------------------------------------------------
//
//  Scales.
//
//----------------------------------------------------------------------------------------------------------------------
/**
 * Map scale.
 * @param {anychart.core.map.scale.Geo=} opt_value Scale to set.
 * @return {!(anychart.core.map.scale.Geo|anychart.maps.Map)} Default chart scale value or itself for method chaining.
 */
anychart.maps.Map.prototype.scale = function(opt_value) {
  if (goog.isDef(opt_value)) {
    if (this.scale_ != opt_value) {
      if (this.scale_)
        this.scale_.unlistenSignals(this.geoScaleInvalidated_, this);
      this.scale_ = opt_value;
      this.scale_.listenSignals(this.geoScaleInvalidated_, this);

      this.invalidate(anychart.ConsistencyState.MAP_SCALE, anychart.Signal.NEEDS_REDRAW);
    }
    return this;
  } else {
    if (!this.scale_) {
      this.scale_ = new anychart.core.map.scale.Geo();
      this.scale_.listenSignals(this.geoScaleInvalidated_, this);
    }
    return this.scale_;
  }
};


/**
 * Chart scale invalidation handler.
 * @param {anychart.SignalEvent} event Event.
 * @private
 */
anychart.maps.Map.prototype.geoScaleInvalidated_ = function(event) {
  if (event.hasSignal(anychart.Signal.NEEDS_RECALCULATION | anychart.Signal.NEEDS_REAPPLICATION)) {
    this.invalidate(anychart.ConsistencyState.MAP_SCALE, anychart.Signal.NEEDS_REDRAW);
  }
};


//----------------------------------------------------------------------------------------------------------------------
//
//  Coloring
//
//----------------------------------------------------------------------------------------------------------------------
/**
 * Sets/gets settings for regions doesn't linked to anything regions.
 * @param {(Object|boolean)=} opt_value Settings object or boolean value like enabled state.
 * @return {anychart.core.utils.UnboundRegionsSettings|anychart.maps.Map}
 */
anychart.maps.Map.prototype.unboundRegions = function(opt_value) {
  if (!this.unboundRegionsSettings_)
    this.unboundRegionsSettings_ = new anychart.core.utils.UnboundRegionsSettings(this);

  if (goog.isDef(opt_value)) {
    this.unboundRegionsSettings_.setup(opt_value);
    return this;
  }
  return this.unboundRegionsSettings_;
};


/**
 * @param {(anychart.palettes.RangeColors|anychart.palettes.DistinctColors|Object|Array.<string>)=} opt_value .
 * @return {!(anychart.palettes.RangeColors|anychart.palettes.DistinctColors|anychart.maps.Map)} .
 */
anychart.maps.Map.prototype.palette = function(opt_value) {
  if (opt_value instanceof anychart.palettes.RangeColors) {
    this.setupPalette_(anychart.palettes.RangeColors, opt_value);
    return this;
  } else if (opt_value instanceof anychart.palettes.DistinctColors) {
    this.setupPalette_(anychart.palettes.DistinctColors, opt_value);
    return this;
  } else if (goog.isObject(opt_value) && opt_value['type'] == 'range') {
    this.setupPalette_(anychart.palettes.RangeColors);
  } else if (goog.isObject(opt_value) || this.palette_ == null)
    this.setupPalette_(anychart.palettes.DistinctColors);

  if (goog.isDef(opt_value)) {
    this.palette_.setup(opt_value);
    return this;
  }
  return /** @type {!(anychart.palettes.RangeColors|anychart.palettes.DistinctColors)} */(this.palette_);
};


/**
 * Chart markers palette settings.
 * @param {(anychart.palettes.Markers|Object|Array.<anychart.enums.MarkerType>)=} opt_value Chart marker palette settings to set.
 * @return {!(anychart.palettes.Markers|anychart.maps.Map)} Return current chart markers palette or itself for chaining call.
 */
anychart.maps.Map.prototype.markerPalette = function(opt_value) {
  if (!this.markerPalette_) {
    this.markerPalette_ = new anychart.palettes.Markers();
    this.markerPalette_.listenSignals(this.markerPaletteInvalidated_, this);
    this.registerDisposable(this.markerPalette_);
  }

  if (goog.isDef(opt_value)) {
    this.markerPalette_.setup(opt_value);
    return this;
  } else {
    return this.markerPalette_;
  }
};


/**
 * Map hatch fill palette settings.
 * @param {(Array.<acgraph.vector.HatchFill.HatchFillType>|Object|anychart.palettes.HatchFills)=} opt_value Chart
 * hatch fill palette settings to set.
 * @return {!(anychart.palettes.HatchFills|anychart.maps.Map)} Return current chart hatch fill palette or itself
 * for chaining call.
 */
anychart.maps.Map.prototype.hatchFillPalette = function(opt_value) {
  if (!this.hatchFillPalette_) {
    this.hatchFillPalette_ = new anychart.palettes.HatchFills();
    this.hatchFillPalette_.listenSignals(this.hatchFillPaletteInvalidated_, this);
  }

  if (goog.isDef(opt_value)) {
    this.hatchFillPalette_.setup(opt_value);
    return this;
  } else {
    return this.hatchFillPalette_;
  }
};


/**
 * @param {Function} cls Palette constructor.
 * @param {(anychart.palettes.RangeColors|anychart.palettes.DistinctColors)=} opt_cloneFrom Settings to clone from.
 * @private
 */
anychart.maps.Map.prototype.setupPalette_ = function(cls, opt_cloneFrom) {
  if (this.palette_ instanceof cls) {
    if (opt_cloneFrom)
      this.palette_.setup(opt_cloneFrom);
  } else {
    // we dispatch only if we replace existing palette.
    var doDispatch = !!this.palette_;
    goog.dispose(this.palette_);
    this.palette_ = new cls();
    if (opt_cloneFrom)
      this.palette_.setup(opt_cloneFrom);
    this.palette_.listenSignals(this.paletteInvalidated_, this);
    if (doDispatch)
      this.invalidate(anychart.ConsistencyState.MAP_PALETTE | anychart.ConsistencyState.CHART_LEGEND, anychart.Signal.NEEDS_REDRAW);
  }
};


/**
 * Internal palette invalidation handler.
 * @param {anychart.SignalEvent} event Event object.
 * @private
 */
anychart.maps.Map.prototype.paletteInvalidated_ = function(event) {
  if (event.hasSignal(anychart.Signal.NEEDS_REAPPLICATION)) {
    this.invalidate(anychart.ConsistencyState.MAP_PALETTE | anychart.ConsistencyState.CHART_LEGEND, anychart.Signal.NEEDS_REDRAW);
  }
};


/**
 * Internal marker palette invalidation handler.
 * @param {anychart.SignalEvent} event Event object.
 * @private
 */
anychart.maps.Map.prototype.markerPaletteInvalidated_ = function(event) {
  if (event.hasSignal(anychart.Signal.NEEDS_REAPPLICATION)) {
    this.invalidate(anychart.ConsistencyState.MAP_MARKER_PALETTE | anychart.ConsistencyState.CHART_LEGEND, anychart.Signal.NEEDS_REDRAW);
  }
};


/**
 * Internal marker palette invalidation handler.
 * @param {anychart.SignalEvent} event Event object.
 * @private
 */
anychart.maps.Map.prototype.hatchFillPaletteInvalidated_ = function(event) {
  if (event.hasSignal(anychart.Signal.NEEDS_REAPPLICATION)) {
    this.invalidate(anychart.ConsistencyState.MAP_HATCH_FILL_PALETTE | anychart.ConsistencyState.CHART_LEGEND, anychart.Signal.NEEDS_REDRAW);
  }
};


/**
 * Getter/setter for color range.
 * @param {(anychart.core.ui.ColorRange|Object)=} opt_value Chart marker palette settings to set.
 * @return {!(anychart.palettes.Markers|anychart.maps.Map)} Return current chart markers palette or itself for chaining call.
 */
anychart.maps.Map.prototype.colorRange = function(opt_value) {
  if (!this.colorRange_) {
    this.colorRange_ = new anychart.core.ui.ColorRange();
    this.colorRange_.orientation(anychart.enums.Orientation.BOTTOM);
    this.colorRange_.zIndex(anychart.maps.Map.ZINDEX_AXIS);
    this.colorRange_.title(null);
    this.colorRange_.colorLineSize(10);
    this.colorRange_.padding(5);
    this.colorRange_.marker();
    this.colorRange_.listenSignals(this.colorRangeInvalidated_, this);
    this.invalidate(anychart.ConsistencyState.MAP_COLOR_RANGE | anychart.ConsistencyState.BOUNDS,
        anychart.Signal.NEEDS_REDRAW);
  }

  if (goog.isDef(opt_value)) {
    this.colorRange_.setup(opt_value);
    return this;
  } else {
    return this.colorRange_;
  }
};


/**
 * Internal marker palette invalidation handler.
 * @param {anychart.SignalEvent} event Event object.
 * @private
 */
anychart.maps.Map.prototype.colorRangeInvalidated_ = function(event) {
  var state = 0;
  var signal = 0;
  if (event.hasSignal(anychart.Signal.NEEDS_REDRAW)) {
    state |= anychart.ConsistencyState.MAP_COLOR_RANGE |
        anychart.ConsistencyState.MAP_SERIES | anychart.ConsistencyState.APPEARANCE;
    signal |= anychart.Signal.NEEDS_REDRAW;
    this.invalidateSeries_();
  }
  if (event.hasSignal(anychart.Signal.BOUNDS_CHANGED)) {
    state |= anychart.ConsistencyState.BOUNDS;
    signal |= anychart.Signal.BOUNDS_CHANGED;
  }
  // if there are no signals, state == 0 and nothing happens.
  this.invalidate(state, signal);
};


//----------------------------------------------------------------------------------------------------------------------
//
//  Series.
//
//----------------------------------------------------------------------------------------------------------------------
/**
 * Creates choropleth series.
 * @param {!(anychart.data.View|anychart.data.Set|Array|string)} data SVG|SVGString|GeoJSON|MapNameString.
 * @param {Object.<string, (string|boolean)>=} opt_csvSettings If CSV string is passed, you can pass CSV parser settings
 *    here as a hash map.
 * @return {Node|string|Object} Passed geo data.
 */
anychart.maps.Map.prototype.choropleth = function(data, opt_csvSettings) {
  return this.createSeriesByType_(anychart.enums.MapSeriesType.CHOROPLETH, data, opt_csvSettings);
};


/**
 * @param {string} type Series type.
 * @param {!(anychart.data.View|anychart.data.Set|Array|string)} data Data for the series.
 * @param {Object.<string, (string|boolean)>=} opt_csvSettings If CSV string is passed, you can pass CSV parser settings
 *    here as a hash map.
 * @param {number=} opt_zIndex Optional series zIndex.
 * @private
 * @return {anychart.core.map.series.Choropleth}
 */
anychart.maps.Map.prototype.createSeriesByType_ = function(type, data, opt_csvSettings, opt_zIndex) {
  var ctl;
  type = ('' + type).toLowerCase();
  for (var i in anychart.core.map.series.Base.SeriesTypesMap) {
    if (i.toLowerCase() == type)
      ctl = anychart.core.map.series.Base.SeriesTypesMap[i];
  }
  var instance;

  if (ctl) {
    instance = new ctl(data, opt_csvSettings);
    instance.setParentEventTarget(this);
    this.series_.push(instance);

    var index = this.series_.length - 1;
    instance.index(index);
    instance.setGeoData(this, this.internalGeoData_);
    instance.setAutoColor(this.palette().colorAt(this.series_.length - 1));
    instance.setAutoMarkerType(/** @type {anychart.enums.MarkerType} */(this.markerPalette().markerAt(this.series_.length - 1)));
    instance.setAutoHatchFill(/** @type {acgraph.vector.HatchFill|acgraph.vector.PatternFill} */(this.hatchFillPalette().hatchFillAt(this.series_.length - 1)));

    instance.listenSignals(this.seriesInvalidated_, this);
    this.invalidate(
        anychart.ConsistencyState.MAP_SERIES |
        anychart.ConsistencyState.CHART_LEGEND,
        anychart.Signal.NEEDS_REDRAW);
  } else {
    anychart.utils.error(anychart.enums.ErrorCode.NO_FEATURE_IN_MODULE, null, [type + ' series']);
    instance = null;
  }

  return instance;
};


/**
 * Getter series by index.
 * @param {number} index
 * @return {anychart.core.map.series.Base}
 */
anychart.maps.Map.prototype.getSeries = function(index) {
  return this.series_[index] || null;
};


/**
 * Series signals handler.
 * @param {anychart.SignalEvent} event Event object.
 * @private
 */
anychart.maps.Map.prototype.seriesInvalidated_ = function(event) {
  var state = 0;

  if (event.hasSignal(anychart.Signal.NEEDS_REDRAW)) {
    state = anychart.ConsistencyState.MAP_SERIES | anychart.ConsistencyState.APPEARANCE;
  }
  if (event.hasSignal(anychart.Signal.DATA_CHANGED)) {
    state |= anychart.ConsistencyState.MAP_SERIES | anychart.ConsistencyState.CHART_LEGEND;
    this.invalidateSeries_();
  }
  if (event.hasSignal(anychart.Signal.NEED_UPDATE_LEGEND)) {
    state |= anychart.ConsistencyState.CHART_LEGEND;
    if (event.hasSignal(anychart.Signal.BOUNDS_CHANGED))
      state |= anychart.ConsistencyState.BOUNDS;
  }
  if (event.hasSignal(anychart.Signal.NEED_UPDATE_COLOR_RANGE)) {
    state |= anychart.ConsistencyState.MAP_COLOR_RANGE;
  }

  this.invalidate(state, anychart.Signal.NEEDS_REDRAW);
};


/**
 * Getter/setter geo data.
 * @param {Node|string|Object=} opt_data SVG|SVGString|GeoJSON|MapNameString.
 * @return {Node|string|Object} Passed geo data.
 */
anychart.maps.Map.prototype.geoData = function(opt_data) {
  if (goog.isDef(opt_data)) {
    if (this.geoData_ != opt_data) {
      this.geoData_ = opt_data;

      this.invalidate(anychart.ConsistencyState.MAP_SCALE |
          anychart.ConsistencyState.MAP_GEO_DATA |
          anychart.ConsistencyState.MAP_SERIES |
          anychart.ConsistencyState.MAP_COLOR_RANGE |
          anychart.ConsistencyState.MAP_HATCH_FILL_PALETTE |
          anychart.ConsistencyState.APPEARANCE, anychart.Signal.NEEDS_REDRAW);
    }
    return this;
  }
  return this.geoData_;
};


/**
 * Clear map paths.
 */
anychart.maps.Map.prototype.clear = function() {
  for (var i = 0, len = this.mapPaths.length; i < len; i++) {
    var path = this.mapPaths[i];
    if (path) {
      path.clear();
      path.parent(null);
      path.removeAllListeners();
      delete path.tag;

      this.mapPathsPool.push(path);
    }
  }
  this.mapPaths.length = 0;
};


/**
 * Geo data processing.
 */
anychart.maps.Map.prototype.processGeoData = function() {
  if (this.hasInvalidationState(anychart.ConsistencyState.MAP_GEO_DATA)) {
    if (goog.isDefAndNotNull(this.geoData_)) {
      if ((goog.isString(this.geoData_) && goog.string.startsWith(this.geoData_, '<')) || goog.dom.isNodeLike(this.geoData_)) {
        //todo (blackart): Here will be svg parsing. coming soon ...
      }
      var geoData = goog.isString(this.geoData_) ? goog.dom.getWindow()['anychart']['maps'][this.geoData_] : this.geoData_;
      this.internalGeoData_ = anychart.utils.GeoJSONParser.getInstance().parse(/** @type {Object} */(geoData));

      if (!this.mapLayer_) {
        this.mapLayer_ = this.rootElement.layer();
        this.mapLayer_.zIndex(anychart.maps.Map.ZINDEX_MAP);
      } else {
        this.clear();
      }

      this.invalidate(anychart.ConsistencyState.BOUNDS);
    }

    this.markConsistent(anychart.ConsistencyState.MAP_GEO_DATA);
  }
};


/**
 * Calculate geo scale.
 */
anychart.maps.Map.prototype.calculate = function() {
  this.processGeoData();

  var i;
  if (this.hasInvalidationState(anychart.ConsistencyState.MAP_SCALE)) {
    var scale = this.scale();
    scale.startAutoCalc();

    var j, len;
    for (i = 0, len = this.internalGeoData_.length; i < len; i++) {
      var geom = this.internalGeoData_[i];
      if (geom) {
        if (goog.object.containsKey(geom, 'geometries')) {
          var geometries = geom['geometries'];
          var geomsLen = geometries.length;
          for (j = 0; j < geomsLen; j++) {
            this.iterateGeometry_(geometries[j], this.calcGeom_);
          }
        } else {
          this.iterateGeometry_(
              /** @type {anychart.core.map.geom.Point|anychart.core.map.geom.Line|anychart.core.map.geom.Polygon} */(geom),
              this.calcGeom_);
        }
      }
    }
    scale.finishAutoCalc();

    this.markConsistent(anychart.ConsistencyState.MAP_SCALE);
  }

  if (this.hasInvalidationState(anychart.ConsistencyState.MAP_SERIES)) {
    for (i = this.series_.length; i--;) {
      var series = this.series_[i];
      series.container(this.rootElement);
      series.setGeoData(this, this.internalGeoData_);
      series.calculate();
    }
  }
};


/**
 * Invalidates APPEARANCE for all width-based series.
 * @private
 */
anychart.maps.Map.prototype.invalidateSeries_ = function() {
  for (var i = this.series_.length; i--;)
    this.series_[i].invalidate(anychart.ConsistencyState.APPEARANCE | anychart.ConsistencyState.SERIES_HATCH_FILL);
};


/**
 * Function for draw geoms.
 * @param {Array.<number>} coords Array of coords.
 * @param {number} index Current index.
 * @param {anychart.core.map.geom.Point|anychart.core.map.geom.Line|anychart.core.map.geom.Polygon} geom Geom object.
 * @private
 */
anychart.maps.Map.prototype.drawGeom_ = function(coords, index, geom) {
  var x, y;
  var xy = this.scale().transform(coords[index], coords[index + 1]);
  x = xy[0];
  y = xy[1];

  if (goog.object.containsKey(geom, 'coordinates')) {
    geom.domElement.moveTo(x, y).lineTo(x, y);
  } else {
    if (index == 0) geom.domElement.moveTo(x, y);
    else geom.domElement.lineTo(x, y);
  }
};


/**
 * Function for calculate geo scale.
 * @param {Array.<number>} coords Array of coords.
 * @param {number} index Current index.
 * @param {anychart.core.map.geom.Point|anychart.core.map.geom.Line|anychart.core.map.geom.Polygon} geom Geom object.
 * @private
 */
anychart.maps.Map.prototype.calcGeom_ = function(coords, index, geom) {
  this.scale().extendDataRangeX(coords[index]);
  this.scale().extendDataRangeY(coords[index + 1]);
};


/**
 * Draw geometry.
 * @param {anychart.core.map.geom.Point|anychart.core.map.geom.Line|anychart.core.map.geom.Polygon} geom Geometry.
 * @param {function(
 *            this: anychart.maps.Map,
 *            Array.<number>,
 *            number,
 *            (anychart.core.map.geom.Point|anychart.core.map.geom.Line|anychart.core.map.geom.Polygon)
 *         )} callBack DOM element.
 * @private
 */
anychart.maps.Map.prototype.iterateGeometry_ = function(geom, callBack) {
  var j, k, m, geomsLen, pointsLen;
  if (!geom) return;
  if (goog.object.containsKey(geom, 'polygones')) {
    var polygones = geom['polygones'];
    geomsLen = polygones.length;
    for (j = 0; j < geomsLen; j++) {
      var polygone = polygones[j];
      var outerPath = polygone['outerPath'];
      var holes = polygone['holes'];
      pointsLen = outerPath.length;
      for (k = 0; k < pointsLen - 1; k += 2) {
        callBack.call(this, outerPath, k, geom);
      }

      pointsLen = holes.length;
      for (k = 0; k < pointsLen; k++) {
        var hole = holes[k];
        for (m = 0; m < hole.length - 1; m += 2) {
          callBack.call(this, hole, m, geom);
        }
      }
    }
  } else if (goog.object.containsKey(geom, 'paths')) {
    var paths = geom['paths'];
    geomsLen = paths.length;
    for (j = 0; j < geomsLen; j++) {
      var path = paths[j];
      pointsLen = path.length;
      for (k = 0; k < pointsLen - 1; k += 2) {
        callBack.call(this, path, k, geom);
      }
    }
  } else if (goog.object.containsKey(geom, 'coordinates')) {
    var coords = geom['coordinates'];
    pointsLen = coords.length;
    for (k = 0; k < pointsLen - 1; k += 2) {
      callBack.call(this, coords, k, geom);
    }
  }
};


/** @inheritDoc */
anychart.maps.Map.prototype.drawContent = function(bounds) {
  var i, series;
  if (this.hasInvalidationState(anychart.ConsistencyState.MAP_PALETTE)) {
    for (i = this.series_.length; i--;) {
      this.series_[i].setAutoColor(this.palette().colorAt(i));
    }
    this.invalidateSeries_();
    this.invalidate(anychart.ConsistencyState.MAP_SERIES);
    this.markConsistent(anychart.ConsistencyState.MAP_PALETTE);
  }

  if (this.hasInvalidationState(anychart.ConsistencyState.MAP_HATCH_FILL_PALETTE)) {
    for (i = this.series_.length; i--;) {
      this.series_[i].setAutoHatchFill(
          /** @type {acgraph.vector.HatchFill|acgraph.vector.PatternFill} */(this.hatchFillPalette().hatchFillAt(i)));
    }
    this.invalidateSeries_();
    this.invalidate(anychart.ConsistencyState.MAP_SERIES);
    this.markConsistent(anychart.ConsistencyState.MAP_HATCH_FILL_PALETTE);
  }

  if (this.hasInvalidationState(anychart.ConsistencyState.MAP_COLOR_RANGE)) {
    if (this.colorRange_) {
      var targetSeries = this.series_[0];
      if (targetSeries) {
        this.colorRange_.suspendSignalsDispatching();
        this.colorRange_.target(targetSeries);
        this.colorRange_.scale(targetSeries.colorScale());
        this.colorRange_.resumeSignalsDispatching(false);
        this.invalidate(anychart.ConsistencyState.BOUNDS);
      }
    }
  }

  this.calculate();

  if (this.hasInvalidationState(anychart.ConsistencyState.BOUNDS)) {
    var scale = this.scale();
    var contentAreaBounds;
    if (this.colorRange_) {
      this.colorRange_.parentBounds(bounds.clone().round());
      contentAreaBounds = this.colorRange_.getRemainingBounds();
    } else {
      contentAreaBounds = bounds.clone();
    }
    scale.setBounds(contentAreaBounds);

    //todo Don't remove (blackart).
    //------------------------------------------For tests. Bounds map.----------------------------------------------------

    //var minx_ = scale.minimumX();
    //var miny_ = scale.minimumY();
    //var maxx_ = scale.maximumX();
    //var maxy_ = scale.maximumY();

    //console.log(minx_, miny_, maxx_, maxy_);

    //var minx = scale.transformX(minx_);
    //var miny = scale.transformY(miny_);
    //var maxx = scale.transformX(maxx_);
    //var maxy = scale.transformY(maxy_);

    //console.log(minx, miny, maxx, maxy);

    //if (!this.boundingDataRect) this.boundingDataRect = this.mapLayer_.rect();
    //this.boundingDataRect.setBounds(anychart.math.rect(minx, maxy, maxx - minx, miny - maxy));

    //console.log(bounds);

    //if (!this.boundingRect) this.boundingRect = this.mapLayer_.rect().stroke('red');
    //this.boundingRect.setBounds(bounds);

    //------------------------------------------For tests. Bounds map.----------------------------------------------------

    this.clear();
    var j, len;
    for (i = 0, len = this.internalGeoData_.length; i < len; i++) {
      var geom = this.internalGeoData_[i];
      if (!geom) continue;

      var domElement;
      if (this.mapPathsPool.length > 0) {
        domElement = this.mapPathsPool.pop().parent(this.mapLayer_);
      } else {
        domElement = this.mapLayer_.path();
      }

      geom.domElement = domElement;
      this.mapPaths.push(domElement);

      if (goog.object.containsKey(geom, 'geometries')) {
        var geometries = geom['geometries'];
        var geomsLen = geometries.length;
        for (j = 0; j < geomsLen; j++) {
          this.iterateGeometry_(geometries[j], this.drawGeom_);
        }
      } else {
        this.iterateGeometry_(
            /** @type {anychart.core.map.geom.Point|anychart.core.map.geom.Line|anychart.core.map.geom.Polygon} */(geom),
            this.drawGeom_);
      }
    }

    for (i = this.series_.length; i--;) {
      this.series_[i].invalidate(anychart.ConsistencyState.SERIES_DATA, anychart.Signal.NEEDS_REDRAW);
    }
  }

  if (this.hasInvalidationState(anychart.ConsistencyState.APPEARANCE)) {
    if (this.unboundRegionsSettings_ && this.unboundRegionsSettings_.enabled()) {
      for (i = 0, len = this.mapPaths.length; i < len; i++) {
        this.mapPaths[i].visible(true)
            .fill(this.unboundRegionsSettings_.fill())
            .stroke(this.unboundRegionsSettings_.stroke());
      }
    } else {
      for (i = 0, len = this.mapPaths.length; i < len; i++) {
        this.mapPaths[i].visible(false);
      }
    }

    for (i = this.series_.length; i--;) {
      this.series_[i].invalidate(anychart.ConsistencyState.APPEARANCE);
    }
    this.invalidate(anychart.ConsistencyState.MAP_SERIES);
    this.markConsistent(anychart.ConsistencyState.APPEARANCE);
  }

  if (this.hasInvalidationState(anychart.ConsistencyState.MAP_SERIES)) {
    for (i = this.series_.length; i--;) {
      series = this.series_[i];
      series.draw();
    }
    this.markConsistent(anychart.ConsistencyState.MAP_SERIES);
  }

  if (this.hasInvalidationState(anychart.ConsistencyState.MAP_COLOR_RANGE)) {
    if (this.colorRange_) {
      this.colorRange_.suspendSignalsDispatching();
      this.colorRange_.container(this.rootElement);
      this.colorRange_.draw();
      this.colorRange_.resumeSignalsDispatching(false);
    }
    this.markConsistent(anychart.ConsistencyState.MAP_COLOR_RANGE);
  }
};


//----------------------------------------------------------------------------------------------------------------------
//
//  Events.
//
//----------------------------------------------------------------------------------------------------------------------
/** @inheritDoc */
anychart.maps.Map.prototype.makeBrowserEvent = function(e) {
  //this method is invoked only for events from data layer
  var res = goog.base(this, 'makeBrowserEvent', e);
  var tag = anychart.utils.extractTag(res['domTarget']);
  var series = tag && tag.series;
  if (series && !series.isDisposed() && series.enabled()) {
    return series.makeBrowserEvent(e);
  }
  return res;
};


/**
 * Handler for mouseMove and mouseOver events.
 * @param {anychart.core.MouseEvent} event Event object.
 */
anychart.maps.Map.prototype.handleMouseOverAndMove = function(event) {
  var tag = anychart.utils.extractTag(event['domTarget']);

  var series, index;
  if (event['target'] instanceof anychart.core.ui.LabelsFactory) {
    series = event['target'].getParentEventTarget();
    index = tag;
  } else {
    series = tag && tag.series;
    index = tag['index'];
  }

  if (series && !series.isDisposed() && series.enabled()) {
    series.handleMouseOverAndMove(event);
    if (this.colorRange_ && this.colorRange_.target()) {
      var target = this.colorRange_.target();
      if (target == series) {
        var iterator = target.getIterator();
        iterator.select(index);
        var value = iterator.get(target.referenceValueNames[1]);
        this.colorRange_.showMarker(value);
      }
    }
  }
};


/**
 * Handler for mouseOut event.
 * @param {anychart.core.MouseEvent} event Event object.
 */
anychart.maps.Map.prototype.handleMouseOut = function(event) {
  var tag = anychart.utils.extractTag(event['domTarget']);

  var series, index;
  if (event['target'] instanceof anychart.core.ui.LabelsFactory) {
    series = event['target'].getParentEventTarget();
    index = tag;
  } else {
    series = tag && tag.series;
    index = tag['index'];
  }

  if (series && !series.isDisposed() && series.enabled()) {
    series.handleMouseOut(event);
    if (this.colorRange_) {
      this.colorRange_.hideMarker();
    }
  }
};


/**
 * Deselects all regions. It doesn't matter what series it belongs to.
 * @param {anychart.core.MouseEvent} event Event object.
 */
anychart.maps.Map.prototype.unselectAll = function(event) {
  var i, len;
  for (i = 0, len = this.series_.length; i < len; i++) {
    this.series_[i].unselectAll(event);
  }
};


/**
 * Handler for mouseClick event.
 * @param {anychart.core.MouseEvent} event Event object.
 */
anychart.maps.Map.prototype.handleMouseClick = function(event) {
  var tag = anychart.utils.extractTag(event['domTarget']);

  var series, index;
  if (event['target'] instanceof anychart.core.ui.LabelsFactory) {
    series = event['target'].getParentEventTarget();
    index = tag;
  } else {
    series = tag && tag.series;
    index = tag['index'];
  }

  if (series && !series.isDisposed()) {
    series.handleMouseClick(event);
  } else {
    this.unselectAll(event);
  }
};


//----------------------------------------------------------------------------------------------------------------------
//
//  Legend.
//
//----------------------------------------------------------------------------------------------------------------------
/** @inheritDoc */
anychart.maps.Map.prototype.createLegendItemsProvider = function(sourceMode, itemsTextFormatter) {
  var i, count;
  /**
   * @type {!Array.<anychart.core.ui.Legend.LegendItemProvider>}
   */
  var data = [];
  // we need to calculate statistics
  this.calculate();

  var series, scale, itemData;
  if (sourceMode == anychart.enums.LegendItemsSourceMode.DEFAULT) {
    for (i = 0, count = this.series_.length; i < count; i++) {
      series = this.series_[i];
      scale = series.colorScale();
      itemData = series.getLegendItemData(itemsTextFormatter);
      itemData['sourceUid'] = goog.getUid(this);
      itemData['sourceKey'] = series.index();
      itemData['meta'] = {
        scale: scale
      };
      data.push(itemData);
    }
  } else if (sourceMode == anychart.enums.LegendItemsSourceMode.CATEGORIES) {
    if (this.colorRange_ && this.colorRange_.enabled() && this.colorRange_.target() &&
        this.colorRange_.scale() instanceof anychart.core.map.scale.OrdinalColor) {
      scale = this.colorRange_.scale();
      series = this.colorRange_.target();
    } else {
      for (i = 0, count = this.series_.length; i < count; i++) {
        series = this.series_[i];
        if (series.colorScale() instanceof anychart.core.map.scale.OrdinalColor) {
          scale = series.colorScale();
          break;
        }
      }
    }
    if (scale) {
      var ranges = scale.getProcessedRanges();
      for (i = 0, count = ranges.length; i < count; i++) {
        var range = ranges[i];
        data.push({
          'text': range.name,
          'iconEnabled': true,
          'iconType': anychart.enums.LegendItemIconType.SQUARE,
          'iconFill': range.color,
          'disabled': !this.enabled(),
          'sourceUid': goog.getUid(this),
          'sourceKey': i,
          'meta': {
            series: series,
            scale: scale,
            range: range
          }
        });
      }
    }
  }
  return data;
};


/** @inheritDoc */
anychart.maps.Map.prototype.legendItemCanInteractInMode = function(mode) {
  return (mode == anychart.enums.LegendItemsSourceMode.DEFAULT || mode == anychart.enums.LegendItemsSourceMode.CATEGORIES);
};


/** @inheritDoc */
anychart.maps.Map.prototype.legendItemClick = function(item, event) {
  var meta = /** @type {Object} */(item.meta());
  var series;
  var sourceMode = this.legend().itemsSourceMode();
  if (sourceMode == anychart.enums.LegendItemsSourceMode.DEFAULT) {
    var sourceKey = item.sourceKey();
    series = this.getSeries(/** @type {number} */ (sourceKey));
    if (series)
      series.enabled(!series.enabled());
  } else if (sourceMode == anychart.enums.LegendItemsSourceMode.CATEGORIES) {
    series = meta.series;
    var scale = meta.scale;

    if (!(event.metaKey || event.shiftKey)) {
      this.unselectAll(event);
    }

    if (scale && series) {
      var range = meta.range;
      var iterator = series.getResetIterator();

      while (iterator.advance()) {
        var pointValue = iterator.get(series.referenceValueNames[1]);
        if (range == scale.getRangeByValue(pointValue)) {
          series.selectPoint(iterator.getIndex());
        }
      }
    }
    series.hideTooltip();
    event.stopPropagation();
  }
};


/** @inheritDoc */
anychart.maps.Map.prototype.legendItemOver = function(item) {
  var meta = /** @type {Object} */(item.meta());
  var series;

  var sourceMode = this.legend().itemsSourceMode();
  if (sourceMode == anychart.enums.LegendItemsSourceMode.DEFAULT) {
    var sourceKey = item.sourceKey();
    if (item && !goog.isDefAndNotNull(sourceKey) && !isNaN(sourceKey))
      return;
    series = this.getSeries(/** @type {number} */ (sourceKey));
    if (series)
      series.hoverSeries();
  } else if (sourceMode == anychart.enums.LegendItemsSourceMode.CATEGORIES) {
    series = /** @type {anychart.core.map.series.Base} */(meta.series);
    var scale = meta.scale;
    if (scale && series) {
      var range = meta.range;
      var iterator = series.getResetIterator();

      while (iterator.advance()) {
        var pointValue = iterator.get(series.referenceValueNames[1]);
        if (range == scale.getRangeByValue(pointValue)) {
          series.hoverPoint(iterator.getIndex());
        }
      }
      series.hideTooltip();
      if (this.colorRange_ && this.colorRange_.enabled() && this.colorRange_.target()) {
        this.colorRange_.showMarker((range.start + range.end) / 2);
      }
    }
  }
};


/** @inheritDoc */
anychart.maps.Map.prototype.legendItemOut = function(item) {
  var meta = /** @type {Object} */(item.meta());
  var series;

  var sourceMode = this.legend().itemsSourceMode();
  if (sourceMode == anychart.enums.LegendItemsSourceMode.DEFAULT) {
    var sourceKey = item.sourceKey();
    if (item && !goog.isDefAndNotNull(sourceKey) && !isNaN(sourceKey))
      return;
    series = this.getSeries(/** @type {number} */ (sourceKey));
    if (series)
      series.unhover();
  } else if (sourceMode == anychart.enums.LegendItemsSourceMode.CATEGORIES) {
    series = meta.series;
    series.unhover();
  }
};


/** @inheritDoc */
anychart.maps.Map.prototype.setupByJSON = function(config) {
  goog.base(this, 'setupByJSON', config);

  this.palette(config['palette']);
  this.markerPalette(config['markerPalette']);
  this.hatchFillPalette(config['hatchFillPalette']);
  this.colorRange(config['colorRange']);
  this.unboundRegions(config['unboundRegions']);

  var i, json, scale;
  if (config['geoScale']) {
    scale = new anychart.core.map.scale.Geo();
    scale.setup(config['geoScale']);
    this.scale(scale);
  }

  var series = config['series'];
  var scales = config['colorScales'];

  var scalesInstances = {};
  if (goog.isObject(scales)) {
    for (i in scales) {
      if (!scales.hasOwnProperty(i)) continue;
      json = scales[i];
      var type = goog.isString(json) ? json : json['type'];
      type = (type + '').toLowerCase();
      switch (type) {
        case 'ordinalcolor':
          scale = new anychart.core.map.scale.OrdinalColor();
          break;
        case 'linearcolor':
          scale = new anychart.core.map.scale.LinearColor();
          break;
        default:
          scale = new anychart.core.map.scale.LinearColor();
      }
      if (goog.isObject(json))
        scale.setup(json);
      scalesInstances[i] = scale;
    }
  }

  if (goog.isArray(series)) {
    for (i = 0; i < series.length; i++) {
      json = series[i];
      var seriesType = (json['seriesType'] || this.defaultSeriesType()).toLowerCase();
      var data = json['data'];
      var seriesInst = this.createSeriesByType_(seriesType, data);
      if (seriesInst) {
        seriesInst.setup(json);
        if (goog.isObject(json)) {
          if ('colorScale' in json) seriesInst.colorScale(scalesInstances[json['colorScale']]);
        }
      }
    }
  }
};


/** @inheritDoc */
anychart.maps.Map.prototype.serialize = function() {
  var json = goog.base(this, 'serialize');

  json['type'] = this.getType();
  json['palette'] = this.palette().serialize();
  json['markerPalette'] = this.markerPalette().serialize();
  json['hatchFillPalette'] = this.hatchFillPalette().serialize();
  json['unboundRegions'] = this.unboundRegions().serialize();
  json['colorRange'] = this.colorRange().serialize();
  json['geoScale'] = this.scale().serialize();

  var series = [];
  var scalesIds = {};
  var scales = [];
  for (var i = 0; i < this.series_.length; i++) {
    var series_ = this.series_[i];
    var config = series_.serialize();

    var scale = series_.colorScale();
    if (scale) {
      var objId = goog.getUid(scale);
      if (!scalesIds[objId]) {
        scalesIds[objId] = scale.serialize();
        scales.push(scalesIds[objId]);
        config['colorScale'] = scales.length - 1;
      } else {
        config['colorScale'] = goog.array.indexOf(scales, scalesIds[objId]);
      }
    }
    series.push(config);
  }
  if (series.length)
    json['series'] = series;

  if (scales.length)
    json['colorScales'] = scales;

  return {'map': json};
};


//exports
anychart.maps.Map.prototype['getType'] = anychart.maps.Map.prototype.getType;
anychart.maps.Map.prototype['geoData'] = anychart.maps.Map.prototype.geoData;
anychart.maps.Map.prototype['choropleth'] = anychart.maps.Map.prototype.choropleth;
anychart.maps.Map.prototype['unboundRegions'] = anychart.maps.Map.prototype.unboundRegions;
anychart.maps.Map.prototype['colorRange'] = anychart.maps.Map.prototype.colorRange;