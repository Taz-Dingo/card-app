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
			this.$http.post('wechat_login_url').then(res => {
				if (res.errcode === 0) {
					location.href = res.data.url;
				}
			}).catch(err => {});
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
