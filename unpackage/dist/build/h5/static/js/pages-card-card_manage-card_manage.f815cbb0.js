(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-card-card_manage-card_manage"],{"2ea2":function(t,n,i){"use strict";i.r(n);var a=i("c499"),e=i("c5e5");for(var s in e)"default"!==s&&function(t){i.d(n,t,function(){return e[t]})}(s);i("63cc");var c=i("2877"),o=Object(c["a"])(e["default"],a["a"],a["b"],!1,null,"2bde3bfb",null);n["default"]=o.exports},"4a1a":function(t,n,i){n=t.exports=i("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 左右留白边距 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-2bde3bfb]{background-color:#f8f8f8}.list[data-v-2bde3bfb]{width:100%;border-bottom:%?15?% solid #f1f1f1;background:#fff}.list[data-v-2bde3bfb]:last-child{border:none}.list .li[data-v-2bde3bfb]{padding:%?10?% %?20?%;border-bottom:1px solid #f3f3f3;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.list .li.noborder[data-v-2bde3bfb]{border-bottom:0}.list .li .icon[data-v-2bde3bfb]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:%?50?%;height:%?50?%;color:#f6375b}.list .li .icon uni-image[data-v-2bde3bfb]{width:%?50?%;height:%?50?%}.list .li .text[data-v-2bde3bfb]{padding-left:%?20?%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;color:#666}.list .li .to[data-v-2bde3bfb]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:%?40?%;height:%?40?%}.list .li .tip[data-v-2bde3bfb]{color:grey;font-size:%?21?%}.list .li .tip.com[data-v-2bde3bfb]{color:#f6375b}body.?%PAGE?%[data-v-2bde3bfb]{background-color:#f8f8f8}',""])},"63cc":function(t,n,i){"use strict";var a=i("e86e"),e=i.n(a);e.a},bbe8:function(t,n,i){"use strict";(function(t){var a=i("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=a(i("795b")),s={data:function(){return{user:{},brand:{}}},onLoad:function(){var t=this;this.$store.dispatch("loadUserInfo").then(function(n){t.user=n}),this.$http.auth("brand_status").then(function(n){t.brand=n.data.brand}).catch(function(t){})},methods:{switchCardArticle:function(n){this.$http.auth("card_set",{field:"show_article",value:n.target.value?1:0}).then(function(n){t.toast(n.message)}).catch(function(t){})},brandCheck:function(n){var i=this;return new e.default(function(a,e){i.brand?n&&i.brand[n]&&!i.brand[n+"_status"]?t.toast("审核中，不能编辑，请耐心等待"):a():uni.showModal({title:"提示",content:"新创建品牌才可以进行编辑",confirmText:"创建",success:function(t){t.confirm&&e()}})})},setLogo:function(){this.brandCheck("logo").then(function(t){uni.navigateTo({url:"/pages/card/card_manage/card_logo"})}).catch(function(t){uni.navigateTo({url:"/pages/brand/new_brand/new_brand"})})},setVideo:function(){this.brandCheck("video").then(function(t){uni.navigateTo({url:"/pages/card/card_manage/card_video"})}).catch(function(t){uni.navigateTo({url:"/pages/user_center/new_brand/new_brand"})})},setGlory:function(){this.brandCheck("glory").then(function(t){uni.navigateTo({url:"/pages/card/card_manage/card_glory"})}).catch(function(t){uni.navigateTo({url:"/pages/user_center/new_brand/new_brand"})})}}};n.default=s}).call(this,i("c8ba"))},c499:function(t,n,i){"use strict";var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("v-uni-view",{staticClass:"list"},[i("v-uni-view",{staticClass:"li",on:{click:function(n){n=t.$handleEvent(n),t.setLogo(n)}}},[i("v-uni-view",{staticClass:"icon iconfont"},[t._v("")]),i("v-uni-view",{staticClass:"text"},[t._v("LOGO设置")]),i("v-uni-view",[t.brand.logo?i("v-uni-text",[t.brand.logo_status?i("v-uni-text",{staticClass:"tip"},[t._v("审核通过")]):i("v-uni-text",{staticClass:"tip com"},[t._v("审核中")])],1):t._e(),i("v-uni-text",{staticClass:"iconfont"},[t._v("")])],1)],1),i("v-uni-view",{staticClass:"li",on:{click:function(n){n=t.$handleEvent(n),t.setVideo(n)}}},[i("v-uni-view",{staticClass:"icon iconfont"},[t._v("")]),i("v-uni-view",{staticClass:"text"},[t._v("视频设置")]),i("v-uni-view",[t.brand.video?i("v-uni-text",[t.brand.video_status?i("v-uni-text",{staticClass:"tip"},[t._v("审核通过")]):i("v-uni-text",{staticClass:"tip com"},[t._v("审核中")])],1):t._e(),i("v-uni-text",{staticClass:"iconfont"},[t._v("")])],1)],1),i("v-uni-view",{staticClass:"li",on:{click:function(n){n=t.$handleEvent(n),t.setGlory(n)}}},[i("v-uni-view",{staticClass:"icon iconfont"},[t._v("")]),i("v-uni-view",{staticClass:"text"},[t._v("荣誉设置")]),i("v-uni-view",[t.brand.glory?i("v-uni-text",[t.brand.glory_status?i("v-uni-text",{staticClass:"tip"},[t._v("审核通过")]):i("v-uni-text",{staticClass:"tip com"},[t._v("审核中")])],1):t._e(),i("v-uni-text",{staticClass:"iconfont"},[t._v("")])],1)],1)],1),i("v-uni-view",{staticClass:"list"},[i("v-uni-navigator",{staticClass:"li",attrs:{url:"/pages/card/card_manage/card_imgs","open-type":"navigate"}},[i("v-uni-view",{staticClass:"icon iconfont"},[t._v("")]),i("v-uni-view",{staticClass:"text"},[t._v("图片管理")]),i("v-uni-text",{staticClass:"iconfont"},[t._v("")])],1),i("v-uni-navigator",{staticClass:"li",attrs:{url:"/pages/card/card_manage/card_bgm","open-type":"navigate"}},[i("v-uni-view",{staticClass:"icon iconfont"},[t._v("")]),i("v-uni-view",{staticClass:"text"},[t._v("背景音乐")]),i("v-uni-text",{staticClass:"iconfont"},[t._v("")])],1)],1),i("v-uni-view",{staticClass:"list"},[i("v-uni-view",{staticClass:"li"},[i("v-uni-view",{staticClass:"icon iconfont"},[t._v("")]),i("v-uni-view",{staticClass:"text"},[t._v("头条设置")]),i("v-uni-view",[i("v-uni-text",{staticClass:"tip"},[t._v("开启名片头条")]),i("v-uni-switch",{staticStyle:{transform:"scale(0.7)"},attrs:{checked:t.user.card&&t.user.card.show_article,color:"#f6375b"},on:{change:function(n){n=t.$handleEvent(n),t.switchCardArticle(n)}}}),i("v-uni-text",{staticClass:"iconfont"},[t._v("")])],1)],1)],1)],1)},e=[];i.d(n,"a",function(){return a}),i.d(n,"b",function(){return e})},c5e5:function(t,n,i){"use strict";i.r(n);var a=i("bbe8"),e=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(n,t,function(){return a[t]})}(s);n["default"]=e.a},e86e:function(t,n,i){var a=i("4a1a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=i("4f06").default;e("226d0896",a,!0,{sourceMap:!1,shadowMode:!1})}}]);