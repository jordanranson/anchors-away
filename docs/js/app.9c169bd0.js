(function(t){function n(n){for(var e,c,u=n[0],a=n[1],h=n[2],d=0,l=[];d<u.length;d++)c=u[d],i[c]&&l.push(i[c][0]),i[c]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e]);f&&f(n);while(l.length)l.shift()();return r.push.apply(r,h||[]),o()}function o(){for(var t,n=0;n<r.length;n++){for(var o=r[n],e=!0,u=1;u<o.length;u++){var a=o[u];0!==i[a]&&(e=!1)}e&&(r.splice(n--,1),t=c(c.s=o[0]))}return t}var e={},i={app:0},r=[];function c(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=t,c.c=e,c.d=function(t,n,o){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)c.d(o,e,function(n){return t[n]}.bind(null,e));return o},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=n,u=u.slice();for(var h=0;h<u.length;h++)n(u[h]);var f=a;r.push([0,"chunk-vendors"]),o()})({0:function(t,n,o){t.exports=o("56d7")},"034f":function(t,n,o){"use strict";var e=o("c21b"),i=o.n(e);i.a},"56d7":function(t,n,o){"use strict";o.r(n);o("cadf"),o("551c"),o("097d");var e=o("2b0e"),i=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{attrs:{id:"app"}},[o("div",[o("canvas",{ref:"canvas",attrs:{width:"300",height:"300"}}),o("p",[t._v("\n      Anchor X:\n      "),o("button",{on:{click:function(n){t.config.anchorX="left"}}},[t._v("Left")]),o("button",{on:{click:function(n){t.config.anchorX=""}}},[t._v("Center")]),o("button",{on:{click:function(n){t.config.anchorX="right"}}},[t._v("Right")])]),o("p",[t._v("\n      Anchor Y:\n      "),o("button",{on:{click:function(n){t.config.anchorY="top"}}},[t._v("Top")]),o("button",{on:{click:function(n){t.config.anchorY=""}}},[t._v("Center")]),o("button",{on:{click:function(n){t.config.anchorY="bottom"}}},[t._v("Bottom")])]),o("p",[t._v("\n      Direction:\n      "),o("button",{on:{click:function(n){t.config.direction="row"}}},[t._v("Row")]),o("button",{on:{click:function(n){t.config.direction="column"}}},[t._v("Column")])])]),o("pre",[t._v(t._s(t.layout))])])},r=[];o("ac6a"),o("6762"),o("2fdb");function c(t){var n=t.x,o=void 0===n?0:n,e=t.y,i=void 0===e?0:e,r=t.items,c=void 0===r?[]:r,u=t.width,a=void 0===u?0:u,h=t.height,f=void 0===h?0:h,d=t.margin,l=void 0===d?0:d,s=t.anchors,p=void 0===s?"top left":s,v=t.direction,g=void 0===v?"row":v,b="center",w=Math.round(a/2);p.includes("left")&&(b="left",w=0),p.includes("right")&&(b="right",w=a),w+=o;var y="center",m=Math.round(f/2);p.includes("top")&&(y="top",m=0),p.includes("bottom")&&(y="bottom",m=f),m+=i;var _=0,x=c.map(function(t){var n={x:(t.x||0)+w,y:(t.y||0)+m,width:t.width,height:t.height};return"row"===g?(n.x+=_,"center"===y?n.y-=Math.round(t.height/2):"bottom"===y&&(n.y-=t.height),_+=t.width+l,n):(n.y+=_,"center"===b?n.x-=Math.round(t.width/2):"right"===b&&(n.x-=t.width),_+=t.height+l,n)});return x=x.map(function(t){return"row"===g?"center"===b?t.x-=Math.round((_-l)/2):"right"===b&&(t.x-=_-l):"center"===y?t.y-=Math.round((_-l)/2):"bottom"===y&&(t.y-=_-l),t}),x}var u={name:"app",data:function(){return{items:[{width:16,height:16},{width:32,height:16},{width:16,height:32},{width:32,height:32},{width:16,height:16}],config:{anchorX:"left",anchorY:"top",direction:"row"},canvas:void 0,context:void 0}},computed:{layout:function(){var t=this.config;return c({x:0,y:0,items:this.items,width:300,height:300,margin:10,anchors:[t.anchorX,t.anchorY].join(" "),direction:t.direction})}},mounted:function(){this.$set(this,"canvas",this.$refs.canvas),this.$set(this,"context",this.$refs.canvas.getContext("2d")),this.draw(this.layout)},methods:{draw:function(t){var n=this.canvas,o=this.context,e=n.width,i=n.height;o.clearRect(0,0,e,i),o.fillStyle="red",t.forEach(function(t){o.fillRect(t.x,t.y,t.width,t.height)})}},watch:{layout:function(t){this.draw(t)}}},a=u,h=(o("034f"),o("2877")),f=Object(h["a"])(a,i,r,!1,null,null,null);f.options.__file="App.vue";var d=f.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(d)}}).$mount("#app")},c21b:function(t,n,o){}});
//# sourceMappingURL=app.9c169bd0.js.map