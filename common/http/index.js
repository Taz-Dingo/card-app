import _config from './config.js'

function post(url, param) {
	return new Promise(function(resolve, reject) {
		param = Object.assign({}, param, _config.data)
		request.url += url
		request.data = param;
		request.success = (res) => {
			console.log(res);
			if (res.statusCode === 200) {
				resolve(res.data)
			} else {
				reject('请求失败')
			}
		};
		request.fail = (err) => {
			reject('请求异常')
		}
		uni.request(request)
	})
}

export default {
	post,
}