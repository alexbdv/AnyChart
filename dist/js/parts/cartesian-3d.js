if(!_.cartesian_3d){_.cartesian_3d=1;(function($){var C9=function(a){var b=$.rx(a);$.sx(a,a.lh("xGrids"),a.An,b);$.sx(a,a.lh("yGrids"),a.Cn,b);$.sx(a,a.lh("xMinorGrids"),a.ro,b);$.sx(a,a.lh("yMinorGrids"),a.uo,b)},D9=function(a,b,c){if(a=a.f[b])a.zIndex=c},E9=function(a){return $.na(a.Ul())+"_"+$.na(a.Xa())},$ha=function(a,b){var c=0;(0,$.le)(a,function(a,e,f){b.call(void 0,a,e,f)&&++c},void 0);return c},F9=function(){$.xw.call(this)},G9=function(){$.xw.call(this)},H9=function(){$.vx.call(this)},I9=function(){$.yx.call(this)},J9=function(){$.Bx.call(this)},
K9=function(a){$.ay.call(this,a)},L9=function(a){$.ay.call(this,a)},M9=function(a,b,c){if(!b.j("skipDrawing")){var d=b.j("x"),e=b.j("zero"),f=b.j("value");a.na||(d+=a.f,e-=a.b,f-=a.b);b=c.bottom;var h=c.back,k=c.left,l=c.right,m=c.front,p=c.top,q=c.rightHatch,r=c.frontHatch;c=c.topHatch;var t=a.g,u=a.D,v=m.stroke().thickness%2/2||0;if(a.na){var w=a.o;var x=Math.min(e,f)+a.f;d=d-w/2-a.b;a=Math.abs(e-f);e=v;f=0}else a=a.o,x=d-a/2,d=Math.min(e,f),w=Math.abs(e-f),f=e=-v;b.moveTo(x+v,d+w).lineTo(x+a,d+
w).lineTo(x+a+t-v,d+w-u+v).lineTo(x+t,d+w-u).close();h.moveTo(x+t,d-u).lineTo(x+t+a,d-u).lineTo(x+t+a,d-u+w).lineTo(x+t,d-u+w).close();k.moveTo(x,d).lineTo(x+t+e,d-u+v).lineTo(x+t,d+w-u).lineTo(x,d+w-v).close();l.moveTo(x+a,d).lineTo(x+a+t+f,d-u+v).lineTo(x+a+t,d+w-u).lineTo(x+a,d+w-v).close();q.moveTo(x+a,d).lineTo(x+a+t+f,d-u+v).lineTo(x+a+t,d+w-u).lineTo(x+a,d+w-v).close();m.moveTo(x,d).lineTo(x+a,d).lineTo(x+a,d+w).lineTo(x,d+w).close();r.moveTo(x,d).lineTo(x+a,d).lineTo(x+a,d+w).lineTo(x,d+w).close();
p.moveTo(x+v,d).lineTo(x+a,d).lineTo(x+a+t-v,d-u+v).lineTo(x+t,d-u).close();c.moveTo(x+v,d).lineTo(x+a,d).lineTo(x+a+t-v,d-u+v).lineTo(x+t,d-u).close()}},N9=function(a){$.ay.call(this,a)},O9=function(){$.hz.call(this);this.ib("cartesian","cartesian3dBase","cartesian3d");this.La=0;this.Kd="cartesian-3d"},P9=function(a){var b=$.Ym(a.domTarget);if(b&&b.U&&b.U.check(4)){var c=$.Ym(a.relatedDomTarget);c&&c.U&&c.U==b.U&&c.index==b.index||(b=b.U)&&!b.zd&&b.enabled()&&(c=b.Rh(),b.lb(null),b.Yg(a.zK),b.lb(c))}},
Q9=function(a,b,c){var d,e,f;var h=$.Fk("fill",1,!0)(a,c);c=$.F(h)?h.opacity:1;var k=$.F(h)?h.color:h;h=$.nk(k);if(null===h)a=k=d=e=f=h="none";else{k=h.mj;var l=$.gk(k);e=$.kk(l,.2);h=$.kk(l,.25);f=$.jk([255,255,255],l,.1);d=$.Jb($.jk(l,e,.7));f=$.Jb($.jk(e,f,.1));l=$.Jb($.jk(l,e,.1));a={angle:a.i("isVertical")?0:90,opacity:c,keys:[$.rk(d,.2),$.rk(k,.3)]};k=$.rk(l,.2);d=$.rk(d,.2);e=$.Jb(e);h=$.Jb(h)}b.bottom.fill({color:e,opacity:c});b.back.fill({color:f,opacity:c});b.left.fill({color:h,opacity:c});
b.right.fill({color:k,opacity:c});b.top.fill({color:d,opacity:c});b.front.fill(a)},R9=function(){var a=new O9;a.sf();return a},T9=function(a,b){var c=S9(a),d=a.g,e=a.uh;!b&&a.i("zDistribution")&&(e=(e-d*(c-1))/c);return e},U9=function(a,b){var c=S9(a),d=a.W,e=a.Pg;!b&&a.i("zDistribution")&&(e=(e-d*(c-1))/c);return e},S9=function(a){return $ha(a.bb,function(a){return!!(a&&a.enabled()&&a.check($.Ey))})},V9=function(a,b){for(var c=0,d=0,e=Math.min(a.bb.length-1,b);d<=e;d++){var f=a.bb[d];f&&f.enabled()&&
f.check($.Ey)&&c++}return c-1},W9=function(a){var b=new O9;b.ib("area3d");b.Kd="area-3d";b.ca.defaultSeriesType="area";b.sf();b.mi();C9(b);arguments.length&&b.Gk.apply(b,arguments);return b},X9=function(a){var b=new O9;b.ib("bar","bar3d");b.Kd="bar-3d";b.ca.defaultSeriesType="bar";b.sf();b.mi();C9(b);arguments.length&&b.Gk.apply(b,arguments);return b},Y9=function(a){var b=new O9;b.ib("column","column3d");b.Kd="column-3d";b.ca.defaultSeriesType="column";b.sf();b.mi();C9(b);arguments.length&&b.Gk.apply(b,
arguments);return b},Z9=function(a){var b=new O9;b.ib("line3d");b.Kd="line-3d";b.ca.defaultSeriesType="line";b.sf();b.mi();C9(b);arguments.length&&b.Gk.apply(b,arguments);return b},aia={Wz:"area",FC:"bar",GC:"column",Qr:"line",xha:"line-2d"},$9={name:"top",Eb:"path",Lb:null,Nb:"stroke",Pb:!0,tb:!1,zIndex:3E-6},a$={name:"bottom",Eb:"path",Lb:null,Nb:"stroke",Pb:!0,tb:!1,zIndex:2E-6},b$={name:"left",Eb:"path",Lb:null,Nb:"stroke",Pb:!0,tb:!1,zIndex:1E-6},c$={name:"right",Eb:"path",Lb:null,Nb:"stroke",
Pb:!0,tb:!1,zIndex:4E-6},d$={name:"back",Eb:"path",Lb:null,Nb:"stroke",Pb:!0,tb:!1,zIndex:0},e$={name:"frontHatch",Eb:"path",Lb:"hatchFill",Nb:null,Pb:!0,tb:!0,zIndex:8E-6},f$={name:"rightHatch",Eb:"path",Lb:"hatchFill",Nb:null,Pb:!0,tb:!0,zIndex:7E-6},g$={name:"topHatch",Eb:"path",Lb:"hatchFill",Nb:null,Pb:!0,tb:!0,zIndex:6E-6};$.I(F9,$.xw);
F9.prototype.uI=function(a,b){var c=this.ka()||$.Ql(0,0,0,0),d=Math.round(c.Na()-a*c.height);1==a?d-=b:d+=b;var e=c.wb()+this.uh,f=d-this.Pg;this.g.moveTo(c.wb(),d).lineTo(e,f).lineTo(c.Wa()+this.uh,f)};F9.prototype.vI=function(a,b){var c=this.ka()||$.Ql(0,0,0,0),d=Math.round(c.wb()+a*c.width);1==a?d+=b:d-=b;var e=d+this.uh,f=c.Na()-this.Pg;this.g.moveTo(d,c.Na()).lineTo(e,f).lineTo(e,c.Ub()-this.Pg)};
F9.prototype.sI=function(a,b,c,d){if(!(0,window.isNaN)(b)){var e=this.ka()||$.Ql(0,0,0,0);var f=Math.round(e.Na()-b*e.height);var h=Math.round(e.Na()-a*e.height);1==a?h-=d:h+=d;1==b?f-=d:f+=d;c.moveTo(e.wb(),f).lineTo(e.wb()+this.uh,f-this.Pg).lineTo(e.Wa()+this.uh,f-this.Pg).lineTo(e.Wa()+this.uh,h-this.Pg).lineTo(e.wb()+this.uh,h-this.Pg).lineTo(e.wb(),h).close()}};
F9.prototype.tI=function(a,b,c,d){if(!(0,window.isNaN)(b)){var e=this.ka()||$.Ql(0,0,0,0);var f=Math.round(e.wb()+b*e.width);var h=Math.round(e.wb()+a*e.width);1==a?h+=d:h-=d;1==b?f+=d:f-=d;c.moveTo(f+this.uh,e.Ub()-this.Pg).lineTo(h+this.uh,e.Ub()-this.Pg).lineTo(h+this.uh,e.Na()-this.Pg).lineTo(h,e.Na()).lineTo(f,e.Na()).lineTo(f+this.uh,e.Na()-this.Pg).close()}};$.I(G9,F9);$.qs(G9,F9);var h$=F9.prototype;h$.isHorizontal=h$.Ab;h$.scale=h$.scale;h$.axis=h$.axis;h$=G9.prototype;
$.H("anychart.standalones.grids.linear3d",function(){var a=new G9;a.N($.Qk("standalones.linearGrid"));return a});h$.layout=h$.qf;h$.draw=h$.X;h$.parentBounds=h$.ka;h$.container=h$.O;$.I(H9,$.vx);
H9.prototype.Jq=function(){var a=$.Xa(this.scale().transform(this.value(),.5),0,1);if(!(0,window.isNaN)(a)){var b=0==$.fw(this).xv()%2?0:-.5,c=this.ka(),d=this.Wm();$.fw(this).clear();var e=this.jc().uh,f=this.jc().Pg;if("horizontal"==this.qf()){var h=Math.round(c.Ub()+c.height-a*c.height);1==a?h-=b:h+=b;$.fw(this).moveTo(c.wb(),h).lineTo(c.wb()+e,h-f).lineTo(c.Wa()+e,h-f)}else"vertical"==this.qf()&&(h=Math.round(c.wb()+a*c.width),1==a?h+=b:h-=b,$.fw(this).moveTo(h+e,c.Ub()-f).lineTo(h+e,c.Na()-f).lineTo(h,
c.Na()));c.top-=f;c.height+=f;c.width+=e;$.fw(this).clip(d.gj(c))}};$.I(I9,$.yx);
I9.prototype.Jq=function(){var a=this.qf(),b=this.i("from"),c=this.i("to");this.i("from")>this.i("to")&&(b=this.i("to"),c=this.i("from"));var d=$.Xa(this.scale().transform(b,0),0,1),e=$.Xa(this.scale().transform(c,1),0,1);if(!(0,window.isNaN)(d)&&!(0,window.isNaN)(e)){c=this.ka();b=this.Wm();$.fw(this).clear();var f=this.jc().uh,h=this.jc().Pg;if("horizontal"==a){e=Math.floor(c.Na()-c.height*e);d=Math.ceil(c.Na()-c.height*d);a=c.wb();var k=c.Wa();$.fw(this).moveTo(a,e).lineTo(a+f,e-h).lineTo(k+f,
e-h).lineTo(k+f,d-h).lineTo(a+f,d-h).lineTo(a,d).close()}else"vertical"==a&&(a=c.Na(),k=c.Ub(),d=Math.floor(c.wb()+c.width*d),e=Math.ceil(c.wb()+c.width*e),$.fw(this).moveTo(d,a).lineTo(d+f,a-h).lineTo(d+f,k-h).lineTo(e+f,k-h).lineTo(e+f,a-h).lineTo(e,a).close());c.top-=h;c.height+=h;c.width+=f;$.fw(this).clip(b.gj(c))}};$.I(J9,$.Bx);J9.prototype.ka=function(a,b,c,d){b=J9.B.ka.call(this,a,b,c,d);$.n(a)||(a=this.jc().uh,c=this.jc().Pg,b.top-=c,b.height+=c,b.width+=a);return b};$.I(K9,$.ay);$.lD[2]=K9;$.g=K9.prototype;$.g.type=2;$.g.flags=$.Ey|49;$.g.Ig={top:"path",bottom:"path",left:"path",right:"path",back:"path",front:"path",cap:"path",frontHatch:"path"};$.g.XG=function(){for(var a=this.U.Bf();a.advance();){var b=a.j("shapes");if(b){var c=a.j("zIndex");this.Lc.Wr(c+1E-8*a.ja(),b)}}};
$.g.cd=function(a){K9.B.cd.call(this,a);this.W=!0;a=this.U.va;var b=this.U.ja(),c=this.U.sg(),d=E9(this.U);this.La=!c||b==a.GY[d];this.Ia=a.hJ(b,c);this.P=a.iJ(b,c);this.b=T9(a,c);this.g=U9(a,c);a.Ra().wf()?(D9(this.Lc,"left",4E-6),D9(this.Lc,"right",1E-6)):(D9(this.Lc,"left",1E-6),D9(this.Lc,"right",4E-6));a.Xa().wf()?(D9(this.Lc,"top",2E-6),D9(this.Lc,"bottom",3E-6)):(D9(this.Lc,"top",3E-6),D9(this.Lc,"bottom",2E-6))};
$.g.En=function(a){var b=this.Lc.Pc(this.nc,null,this.U.zIndex()),c=a.j("x")+this.Ia,d=a.j("zero")-this.P,e=a.j("zeroMissing");a=a.j("value")-this.P;b.front.moveTo(c,d).lineTo(c,a);b.frontHatch.moveTo(c,d).lineTo(c,a);this.U.sg()?this.f=[c,d,e]:(b.back.moveTo(c+this.b,d-this.g).lineTo(c+this.b,a-this.g),b.bottom.moveTo(c,d).lineTo(c+this.b,d-this.g),"none"==this.U.Xa().gm()&&a>=d&&b.cap.moveTo(c,d).lineTo(c+this.b,d-this.g),b.left.moveTo(c,d).lineTo(c,a).lineTo(c+this.b,a-this.g).lineTo(c+this.b,
d-this.g).close());this.D=c;this.G=a;this.Ih=this.ra=d};
$.g.Mf=function(a){var b=this.Lc.Pc(this.nc),c=a.j("x")+this.Ia,d=a.j("zero")-this.P,e=a.j("zeroMissing");a=a.j("value")-this.P;this.U.sg()?this.f.push(c,d,e):(b.bottom.lineTo(c+this.b,d-this.g),b.back.lineTo(c+this.b,a-this.g));e=b.front.uU();this.La&&(this.W?b.top.moveTo(e.x,e.y).lineTo(e.x+this.b,e.y-this.g).lineTo(c+this.b,a-this.g).lineTo(c,a).close():b.top.moveTo(e.x,e.y).lineTo(c,a).lineTo(c+this.b,a-this.g).lineTo(e.x+this.b,e.y-this.g).close(),this.W=!this.W);if("none"==this.U.Xa().gm()){var f=
(d-e.y)*(c-e.x)/(a-e.y)+e.x;0<a-e.y&&e.y<=d&&a>d?b.cap.moveTo(f,d).lineTo(f+this.b,d-this.g):0>a-e.y&&e.y>d&&a<=d&&b.cap.lineTo(f+this.b,d-this.g).lineTo(f,d).close()}b.front.lineTo(c,a);b.frontHatch.lineTo(c,a);this.D=c;this.G=a;this.ra=d};
$.g.Gl=function(){if(this.K){var a=this.Lc.Pc(this.nc),b=a.front,c=a.frontHatch;if(this.f){for(var d=window.NaN,e=window.NaN,f=!1,h=this.f.length-1;0<=h;h-=3){var k=this.f[h-2],l=this.f[h-1],m=this.f[h];m&&!(0,window.isNaN)(d)?(b.lineTo(d,l),c.lineTo(d,l)):f&&!(0,window.isNaN)(e)&&(b.lineTo(k,e),c.lineTo(k,e));b.lineTo(k,l);c.lineTo(k,l);d=k;e=l;f=m}b.close();c.close();this.f=null}else(0,window.isNaN)(this.D)||(b.lineTo(this.D,this.Ih).close(),c.lineTo(this.D,this.Ih).close(),a.back.lineTo(this.D+
this.b,this.Ih-this.g).close(),a.bottom.lineTo(this.D,this.Ih).close(),"none"==this.U.Xa().gm()&&this.G>=this.U.Ih&&a.cap.lineTo(this.D+this.b,this.Ih-this.g).lineTo(this.D,this.Ih).close());(0,window.isNaN)(this.D)||a.right.moveTo(this.D,this.ra).lineTo(this.D,this.G).lineTo(this.D+this.b,this.G-this.g).lineTo(this.D+this.b,this.ra-this.g).close()}};$.I(L9,$.ay);$.lD[7]=L9;$.g=L9.prototype;$.g.type=7;$.g.flags=$.Ey|263717;$.g.Ig={top:"path",bottom:"path",left:"path",right:"path",back:"path",front:"path",frontHatch:"path",rightHatch:"path",topHatch:"path"};$.g.cd=function(a){L9.B.cd.call(this,a);a=this.U.va;var b=this.U.ja(),c=this.U.sg();this.f=a.hJ(b,c);this.b=a.iJ(b,c);this.g=T9(a,c);this.D=U9(a,c)};$.g.XG=function(a){for(var b=this.U.Bf();b.advance();){var c=b.j("shapes");c&&(a=b.j("zIndex"),this.Lc.Wr(a+1E-8*b.ja(),c))}};
$.g.Mf=function(a,b){var c=a.j("zIndex")+1E-8*(a.j("directIndex")+a.ja());c=this.Lc.Pc(b,null,c);M9(this,a,c)};$.g.Vr=function(a){var b=a.j("shapes"),c;for(c in b)b[c].clear();M9(this,a,b)};$.I(N9,$.ay);$.lD[33]=N9;$.g=N9.prototype;$.g.type=33;$.g.flags=$.Ey|32848;$.g.Ig={path:"path"};$.g.XG=function(){for(var a=this.U.Bf();a.advance();){var b=a.j("shapes");if(b){var c=a.j("zIndex");this.Lc.Wr(c+1E-8*a.ja(),b)}}};$.g.cd=function(a){N9.B.cd.call(this,a);this.G=!0;a=this.U.va;var b=this.U.ja();this.P=a.hJ(b,!1);this.W=a.iJ(b,!1);this.g=T9(a,!1);this.D=U9(a,!1)};$.g.En=function(a){this.b=a.j("x")+this.P;this.f=a.j("value")-this.W};
$.g.Mf=function(a){var b=this.Lc.Pc(this.nc),c=a.j("x")+this.P;a=a.j("value")-this.W;this.G?b.path.moveTo(this.b,this.f).lineTo(this.b+this.g,this.f-this.D).lineTo(c+this.g,a-this.D).lineTo(c,a).close():b.path.moveTo(this.b,this.f).lineTo(c,a).lineTo(c+this.g,a-this.D).lineTo(this.b+this.g,this.f-this.D).close();this.G=!this.G;this.b=c;this.f=a};$.I(O9,$.hz);O9.prototype.Fg=function(a){P9(a);O9.B.Fg.call(this,a)};O9.prototype.$g=function(a){P9(a);O9.B.$g.call(this,a)};O9.prototype.yi=function(a){P9(a);O9.B.yi.call(this,a)};O9.prototype.Zg=function(a){P9(a);O9.B.Zg.call(this,a)};var i$={},j$=$.Jy|5767168;
i$.area={xb:2,Db:1,Ib:[{name:"top",Eb:"path",Lb:null,Nb:null,Pb:!1,tb:!1,zIndex:3E-6},a$,b$,c$,d$,$.mE,{name:"cap",Eb:"path",Lb:null,Nb:null,Pb:!1,tb:!1,zIndex:3.5E-6},e$],Hb:null,zb:function(a,b,c){var d,e,f,h;c=$.Fk("fill",1,!0)(a,c);a=$.F(c)?c.opacity:1;var k=$.F(c)?c.color:c;c=$.nk(k);if(null===c)k=d=e=f=h=c="none";else{k=c.mj;f=$.gk(k);var l=$.kk(f,.2);e=$.kk(f,.3);c=$.kk(f,.25);h=$.jk([255,255,255],f,.1);d=$.Jb($.jk(f,l,.7));e=$.Jb($.jk(f,e,.7));h=$.Jb($.jk(l,h,.1));f=$.Jb($.jk(f,l,.1));k={angle:90,
opacity:a,keys:[$.rk(d,.2),$.rk(k,.3)]};d=$.rk(e,.2);e=f=$.rk(f,.2);c=$.Jb(c)}b.bottom.fill({color:f,opacity:a});b.back.fill({color:h,opacity:a});b.left.fill({color:c,opacity:a});b.right.fill({color:e,opacity:a});b.top.fill({color:d,opacity:a});b.cap.fill({color:f,opacity:a});b.front.fill(k);b.top.stroke({color:d,thickness:.8})},sb:j$,vb:"value",ub:"zero"};i$.bar={xb:7,Db:2,Ib:[$9,a$,b$,c$,d$,$.mE,e$,f$,g$],Hb:null,zb:Q9,sb:j$,vb:"value",ub:"zero"};
i$.column={xb:7,Db:2,Ib:[$9,a$,b$,c$,d$,$.mE,e$,f$,g$],Hb:null,zb:Q9,sb:j$,vb:"value",ub:"zero"};i$.line={xb:33,Db:1,Ib:[{name:"path",Eb:"path",Lb:null,Nb:null,Pb:!1,tb:!1,zIndex:0}],Hb:null,zb:function(a,b,c){c=$.Fk("fill",1,!0)(a,c);a=$.F(c)?c.opacity:1;c=$.F(c)?c.color:c;c=$.nk(c);null===c?c="none":(c=c.mj,c=$.gk(c),c=$.Jb($.jk(c,$.kk(c,.3),.7)),c=$.rk(c,.2));b.path.fill({color:c,opacity:a}).stroke({color:c,thickness:.8})},sb:j$,vb:"value",ub:"value"};
i$["line-2d"]={xb:8,Db:1,Ib:[{name:"stroke",Eb:"path",Lb:null,Nb:"stroke",Pb:!0,tb:!1,zIndex:9E-6}],Hb:null,zb:null,sb:j$|2097152,vb:"value",ub:"value"};O9.prototype.Ei=i$;$.ax(O9,O9.prototype.Ei);$.no["cartesian-3d"]=R9;$.g=O9.prototype;$.g.ur=function(a){return $.cj(aia,a,"column")};$.g.$Q=function(){return!0};$.g.hJ=function(a,b){if(b||!this.i("zDistribution"))var c=0;else c=S9(this),a=V9(this,a),c=c-a-1,c*=T9(this,b)+this.g;return c};
$.g.iJ=function(a,b){if(b||!this.i("zDistribution"))var c=0;else c=S9(this),a=V9(this,a),c=c-a-1,c*=U9(this,b)+this.W;return c};$.g.VC=function(){return new F9};$.g.iW=function(){var a=new H9;a.Ua=this;return a};$.g.oW=function(){var a=new I9;a.Ua=this;return a};$.g.rW=function(){var a=new J9;a.Ua=this;return a};
$.g.kS=function(){this.GY={};for(var a=this.Se(),b,c="none"!=this.Xa().gm(),d="direct"==this.Xa().vv(),e=[30],f=!0,h=1;h<a.length;h++)a[h].Qa()==a[h-1].Qa()?e.push(e[h-1]):(e.push(30+(1-1/(h+1))),f=!1);for(h=0;h<a.length;h++){var k=30+(1-1/(h+1));b=a.length-h-1;var l=c&&d?b:h;if((b=a[l])&&b.enabled())if(b.check($.Ey)){if(b.dg())for(l=b.tc();l.advance();){var m=b,p=h;var q=a.length;var r=e[h],t=f,u=m.aa(),v=$.R(u.get("value")),w=u.ja();p+=1;var x=.01,y="none"!=this.Xa().gm(),A=this.Ra().wf();w=A?u.Ob()-
w:w+1;r=this.i("zDistribution")?30+(1-1/p):t?30:r;this.Xa().wf()^0>v&&(p=-p);m.i("isVertical")?y||this.i("zDistribution")?(m=w,w=p,p=m,m=1-1/Math.abs(w),r=0<w?r+x*(p+m):r-x*(q-p+m)):(A&&(p=q-Math.abs(p)+1),w=w*q-q+Math.abs(p),x*=w,r+=x,this.Xa().wf()&&(v=-v),0>v&&(x=-x),r+=x):(y||this.i("zDistribution")||(A&&(p=q-Math.abs(p)+1),w=w*q-q+Math.abs(p)),x*=w,r+=x);u.j("zIndex",r);u.j("directIndex",w*p);q=r;k<q&&(k=q)}else b.zIndex()!=b.ih&&b.zIndex()!=k&&(k=b.zIndex()),b.check(32)&&(this.GY[E9(b)]=l);
b.zIndex(k)}else k=1E-5*b.yg()+32,b.ih=k}};
$.g.oX=function(a){a=a.clone().round();var b=this.WA(a),c=S9(this),d=this.i("zAngle"),e=this.i("zAspect"),f=this.i("zPadding"),h=this.i("zDistribution"),k=$.J(d);d=$.J(90-d);if($.$m(e)){var l=(0,window.parseFloat)(e)/100;e=l*Math.sin(d);for(var m=l*Math.sin(k),p=l=0,q=this.Se(),r,t=0;t<q.length;t++)if((r=q[t])&&r.enabled()&&r.check($.Ey)){var u=r.Ra();u=1/("ordinal"==u.Qa()?u.values().length:r.aa().Ob());var v=this.i("barsPadding");var w=this.i("barGroupsPadding");v=r.sg()||h?1/(1+w):1/(c+(c-1)*v+
w);u*=v;!r.sg()&&h?(l+=u*e,p+=u*m):l||(l=u*e,p=u*m)}this.g=Math.round(f*Math.sin(d));this.W=Math.round(f*Math.sin(k));f=this.nr?b.height/(1+l):b.width/(1+l);this.uh=f*l;this.Pg=f*p;!this.mB&&h&&(this.uh+=this.g*(c-1),this.Pg+=this.W*(c-1));this.uh=Math.round(this.uh);this.Pg=Math.round(this.Pg)}else this.La=!this.mB&&h?e*c+f*(c-1):$.R(e),this.uh=Math.round(this.La*Math.sin(d)),this.Pg=Math.round(this.La*Math.sin(k)),h=c-1,f*h>=this.La&&(f=(this.La-c)/h),this.g=Math.round(f*Math.sin(d)),this.W=Math.round(f*
Math.sin(k));this.uh=Math.max(this.uh,0)||0;this.Pg=Math.max(this.Pg,0)||0;this.g=Math.max(this.g,0)||0;this.W=Math.max(this.W,0)||0;a.top+=this.Pg;a.height-=this.Pg;a.width-=this.uh;return a};$.g.mI=function(a,b,c){if(!this.mB&&this.i("zDistribution")){if(0<a){a=1+this.i("barGroupsPadding");for(var d=1/a,e=0;e<b.length;e++)a=b[e].U,a.check(262144)&&c^a.i("isVertical")&&($.wy(a,.5),$.vy(a,d))}}else O9.B.mI.call(this,a,b,c)};
$.g.Cf=function(a){var b=$.Ym(a.target);return(b=b&&b.U)&&!b.zd&&b.enabled()?b.Cf(a):O9.B.Cf.call(this,a)};$.g.$=function(a,b){O9.B.$.call(this,a,b)};var k$=O9.prototype;$.H("anychart.cartesian3d",R9);k$.xScale=k$.Ra;k$.yScale=k$.Xa;k$.crosshair=k$.kg;k$.xGrid=k$.An;k$.yGrid=k$.Cn;k$.xMinorGrid=k$.ro;k$.yMinorGrid=k$.uo;k$.xAxis=k$.Hh;k$.getXAxesCount=k$.fB;k$.yAxis=k$.Ki;k$.getYAxesCount=k$.hB;k$.getSeries=k$.Te;k$.zIndex=k$.zIndex;k$.lineMarker=k$.Gm;k$.rangeMarker=k$.Nm;k$.textMarker=k$.Tm;
k$.palette=k$.Yb;k$.markerPalette=k$.ef;k$.hatchFillPalette=k$.Sd;k$.getType=k$.Qa;k$.addSeries=k$.Gk;k$.getSeriesAt=k$.Sh;k$.getSeriesCount=k$.Sl;k$.removeSeries=k$.lo;k$.removeSeriesAt=k$.tn;k$.removeAllSeries=k$.lp;k$.getPlotBounds=k$.Ff;k$.xZoom=k$.zp;k$.yZoom=k$.Ap;k$.xScroller=k$.so;k$.yScroller=k$.Bq;k$.getStat=k$.Tf;k$.getXScales=k$.ww;k$.getYScales=k$.xw;$.no["area-3d"]=W9;$.no["bar-3d"]=X9;$.no["column-3d"]=Y9;$.no["line-3d"]=Z9;$.H("anychart.area3d",W9);$.H("anychart.bar3d",X9);$.H("anychart.column3d",Y9);$.H("anychart.line3d",Z9);}).call(this,$)}
