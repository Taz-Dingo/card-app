import _config from './config.js';
import store from '@/common/store'
import  CryptoJS from 'crypto-js/crypto-js';
let initConfig = JSON.parse(JSON.stringify(_config));
let dataCache = {};//系统运行时保存在内存中的api数据

export default {
	post,
}
