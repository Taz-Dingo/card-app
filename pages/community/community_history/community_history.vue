<template>
	<view class="community-history">
		<view class="header">
			<view class="h-item">
				<text class="h-item-num">{{user.pop_count}}</text>
				<text>今天看我</text>
			</view>
			<view class="h-item">
				<text class="h-item-num">{{user.pop_count}}</text>
				<text>看我总数</text>
			</view>
			<view class="h-item">
				<text class="iconfont">&#xe655;</text>
				<text>追踪教程</text>
			</view>
		</view>
		<view class="gap"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {}
			}
		},
		onLoad() {
			this.$store.dispatch('loadUserInfo').then(user => {
				this.user = user
			})
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
page {
	background-color: $page-bg;
}
.community-history {
	.header {
		background-color: $uni-bg-color;
		display: flex;
		padding: 16upx 0;
		.h-item {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			&-num,.iconfont {
				color: $tcolor;
			}
		}
	}
}
</style>
