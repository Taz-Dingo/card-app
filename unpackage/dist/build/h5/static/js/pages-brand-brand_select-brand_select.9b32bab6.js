(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-brand-brand_select-brand_select"],{"37be":function(t,n,e){var a=e("aa9a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("726fb742",a,!0,{sourceMap:!1,shadowMode:!1})},"71ee":function(t,n,e){"use strict";var a=e("37be"),i=e.n(a);i.a},"947e":function(t,n,e){"use strict";e.r(n);var a=e("b759"),i=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(n,t,function(){return a[t]})}(s);n["default"]=i.a},aa9a:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 左右留白边距 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-9edabe80]{background-color:#f8f8f8}.brand-select-header[data-v-9edabe80]{direction:flex;background-color:#fff;padding:%?20?%}.brand-select-header .current-brand[data-v-9edabe80]{font-size:%?24?%;color:#f6375b;margin-top:%?15?%}.search-box[data-v-9edabe80]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 auto;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-color:#f8f8f8;padding:0 %?20?%;border-radius:%?6?%}.search-box .iconfont[data-v-9edabe80]{margin-right:%?10?%}.brand-content .empty[data-v-9edabe80]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;color:#999;font-size:%?26?%;margin-top:%?20?%}.brand-content .empty .link[data-v-9edabe80]{color:#f6375b}.b-title[data-v-9edabe80]{padding:%?20?%}.b-list[data-v-9edabe80]{background-color:#fff;padding:%?16?% %?20?%}.b-list .tag[data-v-9edabe80]{margin-left:%?20?%;padding:%?2?% %?6?%;border-radius:%?5?%;font-size:%?24?%}.search-list[data-v-9edabe80]{background-color:#fff;padding:%?16?% %?20?%}.brand-tip[data-v-9edabe80]{position:fixed;bottom:0;left:0;background-color:rgba(0,0,0,.8);color:#f6375b;width:100vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:%?20?%}.brand-tip .text[data-v-9edabe80]{text-align:end}.brand-tip .btn-box .btn[data-v-9edabe80]{font-size:%?26?%;margin:0;color:#fff;background-color:#f6375b}body.?%PAGE?%[data-v-9edabe80]{background-color:#f8f8f8}',""])},ad66:function(t,n,e){"use strict";e.r(n);var a=e("dcf4"),i=e("947e");for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);e("71ee");var r=e("2877"),c=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"9edabe80",null);n["default"]=c.exports},b759:function(t,n,e){"use strict";var a=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("7f7f"),e("6762"),e("2fdb");var i=a(e("795b")),s={data:function(){return{user:{},myBrands:[],brandList:[],hotBrands:[],searchList:[],onSearch:!1,searchWord:"",init:!1,from:""}},onLoad:function(t){var n=this;this.init=t.init,this.from=t.from,t.init||this.$store.dispatch("loadUserInfo").then(function(t){n.user=t,n.brandSearch({user_id:t.id}).then(function(t){n.myBrands=t.data})}),this.brandSearch({init:t.init?1:0}).then(function(t){n.brandList=t.data,n.hotBrands=t.hot_brands})},methods:{brandSearch:function(t){var n=this;return new i.default(function(e,a){n.$http.auth("brand_search",t).then(function(t){e(t.data)}).catch(function(t){})})},selectBrand:function(t){this.$http.auth("set_brand",{id:t,init:this.init}).then(function(t){uni.navigateBack()}).catch(function(t){})},searchBrand:function(t){if(t.target.value){this.searchList=[],this.onSearch=!0;var n=this.myBrands.filter(function(n){return n.name.includes(t.target.value)});n&&n.length&&(this.searchList=this.searchList.concat(n))}else this.onSearch=!1},selectBlur:function(){this.$refs.searchBox.$refs.input.focus()},createBrand:function(){this.searchWord&&uni.navigateTo({url:"/pages/brand/brand_create/brand_create?brand_name=".concat(this.searchWord,"&from=").concat(this.from)})}}};n.default=s},dcf4:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-view",{staticClass:"brand-select-header"},[e("v-uni-view",{staticClass:"search-box"},[e("v-uni-text",{staticClass:"iconfont"},[t._v("")]),e("v-uni-input",{ref:"searchBox",attrs:{type:"text",placeholder:"填写品牌、公司简称搜索"},on:{input:function(n){n=t.$handleEvent(n),t.searchBrand(n)}},model:{value:t.searchWord,callback:function(n){t.searchWord=n},expression:"searchWord"}})],1),t.user.brand&&!t.onSearch?e("v-uni-view",{staticClass:"current-brand"},[e("v-uni-text",[t._v("当前选择："+t._s(t.user.brand.name))])],1):t._e()],1),t.onSearch?e("v-uni-view",{staticClass:"brand-content"},[e("v-uni-checkbox-group",t._l(t.searchList,function(n,a){return e("v-uni-view",{key:a,staticClass:"search-list b-line",on:{click:function(e){e=t.$handleEvent(e),t.selectBrand(n.id)}}},[e("v-uni-label",[e("v-uni-checkbox",{staticStyle:{transform:"scale(0.7)"}})],1),e("v-uni-text",[t._v(t._s(n.name))])],1)}),1),e("v-uni-view",{staticClass:"empty"},[e("v-uni-text",[t._v("找不到品牌？换简短的词再搜索试试？")]),t.init?t._e():e("v-uni-text",[t._v("如果还找不到，点击"),e("v-uni-text",{staticClass:"link",on:{click:function(n){n=t.$handleEvent(n),t.createBrand(n)}}},[t._v("创建成我的品牌")])],1)],1)],1):e("v-uni-view",{staticClass:"brand-content"},[t.myBrands&&t.myBrands.length?e("v-uni-view",{staticClass:"my-brand"},[e("v-uni-view",{staticClass:"b-title"},[t._v("我的品牌")]),t._l(t.myBrands,function(n,a){return e("v-uni-view",{key:a,staticClass:"b-list",on:{click:function(e){e=t.$handleEvent(e),t.selectBrand(n.id)}}},[e("v-uni-view",{staticClass:"b-list-item"},[t._v(t._s(n.name)),n.status_info?e("v-uni-text",{staticClass:"tag",style:{color:n.status_info.color,border:"1px solid "+n.status_info.color}},[t._v(t._s(n.status_info.name))]):t._e()],1)],1)})],2):t._e(),t.hotBrands&&t.hotBrands.length?e("v-uni-view",{staticClass:"brand-list"},[e("v-uni-view",{staticClass:"b-title"},[t._v("热门品牌")]),t._l(t.hotBrands,function(n,a){return e("v-uni-view",{key:a,staticClass:"b-list",on:{click:function(e){e=t.$handleEvent(e),t.selectBrand(n.id)}}},[e("v-uni-view",{staticClass:"b-list-item"},[t._v(t._s(n.name))])],1)})],2):t._e(),t._l(t.brandList,function(n,a){return e("v-uni-view",{key:a,staticClass:"brand-list"},[e("v-uni-view",{staticClass:"b-title"},[t._v(t._s(a))]),t._l(n,function(n,a){return e("v-uni-view",{key:a,staticClass:"b-list",on:{click:function(e){e=t.$handleEvent(e),t.selectBrand(n.id)}}},[e("v-uni-view",{staticClass:"b-list-item"},[t._v(t._s(n.name))])],1)})],2)}),e("v-uni-view",{staticClass:"brand-tip"},[e("v-uni-text",{staticClass:"text"},[t._v("没有找到想要的品牌？")]),e("v-uni-view",{staticClass:"btn-box"},[e("v-uni-button",{staticClass:"btn",on:{click:function(n){n=t.$handleEvent(n),t.selectBlur(n)}}},[t._v("搜索一下")])],1)],1)],2)],1)},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})}}]);