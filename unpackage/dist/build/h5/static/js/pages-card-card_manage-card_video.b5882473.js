(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-card-card_manage-card_video"],{"0060":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 左右留白边距 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-b7becd16]{background-color:#f8f8f8}.add-box[data-v-b7becd16]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:#fff;padding:%?40?% 0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.add-box .tip[data-v-b7becd16]{margin-top:%?20?%}.add-box .iframe[data-v-b7becd16]{width:100%}.video-pop[data-v-b7becd16]{min-width:%?460?%}.video-pop .link-input[data-v-b7becd16]{margin-top:%?16?%;width:100%;text-align:start}.video-pop .btn[data-v-b7becd16]{font-size:%?28?%;color:#fff;background-color:#f6375b}body.?%PAGE?%[data-v-b7becd16]{background-color:#f8f8f8}',""])},"0da9":function(t,n,e){"use strict";var i=e("d7c0"),a=e.n(i);a.a},1976:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.showPopup?e("v-uni-view",{staticClass:"uni-popup"},[e("v-uni-view",{staticClass:"uni-popup__mask",class:[t.ani,t.animation?"ani":"",t.custom?"":"uni-custom"],on:{click:function(n){n=t.$handleEvent(n),t.close(!0)}}}),e("v-uni-view",{staticClass:"uni-popup__wrapper",class:[t.type,t.ani,t.animation?"ani":"",t.custom?"":"uni-custom"],on:{click:function(n){n=t.$handleEvent(n),t.close(!0)}}},[e("v-uni-view",{staticClass:"uni-popup__wrapper-box",on:{click:function(n){n.stopPropagation(),n=t.$handleEvent(n),t.clear(n)}}},[t._t("default")],2)],1)],1):t._e()},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},"1fd7":function(t,n,e){"use strict";e.r(n);var i=e("fb3a"),a=e("8d90");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("4ecc");var r=e("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"b7becd16",null);n["default"]=c.exports},"222d":function(t,n,e){"use strict";e.r(n);var i=e("1976"),a=e("8096");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("7664");var r=e("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"7ef398d3",null);n["default"]=c.exports},"2de9":function(t,n,e){"use strict";(function(t){var i=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("222d")),o=i(e("5c36")),r={components:{buttonFileAdd:o.default,uniPopup:a.default},data:function(){return{video:"",videoLink:""}},onLoad:function(){var t=this;this.$store.dispatch("loadUserInfo").then(function(n){n.brand&&n.brand.active_video&&(t.video=n.brand.active_video)})},methods:{add:function(){var n=this;uni.chooseVideo({count:1,sourceType:["camera","album"],success:function(e){var i=e.tempFilePath;uni.showLoading({title:"上传中"}),console.log(i),n.$http.file(i).then(function(i){uni.hideLoading(),n.$http.auth("set_video",{video:i}).then(function(e){n.video=i,t.toast("上传成功")}).catch(function(t){}),n.video=e}).catch(function(n){console.log(n),t.toast("上传失败")})},fail:function(t){console.log(t)}})}}};n.default=r}).call(this,e("c8ba"))},"4af6":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"UniPopup",props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},custom:{type:Boolean,default:!1},maskClick:{type:Boolean,default:!0},show:{type:Boolean,default:!0}},data:function(){return{ani:"",showPopup:!1}},watch:{show:function(t){t?this.open():this.close()}},created:function(){},methods:{clear:function(){},open:function(){var t=this;this.$emit("change",{show:!0}),this.showPopup=!0,this.$nextTick(function(){setTimeout(function(){t.ani="uni-"+t.type},30)})},close:function(t){var n=this;!this.maskClick&&t||(this.$emit("change",{show:!1}),this.ani="",this.$nextTick(function(){setTimeout(function(){n.showPopup=!1},300)}))}}};n.default=i},"4ecc":function(t,n,e){"use strict";var i=e("6e77"),a=e.n(i);a.a},"5c36":function(t,n,e){"use strict";e.r(n);var i=e("c9ce"),a=e("a425");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("0da9");var r=e("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"5c5c65f7",null);n["default"]=c.exports},"6e77":function(t,n,e){var i=e("0060");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("f94161c8",i,!0,{sourceMap:!1,shadowMode:!1})},"71f4":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={methods:{click:function(){this.$emit("click")}}};n.default=i},7664:function(t,n,e){"use strict";var i=e("861e"),a=e.n(i);a.a},"7b08":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,".uni-popup[data-v-7ef398d3]{position:fixed;top:0;top:0;bottom:0;left:0;right:0;z-index:99999;overflow:hidden}.uni-popup__mask[data-v-7ef398d3]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:998;background:rgba(0,0,0,.4);opacity:0}.uni-popup__mask.ani[data-v-7ef398d3]{-webkit-transition:all .3s;-o-transition:all .3s;transition:all .3s}.uni-popup__mask.uni-bottom[data-v-7ef398d3],.uni-popup__mask.uni-center[data-v-7ef398d3],.uni-popup__mask.uni-top[data-v-7ef398d3]{opacity:1}.uni-popup__wrapper[data-v-7ef398d3]{position:absolute;z-index:999;-webkit-box-sizing:border-box;box-sizing:border-box}.uni-popup__wrapper.ani[data-v-7ef398d3]{-webkit-transition:all .3s;-o-transition:all .3s;transition:all .3s}.uni-popup__wrapper.top[data-v-7ef398d3]{top:0;left:0;width:100%;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%)}.uni-popup__wrapper.bottom[data-v-7ef398d3]{bottom:0;left:0;width:100%;-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%)}.uni-popup__wrapper.center[data-v-7ef398d3]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);opacity:0}.uni-popup__wrapper-box[data-v-7ef398d3]{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}.uni-popup__wrapper.uni-custom .uni-popup__wrapper-box[data-v-7ef398d3]{padding:%?30?%;background:#fff}.uni-popup__wrapper.uni-custom.center .uni-popup__wrapper-box[data-v-7ef398d3]{position:relative;max-width:80%;max-height:80%;overflow-y:scroll}.uni-popup__wrapper.uni-custom.bottom .uni-popup__wrapper-box[data-v-7ef398d3],.uni-popup__wrapper.uni-custom.top .uni-popup__wrapper-box[data-v-7ef398d3]{width:100%;max-height:500px;overflow-y:scroll}.uni-popup__wrapper.uni-bottom[data-v-7ef398d3],.uni-popup__wrapper.uni-top[data-v-7ef398d3]{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}.uni-popup__wrapper.uni-center[data-v-7ef398d3]{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1}",""])},8096:function(t,n,e){"use strict";e.r(n);var i=e("4af6"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},"861e":function(t,n,e){var i=e("7b08");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("12c3b1ce",i,!0,{sourceMap:!1,shadowMode:!1})},"86ef":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 左右留白边距 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.file-add[data-v-5c5c65f7]{position:relative;width:%?160?%;height:%?160?%;background-color:#f6f6f6;border-radius:%?6?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}',""])},"8d90":function(t,n,e){"use strict";e.r(n);var i=e("2de9"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},a425:function(t,n,e){"use strict";e.r(n);var i=e("71f4"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},c9ce:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"file-add",on:{click:function(n){n=t.$handleEvent(n),t.click(n)}}},[e("v-uni-text",{staticClass:"iconfont"},[t._v("")])],1)},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},d7c0:function(t,n,e){var i=e("86ef");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("03935d08",i,!0,{sourceMap:!1,shadowMode:!1})},fb3a:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"gap"}),e("v-uni-view",{staticClass:"add-box"},[t.video?e("v-uni-view",{staticClass:"video",on:{click:function(n){n=t.$handleEvent(n),t.add(n)}}},[e("v-uni-video",{attrs:{src:t.video,controls:""}})],1):t._e(),e("button-file-add",{on:{click:function(n){n=t.$handleEvent(n),t.add(n)}}}),e("v-uni-view",{staticClass:"tip"},[t._v("上传视频")])],1)],1)},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})}}]);