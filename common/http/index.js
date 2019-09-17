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
					global.loginAuth()
					return
				}

				if (response.data.errcode !== 0) {
					if (response.data.errcode === 10000) {
						global.toast(response.data.message);
					}
					reject(response.data)
				} else {
					resolve(response.data)
				}
			} else {
				global.toast('通讯异常');
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
	return _config.host + 'api/' + api;
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
		if (!token) {
			global.loginAuth()
			return
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

function image(image) {
	return new Promise((resolve, reject) => {
		const token = global.getToken()
		if (!token) {
			global.loginAuth()
			return
		}	
		console.log(image[0])
		uni.uploadFile({
			url: _config.host + 'upload_image',
			filePath: image[0],
			name: 'file',
			header: {
				Authorization: 'Bearer ' + token,
			},
			success: uploadFileRes => {},
			fail: err => {},
			complete: res => {
				if(res.statusCode == 200){
					let data = JSON.parse(res.data);
					if ([1001, 1002, 1003].indexOf(data.errcode) !== -1) {
						global.loginAuth()
						return
					} else {
						let url = data.data.file_url;
						resolve(url);
					}
				} else {
					reject(false);
				}
			}
		});
	})
}

function file(filePath) {
	return new Promise((resolve, reject) => {
		const token = global.getToken()
		if (!token) {
			global.loginAuth()
			return
		}	
		uni.uploadFile({
			url: _config.host + 'upload_image',
			filePath: filePath,
			name: 'file',
			header: {
				Authorization: 'Bearer ' + token,
			},
			success: uploadFileRes => {},
			fail: err => {},
			complete: res => {
				if(res.statusCode == 200){
					let data = JSON.parse(res.data);
					if ([1001, 1002, 1003].indexOf(data.errcode) !== -1) {
						global.loginAuth()
						return
					} else {
						let url = data.data.file_url;
						resolve(url);
					}
				} else {
					reject(false);
				}
			}
		});
	})
}

export default {
	post,
	auth,
	image,
	file
}