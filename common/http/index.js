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
				if ([1001, 1002, 1003].indexOf(response.data.errcode) !== -1) {
					uni.redirectTo({
						url: '/pages/user_center/login/login'
					})
					return;
				}
				resolve(response.data)
			} else {
				// 返回失败
				reject(response)
			}
		}
		var request = Object.assign({}, _config, options);
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
	return new Promise((resolve, reject) => {
		const token = global.getToken()
		console.log(token)
		if (!token) {
			uni.redirectTo({
				url: '/pages/user_center/login/login'
			})
		}
		_config.header['Authorization'] = 'Bearer ' + token;		
		let options = {
			'url': apiurl(url),
			'data': data,
			'method': 'POST',
			
			...config
		}
		
		apiRequest(options).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})	
}

export default {
	post,
	auth,
}