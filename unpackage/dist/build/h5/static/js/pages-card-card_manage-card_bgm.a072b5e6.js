(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-card-card_manage-card_bgm"],{1184:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"card-bgm"},[e("v-uni-view",{staticClass:"gap"}),e("v-uni-view",{staticClass:"b-list b-line"},[e("v-uni-text",[t._v("是否开启")]),e("v-uni-view",[e("v-uni-text",{staticClass:"b-list-tip"},[t._v("是否开启背景音乐")]),e("v-uni-switch",{staticStyle:{transform:"scale(0.7)"},attrs:{checked:t.bgmOpen,color:"#f6375b"},on:{change:function(n){n=t.$handleEvent(n),t.bgmOpenChange(n)}}})],1)],1),e("v-uni-view",{staticClass:"b-list b-line"},[e("v-uni-text",[t._v("自动播放")]),e("v-uni-view",[e("v-uni-text",{staticClass:"b-list-tip"},[t._v("是否自动播放背景音乐")]),e("v-uni-switch",{staticStyle:{transform:"scale(0.7)"},attrs:{checked:t.bgmAutoPlay,color:"#f6375b"},on:{change:function(n){n=t.$handleEvent(n),t.bgmAutoPlayChange(n)}}})],1)],1),e("v-uni-view",{staticClass:"gap"}),e("v-uni-radio-group",{on:{change:function(n){n=t.$handleEvent(n),t.bgmChange(n)}}},t._l(t.bgmList,function(n,r){return e("v-uni-view",{key:r,staticClass:"b-list b-line"},[e("v-uni-text",[t._v(t._s(n.name))]),e("v-uni-view",[e("v-uni-radio",{attrs:{value:n.id.toString(),checked:r===t.current,color:"#f6375b"}})],1)],1)}),1),e("button-submit",{attrs:{title:"保存"},on:{submit:function(n){n=t.$handleEvent(n),t.submit(n)}}})],1)},i=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return i})},"17fc":function(t,n,e){var r=e("8843");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=e("4f06").default;i("4f462a47",r,!0,{sourceMap:!1,shadowMode:!1})},"35ee":function(t,n,e){"use strict";(function(t){var r=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("ac6a"),e("96cf");var i=r(e("3b8d")),o=r(e("8e92")),a={components:{buttonSubmit:o.default},data:function(){return{user:{},bgmList:[],current:0,selectedId:"",bgmOpen:!0,bgmAutoPlay:!0,currentAudio:null}},onLoad:function(){var t=(0,i.default)(regeneratorRuntime.mark(function t(){var n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("loadUserInfo").then(function(t){n.user=t,n.bgmOpen=!(!t.card||!t.card.bgm_open),n.bgmAutoPlay=!(!t.card||!t.card.bgm_auto_play)});case 2:this.$http.auth("bgm_list").then(function(t){n.bgmList=t.data.data,n.bgmList.forEach(function(t,e){t.id===n.user.bgm_id&&(n.current=e)})}).catch(function(t){});case 3:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),onUnload:function(){this.currentAudio&&this.currentAudio.destroy()},methods:{bgmChange:function(t){this.selectedId=t.target.value,this.createAudio()},bgmOpenChange:function(t){this.bgmOpen=t.target.value},bgmAutoPlayChange:function(t){this.bgmAutoPlay=t.target.value},createAudio:function(){this.currentAudio||(this.currentAudio=uni.createInnerAudioContext()),this.currentAudio.autoplay=!0,this.currentAudio.src=this.bgmList[this.current].src},submit:function(){this.$http.auth("set_bgm",{bgm_id:this.selectedId,bgm_open:this.bgmOpen?1:0,bgm_auto_play:this.bgmAutoPlay?1:0}).then(function(n){t.toast("保存成功",function(){uni.navigateBack()})}).catch(function(t){})}}};n.default=a}).call(this,e("c8ba"))},"386be":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 左右留白边距 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-b3df88d6]{background-color:#f8f8f8}.card-bgm .b-list[data-v-b3df88d6]{background-color:#fff;padding:%?16?% %?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.card-bgm .b-list-tip[data-v-b3df88d6]{font-size:%?24?%;color:#999}.card-bgm .b-list .iconfont[data-v-b3df88d6]{color:#999}.card-bgm .b-list .iconfont.selected[data-v-b3df88d6]{color:#f6375b}body.?%PAGE?%[data-v-b3df88d6]{background-color:#f8f8f8}',""])},"3b8d":function(t,n,e){"use strict";e.r(n),e.d(n,"default",function(){return a});var r=e("795b"),i=e.n(r);function o(t,n,e,r,o,a,c){try{var u=t[a](c),s=u.value}catch(f){return void e(f)}u.done?n(s):i.a.resolve(s).then(r,o)}function a(t){return function(){var n=this,e=arguments;return new i.a(function(r,i){var a=t.apply(n,e);function c(t){o(a,r,i,c,u,"next",t)}function u(t){o(a,r,i,c,u,"throw",t)}c(void 0)})}}},"59f6":function(t,n,e){var r=e("386be");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=e("4f06").default;i("b8e66c62",r,!0,{sourceMap:!1,shadowMode:!1})},"7c98":function(t,n,e){"use strict";e.r(n);var r=e("b7a3"),i=e.n(r);for(var o in r)"default"!==o&&function(t){e.d(n,t,function(){return r[t]})}(o);n["default"]=i.a},"7eb8":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"btns"},[e("v-uni-view",{staticClass:"btn-box"},[e("v-uni-button",{staticClass:"btn-submit",class:{disabled:t.disabled},attrs:{loading:t.loading,formType:t.formType},on:{click:function(n){n=t.$handleEvent(n),t.submit(n)}}},[t._v(t._s(t.title))])],1)],1)},i=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return i})},8843:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 左右留白边距 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.btns[data-v-2bdfe4b8]{position:fixed;left:0;bottom:0;width:100%;z-index:99;background-color:#fff}.btns .btn-box[data-v-2bdfe4b8]{display:block;padding:%?15?%}.btns .btn-box .btn-submit[data-v-2bdfe4b8]{background-color:#f6375b;color:#fff;margin-top:%?20?%}.btns .btn-box .btn-submit.disabled[data-v-2bdfe4b8]{color:silver;background-color:#fff}',""])},"8e92":function(t,n,e){"use strict";e.r(n);var r=e("7eb8"),i=e("7c98");for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);e("d338");var a=e("2877"),c=Object(a["a"])(i["default"],r["a"],r["b"],!1,null,"2bdfe4b8",null);n["default"]=c.exports},"96cf":function(t,n){!function(n){"use strict";var e,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag",s="object"===typeof t,f=n.regeneratorRuntime;if(f)s&&(t.exports=f);else{f=n.regeneratorRuntime=s?t.exports:{},f.wrap=w;var l="suspendedStart",d="suspendedYield",h="executing",p="completed",b={},v={};v[a]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g($([])));m&&m!==r&&i.call(m,a)&&(v=m);var y=k.prototype=_.prototype=Object.create(v);L.prototype=y.constructor=k,k.constructor=L,k[u]=L.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var n="function"===typeof t&&t.constructor;return!!n&&(n===L||"GeneratorFunction"===(n.displayName||n.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(y),t},f.awrap=function(t){return{__await:t}},E(A.prototype),A.prototype[c]=function(){return this},f.AsyncIterator=A,f.async=function(t,n,e,r){var i=new A(w(t,n,e,r));return f.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(y),y[u]="Generator",y[a]=function(){return this},y.toString=function(){return"[object Generator]"},f.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){while(n.length){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},f.values=$,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],n=t.completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,i){return c.type="throw",c.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),b},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),b}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var i=r.arg;P(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:$(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),b}}}function w(t,n,e,r){var i=n&&n.prototype instanceof _?n:_,o=Object.create(i.prototype),a=new S(r||[]);return o._invoke=O(t,e,a),o}function x(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(r){return{type:"throw",arg:r}}}function _(){}function L(){}function k(){}function E(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function A(t){function n(e,r,o,a){var c=x(t[e],t,r);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"===typeof s&&i.call(s,"__await")?Promise.resolve(s.__await).then(function(t){n("next",t,o,a)},function(t){n("throw",t,o,a)}):Promise.resolve(s).then(function(t){u.value=t,o(u)},function(t){return n("throw",t,o,a)})}a(c.arg)}var e;function r(t,r){function i(){return new Promise(function(e,i){n(t,r,e,i)})}return e=e?e.then(i,i):i()}this._invoke=r}function O(t,n,e){var r=l;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return T()}e.method=i,e.arg=o;while(1){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===b)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===l)throw r=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=h;var u=x(t,n,e);if("normal"===u.type){if(r=e.done?p:d,u.arg===b)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r=p,e.method="throw",e.arg=u.arg)}}}function j(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method))return b;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return b}var i=x(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,b;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,b):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function C(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function P(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function $(t){if(t){var n=t[a];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){while(++r<t.length)if(i.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:T}}function T(){return{value:e,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a5db:function(t,n,e){"use strict";e.r(n);var r=e("35ee"),i=e.n(r);for(var o in r)"default"!==o&&function(t){e.d(n,t,function(){return r[t]})}(o);n["default"]=i.a},ac01:function(t,n,e){"use strict";var r=e("59f6"),i=e.n(r);i.a},b5a2:function(t,n,e){"use strict";e.r(n);var r=e("1184"),i=e("a5db");for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);e("ac01");var a=e("2877"),c=Object(a["a"])(i["default"],r["a"],r["b"],!1,null,"b3df88d6",null);n["default"]=c.exports},b7a3:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={name:"button-submit",props:{title:{type:String,default:""},disabled:{type:Boolean,default:!1},formType:{type:String,default:""},loading:{type:[Boolean,String],default:!1}},methods:{submit:function(){this.$emit("submit")}}};n.default=r},d338:function(t,n,e){"use strict";var r=e("17fc"),i=e.n(r);i.a}}]);