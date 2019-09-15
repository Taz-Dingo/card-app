<template>
	<view class="user-avatar">
		<image class="image" :src="avatar" mode=""></image>
	</view>
</template>

<script>
	export default {
		props: {
			src: {
				type: String,
				default: '/static/avatar_default.jpeg'
			}
		},
		computed: {
			avatar() {
				return this.src ? this.src : '/static/avatar_default.jpeg'
			}
		}
	}
</script>

<style lang="scss">
.user-avatar {
	width: 120upx;
	height: 120upx;
	background: #fff;
	border: 5upx solid #fff;
	border-radius: 50%;
	overflow: hidden;
	.image{
		width: 100%;
		height: 100%;
	}
}
</style>
