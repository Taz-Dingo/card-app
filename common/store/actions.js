const loadUserInfo = ({commit,state}, userInfo) => {	
	return new Promise((resolve, reject) => {
			 if(global.getToken()&&state.userInfo){
				 setTimeout(function(){
					 resolve(state.userInfo);
				 },10);
			 }
			 else{
				 global.http.auth("user_info").then(res=>{
						if (res.errcode === 0) {
							commit('setUserInfo', res.data)
							resolve(res.data)
						} else {
							resolve()
						}
				 });
			 }
   })	
};

export {
  loadUserInfo
}
