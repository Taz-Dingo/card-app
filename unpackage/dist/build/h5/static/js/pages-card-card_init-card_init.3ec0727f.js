(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-card-card_init-card_init"],{"0bb2":function(t,i,n){"use strict";n.r(i);var e=n("9470"),a=n.n(e);for(var c in e)"default"!==c&&function(t){n.d(i,t,function(){return e[t]})}(c);i["default"]=a.a},1217:function(t,i,n){"use strict";n.r(i);var e=n("51f1"),a=n("0bb2");for(var c in a)"default"!==c&&function(t){n.d(i,t,function(){return a[t]})}(c);n("eacc");var o=n("2877"),r=Object(o["a"])(a["default"],e["a"],e["b"],!1,null,"6715dcb5",null);i["default"]=r.exports},"1a07":function(t,i,n){i=t.exports=n("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 左右留白边距 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.card-init[data-v-6715dcb5]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:%?26?% 0}.card-init .init-title[data-v-6715dcb5]{font-size:%?35?%;font-weight:600}.card-init .init-image[data-v-6715dcb5]{height:%?400?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.card-init .init-image .image[data-v-6715dcb5]{height:100%;width:%?400?%}.card-init .init-image .tip[data-v-6715dcb5]{font-size:%?24?%;color:#999}.card-init .init-protocol[data-v-6715dcb5]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;margin:%?20?% 0}.card-init .init-protocol .checkgroup[data-v-6715dcb5]{max-width:%?40?%;margin-right:%?25?%}.card-init .init-protocol .protocol[data-v-6715dcb5]{color:#007aff}.card-init .btn-box .btn[data-v-6715dcb5]{color:#fff;background-color:#f6375b;font-size:%?28?%;margin-top:%?20?%}',""])},"4f64":function(t,i,n){var e=n("1a07");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("76e101c8",e,!0,{sourceMap:!1,shadowMode:!1})},"51f1":function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{staticClass:"card-init"},[n("v-uni-view",{staticClass:"init-title"},[n("v-uni-text",[t._v("您还没有创建名片哦")])],1),n("v-uni-view",{staticClass:"init-image"},[n("v-uni-image",{staticClass:"image",attrs:{src:"/static/logo1.png",mode:"scaleToFill"}}),n("v-uni-text",{staticClass:"tip"},[t._v("-高效扩充人脉宝库 迅速抢占市场先机-")])],1),n("v-uni-view",{staticClass:"init-protocol"},[n("v-uni-checkbox-group",{staticClass:"checkgroup"},[n("v-uni-label",{staticClass:"checkbox"},[n("v-uni-checkbox",{staticStyle:{transform:"scale(0.7)"},attrs:{value:"",checked:""}})],1)],1),n("v-uni-text",[t._v("阅读并接受")]),n("v-uni-navigator",{staticClass:"protocol",attrs:{url:"/pages/system/protocol/protocol","open-type":"navigate"}},[t._v("《服务协议》")])],1),n("v-uni-view",{staticClass:"btn-box"},[n("v-uni-button",{staticClass:"btn",on:{click:function(i){i=t.$handleEvent(i),t.quickStart(i)}}},[t._v("快速创建我的名片")])],1)],1)],1)},a=[];n.d(i,"a",function(){return e}),n.d(i,"b",function(){return a})},9470:function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{}},onLoad:function(i){i.auth_token&&t.setToken(i.auth_token)},methods:{quickStart:function(){uni.navigateTo({url:"/pages/card/card_create/card_create"})}}};i.default=n}).call(this,n("c8ba"))},eacc:function(t,i,n){"use strict";var e=n("4f64"),a=n.n(e);a.a}}]);