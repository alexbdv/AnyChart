if(!_.bullet){_.bullet=1;(function($){var N5=function(a,b){return $.cj($.vj,a,b||"bar")},O5=function(){$.X.call(this);this.ib("defaultRangeMarkerSettings");this.vs=null;$.T(this.za,[["type",4,9],["value",4,9],["layout",4,9],["fill",16,1],["stroke",16,1]])},P5=function(a,b){$.n(b)&&(b=N5(b,a.lh("type")),a.lh("type")!=b&&(a.pa.type=b,$.n(a.be("type"))||a.u(4,9)))},sha=function(a,b){if("horizontal"==a)switch(b){default:case "bar":return function(a,b){var c=this.scale().transform(0);c=(0,window.isNaN)(c)?0:$.Xa(c,0,1);var d=this.ka(),h=this.Pl(),
k=$.$m(h)?$.O(h,d.height):d.height*h;h=d.left+c*d.width;var l=d.top+k/2;c=(b-c)*d.width;d=d.height-k;a.clear().moveTo(h,l).lineTo(h+c,l).lineTo(h+c,l+d).lineTo(h,l+d).close()};case "line":return function(a,b){var c=this.ka(),d=this.Pl(),h=Math.round(c.left+c.width*b),k=Math.round(c.top+c.height/2);c=c.height-($.$m(d)?$.O(d,c.height):c.height*d);a.clear().moveTo(h-1,k-c/2).lineTo(h-1,k+c/2).lineTo(h+1,k+c/2).lineTo(h+1,k-c/2).close()};case "ellipse":return function(a,b){var c=this.ka(),d=this.Pl(),
h=c.left+c.width*b,k=c.top+c.height/2;c=(c.height-($.$m(d)?$.O(d,c.height):c.height*d))/2;d=c/4;a.clear();a.Xd(h,k,d,c,0,360).close()};case "x":return function(a,b){var c=this.ka(),d=this.Pl(),h=Math.round(c.left+c.width*b),k=Math.round(c.top+c.height/2);c=(c.height-($.$m(d)?$.O(d,c.height):c.height*d))/2;d=c/1.5;a.clear().moveTo(h-d-1,k-c).lineTo(h+d-1,k+c).lineTo(h+d+1,k+c).lineTo(h-d+1,k-c).moveTo(h+d-1,k-c).lineTo(h-d-1,k+c).lineTo(h-d+1,k+c).lineTo(h+d+1,k-c).close()}}else switch(b){default:case "bar":return function(a,
b){var c=this.scale().transform(0);c=(0,window.isNaN)(c)?0:$.Xa(c,0,1);var d=this.ka(),h=this.Pl(),k=$.$m(h)?$.O(h,d.width):d.width*h;h=d.left+k/2;var l=d.Na()-d.height*b;k=d.width-k;c=(b-c)*d.height;a.clear().moveTo(h-.25,l-.5).lineTo(h+k+.25,l-.5).lineTo(h+k+.25,l+c-.5).lineTo(h-.25,l+c-.5).close()};case "line":return function(a,b){var c=this.ka(),d=this.Pl(),h=Math.round(c.left+c.width/2),k=Math.round(c.Na()-c.height*b);c=c.width-($.$m(d)?$.O(d,c.width):c.width*d);a.clear().moveTo(h-c/2,k-1).lineTo(h+
c/2,k-1).lineTo(h+c/2,k+1).lineTo(h-c/2,k+1).close()};case "ellipse":return function(a,b){var c=this.ka(),d=this.Pl(),h=Math.round(c.left+c.width/2),k=Math.round(c.Na()-c.height*b);c=(c.width-($.$m(d)?$.O(d,c.width):c.width*d))/2;d=c/4;a.clear();a.Xd(h,k,c,d,0,360).close()};case "x":return function(a,b){var c=this.ka(),d=this.Pl(),h=Math.round(c.left+c.width/2),k=Math.round(c.Na()-c.height*b);c=(c.width-($.$m(d)?$.O(d,c.width):c.width*d))/2;d=c/1.5;a.clear().moveTo(h-c-1,k-d).lineTo(h+c-1,k+d).lineTo(h+
c+1,k+d).lineTo(h-c+1,k-d).moveTo(h+c-1,k-d).lineTo(h-c-1,k+d).lineTo(h-c+1,k+d).lineTo(h+c+1,k-d).close()}}},Q5=function(a,b){$.hv.call(this);this.ib("bullet");this.qd=[];this.nd=[];this.Ov=!0;this.data(a||null,b);$.Oo(this.za,"layout",114820,9)},uha=function(a){(0,$.le)(a.nd,function(a){$.Zc(a)});a.nd.length=0;var b=a.xa.aa().reset();for(b.Ob();b.advance();)tha(a,b)},tha=function(a,b){var c=b.ja(),d=new O5;d.ib("bullet.defaultMarkerSettings");$.V(d);a.nd[c]=d;$.M(a,d);d.scale(a.scale());d.O(a.Va);
P5(d,a.ef().gc(c));d.value(b.get("value"));d.type(b.get("type"));d.Pl(b.get("gap"));d.fill(b.get("fill"));d.stroke(b.get("stroke"));d.ba(!1);$.U(d,a.P4,a)},R5=function(a,b){var c=new Q5(a,b);c.fa(!0,$.Qk("bullet"));return c};$.I(O5,$.X);var S5={};$.No(S5,[[0,"type",N5],[0,"value",$.R],[0,"layout",$.kj],[1,"fill",$.jp],[1,"stroke",$.ip]]);$.$o(O5,S5);var vha={x:"30%",line:"30%",ellipse:"30%",bar:"50%"};$.g=O5.prototype;$.g.ua=$.X.prototype.ua;$.g.oa=$.X.prototype.oa|20;
$.g.Pl=function(a){return $.n(a)?(this.vs!=a&&(this.vs=a,this.u(4,9)),this):null===this.vs?vha[this.i("type")]:this.vs};$.g.Ab=function(){return"horizontal"==this.i("layout")};$.g.scale=function(a){if($.n(a)){if(a=$.zr(this.ma,a,null,3,null,this.Pca,this)){var b=this.ma==a;this.ma=a;a.ba(b);b||this.u(4,9)}return this}return this.ma};$.g.Pca=function(a){var b=0;$.W(a,4)&&(b|=4);$.W(a,2)&&(b|=1);this.u(4,b|8)};
$.g.X=function(){if(!this.scale())return $.Pj(2),this;if(!this.Cc())return this;var a=this.O()?this.O().Da():null,b=a&&!a.Ne();b&&a.suspend();this.g||(this.g=$.Vi(),$.M(this,this.g));if(this.J(8)){var c=this.zIndex();this.g.zIndex(c);this.I(8)}this.J(2)&&(c=this.O(),this.g.parent(c),this.I(2));this.J(16)&&(this.g.stroke(this.i("stroke")),this.g.fill(this.i("fill")),this.I(16));this.J(4)&&(c=this.i("value"),c=this.scale().transform(c,0),this.g.clear(),(0,window.isNaN)(c)||(c=$.Xa(c,0,1),sha(this.i("layout"),
this.i("type")).call(this,this.g,c)),this.I(4));b&&a.resume();return this};$.g.remove=function(){this.g&&this.g.parent(null)};$.I(Q5,$.hv);Q5.prototype.oa=$.hv.prototype.oa|126976;Q5.prototype.Qa=function(){return"bullet"};Q5.prototype.data=function(a,b){return $.n(a)?(this.Hg!==a&&(this.Hg=a,$.L(a,$.Xp)?this.xa=a.Kl():$.L(a,$.gq)?this.xa=a.te():(a=$.D(a)||$.z(a)?a:null,this.xa=(new $.gq(a,b)).te()),$.U(this.xa,this.Ke,this),this.u(127232,1)),this):this.xa};Q5.prototype.Ke=function(a){$.W(a,16)&&this.u(127232,1)};var T5={};$.Mo(T5,0,"layout",$.kj);$.$o(Q5,T5);$.g=Q5.prototype;$.g.Ab=function(){return"horizontal"==this.i("layout")};
$.g.scale=function(a){this.ma||(this.ma=$.vr(),this.ma.mq(0),this.ma.kq(0),this.ma.Ka().count(3,5));if($.n(a)){if(a=$.zr(this.ma,a,"linear",3))this.ma=a,a.ba(!1),this.u(122880,1);return this}return this.ma};$.g.axis=function(a){this.bd||(this.bd=new $.jw,this.bd.lb(this),$.M(this,this.bd),$.U(this.bd,this.Q4,this),this.u(114692,9));return $.n(a)?(this.bd.N(a),this):this.bd};$.g.Q4=function(a){var b=0,c=0;$.W(a,1)&&(b|=16384,c|=1);$.W(a,8)&&(b|=4);this.u(b,c)};
$.g.de=function(a,b){var c=$.R(a);if((0,window.isNaN)(c)){c=0;var d=a}else c=a,d=b;var e=this.qd[c];e||(e=new $.yx,e.ib("bullet.defaultRangeMarkerSettings"),this.qd[c]=e,$.M(this,e),$.U(e,this.Mca,this),this.u(32768,1));return $.n(d)?(e.N(d),this):e};$.g.Mca=function(){this.u(32768,1)};$.g.QK=function(a){this.b||(this.b=new $.Zq,$.U(this.b,this.Lca,this),$.M(this,this.b),$.Qp(this,"rangePalette",this.b),this.b.Br(!1));return $.n(a)?(this.b.N(a),this):this.b};
$.g.Lca=function(a){$.W(a,2)&&this.u(32768,1)};$.g.ef=function(a){this.Qe||(this.Qe=new $.ar,$.U(this.Qe,this.Kca,this),$.M(this,this.Qe),$.Qp(this,"markerPalette",this.Qe));return $.n(a)?(this.Qe.N(a),this):this.Qe};$.g.Kca=function(a){$.W(a,2)&&this.u(65536,1)};
$.g.kb=function(){var a,b=this.scale();b.qg()&&b.Mg();var c=0;for(a=this.nd.length;c<a;c++){var d=this.nd[c];null!=d&&(d.scale(b),"bar"==d.i("type")&&b.Wc(0),b.Wc(d.i("value")))}c=0;for(a=this.qd.length;c<a;c++)d=this.qd[c],null!=d&&(d.scale(b),b.Wc(d.i("from")),b.Wc(d.i("to"))),b.qg()&&b.Ug();this.axis().scale(this.scale())};$.g.jk=function(){var a=this.Ab(),b=this.title(),c=this.axis();a?($.kw(c,"bottom"),$.St(b,"left")):($.kw(c,"left"),$.St(b,"bottom"));return Q5.B.jk.call(this)};
$.g.Lj=function(a){if(this.Cc()){this.J(4096)&&(uha(this),this.I(4096));this.J(8192)&&(this.kb(),this.I(8192));var b=this.axis();this.J(16388)&&($.V(b),!b.O()&&b.enabled()&&b.O(this.Va),b.ka(a),b.padding(0),b.ba(!1),b.X(),this.I(16384));var c=b.enabled()?b.jd():a;if(this.J(32772)){a=0;for(b=this.qd.length;a<b;a++){var d=this.qd[a];if(d){$.V(d);$.zx(d,this.Ab()?"vertical":"horizontal");var e=d,f=this.QK().gc(a);f=$.Kb(f);f!=e.lh("fill")&&($.bp(e.pa,$.tD,{fill:f}),e.u(16,1));d.ka(c);d.O(this.Va);d.Wm(0);
d.X();d.ba(!1)}}this.I(32768)}if(this.J(65540)){a=0;for(b=this.nd.length;a<b;a++)d=this.nd[a],$.V(d),d.ka(c),P5(d,this.ef().gc(a)),e=d,f=this.i("layout"),$.n(f)&&(f=$.kj(f,e.lh("layout")),e.lh("layout")!=f&&(e.pa.layout=f,$.n(e.be("layout"))||e.u(4,9))),d.X(),d.ba(!1);this.I(65536)}}};$.g.P4=function(){this.u(65536,1)};
$.g.Wf=function(a){var b;"pointIndex"in a?b=a.pointIndex:"labelIndex"in a?b=a.labelIndex:"markerIndex"in a&&(b=a.markerIndex);b=$.R(b);a.pointIndex=b;var c=a.type;switch(c){case "mouseout":c="pointmouseout";break;case "mouseover":c="pointmouseover";break;case "mousemove":c="pointmousemove";break;case "mousedown":c="pointmousedown";break;case "mouseup":c="pointmouseup";break;case "click":c="pointclick";break;case "dblclick":c="pointdblclick";break;default:return null}var d=this.data().aa();d.select(b)||
d.reset();return{type:c,actualTarget:a.target,pie:this,iterator:d,sliceIndex:b,pointIndex:b,target:this,originalEvent:a}};$.g.Yh=function(){return this};$.g.Uh=function(){return this};$.g.Se=function(){return[this]};$.g.Xk=function(a){return $.n(a)?(a=$.dj(a),a!=this.Th&&(this.Th=a),this):this.Th};$.g.uk=function(){for(var a=this.xa?this.xa.aa().Ob():0,b=0,c=this.nd.length,d=0;d<c;d++){var e=this.nd[d];if(e&&!e.enabled())b++;else break}return!a||!c||b==c};
$.g.F=function(){var a=Q5.B.F.call(this);$.mp(this,T5,a);a.data=this.data().F();a.rangePalette=this.QK().F();a.markerPalette=this.ef().F();a.scale=this.scale().F();a.axis=this.axis().F();for(var b=[],c=0;c<this.qd.length;c++)b.push(this.qd[c].F());a.ranges=b;return{chart:a}};
$.g.$=function(a,b){Q5.B.$.call(this,a,b);this.data(a.data);$.ep(this,T5,a);this.QK().fa(!!b,a.rangePalette);this.ef().fa(!!b,a.markerPalette);var c=a.scale;if($.z(c))var d=$.tr(c,null);else $.F(c)?(d=$.tr(c.type,!1),d.N(c)):d=null;d&&this.scale(d);this.axis(a.axis);c=a.ranges;if($.D(c))for(d=0;d<c.length;d++)this.de(d,c[d])};var U5=Q5.prototype;U5.data=U5.data;U5.rangePalette=U5.QK;U5.markerPalette=U5.ef;U5.scale=U5.scale;U5.axis=U5.axis;U5.range=U5.de;U5.isHorizontal=U5.Ab;U5.getType=U5.Qa;
U5.noData=U5.sn;$.no.bullet=R5;$.H("anychart.bullet",R5);}).call(this,$)}
