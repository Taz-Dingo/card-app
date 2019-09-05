import _config from './config.js'

/**
 * 公共请求
 */
function apiRequest(options) {
	//带上授权token
	let token = global.getToken();
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
		_config.header['Authorization'] = 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE1Njc2NzQ5NzUsImV4cCI6MTU2NzY3ODU3NSwibmJmIjoxNTY3Njc0OTc1LCJqdGkiOiJIbUNwMUZjWWFWb28zYjRRIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.ZOiw-9SXesgghYa4IcoCr5CJAGzwUgqlFGRTEI0ETOM';
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

export default {
	post,
}