(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-card-card_manage-card_logo"],{"0d3e":function(t,n,e){"use strict";(function(t){var i=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(e("8e92")),a=i(e("5c36")),c={components:{buttonSubmit:o.default,buttonFileAdd:a.default},data:function(){return{logo:""}},onLoad:function(){var t=this;this.$store.dispatch("loadUserInfo").then(function(n){n.brand&&n.brand.logo&&(t.logo=n.brand.logo)})},methods:{add:function(){var n=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["camera","album"],success:function(e){var i=e.tempFilePaths;uni.showLoading({title:"上传中"}),console.log(i),n.$http.file(i).then(function(t){uni.hideLoading(),n.logo=t}).catch(function(n){console.log(n),t.toast("上传失败")})},fail:function(t){console.log(t)}})},submit:function(){this.logo?this.$http.auth("set_logo",{logo:this.logo}).then(function(n){t.toast("保存成功",function(){uni.navigateBack()})}).catch(function(t){}):t.toast("请先上传LOGO")}}};n.default=c}).call(this,e("c8ba"))},"0da9":function(t,n,e){"use strict";var i=e("d7c0"),o=e.n(i);o.a},"17fc":function(t,n,e){var i=e("8843");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("4f462a47",i,!0,{sourceMap:!1,shadowMode:!1})},"2e9c":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"gap"}),e("v-uni-view",{staticClass:"add-box"},[t.logo?e("v-uni-view",{staticClass:"logo",on:{click:function(n){n=t.$handleEvent(n),t.add(n)}}},[e("v-uni-image",{staticClass:"image",attrs:{src:t.logo,mode:"scaleToFill"}})],1):e("button-file-add",{on:{click:function(n){n=t.$handleEvent(n),t.add(n)}}}),e("v-uni-view",{staticClass:"tip"},[t._v("LOGO尺寸270 X 200像素")])],1),e("button-submit",{attrs:{title:"完成"},on:{submit:function(n){n=t.$handleEvent(n),t.submit(n)}}})],1)},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})},"36c5":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 左右留白边距 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-3154824f]{background-color:#f8f8f8}.add-box[data-v-3154824f]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:#fff;padding:%?40?% 0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.add-box .tip[data-v-3154824f]{font-size:%?26?%;color:#999;margin-top:%?20?%}.add-box .logo[data-v-3154824f]{width:%?160?%;height:%?160?%}.add-box .logo .image[data-v-3154824f]{height:100%;width:100%}body.?%PAGE?%[data-v-3154824f]{background-color:#f8f8f8}',""])},"483e":function(t,n,e){"use strict";var i=e("90b8"),o=e.n(i);o.a},"5c36":function(t,n,e){"use strict";e.r(n);var i=e("c9ce"),o=e("a425");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("0da9");var c=e("2877"),r=Object(c["a"])(o["default"],i["a"],i["b"],!1,null,"5c5c65f7",null);n["default"]=r.exports},"71f4":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={methods:{click:function(){this.$emit("click")}}};n.default=i},"7c98":function(t,n,e){"use strict";e.r(n);var i=e("b7a3"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a},"7ca5":function(t,n,e){"use strict";e.r(n);var i=e("2e9c"),o=e("d094");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("483e");var c=e("2877"),r=Object(c["a"])(o["default"],i["a"],i["b"],!1,null,"3154824f",null);n["default"]=r.exports},"7eb8":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"btns"},[e("v-uni-view",{staticClass:"btn-box"},[e("v-uni-button",{staticClass:"btn-submit",class:{disabled:t.disabled},attrs:{loading:t.loading,formType:t.formType},on:{click:function(n){n=t.$handleEvent(n),t.submit(n)}}},[t._v(t._s(t.title))])],1)],1)},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})},"86ef":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 左右留白边距 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.file-add[data-v-5c5c65f7]{position:relative;width:%?160?%;height:%?160?%;background-color:#f6f6f6;border-radius:%?6?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}',""])},8843:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 左右留白边距 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.btns[data-v-2bdfe4b8]{position:fixed;left:0;bottom:0;width:100%;z-index:99;background-color:#fff}.btns .btn-box[data-v-2bdfe4b8]{display:block;padding:%?15?%}.btns .btn-box .btn-submit[data-v-2bdfe4b8]{background-color:#f6375b;color:#fff;margin-top:%?20?%}.btns .btn-box .btn-submit.disabled[data-v-2bdfe4b8]{color:silver;background-color:#fff}',""])},"8e92":function(t,n,e){"use strict";e.r(n);var i=e("7eb8"),o=e("7c98");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("d338");var c=e("2877"),r=Object(c["a"])(o["default"],i["a"],i["b"],!1,null,"2bdfe4b8",null);n["default"]=r.exports},"90b8":function(t,n,e){var i=e("36c5");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("3e62f703",i,!0,{sourceMap:!1,shadowMode:!1})},a425:function(t,n,e){"use strict";e.r(n);var i=e("71f4"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a},b7a3:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"button-submit",props:{title:{type:String,default:""},disabled:{type:Boolean,default:!1},formType:{type:String,default:""},loading:{type:[Boolean,String],default:!1}},methods:{submit:function(){this.$emit("submit")}}};n.default=i},c9ce:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"file-add",on:{click:function(n){n=t.$handleEvent(n),t.click(n)}}},[e("v-uni-text",{staticClass:"iconfont"},[t._v("")])],1)},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})},d094:function(t,n,e){"use strict";e.r(n);var i=e("0d3e"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a},d338:function(t,n,e){"use strict";var i=e("17fc"),o=e.n(i);o.a},d7c0:function(t,n,e){var i=e("86ef");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("03935d08",i,!0,{sourceMap:!1,shadowMode:!1})}}]);