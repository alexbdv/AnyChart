if(!_.sankey){_.sankey=1;(function($){var dfa=function(a,b){return a|(this.vG[b]||0)},BO=function(a,b,c){$.Hp(a,"sankey")&&(b=(0,$.bg)(b,dfa,0,a.Tt.sankey)&~a.Bo.sankey,a.Bo.sankey|=b,(b||a.oq())&&a.sa(c||0))},CO=function(a,b){$.Ep.call(this);this.va=a;this.Kd=b;this.mb=null;var c={};$.T(c,[["fill",0,8192],["stroke",0,8192],["labels",0,0]]);this.ia=new $.Iv(this,c,$.Jk);this.ia.ca.labelsFactoryConstructor=$.Kv;this.ia.ca.labelsAfterInitCallback=$.Nv;this.Ca=new $.Iv(this,c,1);this.Ca.ca.labelsFactoryConstructor=$.Kv;$.Fp(this.Ca,"labelsAfterInitCallback",
function(a){a.I(4294967295)})},DO=function(a,b){$.hv.call(this);$.ls(this,this,this.Fg,this.$g,null,this.Fg,null,null);$.T(this.za,efa);this.data(a||null,b);this.QN=(0,$.pa)(this.QN,this);this.ON=(0,$.pa)(this.ON,this)},EO=function(a,b){for(var c=b.IB,d=0;d<c.length;d++){var e=c[d];b.level>=e.level&&(e.level=b.level+1,EO(a,e));e.level>a.G&&(a.G=e.level)}},GO=function(a,b){return b?(a.rg[b]||(a.rg[b]={type:FO,name:b,level:0,FJ:0,AK:0,fE:0,$E:[],IB:[],mY:[],BZ:[],NW:[],Hja:[],Nja:[],Cw:[],Qw:[],oO:!1}),
a.rg[b]):null},IO=function(a,b){var c=b.type,d;if(c==FO){var e=b.name;a.isConflict={value:b.oO,type:"string"};var f=[];for(d=0;d<b.$E.length;d++){var h=b.$E[d];var k=$.ua(h.IB,function(a){return a==b});f.push({name:h.name,value:h.BZ[k]})}a.income={value:f,type:""};f=[];for(d=0;d<b.IB.length;d++)h=b.IB[d],k=$.ua(h.$E,function(a){return a==b}),f.push({name:h.name,value:h.mY[k]});a.outcome={value:f,type:""};a.dropoff={value:b.fE,type:"number"}}else e=c==HO?b.from.name+" -> "+b.Yf.name:b.from.name+" dropoff";
a.type={value:ffa[c],type:"string"};a.name={value:e,type:"string"};a.value={value:b.weight,type:"number"}},JO=function(a,b,c){c=c?a.node().gb().labels():a.node().Ma().labels();a=a.node().Ma().labels();c=c.i("position");a=a.i("position");a=$.ij(c||a,"center");var d=c=0,e=(b.Cj+b.Dj)/2,f=(b.ee+b.We)/2;switch(a){case "left-top":c=b.Cj;d=b.ee;break;case "left-center":c=b.Cj;d=f;break;case "left-bottom":c=b.Cj;d=b.We;break;case "center-top":c=e;d=b.ee;break;case "center":c=e;d=f;break;case "center-bottom":c=
e;d=b.We;break;case "right-top":c=b.Dj;d=b.ee;break;case "right-center":c=b.Dj;d=f;break;case "right-bottom":c=b.Dj,d=b.We}return{value:{x:c,y:d}}},LO=function(a,b,c,d,e,f){for(var h,k,l=0;l<b.length;l++)h=b[l],k=h.path,KO(a,a.f,k.tag,k,d),h.label.fk(c),h.label.rc({value:e(h,f)}),a.Ed(a.f,h,d)},KO=function(a,b,c,d,e){c=a.Fe(c);a=b.Rn(e,c);b=b.So(e,c);d.fill(a);d.stroke(b)},MO=function(a,b,c,d,e,f){var h=b.tag;KO(a,a.g,h,b,c);b=h.element;LO(a,b.Cw,d,c,f,"leftTop");LO(a,b.Qw,e,c,f,"rightTop");b.label.rc(JO(a,
b,c));a.Ed(a.g,b,c)},NO=function(a,b,c){b=b.tag;var d=b.element;KO(a,a.f,b,d.path,c);d.label.fk("center-bottom");d.label.rc({value:a.CT(d)});KO(a,a.g,d.from.path.tag,d.from.path,c);KO(a,a.g,d.Yf.path.tag,d.Yf.path,c);a.Ed(a.f,d,c)},OO=function(a,b,c){var d=b.tag;KO(a,a.o,d,b,c);a.Ed(a.o,d.element,c)},PO=function(a){return(a.ee+a.We)/2},gfa=function(a,b){for(var c=0;c<a.b.length;c++)for(var d=a.b[c].rg,e=0;e<d.length;e++){var f=d[e];if(f.Cw.length){var h=(0,$.bg)(f.Cw,function(a,b){return a+PO(b.from)*
b.weight},0,a),k=(0,$.bg)(f.Cw,function(a,b){return a+b.weight},0,a);h=(h/k-PO(f))*b;f.ee+=h;f.We+=h}}},hfa=function(a,b){for(var c=a.b.slice(),d=0;d<c.length;d++)for(var e=a.b[d].rg,f=0;f<e.length;f++){var h=e[f];if(h.Qw.length){var k=(0,$.bg)(h.Qw,function(a,b){return a+PO(b.Yf)*b.weight},0,a),l=(0,$.bg)(h.Qw,function(a,b){return a+b.weight},0,a);k=(k/l-PO(h))*b;h.ee+=k;h.We+=k}}},QO=function(a,b){for(var c=0;c<a.b.length;c++){var d=a.b[c].rg.slice(),e=b.top,f=e+b.height,h=d.length,k,l=a.i("nodePadding");
d.sort(a.PN);for(k=0;k<h;++k){var m=d[k];e-=m.ee;0<e&&(m.ee+=e,m.We+=e);e=m.We+l}e=e-l-f;if(0<e)for(m.ee=m.ee-e,m.We=m.We-e,e=m.ee,k=h-2;0<=k;--k)m=d[k],e=m.We+l-e,0<e&&(m.ee-=e,m.We-=e),e=m.ee}},ifa=function(a,b){return function(c){return a*(1-c)+b*c}},RO=function(a,b,c){var d;for(d=0;d<b.length;d++){var e=b[d];KO(a,c,e.tag,e,$.Jk)}},SO=function(a,b){var c=new DO(a,b);c.fa(!0,$.Qk("sankey"));return c};$.I(CO,$.Ep);$.ap(CO,["fill","stroke","labels"],"normal");$.g=CO.prototype;
$.g.ua=$.Ep.prototype.ua|28672;$.g.Qa=function(){return this.Kd};$.g.Ya=function(a){this.mb||(this.mb=new $.ku(0),this.mb.Od(),this.mb.parent(this.va.Ya()),this.mb.va(this.va));return $.n(a)?(this.mb.N(a),this):this.mb};$.g.ip=function(){this.sa(16384)};$.g.Vd=function(){this.sa(4096)};$.g.AF=function(){this.ia.labels().I(4294967295);this.Ca.labels().I(4294967295)};$.g.Ma=function(a){return $.n(a)?(this.ia.N(a),this):this.ia};$.g.gb=function(a){return $.n(a)?(this.Ca.N(a),this):this.Ca};
$.g.Rn=function(a,b){return this.bx("fill",a,b)};$.g.So=function(a,b){return this.bx("stroke",a,b)};$.g.bx=function(a,b,c){a=(b?this.Ca:this.ia).i(a)||this.ia.i(a);$.G(a)&&(a=a.call(c,c));return a};$.g.F=function(){var a=CO.B.F.call(this);a.tooltip=this.Ya().F();a.normal=this.ia.F();a.hovered=this.Ca.F();return a};$.g.$=function(a,b){CO.B.$.call(this,a,b);"tooltip"in a&&this.Ya().fa(!!b,a.tooltip);this.ia.fa(!!b,a);this.ia.fa(!!b,a.normal);this.Ca.fa(!!b,a.hovered)};
$.g.R=function(){$.$c(this.mb,this.ia,this.Ca);CO.B.R.call(this)};var TO=CO.prototype;TO.tooltip=TO.Ya;TO.normal=TO.Ma;TO.hovered=TO.gb;$.I(DO,$.hv);$.Xw(DO,"sankey",["appearance","data","flowlabels","nodelabels"]);DO.prototype.ua=$.hv.prototype.ua;var UO={};$.No(UO,[[0,"nodeWidth",$.wp],[0,"nodePadding",$.Vo],[0,"curveFactor",$.zp]]);$.$o(DO,UO);var efa=[["nodeWidth",4,1],["nodePadding",4,1],["curveFactor",4,1]];$.g=DO.prototype;
$.g.data=function(a,b){if($.n(a)){if(a){var c=a.title||a.caption;c&&this.title(c);a.rows&&(a=a.rows)}this.Hg!==a&&(this.Hg=a,$.Zc(this.xa),this.kf=null,$.L(a,$.Xp)?this.xa=a.Kl():this.xa=$.L(a,$.gq)?a.te():(new $.gq($.D(a)||$.z(a)?a:null,b)).te(),$.U(this.xa,this.Ke,this),this.u(256),$.Ip(this,"sankey","data",1));return this}return this.xa};$.g.Ke=function(){this.u(256);$.Ip(this,"sankey","data",1)};$.g.Bf=function(){return this.xa.aa()};$.g.tc=function(){return this.kf=this.xa.aa()};
$.g.aa=function(){return this.kf||(this.kf=this.xa.aa())};$.g.Qa=function(){return"sankey"};
$.g.kb=function(){if($.Kp(this,"sankey","data")){this.rg={};this.D={};this.G=-1;for(var a=this.aa().reset();a.advance();){var b=String(a.get("from"));var c=a.get("to");c=null===c||$.F(c)?null:String(c);var d=$.R(a.get("weight"));var e=!b.length;var f=null!==c&&!c.length;$.B(d)&&0<d&&!e&&!f&&(b=GO(this,b),e=GO(this,c),c=b,b=e,e=this.aa().ja(),this.D[e]={type:b?HO:VO,di:e,from:c,Yf:b,weight:d},c.AK+=d,b?(c.Qw.push(this.D[e]),c.BZ.push(d),c.IB.push(b),b.FJ+=d,b.mY.push(d),b.$E.push(c),b.Cw.push(this.D[e]),
c.level>=b.level&&(b.level=c.level+1,EO(this,b)),b.level>this.G&&(this.G=b.level)):(c.fE+=d,c.NW.push(d)))}this.b=[];this.ra=!0;for(var h in this.rg)d=this.rg[h],d.weight=Math.max(d.FJ,d.AK),a=d.IB.length+d.NW.length,this.ra&&!a&&(d.level=this.G),d.$E.length&&a&&(d.oO=d.FJ!=d.AK),a=d.level,this.b[a]||(this.b[a]={rg:[],weight:0,top:window.NaN}),a=this.b[a],a.rg.push(d),a.weight+=d.weight;for(d=h=0;d<this.b.length;d++)for(a=this.b[d],c=0;c<a.rg.length;c++)a.rg[c].id=h++;this.u(4);$.Jp(this,"sankey",
"data")}};$.g.uk=function(){return!this.aa().Ob()};$.g.Se=function(){return[]};$.g.ip=function(){this.Ya().X()};$.g.KD=function(a,b){if(!this.K||b)this.K=new $.tu;var c={};IO(c,a);if(a.type!=FO){var d=this.aa();d.select(a.di);this.K.lg(d)}else this.K.lg(null);return $.et(this.K,c)};$.g.Iaa=function(a,b){return{x:a[b].x,y:a[b].y}};$.g.CT=function(a){return{x:(a.left+a.right)/2,y:a.topCenter}};
$.g.Fg=function(a){var b=a.domTarget,c=b.tag;if(c){var d=c.element.type;d==FO?(d=this.g.Ya(),MO(this,b,1,"left-bottom","right-bottom",this.Iaa)):d==HO?(d=this.f.Ya(),NO(this,b,1)):(d=this.o.Ya(),OO(this,b,1));b=d;d=a.clientX;a=a.clientY;this.bn||(this.bn=new $.tu);var e={};c=c.element;IO(e,c);if(c.type!=FO){var f=this.aa();f.select(c.di);this.bn.lg(f)}else this.bn.lg(null);c=$.et(this.bn,e);$.Cu(b,d,a,c)}else this.Ya().kd()};
$.g.$g=function(a){a=a.domTarget;var b=a.tag;this.Ya().kd();b&&(b=b.element.type,b==FO?MO(this,a,$.Jk,"center-bottom","center-bottom",this.CT):b==HO?NO(this,a,$.Jk):OO(this,a,$.Jk))};$.g.fP=function(a){var b=[];$.W(a,8192)&&b.push("appearance");$.W(a,4096)&&(a=a.target.Qa()==FO,b.push(a?"nodelabels":"flowlabels"));BO(this,b,1)};$.g.dP=function(a){this.o||(this.o=new CO(this,VO),$.U(this.o,this.fP,this));return $.n(a)?(this.o.N(a),this):this.o};
$.g.qP=function(a){this.f||(this.f=new CO(this,HO),$.U(this.f,this.fP,this));return $.n(a)?(this.f.N(a),this):this.f};$.g.node=function(a){this.g||(this.g=new CO(this,FO),$.U(this.g,this.fP,this));return $.n(a)?(this.g.N(a),this):this.g};$.g.Yb=function(a){if($.L(a,$.br))return this.Tc($.br,a),this;if($.L(a,$.Zq))return this.Tc($.Zq,a),this;$.F(a)&&"range"==a.type?this.Tc($.br):($.F(a)||null==this.Fa)&&this.Tc($.Zq);return $.n(a)?(this.Fa.N(a),this):this.Fa};
$.g.Tc=function(a,b){if($.L(this.Fa,a))b&&this.Fa.N(b);else{var c=!!this.Fa;$.Zc(this.Fa);this.Fa=new a;$.Qp(this,"palette",this.Fa);this.Fa.Br();b&&this.Fa.N(b);$.U(this.Fa,this.If,this);c&&$.Ip(this,"sankey","appearance",1)}};$.g.If=function(a){$.W(a,2)&&$.Ip(this,"sankey","appearance",1)};
$.g.Fe=function(a){var b=a.element;a=a.element.type;var c=this.Yb();return a==FO?{id:b.id,name:b.name,sourceColor:c.gc(b.id),conflict:b.oO}:a==HO?{from:b.from.name,to:b.Yf.name,sourceColor:c.gc(b.from.id)}:{from:b.from.name,sourceColor:c.gc(b.from.id)}};var FO=0,HO=1,VO=2,ffa={0:"node",1:"flow",2:"dropoff"};$.g=DO.prototype;$.g.ON=function(a,b){return this.PN(a.from,b.from)};$.g.QN=function(a,b){return this.PN(a.Yf,b.Yf)};$.g.PN=function(a,b){return a.ee-b.ee};
$.g.Lj=function(a){if(!this.Vf()){this.kb();this.wa||(this.wa=this.Va.ye(),this.wa.zIndex(30));if(this.J(4)){this.wa.yj();this.g.labels().u(2);this.f.labels().u(2);this.o.labels().u(2);this.P=[];this.da=[];this.W=[];this.ta=[];var b=this.i("nodePadding"),c=this.i("nodeWidth");if(this.b.length){var d=this.b.length;var e=a.width/d;c=$.O(c,e);e=.3*c}else c=e=d=0;var f,h=[];for(f=0;f<this.b.length;f++){var k=this.b[f];var l=k.rg;var m=l[l.length-1].fE?e:0;l=(a.height-m-b*(l.length-1))/k.weight;h.push(l)}this.la=
Math.min.apply(null,h);b=(a.width-c)/(d-1);for(f=0;f<this.b.length;f++)for(k=this.b[f],l=k.rg,k=0;k<l.length;k++)d=l[k],d.Cj=a.left+d.level*b,d.Dj=d.Cj+c,d.ee=a.top+k,d.We=d.ee+d.weight*this.la;for(var p in this.D)l=this.D[p],l.height=l.weight*this.la;QO(this,a);l=1;for(f=32;0<f;--f)l*=.99,hfa(this,l),QO(this,a),gfa(this,l),QO(this,a);for(v in this.rg)d=this.rg[v],d.Qw.sort(this.QN),d.Cw.sort(this.ON);for(v in this.rg){d=this.rg[v];var q=b=d.ee;for(f=0;f<d.Qw.length;f++)l=d.Qw[f],l.ee=q+l.height/
2,q+=l.height;for(f=0;f<d.Cw.length;f++)l=d.Cw[f],l.We=b+l.height/2,b+=l.height}for(v in this.rg)d=this.rg[v],k=this.wa.path(),k.zIndex(3),this.da.push(k),k.tag={element:d},d.path=k,d.Cj=$.xn($.Bl(d.Cj,4),1),d.ee=$.xn($.Bl(d.ee,4),1),d.Dj=$.xn($.Bl(d.Dj,4),1),d.We=$.xn($.Bl(d.We,4),1),k.moveTo(d.Cj,d.ee).lineTo(d.Dj,d.ee).lineTo(d.Dj,d.We).lineTo(d.Cj,d.We).lineTo(d.Cj,d.ee).close();d=this.i("curveFactor");for(p in this.D)if(l=this.D[p],l.Yf){k=this.wa.path();k.zIndex(1);this.W.push(k);k.tag={element:l};
l.path=k;a=l.from.Dj;f=l.Yf.Cj;q=l.ee;b=l.We;m=ifa(a,f);h=m(d);m=m(1-d);var r=l.height/2;l.left=a;l.right=f;l.topCenter=(q+b)/2-r;l.leftTop={x:a,y:q-r};l.rightTop={x:f,y:b-r};var t=q-r,u=b-r;q+=r;b+=r;k.moveTo(a,t).ik(h,t,m,u,f,u).lineTo(f,b).ik(m,b,h,q,a,q).lineTo(a,t);3>l.height&&(k=this.wa.path(),k.zIndex(2),this.ta.push(k),k.fill($.Ek).stroke($.Ek,3),k.moveTo(a,t).ik(h,t,m,u,f,u).lineTo(f,b).ik(m,b,h,q,a,q).lineTo(a,t),k.tag={element:l})}else b=l.from.fE*this.la,m=Math.min(b,c/4),a=l.from.Dj,
f=a+m,h=l.from.We,b=h-b,k=this.wa.path(),k.zIndex(1),this.P.push(k),k.tag={element:l},l.path=k,l.Rda=f,l.Sda=h,k.moveTo(a,b).arcTo(m,m,-90,90),b+m<h&&k.lineTo(f,h),k.lineTo((a+f)/2,h+e).lineTo(a,h).close();BO(this,["appearance","nodelabels","flowlabels"]);this.I(4)}$.Kp(this,"sankey","appearance")&&(RO(this,this.da,this.g),RO(this,this.W,this.f),RO(this,this.P,this.o),$.Jp(this,"sankey","appearance"));if($.Kp(this,"sankey","nodelabels")){l=this.g.labels();l.clear().O(this.wa).zIndex(3);for(var v in this.rg)d=
this.rg[v],a=d.id,c=this.KD(d,!0),e=JO(this,d,$.Jk),d.label=l.add(c,e,a),this.Ed(this.g,d,$.Jk);l.X();this.g.AF();$.Jp(this,"sankey","nodelabels")}if($.Kp(this,"sankey","flowlabels")){v=this.f.labels();f=this.o.labels();v.clear().O(this.wa).zIndex(3);f.clear().O(this.wa).zIndex(3);for(p in this.D)l=this.D[p],a=$.R(p),d=l.Yf,c=this.KD(l,!0),d?(e={value:this.CT(l)},l.label=v.add(c,e,a),l.label.fk("center-bottom")):(e={value:{x:l.Rda,y:l.Sda}},l.label=f.add(c,e,a),l.label.fk("left-center")),this.Ed(d?
this.f:this.o,l,$.Jk);v.X();f.X();this.f.AF();this.o.AF();$.Jp(this,"sankey","flowlabels")}}};
$.g.Ed=function(a,b,c){var d=b.label;if(d){var e=this.aa();a.Qa()==FO?e.reset():e.select(b.di);b=e.get("normal");b=$.n(b)?b.label:void 0;var f=e.get("hovered");f=$.n(f)?f.label:void 0;b=$.zn(b,e.get("label"),null);e=$.zn(f,e.get("hoverLabel"),null);e=c?e:null;f=c?a.gb().labels():null;var h=a.Ma().labels();c=c?a.gb().labels().pa:null;var k=a.Ma().labels().pa,l=e&&$.n(e.enabled)?e.enabled:null,m=b&&$.n(b.enabled)?b.enabled:null,p=f&&null!==f.enabled()?f.enabled():null,q=h&&null!==h.enabled()?h.enabled():
null;a=!1;null!=l?a=l:null!=m?a=m:null!=p?a=p:a=q;a?(d.enabled(!0),d.state("labelOwnSettings",d.ca,0),d.state("pointState",e,1),d.state("pointNormal",b,2),d.state("elementState",f,3),d.state("elementNormal",h,4),d.state("elementStateTheme",c,5),d.state("auto",d.ed,6),d.state("elementNormalTheme",k,7)):d.enabled(!1);d.X()}};$.g.qy=function(){return[this]};$.g.XI=function(){return["from","to","weight"]};
$.g.F=function(){var a=DO.B.F.call(this);a.data=this.data().F();a.tooltip=this.Ya().F();a.palette=this.Yb().F();a.dropoff=this.dP().F();a.flow=this.qP().F();a.node=this.node().F();$.mp(this,UO,a);return{chart:a}};$.g.$=function(a,b){DO.B.$.call(this,a,b);"data"in a&&this.data(a.data);this.Yb(a.palette);"tooltip"in a&&this.Ya().fa(!!b,a.tooltip);"dropoff"in a&&this.dP().fa(!!b,a.dropoff);"flow"in a&&this.qP().fa(!!b,a.flow);"node"in a&&this.node().fa(!!b,a.node);$.ep(this,UO,a,b)};
$.g.R=function(){$.$c(this.Fa,this.o,this.f,this.g,this.mb,this.P,this.da,this.W,this.ta);DO.B.R.call(this)};var WO=DO.prototype;WO.getType=WO.Qa;WO.data=WO.data;WO.noData=WO.sn;WO.tooltip=WO.Ya;WO.dropoff=WO.dP;WO.flow=WO.qP;WO.node=WO.node;WO.palette=WO.Yb;$.no.sankey=SO;$.H("anychart.sankey",SO);}).call(this,$)}
