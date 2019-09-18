export default{
  //	开发者服务器接口地址
	 //host: "http://bw.qmshidai.com/api/", 
	 //host: "http://127.0.0.1:8000/",
	 host: "http://mfmuru.natappfree.cc/",
	 //	请求的参数	
	 data: {},
	 //	设置请求的 header，header 中不能设置 Referer。
	 header: {
		 'content-type': 'application/x-www-form-urlencoded'
	 },
	 //	（需大写）有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT	
	 method: "POST",
	 //	json	如果设为json，会尝试对返回的数据做一次 JSON.parse	
	 dataType: "json",
	 //	text	设置响应的数据类型。合法值：text、arraybuffer	1.7.0
	 responseType: "text",
}