(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-card-card_manage-card_manage"],{"2ea2":function(t,n,a){"use strict";a.r(n);var i=a("e4bc"),e=a("c5e5");for(var s in e)"default"!==s&&function(t){a.d(n,t,function(){return e[t]})}(s);a("3c24");var c=a("2877"),o=Object(c["a"])(e["default"],i["a"],i["b"],!1,null,"4ff3a22a",null);n["default"]=o.exports},"3c24":function(t,n,a){"use strict";var i=a("696ef"),e=a.n(i);e.a},"696ef":function(t,n,a){var i=a("9b69");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=a("4f06").default;e("30a5318e",i,!0,{sourceMap:!1,shadowMode:!1})},"9b69":function(t,n,a){n=t.exports=a("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 左右留白边距 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-4ff3a22a]{background-color:#f8f8f8}.list[data-v-4ff3a22a]{width:100%;border-bottom:%?15?% solid #f1f1f1;background:#fff}.list[data-v-4ff3a22a]:last-child{border:none}.list .li[data-v-4ff3a22a]{padding:%?10?% %?20?%;border-bottom:1px solid #f3f3f3;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.list .li.noborder[data-v-4ff3a22a]{border-bottom:0}.list .li .icon[data-v-4ff3a22a]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:%?50?%;height:%?50?%;color:#f6375b}.list .li .icon uni-image[data-v-4ff3a22a]{width:%?50?%;height:%?50?%}.list .li .text[data-v-4ff3a22a]{padding-left:%?20?%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;color:#666}.list .li .to[data-v-4ff3a22a]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:%?40?%;height:%?40?%}.list .li .tip[data-v-4ff3a22a]{color:grey;font-size:%?21?%}.list .li .tip.com[data-v-4ff3a22a]{color:#f6375b}body.?%PAGE?%[data-v-4ff3a22a]{background-color:#f8f8f8}',""])},bbe8:function(t,n,a){"use strict";(function(t){var i=a("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=i(a("795b")),s={data:function(){return{user:{},brand:{}}},onLoad:function(){var t=this;this.$store.dispatch("loadUserInfo").then(function(n){t.user=n}),this.$http.auth("brand_status").then(function(n){t.brand=n.data.brand}).catch(function(t){})},methods:{switchCardArticle:function(n){this.$http.auth("card_set",{field:"show_article",value:n.target.value?1:0}).then(function(n){t.toast(n.message)}).catch(function(t){})},brandCheck:function(n){var a=this;return new e.default(function(i,e){a.brand?n&&a.brand[n]&&!a.brand[n+"_status"]?t.toast("审核中，不能编辑，请耐心等待"):i():uni.showModal({title:"提示",content:"新创建品牌才可以进行编辑",confirmText:"创建",success:function(t){t.confirm&&e()}})})},setLogo:function(){this.brandCheck("logo").then(function(t){uni.navigateTo({url:"/pages/card/card_manage/card_logo"})}).catch(function(t){uni.navigateTo({url:"/pages/brand/new_brand/new_brand"})})},setVideo:function(){this.brandCheck("video").then(function(t){uni.navigateTo({url:"/pages/card/card_manage/card_video"})}).catch(function(t){uni.navigateTo({url:"/pages/user_center/new_brand/new_brand"})})},setGlory:function(){this.brandCheck("glory").then(function(t){uni.navigateTo({url:"/pages/card/card_manage/card_glory"})}).catch(function(t){uni.navigateTo({url:"/pages/user_center/new_brand/new_brand"})})}}};n.default=s}).call(this,a("c8ba"))},c5e5:function(t,n,a){"use strict";a.r(n);var i=a("bbe8"),e=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(n,t,function(){return i[t]})}(s);n["default"]=e.a},e4bc:function(t,n,a){"use strict";var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",[a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"li",on:{click:function(n){n=t.$handleEvent(n),t.setLogo(n)}}},[a("v-uni-view",{staticClass:"icon iconfont"},[t._v("")]),a("v-uni-view",{staticClass:"text"},[t._v("LOGO设置")]),a("v-uni-view",[t.brand.logo?a("v-uni-text",[t.brand.logo_status?a("v-uni-text",{staticClass:"tip"},[t._v("审核通过")]):a("v-uni-text",{staticClass:"tip com"},[t._v("审核中")])],1):t._e(),a("v-uni-text",{staticClass:"iconfont"},[t._v("")])],1)],1),a("v-uni-view",{staticClass:"li",on:{click:function(n){n=t.$handleEvent(n),t.setVideo(n)}}},[a("v-uni-view",{staticClass:"icon iconfont"},[t._v("")]),a("v-uni-view",{staticClass:"text"},[t._v("视频设置")]),a("v-uni-view",[t.brand.video?a("v-uni-text",[t.brand.video_status?a("v-uni-text",{staticClass:"tip"},[t._v("审核通过")]):a("v-uni-text",{staticClass:"tip com"},[t._v("审核中")])],1):t._e(),a("v-uni-text",{staticClass:"iconfont"},[t._v("")])],1)],1),a("v-uni-view",{staticClass:"li",on:{click:function(n){n=t.$handleEvent(n),t.setGlory(n)}}},[a("v-uni-view",{staticClass:"icon iconfont"},[t._v("")]),a("v-uni-view",{staticClass:"text"},[t._v("荣誉设置")]),a("v-uni-view",[t.brand.glory?a("v-uni-text",[t.brand.glory_status?a("v-uni-text",{staticClass:"tip"},[t._v("审核通过")]):a("v-uni-text",{staticClass:"tip com"},[t._v("审核中")])],1):t._e(),a("v-uni-text",{staticClass:"iconfont"},[t._v("")])],1)],1)],1),a("v-uni-view",{staticClass:"list"},[a("v-uni-navigator",{staticClass:"li",attrs:{url:"/pages/card/card_manage/card_imgs","open-type":"navigate"}},[a("v-uni-view",{staticClass:"icon iconfont"},[t._v("")]),a("v-uni-view",{staticClass:"text"},[t._v("图片管理")]),a("v-uni-text",{staticClass:"iconfont"},[t._v("")])],1),a("v-uni-navigator",{staticClass:"li",attrs:{url:"/pages/card/card_manage/card_bgm","open-type":"navigate"}},[a("v-uni-view",{staticClass:"icon iconfont"},[t._v("")]),a("v-uni-view",{staticClass:"text"},[t._v("背景音乐")]),a("v-uni-text",{staticClass:"iconfont"},[t._v("")])],1)],1),a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"li"},[a("v-uni-view",{staticClass:"icon iconfont"},[t._v("")]),a("v-uni-view",{staticClass:"text"},[t._v("头条设置")]),a("v-uni-view",[a("v-uni-text",{staticClass:"tip"},[t._v("开启名片头条")]),a("v-uni-switch",{staticStyle:{transform:"scale(0.7)"},attrs:{checked:!(!t.user.card||!t.user.card.show_article),color:"#f6375b"},on:{change:function(n){n=t.$handleEvent(n),t.switchCardArticle(n)}}}),a("v-uni-text",{staticClass:"iconfont"},[t._v("")])],1)],1)],1)],1)},e=[];a.d(n,"a",function(){return i}),a.d(n,"b",function(){return e})}}]);