import Vue from 'vue'
import App from './App'
import Http from './common/http'
import Store from '@/common/store'
import '@/common/js_sdk/ican-H5Api.js'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$http = Http
Vue.prototype.$store = Store

const app = new Vue({
		Store,
    ...App
})
app.$mount()
