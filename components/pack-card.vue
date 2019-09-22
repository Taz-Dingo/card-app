<template>
	<view class="pack-card">
		<view class="pack-card-content" :style="{
			'backgroundColor': bgColor
		}">
			<view class="pack-card-content-left">
				<view class="brand">
					<image class="logo" :src="logo" mode=""></image>
				</view>
				<view class="tips">
					<view v-for="(tip,index) in tips" :key="index">
						<text :style="{'marginLeft': index * 20 + 'upx'}">{{tip}}</text>
					</view>
				</view>
			</view>
			<view class="pack-card-content-right">
				<view class="flex-row">
					<view class="user-tag">
						<text class="iconfont">&#xe833;</text>
						<text>人气: {{popCount}}</text>
					</view>
					<view class="user-tag" :class="{'on': isUp}" @tap="upCard">
						<text class="iconfont">&#xe6b4;</text>
						<text>点赞: {{upCount}}</text>
					</view>
					<view class="user-tag" :class="{'on': isCollect}" @tap="collectCard">
						<text class="iconfont">&#xe71f;</text>
						<text>收藏: {{collectCount}}</text>
					</view>
				</view>
				<view class="user-info">
					<view class="user-avatar">
						<image class="avatar" :src="userAvatar" mode="aspectFill"></image>
					</view>
					<view class="user-name">
						<text>{{username}}</text>
						<text>{{brandName}}</text>
					</view>
				</view>
			</view>
			<!-- <view class="pack-card-content-qrcode">
				<view class="qrcode">
					<text class="iconfont">&#xe6d2;</text>
				</view>
				<text>名片码</text>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			bgColor: {
				type: String,
				default: '#f6375b'
			},
			popCount: { //人气
				type: [Number, String],
				default: 0
			},
			upCount: { //点赞
				type: [Number, String],
				default: 0
			},
			collectCount: { //收藏
				type: [Number, String],
				default: 0
			},
			isUp: {
				type: Boolean,
				default: false
			},
			isCollect: {
				type: Boolean,
				default: false
			},
			username: {
				type: String,
				default: ''
			},
			userAvatar: {
				type: String,
				default: ''
			},
			brandImg: {
				type: String,
				default: ''
			},
			brandName: {
				type: String,
				default: ''
			},
			logo: {
				type: String,
				default: ''
			},
			tips: {
				type: Array,
				default() {
					return [
						'诚信专业',
						'服务一流',
						'合作共赢',
					];
				}
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			upCard() {
				this.$emit('up')
			},
			collectCard() {
				this.$emit('collect')
			}
		}
	}
</script>

<style lang="scss">
.pack-card {
	width: 100%;
}
.pack-card-content {
	padding: 20upx;
	padding-bottom: 60upx;
	display: flex;
	color: $uni-text-color-inverse;
	position: relative;
	
	&-qrcode {
		position: absolute;
		bottom: 20upx;
		width: 100%;
		margin-left: -20upx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	&-left {
		display: flex;
		flex-direction: column;
		flex: 1;
		.brand {
			margin: 50upx 0 0 50upx;
			height: 120upx;
			width: 120upx;
			.logo {
				height: 100%;
				width: 100%;
				border-radius: 50%;
			}
		}
		.tips {
			margin: 100upx 0 0 30upx;
		}
	}
	
	&-right {
		.user-tag {
			display: flex;
			font-size: $fsize2;
			flex-direction: column;
			text-align: center;
			margin: 0 10upx;
			&.on {
				.iconfont {
					color: yellow;
				}
			}
		}
		.user-info {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 40upx 0 0 80upx;
			.user-avatar {
				height: 120upx;
				width: 120upx;
				.avatar {
					height: 100%;
					width: 100%;
					border-radius: 50%;
				}
			}
			.user-name {
				color: $uni-text-color;
				display: flex;
				flex-direction: column;
				text-align: center;
			}
		}
	}
}
</style>
