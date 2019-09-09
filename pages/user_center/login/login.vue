<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			// #ifdef H5
			if (global.is_weixin()) {
				this.$http.post('wechat_login_url').then(res => {
					if (res.errcode === 0) {
						location.href = res.data.url
					}
				}).catch(err => {});
			} else {
				this.$http.post('demo_login').then(res => {
					console.log(res.data.auth_token)
					global.setToken(res.data.auth_token)
					console.log(global.getToken())
					uni.switchTab({
						url: '/pages/card/card/card'
					})
				}).catch(err => {});
			}
			// #endif
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
