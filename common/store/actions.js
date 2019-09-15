const loadUserInfo = ({commit,state}, userInfo) => {	
	return new Promise((resolve, reject) => {
		if(global.getToken()&&state.userInfo){
			setTimeout(function(){
			 resolve(state.userInfo)
			},10);
		}
		else{
			global.http.auth("user_info").then(res=>{
				if (res.errcode === 0) {
					commit('setUserInfo', res.data.data)
					resolve(res.data.data)
				} else {
					resolve()
				}
			});
		}
   })	
}, reloadUserInfo = ({commit,state}, userInfo) => {	
	return new Promise((resolve, reject) => {
		global.http.auth("user_info").then(res=>{
			if (res.errcode === 0) {
				commit('setUserInfo', res.data.data)
				resolve(res.data.data)
			} else {
				resolve()
			}
		});
   })	
}, loadSystemInfo = ({commit,state}, systemInfo) => {	
	return new Promise((resolve, reject) => {
		if(state.systemInfo){
			setTimeout(function(){
			 resolve(state.systemInfo)
			},10);
		}
		else{
			global.http.auth("system_info").then(res=>{
				if (res.errcode === 0) {
					commit('setSystemInfo', res.data.data)
					resolve(res.data.data)
				} else {
					resolve()
				}
			})
		}
	})
 }

export {
  loadUserInfo,
  reloadUserInfo,
  loadSystemInfo
}
