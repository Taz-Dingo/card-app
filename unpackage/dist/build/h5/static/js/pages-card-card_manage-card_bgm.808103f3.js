(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-card-card_manage-card_bgm"],{"0213":function(t,n,e){"use strict";e.r(n);var a=e("f940"),i=e("16b0");for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);e("9f0f");var r=e("2877"),o=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"54e22f2a",null);n["default"]=o.exports},"16b0":function(t,n,e){"use strict";e.r(n);var a=e("5146"),i=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(n,t,function(){return a[t]})}(s);n["default"]=i.a},"1f96":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"button-submit",props:{title:{type:String,default:""},disabled:{type:Boolean,default:!1},formType:{type:String,default:""},loading:{type:[Boolean,String],default:!1}},methods:{submit:function(){this.$emit("submit")}}};n.default=a},4717:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 左右留白边距 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-54e22f2a]{background-color:#f8f8f8}.card-bgm .b-list[data-v-54e22f2a]{background-color:#fff;padding:%?16?% %?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.card-bgm .b-list-tip[data-v-54e22f2a]{font-size:%?24?%;color:#999}.card-bgm .b-list .iconfont[data-v-54e22f2a]{color:#999}.card-bgm .b-list .iconfont.selected[data-v-54e22f2a]{color:#f6375b}body.?%PAGE?%[data-v-54e22f2a]{background-color:#f8f8f8}',""])},5146:function(t,n,e){"use strict";(function(t){var a=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("ee47")),s={components:{buttonSubmit:i.default},data:function(){return{bgmList:[{name:"abc",url:""},{name:"abc",url:""},{name:"abc",url:""}],current:0,selectedId:""}},methods:{bgmChange:function(t){this.selectedId=t.target.value},submit:function(){this.$http.auth("set_bgm").then(function(n){t.toast("保存成功",function(){uni.navigateBack()})}).catch(function(t){})}}};n.default=s}).call(this,e("c8ba"))},"5f80":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 左右留白边距 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.btns[data-v-54e4e263]{position:fixed;left:0;bottom:0;width:100%;z-index:99;background-color:#fff}.btns .btn-box[data-v-54e4e263]{display:block;padding:%?15?%}.btns .btn-box .btn-submit[data-v-54e4e263]{background-color:#f6375b;color:#fff;margin-top:%?20?%}.btns .btn-box .btn-submit.disabled[data-v-54e4e263]{color:silver;background-color:#fff}',""])},7672:function(t,n,e){"use strict";e.r(n);var a=e("1f96"),i=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(n,t,function(){return a[t]})}(s);n["default"]=i.a},"7c09":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"btns"},[e("v-uni-view",{staticClass:"btn-box"},[e("v-uni-button",{staticClass:"btn-submit",class:{disabled:t.disabled},attrs:{loading:t.loading,formType:t.formType},on:{click:function(n){n=t.$handleEvent(n),t.submit(n)}}},[t._v(t._s(t.title))])],1)],1)},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})},"9bc0":function(t,n,e){"use strict";var a=e("d810"),i=e.n(a);i.a},"9f0f":function(t,n,e){"use strict";var a=e("a0d25"),i=e.n(a);i.a},a0d25:function(t,n,e){var a=e("4717");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("e64495a0",a,!0,{sourceMap:!1,shadowMode:!1})},d810:function(t,n,e){var a=e("5f80");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("558bfb92",a,!0,{sourceMap:!1,shadowMode:!1})},ee47:function(t,n,e){"use strict";e.r(n);var a=e("7c09"),i=e("7672");for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);e("9bc0");var r=e("2877"),o=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"54e4e263",null);n["default"]=o.exports},f940:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"card-bgm"},[e("v-uni-view",{staticClass:"gap"}),e("v-uni-view",{staticClass:"b-list b-line"},[e("v-uni-text",[t._v("是否开启")]),e("v-uni-view",[e("v-uni-text",{staticClass:"b-list-tip"},[t._v("是否开启背景音乐")]),e("v-uni-switch",{staticStyle:{transform:"scale(0.7)"},attrs:{checked:"",color:"#f6375b"}})],1)],1),e("v-uni-view",{staticClass:"b-list b-line"},[e("v-uni-text",[t._v("自动播放")]),e("v-uni-view",[e("v-uni-text",{staticClass:"b-list-tip"},[t._v("是否自动播放背景音乐")]),e("v-uni-switch",{staticStyle:{transform:"scale(0.7)"},attrs:{checked:"",color:"#f6375b"}})],1)],1),e("v-uni-view",{staticClass:"gap"}),e("v-uni-radio-group",{on:{change:function(n){n=t.$handleEvent(n),t.bgmChange(n)}}},t._l(t.bgmList,function(n,a){return e("v-uni-view",{key:a,staticClass:"b-list b-line"},[e("v-uni-text",[t._v(t._s(n.name))]),e("v-uni-view",[e("v-uni-radio",{attrs:{value:n.id,checked:a===t.current,color:"#f6375b"}})],1)],1)}),1),e("button-submit",{attrs:{title:"保存"},on:{submit:function(n){n=t.$handleEvent(n),t.submit(n)}}})],1)},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})}}]);