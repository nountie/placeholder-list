(function(t){function e(e){for(var a,c,s=e[0],i=e[1],l=e[2],d=0,p=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&p.push(n[c][0]),n[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,s=1;s<r.length;s++){var i=r[s];0!==n[i]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=r[0]))}return t}var a={},n={app:0},o=[];function c(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=a,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(r,a,function(e){return t[e]}.bind(null,a));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=i;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"10d7":function(t,e,r){},"30cf":function(t,e,r){"use strict";var a=r("10d7"),n=r.n(a);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a,n,o=r("2b0e"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-gray-500 min-h-screen py-4",attrs:{id:"app"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"flex w-2/3 mx-auto text-center text-3xl text-gray-700 mt-4 mb-8"},[t._v(" Hi! It's just a random list. But you can choose images that match your taste! ")]),r("div",{staticClass:"panel p-5 bg-gray-200 rounded-md shadow"},[r("radio-input",{staticClass:"flex",attrs:{options:t.placeholderSources,"label-name":"image-placeholder"},model:{value:t.placeholderImgsSource,callback:function(e){t.placeholderImgsSource=e},expression:"placeholderImgsSource"}})],1),t._m(0),r("fetch-list",{attrs:{url:"https://jsonplaceholder.typicode.com/users/1/posts","placeholder-imgs":t.placeholderImgsSource},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data;return[r("section",{staticClass:"article-list"},t._l(a,(function(t){return r("card-box",{key:t.id,attrs:{item:t}})})),1)]}}])})],1)])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"seperator"},[r("span")])}],i=(r("99af"),r("d81d"),r("96cf"),r("1da1")),l=r("5530"),u=r("bc3a"),d=r.n(u),p={name:"FetchList",props:{url:String,placeholderImgs:{required:!1,default:!1}},data:function(){return{data:[]}},watch:{placeholderImgs:function(t){this.data=this.data.map((function(e,r){return Object(l["a"])(Object(l["a"])({},e),{},{img:"".concat(t.url,"/200/2").concat(r,"0")})}))}},created:function(){this.getData()},methods:{getData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get(t.url);case 3:r=e.sent,a=r.data,t.placeholderImgs?t.data=a.map((function(e,r){return Object(l["a"])(Object(l["a"])({},e),{},{img:"".concat(t.placeholderImgs.url,"/200/2").concat(r,"0")})})):t.data=a,e.next=11;break;case 8:throw e.prev=8,e.t0=e["catch"](0),new Error("Data error!");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},render:function(){return this.$scopedSlots.default({data:this.data})}},f=p,m=(r("ef9e"),r("2877")),h=Object(m["a"])(f,a,n,!1,null,"23753452",null),v=h.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"radio-inputs"},t._l(t.options,(function(e,a){return r("label",{key:a,class:{active:e.url==t.value.url},attrs:{for:"option-"+a}},[r("input",{staticClass:"hidden",attrs:{id:"option-"+a,name:t.labelName,type:"radio"},domProps:{value:e,checked:e.url==t.value.url},on:{change:function(r){return t.$emit("picked",e)}}}),e.icon?r("img",{staticClass:"rounded h-6 w-6 -ml-2 mr-2",attrs:{src:e.icon}}):t._e(),t._v(" "+t._s(e.title)+" ")])})),0)},b=[],w={model:{prop:"value",event:"picked"},props:{value:Object,options:Array,labelName:String}},x=w,y=(r("30cf"),Object(m["a"])(x,g,b,!1,null,"014fd96a",null)),_=y.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"scale",appear:""}},[r("div",{staticClass:"my-4 rounded shadow border-l-4 border-blue-800 bg-gray-100 px-4 py-4"},[r("div",{staticClass:"flex"},[t.item.img?[r("image-box",{staticClass:"h-24 w-24 rounded-md flex-shrink-0",attrs:{"img-src":""+t.item.img}}),r("div",{staticClass:"divider ml-5 mr-4 border-r border-gray-300"})]:t._e(),r("div",{staticClass:"flex justify-center flex-col body"},[r("h2",{staticClass:"text-xl font-medium leading-none"},[t._v(t._s(t.item.title))]),r("p",{staticClass:"text-sm text-gray-600 pt-2"},[t._v(t._s(t.item.body))])])],2)])])},O=[],k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"center-v-h"},[r("transition",{attrs:{name:"bump"}},[r("img",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],staticClass:"img object-cover h-24 w-24 rounded-md flex-shrink-0",attrs:{src:""+t.imgSrc},on:{load:t.onLoad}})]),t.loaded?t._e():r("spinner-icon")],1)},S=[],C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"35px",height:"35px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[r("circle",{attrs:{cx:"50",cy:"50",fill:"none",stroke:"#ccc","stroke-width":"7",r:"35","stroke-dasharray":"164.93361431346415 56.97787143782138",transform:"matrix(1,0,0,1,0,0)"}})])},I=[],B=(r("a0a8"),{}),$=Object(m["a"])(B,C,I,!1,null,"499793c6",null),P=$.exports,E={name:"ImageBox",components:{SpinnerIcon:P},props:{imgSrc:String},data:function(){return{loaded:!1}},watch:{imgSrc:function(){this.loaded=!1}},methods:{onLoad:function(){var t=this;setTimeout((function(){t.loaded=!0}),150)}}},M=E,L=(r("725a"),Object(m["a"])(M,k,S,!1,null,"60e2a31b",null)),N=L.exports,R={components:{ImageBox:N},props:{item:Object,areImgs:Boolean}},T=R,A=(r("854e"),Object(m["a"])(T,j,O,!1,null,"6feb4b70",null)),D=A.exports,F={name:"App",components:{FetchList:v,RadioInput:_,CardBox:D},data:function(){return{placeholderImgsSource:{url:"https://www.fillmurray.com"},placeholderSources:[{url:"https://www.fillmurray.com",title:"Bill Murray",icon:"https://www.fillmurray.com/50/50"},{url:"https://placekitten.com",title:"Kittens! ❤️"},{url:"https://placekeanu.com",title:"Keanu reeves",icon:"https://www.placekeanu.com/50/50"},{url:"https://baconmockup.com",title:"Bacon 🥓 "},{url:"https://www.placecage.com",title:"Nicolas Cage",icon:"https://www.placecage.com/50/50"},{url:"https://www.stevensegallery.com",title:"Steven Seagal",icon:"https://www.stevensegallery.com/50/50"},{url:"https://placebear.com",title:"Bear 🐻"}]}}},J=F,K=(r("5c0b"),Object(m["a"])(J,c,s,!1,null,null,null)),q=K.exports;r("ba8c");o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(q)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var a=r("9c0c"),n=r.n(a);n.a},"6f50":function(t,e,r){},"725a":function(t,e,r){"use strict";var a=r("cda9"),n=r.n(a);n.a},"854e":function(t,e,r){"use strict";var a=r("bb16"),n=r.n(a);n.a},"9c0c":function(t,e,r){},a0a8:function(t,e,r){"use strict";var a=r("d3ee"),n=r.n(a);n.a},ba8c:function(t,e,r){},bb16:function(t,e,r){},cda9:function(t,e,r){},d3ee:function(t,e,r){},ef9e:function(t,e,r){"use strict";var a=r("6f50"),n=r.n(a);n.a}});
//# sourceMappingURL=app.86c2cf85.js.map