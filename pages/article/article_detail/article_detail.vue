<template>
	<view>
		<view class="article-header">
			<view class="article-header-box" :style="{'backgroundImage': 'url('+article.main_img+')'}">
				<view class="article-header-box-mask"></view>
				<view class="header-view">
					<view class="article-title">
						<view class="title">{{article.title}}</view>
					</view>
					<view class="article-header-extra">
						<view class="view_count">
							<text class="iconfont">&#xe833;</text>
							<text>10000</text>
						</view>
						<view class="created-time">
							{{article.created_date}}
						</view>
					</view>
					<view class="card-info">
						<view class="card">
							<view class="card-hd">
								<view class="avator">
									<image class="image" :src="user.avatar ? user.avatar : defaultAvatar" mode=""></image>
								</view>
								<view class="user-name">
									<text>{{user.name}}</text>
								</view>
								<view class="brand-tag">
									<text class="tag">品牌</text>
								</view>
								<view class="user-contact">
									<view class="user-mobile">
										<text class="iconfont">&#xe60e;</text>
										<text>电话</text>
									</view>
									<view class="user-wechat">
										<text class="iconfont">&#xe64f;</text>
										<text>微信</text>
									</view>
								</view>
							</view>
							<view class="user-card" @tap="toUserCard">
								<text>我的</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="article-content">
			<rich-text :nodes="article.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				article: {},
				user: {},
				defaultAvatar: '/static/avatar_default.jpeg'
			}
		},
		onLoad(option) {
			const id = option.id
			this.$store.dispatch("loadUserInfo").then(user => {
				console.log('user',user)
				this.user = user;
			});
			
			this.$http.post('article_detail', {id: id}).then(res => {
				this.article = res.data.data;
				uni.setNavigationBarTitle({ title: this.article.title });
			})
		},
		methods: {
			toUserCard() {
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
.article-header {
	min-height: 460upx;
	&-box {
		min-height: 240upx;
		padding: $page-padding;
		background-size: cover;
		background-repeat: no-repeat;
		display: flex;
		flex-direction: column;
		position: relative;
		&-mask {
			position: absolute;
			top: 0;
			left: 0;
			background-color: rgba($color: #000000, $alpha: 0.5);
			height: 100%;
			width: 100%;
		}
		.article-header-extra {
			display: flex;
			justify-content: space-between;
			color: #fff;
		}
		.header-view {
			flex: 1;
			width: 100%;
			display: flex;
			flex-direction: column;
			z-index: 10;
		}
		.article-title {
			flex: 1;
			color: #fff;
			margin-bottom: 10upx;
			.title {
				font-size: 36upx;
				line-height: 1.6;
			}
		}
		.card-info {
			position: relative;
			bottom: 0;
			top: 50upx;
			height: 200upx;
			.card {
				width: 90%;
				height: 100%;
				margin: 0 auto;
				box-shadow: 0 2upx 0 #eee;
				display: flex;
				flex-direction: column;
				justify-content: center;
				background-color: #fff;
				position: relative;
				.card-hd {
					position: relative;
					top: -48upx;
					z-index: 11;
					text-align: center;
					.brand-tag {
						color: $tcolor;
						.tag {
							background-color: #F0AD4E;
							padding: 0 16upx;
							border-radius: 6upx;
						}
					}
					.user-contact {
						display: flex;
						.user-mobile, .user-wechat {
							flex: 1;
							color: $tcolor;
							display: flex;
							align-items: center;
							justify-content: center;
							.iconfont {
								margin-right: 10upx;
							}
						}
						
					}
				}
				.avator{
					width: 120upx;
					height: 120upx;
					background: #fff;
					border: 5upx solid #fff;
					border-radius: 50%;
					overflow: hidden;
					margin: 0 auto;
					.image{
						width: 100%;
						height: 100%;
					}
				}
				.user-card {
					position: absolute;
					right: 0;
					top: 10upx;
					background-color: $tcolor;
					color: #fff;
					padding: 0 40upx;
					border-radius: 20upx 0 0 20upx;
					z-index: 12;
				}
			}
		}
	}
}
.article-content {
	padding: $page-padding;
	font-size: $fsize2;
}

</style>
