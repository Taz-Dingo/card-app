import _config from './config.js'

/**
 * 公共请求
 */
function apiRequest(options) {
	return new Promise((resolve, reject) => {
		// 请求返回
		_config.complete = (response) => {
			// 隐藏loding
			//global.hideLoading();
			
			// 状态码200
			if (response.statusCode === 200) {
				resolve(response.data)
			} else {
				// 返回失败
				reject(response)
			}
		}
		var request = Object.assign({}, _config, options);
		console.log(request);
		// 已初始化、开始请求
		uni.request(request);
	})
}

/**
 * 构建url
 */
function apiurl(api) {
	return _config.host + api;
}

function post(url = '', data = {}, config = {}) {

	let options = {
		'url': apiurl(url),
		'data': data,
		'method': 'POST',
		
		...config
	}
	
	return apiRequest(options);
}

function auth(url = '', data = {}, config = {}) {
		
		const token = global.getToken()
		if (!token) {
			uni.redirectTo({
				url: '/pages/user_center/wechat_login/wechat_login'
			})
			return;
		}
		_config.header['Authorization'] = 'Bearer ' + token;
		return post(url, data, config)
}

export default {
	post,
	auth,
}