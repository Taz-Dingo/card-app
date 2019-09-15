<template>
	<view>
		<view class="gap"></view>
		<view class="visitor-header">
			<view class="vh-item">
				<text>曝光量</text>
				<text class="vh-item-num">{{user.pop_count}}</text>
			</view>
			<view class="vh-item">
				<text>点赞数</text>
				<text class="vh-item-num">{{user.up_count}}</text>
			</view>
			<view class="vh-item">
				<text>收藏数</text>
				<text class="vh-item-num">{{user.collect_count}}</text>
			</view>
		</view>
		<view class="visitor-empty">
			<button class="btn" @tap="spread">去推广</button>
		</view>
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
			spread() {
				uni.switchTab({
					url: '/pages/card/card/card'
				})
			}
		}
	}
</script>

<style lang="scss">
page {
	background-color: $page-bg;
}
.visitor-header {
	background-color: $uni-bg-color;
	display: flex;
	padding: 16upx 0;
	.vh-item {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		&-num {
			color: $tcolor;
		}
	}
}
.visitor-empty {
	.btn {
		width: 300upx;
		margin: 0 auto;
		background-color: $tcolor;
		color: #fff;
		line-height: 1.6;
		margin-top: 20upx;
	}
}
</style>
