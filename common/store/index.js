import Vue from 'vue'
import VueX from 'vuex'
import * as actions from '@/common/store/actions.js';
import * as getters from '@/common/store/getters.js';
import mutations from '@/common/store/mutations.js';

Vue.use(VueX)
const state = {
	inited:false,
	userInfo:null, //登录的会员信息
	systemInfo:null, //系统配置
};
// 创建store 实例
export default new VueX.Store({
  actions,
  getters,
  state,
  mutations
})
