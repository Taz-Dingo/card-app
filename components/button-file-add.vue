<template>
	<view class="file-add" @tap="click">
		<text class="iconfont">&#xe641;</text>
	</view>
</template>

<script>
	export default {
		methods: {
			click() {
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss">
.file-add {
	position: relative;
	width: 160upx;
	height: 160upx;
	background-color: #f6f6f6;
	border-radius: 6upx;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
