if(!_.pyramid_funnel){_.pyramid_funnel=1;(function($){var rT=function(a,b,c){$.Sw.call(this,null,[],[],b,c);this.va=a},tT=function(a,b,c){$.Sw.call(this,null,[],[],b,c);this.va=a;this.g=!sT(this.va);this.Vx=this.va.i("connectorStroke")},uT=function(a,b){$.sv.call(this);$.V(this);this.ib("pieFunnelPyramidBase","funnel");this.pd=null;this.o=[];this.Qe=null;this.W=1;this.Km=this.Fa=null;this.state=new $.Wu(this);this.data(a||null,b);var c={};$.T(c,[["fill",528,1],["stroke",528,1],["hatchFill",528,1],["labels",0,0],["markers",0,0]]);this.ia=new $.Iv(this,
c,$.Jk);$.Fp(this.ia,"labelsAfterInitCallback",function(a){$.U(a,this.Vd,this);a.lb(this);this.u(4096,1)});this.ia.ca.markersAfterInitCallback=$.Ov;c={};$.T(c,[["fill",16,1],["stroke",16,1],["hatchFill",0,0],["labels",0,0],["markers",0,0]]);this.Ca=new $.Iv(this,c,1);this.Ca.ca.labelsFactoryConstructor=$.Kv;this.Ga=new $.Iv(this,c,2);this.Ga.ca.labelsFactoryConstructor=$.Kv;$.T(this.za,[["baseWidth",16,1],["neckHeight",16,1],["neckWidth",16,1],["pointsPadding",16,1],["reversed",16,1],["overlapMode",
4096,1],["connectorLength",4100,9],["connectorStroke",16,1]]);this.ba(!1)},vT=function(a,b){var c=a.aa().j("point");if($.n(c)){var d=$.Fk("fill",1,!0)(a,b,!1,!0);c.fill(d);d=$.Fk("stroke",2,!0)(a,b,!1,!0);c.stroke(d)}},wT=function(a,b){var c=a.aa().j("hatchPoint");if(null!=c){var d=$.Fk("hatchFill",3,!0)(a,b,!1);c.stroke(null).fill(d)}},xT=function(a,b){var c=a.G,d=a.f.height,e=a.Ia,f=a.da;return b>d-f||d==f?e:e+(d-f-b)/(d-f)*(c-e)},yT=function(a){a=$.R(a);return 0>=a||!(0,window.isFinite)(a)},zT=
function(a){var b=a.aa(),c=b.ja(),d=a.f,e;var f=b.j("height")/2;var h=b.j("startY");var k=b.j("height")+h;var l=null;if(e=a.ra)c?c==b.Ob()-1?(h+=e/2,h>k&&(h=k-a.W)):(h+=e/2,k-=e/2,h>k&&(h=b.j("startY")+f,k=h+a.W)):(k-=e/2,k<h&&(k=a.W));var m=xT(a,h);c=a.b-m/2;f=c+m;m=xT(a,k);e=a.b-m/2;m=e+m;h+=d.top;k+=d.top;c=d.left+c;f=d.left+f;0<a.da&&h<a.ta&&k>a.ta&&(l=k,k=a.ta,m=xT(a,k),e=a.b-m/2,m=e+m);e=d.left+e;m=d.left+m;a.i("reversed")||(h=d.height-(h-d.top)+d.top,k=d.height-(k-d.top)+d.top,l=l?d.height-
(l-d.top)+d.top:null,h=[k,k=h][0],c=[e,e=c][0],f=[m,m=f][0]);b.j("x1",c);b.j("x2",f);b.j("x3",e);b.j("x4",m);b.j("y1",h);b.j("y2",k);b.j("y3",l)},AT=function(a,b,c,d){var e=a.labels();$.V(e);e.fontOpacity(b);e.X();e.ba(!1);if(d&&a.D)for(b=0;b<a.D.length;b++)if(d=a.D[b])e=a.i("connectorStroke"),e=$.wk(e,c),d.stroke(e)},oga=function(a){var b=a.aa(),c=b.ja(),d=$.qz(a.Ze),e=$.qz(a.g);b.j("point",d);b.j("hatchPoint",e);zT(a);var f=b.j("x1"),h=b.j("x2"),k=b.j("x3"),l=b.j("x4"),m=b.j("y1"),p=b.j("y2"),q=
b.j("y3");d.moveTo(f,m).lineTo(h,m);q?d.lineTo(l,p).lineTo(l,q).lineTo(k,q).lineTo(k,p):d.lineTo(l,p).lineTo(k,p);d.close();b.j("point",d);d.tag={index:c,U:a};b=$.av(a.state,b.ja());vT(a,b);e&&(e.Ld(d.F()),e.tag={index:c,U:a},wT(a,b))},ET=function(a,b,c){var d=BT(a),e=a.aa(),f=a.f,h=$.n(c)?!!(c&2):null,k=$.n(c)?!h&&!!(c&1):null,l=e.get("normal");l=$.n(l)?l.label:void 0;var m=e.get("hovered");m=$.n(m)?m.label:void 0;var p=e.get("selected");p=$.n(p)?p.label:void 0;l=$.zn(l,e.get("label"));m=k?$.zn(m,
e.get("hoverLabel")):null;h=(p=h?$.zn(p,e.get("selectLabel")):null)||m||l||{};l=$.R(e.j("x1"));p=$.R(e.j("x2"));m=$.R(e.j("y1"));k=$.R(e.j("y2"));var q=$.R(e.j("y3"));e=p-l;k=q?q-m:k-m;m+=k/2;p=$.R(h.offsetY)||0;b?c=CT(a,b,c):(c=a.labels().vk(a.Fc(),null,h),c=$.Sl(c));h=b&&b.i("anchor")||a.labels().i("anchor");b&&(m=b.rc().value.y);b=m+p;c.height>k&&("left-center"==h||"center"==h||"right-center"==h)&&(m+c.height/2>f.top+f.height&&(m=f.top+f.height-c.height/2),m-c.height/2<f.top&&(m=f.top+c.height/
2));b=DT(a,b);switch(d){case "inside":l+=e/2;break;case "outside-left":l=a.b-b/2;l=f.left+l-a.K-c.width/2;break;case "outside-left-in-column":l=f.left+c.width/2;break;case "outside-right":l=a.b+b/2;l=f.left+l+a.K+c.width/2;break;case "outside-right-in-column":l=f.left+f.width-c.width/2}if("left-top"==h||"center-top"==h||"right-top"==h)m-=.5;else if("left-bottom"==h||"center-bottom"==h||"right-bottom"==h)m+=.5;return{value:{x:l,y:m}}},CT=function(a,b,c){var d=!!(c&2),e=!d&&!!(c&1);c=a.data().get(b.ja(),
"label");e=e?a.data().get(b.ja(),"hoverLabel"):null;d=(d?a.data().get(b.ja(),"selectLabel"):null)||e||c||{};a.data().j(b.ja(),"labelWidthForced")&&(d=$.Cc(d),d.width=b.width());a.aa().select(b.ja());b.vf(a.Fc());a=a.labels().vk(b.vf(),b.rc(),d);return $.Sl(a)},HT=function(a,b){if("no-overlap"==a.i("overlapMode")&&!sT(a)&&a.labels().enabled()){FT(a);a.Ha=0;var c=a.state.Ti()|(b?$.av(a.state,b.ja()):0);GT(a,c,b)}},GT=function(a,b,c){if(10!=a.Ha){for(var d=a.aa().Ob(),e=!1,f,h,k,l,m=a.i("reversed"),
p=0;p<d-1;p++)if(f=m?p:d-1-p,(f=a.labels().Qd(f))&&0!=f.enabled()&&(h=CT(a,f,b),k=m?pga(a,f):qga(a,f))){l=CT(a,k,b);var q=IT(a,f),r=IT(a,k);q&&r&&q==r||!(l.top<=h.top+h.height)||(e=!0,q&&r?rga(a,q,r):!q&&r?JT(a,k,f):JT(a,f,k))}e&&((0,$.le)(a.o,function(a){if(2>a.labels.length){var b=a.va;b.o.length&&(a.clear(),$.Da(b.o,a))}else{for(var d,e,f=0,h=0,k=b=0,l=a.labels.length;k<l;k++)d=a.labels[k],e=a.va.state.Ti()|$.av(a.va.state,d.ja()),e=a.Xc(d,e),d=a.va.data().j(d.ja(),"point"),d=d.eb(),k||(f=d.top),
b+=e.height,h+=d.height;h+=a.va.ra*(l-1);f=f+h/2-b/2;h=a.va.f;f+b>h.top+h.height&&(f=h.top+h.height-b);f<h.top&&(f=h.top);a.y=f;sga(a,c)}}),a.Ha++,GT(a,b,c))}},pga=function(a,b){if(!b)return null;var c=a.aa().Ob();if(b.ja()==c-1)return null;for(var d,e=b.ja()+1;e<=c-1;e++)if((d=a.labels().Qd(e))&&!1!==d.enabled())return d;return null},qga=function(a,b){if(!b||0==b.ja())return null;for(var c,d=b.ja()-1;0<=d;d--)if((c=a.labels().Qd(d))&&!1!==c.enabled())return c;return null},JT=function(a,b,c){var d=
IT(a,b);null===d?(d=new KT(a),d.$z(b),d.$z(c),a.o.push(d)):d.$z(c)},IT=function(a,b){return a.o.length?$.va(a.o,function(a){return-1!==(0,$.wa)(a.labels,b)}):null},rga=function(a,b,c){var d=b.labels[0].ja(),e=c.labels[0].ja();b.labels=a.i("reversed")==d<e?$.Ea(b.labels,c.labels):$.Ea(c.labels,b.labels);$.Da(a.o,c)},FT=function(a){a.o.length&&((0,$.le)(a.o,function(a){a.clear()}),a.o.length=0)},sT=function(a){return"inside"==BT(a)},LT=function(a){a=BT(a);return"outside-right-in-column"==a||"outside-left-in-column"==
a},MT=function(a){a=BT(a);return"outside-left"==a||"outside-left-in-column"==a},NT=function(a){a=BT(a);return"outside-right"==a||"outside-right-in-column"==a},tga=function(a){if(a.labels().enabled()&&!sT(a)){zT(a);var b=a.aa();b.j("labelWidthForced",void 0);var c=a.f,d=b.get("label"),e=ET(a),f=a.Fc();f=a.labels().vk(f,e,d);f=$.Sl(f);d=f.left;e=f.left+f.width;f=a.i("reversed")?xT(a,f.top-c.top):xT(a,c.height-(f.top+f.height)+c.top);if(MT(a)){var h=a.b-f/2;h=c.left+h;var k=a.G/2;k=c.width-a.b-k;LT(a)?
e+5>h&&(h=e+5-h,h>k?(a.b+=k,h=a.b-f/2,h=c.left+h,b.j("labelWidthForced",h-5-d)):a.b+=h):d<c.left&&(h=Math.abs(c.left-d),h>k?(a.b+=k,h=a.b-f/2,a=h-a.K,10>a&&(a=10),b.j("labelWidthForced",a)):a.b+=h)}else if(NT(a))if(h=a.b+f/2,h+=c.left,k=a.G/2,k=c.width-(c.width-a.b)-k,LT(a)){if(0>d||d-5<h)h=Math.abs(h-d+5),0>d||h>k?(a.b=a.b-k,h=a.b+f/2,h+=c.left,b.j("labelWidthForced",e-5-h)):a.b=a.b-h}else e>c.left+c.width&&(h=e-(c.left+c.width),h>k?(a.b=a.b-k,a=c.left+c.width-d+k,10>a&&(a=10),b.j("labelWidthForced",
a)):a.b=a.b-h)}},BT=function(a){a=a.labels().i("position");return $.cj(uga,"outside"==a?"outside-left":a,"outside-left-in-column")},OT=function(a,b,c,d){var e=a.f,f=b.ja();f=a.data().j(f,"point").eb();b=CT(a,b,d);d=b.left;var h=b.top+b.height/2;f=f.top+f.height/2;var k=DT(a,f);if(MT(a)){d+=b.width;var l=a.b-k/2;l+=e.left;d>l&&5>Math.abs(f-h)&&(d=l-5)}else NT(a)&&(l=a.b+k/2,l+=e.left,d<l&&5>Math.abs(f-h)&&(d=l+5));c.clear().moveTo(d,h).lineTo(l,f+.001)},PT=function(a,b,c){var d=b.ja();if(a.D[d])OT(a,
b,a.D[d],c);else{var e=$.qz(a.P);a.D[d]=e;e.stroke(a.i("connectorStroke"));OT(a,b,e,c)}},vga=function(a,b){b=$.gj(b);var c=a.f,d=a.aa(),e=d.j("point").eb(),f=d.j("x1"),h=d.j("y1");switch(b){case "left-top":h=d.j("y1");f=d.j("x1");break;case "left-center":h+=e.height/2;d=DT(a,h);f=a.b-d/2;f+=c.left;break;case "left-bottom":h+=e.height;f=d.j("x3");break;case "center-top":f=a.b;f+=c.left;break;case "center":h+=e.height/2;DT(a,h);f=a.b;f+=c.left;break;case "center-bottom":h+=e.height;DT(a,h);f=a.b;f+=
c.left;break;case "right-top":d=DT(a,h);f+=d;break;case "right-center":h+=e.height/2;d=DT(a,h);f=a.b+d/2;f+=c.left;break;case "right-bottom":f=d.j("x4"),h+=e.height}return{value:{x:f,y:h}}},DT=function(a,b){var c=a.f;return a.i("reversed")?xT(a,b-c.top):xT(a,c.height-b+c.top)},QT=function(a){var b=a.Ya();a.dc("mousemove",a.lH);b.kd()},KT=function(a){this.va=a;this.labels=[]},sga=function(a,b){var c=0,d=0,e=null,f=null,h=null,k=a.va.state.Ti()|(b?$.av(a.va.state,b.ja()):0);(0,$.le)(a.labels,function(b){var l=
b.rc().value,p=a.Xc(b,k),q=a.y+c+d+p.height/2;if(e&&f&&h){var r=h.y+f.height/2+(e.i("offsetY")||0),t=q-p.height/2+(b.i("offsetY")||0);t<r&&(q+=r-t)}b.rc({value:{x:l.x,y:q}});b.X();PT(a.va,b,k);c+=p.height;d+=b.i("offsetY")||0;e=b;f=p;h={x:l.x,y:q}})},RT=function(a,b){var c=new uT(a,b);c.Kd="funnel";c.fa(!0,$.Qk("funnel"));return c},ST=function(a,b){var c=new uT(a,b);c.Kd="pyramid";c.fa(!0,$.Qk("pyramid"));return c},uga={wM:"inside",Oha:"outside-left",Pha:"outside-left-in-column",Qha:"outside-right",
Rha:"outside-right-in-column"};$.I(rT,$.Sw);$.g=rT.prototype;$.g.update=function(){this.b.length=this.f.length=0;for(var a=this.va.Bf();a.advance();)if(!a.j("missing")){var b=a.j("x1"),c=a.j("x2"),d=a.j("x3"),e=a.j("x4"),f=a.j("y1"),h=a.j("y2"),k=a.j("y3");a.j("neck",!!k);this.b.push(b,c,d,e,0,0,0);this.f.push(b,c,d,e,f,h,k?k:0)}};$.g.fv=function(){AT(this.va,1E-5,1E-5,!sT(this.va))};
$.g.bm=function(){for(var a=this.va.Bf(),b=0;a.advance();)if(!a.j("missing")){a.j("x1",this.coords[b++]);a.j("x2",this.coords[b++]);a.j("x3",this.coords[b++]);a.j("x4",this.coords[b++]);a.j("y1",this.coords[b++]);a.j("y2",this.coords[b++]);a.j("y3",this.coords[b++]);var c=this.va,d=a,e=d.j("point");e.clear();var f=d.j("x1"),h=d.j("x2"),k=d.j("x3"),l=d.j("x4"),m=d.j("y1"),p=d.j("y2"),q=d.j("y3");e.moveTo(f,m).lineTo(h,m);d.j("neck")?e.lineTo(l,p).lineTo(l,q).lineTo(k,q).lineTo(k,p):e.lineTo(l,p).lineTo(k,
p);e.close();if(f=d.j("hatchPoint"))c.aa().select(d.ja()),f.clear(),f.Ld(e.F()),d=$.av(c.state,d.ja()),e=$.Fk("hatchFill",3,!0),f.stroke(null).fill(e(c,d,!1))}};$.g.al=function(){this.bm()};$.g.R=function(){rT.B.R.call(this);this.va=null};$.I(tT,$.Sw);tT.prototype.update=function(){this.b.length=this.f.length=0;this.b.push(1E-5,1E-5);this.f.push(1,this.Vx.opacity||1)};tT.prototype.bm=function(){AT(this.va,this.coords[0],this.coords[1],this.g)};tT.prototype.al=function(){this.bm()};tT.prototype.R=function(){tT.B.R.call(this);this.Vx=this.va=null;delete this.g};$.I(uT,$.sv);$.ap(uT,["fill","stroke","hatchFill"],"normal");$.g=uT.prototype;$.g.Ma=function(a){return $.n(a)?(this.ia.N(a),this):this.ia};$.g.gb=function(a){return $.n(a)?(this.Ca.N(a),this):this.Ca};$.g.selected=function(a){return $.n(a)?(this.Ga.N(a),this):this.Ga};$.g.ua=$.sv.prototype.ua|16;$.g.oa=$.sv.prototype.oa|28688;$.g.Se=function(){return[this]};$.g.dg=function(){return!0};$.g.pj=function(){return!1};$.g.Wh=function(){return!0};
$.g.data=function(a,b){if($.n(a)){if(a){var c=a.title||a.caption;c&&this.title(c);a.rows&&(a=a.rows)}if(this.Hg!==a){this.Hg=a;if(this.Km!=a||null===a){$.Zc(this.ue);delete this.kf;if($.L(a,$.Xp)){var d=a;this.ue=null}else $.L(a,$.gq)?d=(this.ue=a).te():d=$.D(a)||$.z(a)?(this.ue=new $.gq(a,b)).te():(this.ue=new $.gq(null)).te(),$.M(this,this.ue);this.Km=d.Kl()}$.Zc(this.la);this.la=this.Km;$.U(this.la,this.Ke,this);$.M(this,this.la);this.u(29456,17)}return this}return this.la};
$.g.Ke=function(a){$.W(a,16)&&this.u(29456,17)};$.g.aa=function(){return this.kf||(this.kf=this.la.aa())};$.g.tc=function(){return this.kf=this.la.aa()};$.g.Bf=function(){return this.la.aa()};$.g.Yb=function(a){if($.L(a,$.br))return this.Tc($.br,a),this;if($.L(a,$.Zq))return this.Tc($.Zq,a),this;$.F(a)&&"range"==a.type?this.Tc($.br):($.F(a)||null==this.Fa)&&this.Tc($.Zq);return $.n(a)?(this.Fa.N(a),this):this.Fa};
$.g.ef=function(a){this.Qe||(this.Qe=new $.ar,$.U(this.Qe,this.BF,this),$.M(this,this.Qe));return $.n(a)?(this.Qe.N(a),this):this.Qe};$.g.Sd=function(a){this.pd||(this.pd=new $.$q,$.U(this.pd,this.TE,this),$.M(this,this.pd));return $.n(a)?(this.pd.N(a),this):this.pd};$.g.Tc=function(a,b){if($.L(this.Fa,a))b&&this.Fa.N(b);else{var c=!!this.Fa;$.Zc(this.Fa);this.Fa=new a;b&&this.Fa.N(b);$.U(this.Fa,this.If,this);$.M(this,this.Fa);c&&this.u(528,1)}};$.g.If=function(a){$.W(a,2)&&this.u(528,1)};
$.g.BF=function(a){$.W(a,2)&&this.u(528,1)};$.g.TE=function(a){$.W(a,2)&&this.u(528,1)};$.g.remove=function(){this.Bb().O(null);this.labels().O(null);FT(this);this.Ze&&this.Ze.parent(null);uT.B.remove.call(this)};$.g.Lt=function(){var a=this.aa();this.Fa&&$.L(this.Fa,$.br)&&$.cr(this.Fa,a.Ob())};
$.g.Lj=function(a){if(!this.Vf()){this.kb();var b=this.aa();this.J(4)&&this.u(4112);if(this.J(16)){this.Ze?this.Ze.clear():(this.Ze=new $.pz(function(){return $.Vi()},function(a){a.clear()}),$.M(this,this.Ze),this.Ze.zIndex(30),this.Ze.parent(this.Va));this.g?this.g.clear():(this.g=new $.pz(function(){return $.Vi()},function(a){a.clear()}),$.M(this,this.g),this.g.parent(this.Va),this.g.zIndex(31).gd(!0));this.ra=Math.abs($.Bl($.O(this.i("pointsPadding"),a.height),2));this.G=Math.abs($.Bl($.O(this.i("baseWidth"),
a.width),2));this.Ia=Math.abs($.Bl($.O(this.i("neckWidth"),a.width),2));this.da=Math.abs($.Bl($.O(this.i("neckHeight"),a.height),2));this.ta=a.top+a.height-this.da;this.b=a.width/2;this.K=$.O(this.i("connectorLength"),(a.width-this.G)/2);0>this.K&&(this.K=5);this.f=a;var c=0,d=b.Ob()-$.R(this.ya("count")),e=$.Bl(this.ra/a.height*100,2);for(b.reset();b.advance();){var f=b.get("value");var h=yT(f);f=yT(f)?0:$.R(f);var k=$.Bl(f/$.R(this.ya("sum"))*100,2);h&&(k=e);k=$.Bl(a.height/(100+d*e)*k,2);k||(k=
this.W);b.j("value",f);b.j("height",k);b.j("startY",c);b.j("missing",h);c+=k;tga(this)}for(b.reset();b.advance();)c=b.ja(),"selected"==String(b.get("state")).toLowerCase()&&this.state.Kg(2,c),oga(this);if(this.D)for(c=0;c<this.D.length;c++)(f=this.D[c])&&f.stroke(this.i("connectorStroke"));this.u(4096);this.u(8192);this.I(16)}if(this.J(8192)){this.Bb().O()||this.Bb().O(this.Va);this.Bb().clear();for(b.reset();b.advance();)this.Ko(this.state.nc|$.av(this.state,b.ja()));this.Bb().X();this.I(8192)}if(this.J(4096)){this.labels().O()||
this.labels().O(this.Va);this.labels().clear();this.P&&this.P.clear();c=sT(this)?$.Qk("pie.insideLabels"):$.Qk("pie.outsideLabels");this.labels().op(c.autoColor);this.labels().disablePointerEvents(c.disablePointerEvents);sT(this)||(this.K=$.O(this.i("connectorLength"),(a.width-this.G)/2),0>this.K&&(this.K=5),this.P?this.P.clear():(this.P=new $.pz(function(){return $.Vi()},function(a){a.clear()}),$.M(this,this.P),this.P.parent(this.Va),this.P.zIndex(32)),this.P.clip(a),this.D=[]);for(b.reset();b.advance();)sT(this)&&
b.j("labelWidthForced",void 0),this.Ed(this.state.nc|$.av(this.state,b.ja()));HT(this);this.labels().X();this.labels().Le().clip(a);this.I(4096)}}};
$.g.oI=function(){var a=$.Pp(this,"animation");if(a&&a.i("enabled")&&0<a.i("duration"))if(this.hg&&1==this.hg.ec)this.hg.update();else if(this.J(2048)){$.Zc(this.hg);this.hg=new $.nz;var b=a.i("duration");a=b*(1-.85);b=new rT(this,.85*b);a=new tT(this,a);this.hg.add(b);this.hg.add(a);this.hg.qa("begin",function(){this.Vh=this.i("connectorStroke");this.ca.connectorStroke="none";$.iv(this,!0);$.Rp(this,{type:"animationstart",chart:this})},!1,this);this.hg.qa("end",function(){this.ca.connectorStroke=
this.Vh;$.iv(this,!1);$.Rp(this,{type:"animationend",chart:this})},!1,this);this.hg.play(!1)}};$.g.Cf=function(a){a=$.X.prototype.Cf.call(this,a);var b=$.Ym(a.domTarget);a.pointIndex=$.R(b.index);return a};$.g.Zg=function(a){(a=this.Wf(a))&&this.dispatchEvent(a)};
$.g.Wf=function(a){var b;"pointIndex"in a?b=a.pointIndex:"labelIndex"in a?b=a.labelIndex:"markerIndex"in a&&(b=a.markerIndex);b=$.R(b);a.pointIndex=b;var c=a.type;switch(c){case "mouseout":c="pointmouseout";break;case "mouseover":c="pointmouseover";break;case "mousemove":c="pointmousemove";break;case "mousedown":c="pointmousedown";break;case "mouseup":c="pointmouseup";break;case "click":c="pointclick";break;case "dblclick":c="pointdblclick";break;default:return null}var d=this.data().aa();d.select(b)||
d.reset();return{type:c,actualTarget:a.target,iterator:d,sliceIndex:b,pointIndex:b,target:this,originalEvent:a,point:this.vd(b)}};$.g.vd=function(a){var b=new $.Wx(this,a),c;this.aa().select(a)&&b.kw()&&!yT(c=b.get("value"))&&(a=$.Bl(c/this.Tf("sum")*100,2),b.ya("percentValue",a),b.ya("yPercentOfTotal",a));return b};$.g.cr=function(){return[]};$.g.Wi=function(a){$.n(a)?this.Uh(a):this.Qj();return this};
$.g.sd=function(a){var b;(b=$.$u(this.state,1))||(b=!!(this.state.Ti()&1));if(b&&this.enabled()){var c;$.n(a)?c=a:c=this.state.nc==$.Jk?window.NaN:void 0;this.state.bh(1,c);a=this.aa();for(a.reset();a.advance();)this.Ed($.av(this.state,a.ja()));HT(this);QT(this)}};
$.g.Uh=function(a,b){if(!this.enabled())return this;if($.D(a)){var c=$.fv(this.state,1);for(var d=0;d<c.length;d++)$.ya(a,c[d])||this.state.bh(1,c[d]);$.dv(this.state,a);$.n(b)&&this.lH(b);for(c=this.tc();c.advance();)this.Ed($.av(this.state,c.ja()));HT(this)}else if($.B(a)&&(this.sd(),$.dv(this.state,a),$.n(b)&&this.lH(b),this.f)){for(c=this.tc();c.advance();)this.Ed($.av(this.state,c.ja()));HT(this,this.labels().Qd(a))}this.aa().select(a[0]||a);return this};
$.g.Qj=function(){this.enabled()&&(this.state.Kg(1),HT(this,null))};$.g.select=function(a){if(!this.enabled())return this;$.n(a)?this.Yh(a):this.ot();return this};$.g.ot=function(){this.enabled()&&(QT(this),this.state.Kg(2),HT(this,null))};
$.g.Yh=function(a,b){if(!this.enabled())return this;var c=!(b&&b.shiftKey);$.D(a)?(b||this.Dd(),this.state.Kg(2,a,c?1:void 0)):$.B(a)&&this.state.Kg(2,a,c?1:void 0);if(this.f){for(c=this.tc();c.advance();)this.Ed($.av(this.state,c.ja()));var d;$.B(a)&&(d=this.labels().Qd(a));HT(this,d)}this.aa().select(a[0]||a);return this};
$.g.Dd=function(a){if(this.enabled()){var b;$.n(a)?b=a:b=this.state.nc==$.Jk?window.NaN:void 0;this.state.bh(2,b);a=this.aa();for(a.reset();a.advance();)this.Ed($.av(this.state,a.ja()));HT(this)}};$.g.Fj=function(a,b){vT(this,a);wT(this,a);this.Ko(a);return b};$.g.Ro=$.ha;$.g.rl=$.ha;$.g.ek=function(a){this.Ed(a);vT(this,a);wT(this,a);this.Ko(a)};var TT={};$.Mo(TT,0,"baseWidth",$.Wo);$.Mo(TT,0,"neckHeight",$.Wo);$.Mo(TT,0,"neckWidth",$.Wo);$.Mo(TT,0,"pointsPadding",$.Wo);$.Mo(TT,0,"reversed",$.Wo);
$.Mo(TT,0,"overlapMode",$.Aj);$.Mo(TT,0,"connectorLength",$.Wo);$.Mo(TT,1,"connectorStroke",$.ip);$.$o(uT,TT);$.g=uT.prototype;$.g.sc=function(a,b,c,d,e,f,h){e=0==b?this.ia:1==b?this.Ca:this.Ga;h?a=e.i(a):(h=c.get(0==b?"normal":1==b?"hovered":"selected"),a=$.zn($.n(h)?h[a]:void 0,c.get($.Kk(b,a)),e.i(a)));$.n(a)&&(a=d(a));return a};$.g.Bg=function(){return $.Pb(this.Sd().gc(this.aa().ja())||"diagonal-brick")};$.g.Qh=function(){var a=this.aa();return{index:a.ja(),sourceHatchFill:this.Bg(),iterator:a}};
$.g.Fe=function(a){var b=this.aa();return{index:b.ja(),sourceColor:a||this.Yb().gc(b.ja())||"blue",iterator:b}};$.g.labels=function(a){return $.n(a)?(this.ia.labels(a),this):this.ia.labels()};$.g.Vd=function(a){var b=0,c=0;$.W(a,1)&&(b|=4096,c|=1);$.W(a,8)&&(b|=4100,c|=9);this.u(b,c)};
$.g.Ed=function(a){var b=this.aa(),c=!!(a&2),d=!c&&!!(a&1),e=b.get("normal");e=$.n(e)?e.label:void 0;var f=b.get("hovered");f=$.n(f)?f.label:void 0;var h=b.get("selected");h=$.n(h)?h.label:void 0;e=$.zn(e,b.get("label"));f=d?$.zn(f,b.get("hoverLabel")):null;h=c?$.zn(h,b.get("selectLabel")):null;var k=b.ja(),l,m=null,p=this.gb().labels(),q=this.selected().labels();c?m=l=q:d?m=l=p:l=this.labels();var r=this.labels().Qd(k),t=e&&$.n(e.enabled)?e.enabled:null,u=f&&$.n(f.enabled)?f.enabled:null,v=h&&$.n(h.enabled)?
h.enabled:null;p=d||c?d?null===u?null===p.enabled()?null===t?this.labels().enabled():t:p.enabled():u:null===v?null===q.enabled()?null===t?this.labels().enabled():t:q.enabled():v:null===t?this.labels().enabled():t;t=ET(this,null,a);u=this.Fc();q=sT(this);v=!0;if(!d&&!c&&q&&"no-overlap"==this.i("overlapMode")){l=l.vk(u,t,e,k);v=this.aa();var w=[v.j("x1"),v.j("y1"),v.j("x2"),v.j("y1"),v.j("x4"),v.j("y2"),v.j("x3"),v.j("y2")],x=!0,y;var A=0;for(y=w.length;A<y-1;A+=2){var E=A==y-2?0:A+2;var C=A==y-2?1:
A+3;var N=w[A];var P=w[A+1];var Q=w[E];var S=w[C];var oa=l[A];var xa=l[A+1];E=l[E];C=l[C];v.j("y3")&&4==A&&(P=$.R(v.j("y3")),S=$.R(v.j("y3")));N==Q&&(Q+=.01);x=(x=x&&1==$.Ll(N,P,Q,S,oa,xa))&&1==$.Ll(N,P,Q,S,E,C)}v=x}p&&v?(r?(r.Xh(),r.vf(u),r.rc(t)):r=this.labels().add(u,t,k),$.Ss(r,m),r.Zc(e,d?f:h),b.j("labelWidthForced")&&(r.width($.R(b.j("labelWidthForced"))),b=f&&f.anchor?f.anchor:null,h=h&&h.anchor?h.anchor:null,e&&e.anchor&&e.anchor||b||h||(t=ET(this,r,a),r.rc(t))),r.X(),(d||c)&&!r.O()&&this.labels().Le()&&
(r.O(this.labels().Le()),r.O().parent()||r.O().parent(this.labels().O()),r.X())):r&&r.clear();p&&!q&&PT(this,r,a);return r};$.g.Bb=function(a){return $.n(a)?(this.ia.Bb(a),this):this.ia.Bb()};$.g.co=function(a){$.W(a,1)&&this.u(8192,1)};$.g.uu=function(){var a=$.Fk("fill",1,!1)(this,$.Jk,!0,!0);return $.wk(a,1,!0)};$.g.rw=function(){return $.sk(this.uu())};
$.g.Ko=function(a){var b=this.aa(),c=!!(a&2);a=!c&&!!(a&1);var d=b.get("normal");d=$.n(d)?d.marker:void 0;var e=b.get("hovered");e=$.n(e)?e.marker:void 0;var f=b.get("selected");f=$.n(f)?f.marker:void 0;d=$.zn(d,b.get("marker"));e=$.zn(e,b.get("hoverMarker"));f=$.zn(f,b.get("selectMarker"));var h=this.aa().ja(),k=this.gb().Bb(),l=this.selected().Bb();b=c?l:a?k:this.Bb();var m=this.Bb().Wp(h),p=d&&$.n(d.enabled)?d.enabled:null,q=e&&$.n(e.enabled)?e.enabled:null,r=f&&$.n(f.enabled)?f.enabled:null;if(a||
c?a?null===q?null===k.enabled()?null===p?this.Bb().enabled():p:k.enabled():q:null===r?null===l.enabled()?null===p?this.Bb().enabled():p:l.enabled():r:null===p?this.Bb().enabled():p){p=d&&d.position?d.position:null;q=e&&e.position?e.position:null;r=f&&f.position?f.position:null;p=a&&(q||k.position())||c&&(r||l.position())||p||this.Bb().position();p=vga(this,p);m?m.rc(p):m=this.Bb().add(p,h);var t={};p="position anchor offsetX offsetY type size fill stroke enabled".split(" ");d&&(0,$.le)(p,function(a){a in
d&&(t[a]=d[a])});p=d&&d.type;h=$.n(p)?p:this.Bb().Qa()||this.ef().gc(h);p=e&&e.type;p=$.n(p)?p:k.Qa();q=f&&f.type;q=$.n(q)?q:l.Qa();t.type=c&&$.n(q)?q:a&&$.n(p)?p:h;h=d&&d.fill;h=$.n(h)?h:this.Bb().Rn()||this.uu();p=e&&e.fill;p=$.n(p)?p:k.Rn();q=f&&f.fill;q=$.n(q)?q:l.Rn();t.fill=c&&$.n(q)?q:a&&$.n(p)?p:h;h=d&&d.stroke;h=$.n(h)?h:this.Bb().So()||this.rw();p=e&&e.stroke;k=$.n(p)?p:k.So()||this.rw();p=f&&f.stroke;l=$.n(p)?p:l.So()||this.rw();t.stroke=c&&$.n(l)?l:a&&$.n(k)?k:h;m.Xh();$.Cv(m,b);m.Zc(t,
a?e:f);m.X()}else m&&m.clear()};$.g.TH=function(){var a=new $.ku(0);$.M(this,a);a.va(this);$.U(a,this.ip,this);return a};$.g.ip=function(){this.Ya().X()};$.g.lH=function(a){var b=$.Pp(this,"legend");if(!a||!b||a.target!=b){b=this.Ya();var c=this.Fc();a&&($.Cu(b,a.clientX,a.clientY,c),this.qa("mousemove",this.lH))}};
$.g.kb=function(){if(this.J(16384)){this.gG();for(var a=this.data().aa(),b,c=0,d=Number.MAX_VALUE,e=-Number.MAX_VALUE,f=0;a.advance();)b=a.get("value"),yT(b)?c++:(b=yT(b)?0:$.R(b),d=Math.min(b,d),e=Math.max(b,e),f+=b);a=a.Ob()-c;var h;a?h=f/a:d=e=f=h=void 0;this.ya("count",a);this.ya("min",d);this.ya("max",e);this.ya("sum",f);this.ya("average",$.Bl(h||window.NaN,$.Cl(f||0)));this.I(16384)}};
$.g.Fc=function(){var a=this.aa();this.Id||(this.Id=new $.tu);this.Id.lg(a).oi([this.vd(a.ja()),this]);a={x:{value:a.get("x"),type:"string"},value:{value:a.get("value"),type:"number"},name:{value:a.get("name"),type:"string"},index:{value:a.ja(),type:"number"},chart:{value:this,type:""}};$.et(this.Id,a);return this.Id};$.g.Jj=function(){return this.Fc()};
$.g.Il=function(a,b){for(var c=[],d=this.aa().reset(),e;d.advance();){e=d.ja();var f=d.get("legendItem")||{},h=null;$.G(b)&&(h=this.Fc(),h.b=this.vd(e),h=b.call(h,h));$.z(h)||(h=String($.n(d.get("name"))?d.get("name"):d.get("x")));var k=$.Fk("fill",1,!1),l=$.Fk("stroke",2,!1),m=$.Fk("hatchFill",3,!1);h={enabled:!0,meta:{pointIndex:e,pointValue:d.get("value"),U:this},iconType:"square",text:h,iconStroke:l(this,$.Jk,!1),iconFill:k(this,$.Jk,!1),iconHatchFill:m(this,$.Jk,!1)};$.Ec(h,f);h.sourceUid=$.na(this);
h.sourceKey=e;c.push(h)}return c};$.g.qr=function(){return!0};$.g.gq=function(a,b){var c=a.Gh();if(!a||null!=c||(0,window.isNaN)(c))if(c=$.Ym(b.domTarget))c.U=this};$.g.Yo=function(a,b){var c=a.Gh();if(!a||null!=c||(0,window.isNaN)(c))if(c=$.Ym(b.domTarget))c.U=this};$.g.Xo=function(a,b){var c=a.Gh();if(!a||null!=c||(0,window.isNaN)(c))if(c=$.Ym(b.domTarget))c.U=this};$.g.Ci=function(){return null};$.g.Xk=function(a){return $.n(a)?(a=$.dj(a),a!=this.Th&&(this.Th=a),this):this.Th};$.g.uk=function(){return!this.aa().Ob()};
$.g.F=function(){var a=uT.B.F.call(this);a.data=this.data().F();a.palette=this.Yb().F();a.hatchFillPalette=this.Sd().F();a.markerPalette=this.ef().F();a.tooltip=this.Ya().F();$.mp(this,TT,a);a.normal=this.ia.F();a.hovered=this.Ca.F();a.selected=this.Ga.F();return{chart:a}};
$.g.$=function(a,b){uT.B.$.call(this,a,b);$.ep(this,TT,a);this.ia.fa(!!b,a);this.ia.fa(!!b,a.normal);this.Ca.fa(!!b,a.hovered);this.Ga.fa(!!b,a.selected);this.data(a.data);this.Sd(a.hatchFillPalette);this.ef(a.markerPalette);this.Yb(a.palette);"tooltip"in a&&this.Ya().fa(!!b,a.tooltip)};$.g.R=function(){$.$c(this.hg,this.ia,this.Ca,this.Ga);uT.B.R.call(this)};
KT.prototype.$z=function(a){this.labels.push(a);this.va.i("reversed")?$.Oa(this.labels,function(a,c){return a.ja()-c.ja()}):$.Oa(this.labels,function(a,c){return c.ja()-a.ja()})};KT.prototype.clear=function(){this.labels.length=0};
KT.prototype.Xc=function(a,b){var c=!!(b&2),d=!c&&!!(b&1),e=this.va.data().get(a.ja(),"label");d=d?this.va.data().get(a.ja(),"hoverLabel"):null;c=(c?this.va.data().get(a.ja(),"selectLabel"):null)||d||e||{};this.va.data().j(a.ja(),"labelWidthForced")&&(c=$.Cc(c),c.width=a.width());this.va.aa().select(a.ja());a.vf(this.va.Fc());c=this.va.labels().vk(a.vf(),a.rc(),c);return $.Sl(c)};var UT=uT.prototype;UT.data=UT.data;UT.getType=UT.Qa;UT.palette=UT.Yb;UT.tooltip=UT.Ya;UT.hatchFillPalette=UT.Sd;
UT.markerPalette=UT.ef;UT.labels=UT.labels;UT.markers=UT.Bb;UT.hover=UT.Wi;UT.unhover=UT.sd;UT.select=UT.select;UT.unselect=UT.Dd;UT.getPoint=UT.vd;UT.normal=UT.Ma;UT.hovered=UT.gb;UT.selected=UT.selected;$.no.funnel=RT;$.no.pyramid=ST;$.H("anychart.funnel",RT);$.H("anychart.pyramid",ST);}).call(this,$)}
