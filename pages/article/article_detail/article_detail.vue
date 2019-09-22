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
							<text>{{article.view_count}}</text>
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
									<view class="user-mobile" @tap="callUser">
										<text class="iconfont">&#xe60e;</text>
										<text>电话</text>
									</view>
									<view class="user-wechat" @tap="copyWechat">
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
		<view class="share-btn-box">
			<button class="btn" @tap="shareArticle">分享文章</button>
		</view>
		<uni-popup ref="share" :custom="true">
			<view class="wx-share">
				<view class="wx-tip-box">
					<view class="wx-tip-img">
						<image src="/static/wechat/wx_share_tip.png" mode="aspectFill"></image>
					</view>
					<view class="wx-tip-body">
						<view class="wx-tip-text">1.点击右上角</view>
						<view class="wx-tip-text">2.点击<image src="/static/wechat/share_to_friends.png" mode=""></image>发送给朋友或<image src="/static/wechat/share_to_momonts.png" mode=""></image>分享到朋友圈</view>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni/uni-popup.vue'
	// #ifdef H5
	const jweixin = require('jweixin-module')
	// #endif
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				article: {},
				user: {},
				defaultAvatar: '/static/avatar_default.jpeg'
			}
		},
		async onLoad(option) {
			const id = option.id
			await this.$store.dispatch("loadUserInfo").then(user => {
				console.log('user',user)
				this.user = user;
			});
			
			await this.$http.post('article_detail', {id: id}).then(res => {
				this.article = res.data.data;
				uni.setNavigationBarTitle({ title: this.article.title });
			})
			
			// #ifdef H5
			if (global.is_weixin()) {
				let apis = ['updateAppMessageShareData', 'updateTimelineShareData']
				let shareParam = {
					title: this.article.title,
					desc: this.article.content.substr(0, 20) + '...',
					link: this.$http.clientUrl(`/pages/article/article_detail/article_detail?id=${this.article.id}&uid=${this.user.id}`),
					imgUrl: this.article.main_img
				}
				this.$http.auth('wechat_jssdk', {apis: apis, url: location.href.split("#")[0], json: true}).then(res => {
					const config = res.data.config
					jweixin.config({
					    debug: config.debug, 
					    appId: config.appId, // 必填，公众号的唯一标识
					    timestamp: config.timestamp, // 必填，生成签名的时间戳
					    nonceStr: config.nonceStr, // 必填，生成签名的随机串
					    signature: config.signature,// 必填，签名
					    jsApiList: config.jsApiList // 必填，需要使用的JS接口列表
					});
					jweixin.ready(function(){
					    jweixin.updateAppMessageShareData({ 
							title: shareParam.title,
							desc: shareParam.desc, // 分享描述
							link: shareParam.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
							imgUrl: shareParam.imgUrl, // 分享图标
							success: function () {
								console.log('set success')
							  // 设置成功
							}
						})
					});
				}).catch(err => {})
			}
			// #endif
		},
		methods: {
			toUserCard() {
				uni.switchTab({
					url: '/pages/card/card/card'
				})
			},
			//打用户电话
			callUser() {
				this.getUserContact('mobile').then(res => {
					if (res) {
						location.href = 'tel:' + res
					}
				})
			},
			//复制用户微信号
			copyWechat() {
				if (!this.user.wechat) {
					global.toast('用户未设置')
					return
				}
				this.getUserContact('wechat').then(res => {
					uni.setClipboardData({
						data: res,
						success:function(data){
							global.toast('复制成功')
						},
					})
				})
			},
			getUserContact(platform) {
				return new Promise((resovel, reject) => {
					this.$http.auth('user_contact', {user_id: this.user.id}).then(res => {
						const contacts = res.data.data
						resovel(contacts[platform])
					}).catch(err => {})
				})
			},
			shareArticle() {
				// #ifdef H5
				this.$refs.share.open()
				// #endif
			},
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
			.view_count {
				.iconfont {
					margin-right: 10upx;
				}
			}
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

.share-btn-box {
	position: fixed;
	bottom: 60upx;
	width: 100%;
	.btn {
		width: 200upx;
		color: #fff;
		background-color: $tcolor;
		font-size: $fsize2;
	}
}
.wx-share {
	transition: all .3s;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	z-index: 2;
	box-sizing: border-box;
	.wx-tip-text {
		font-size: $fsize2;
		margin: 10upx 0;
		display: flex;
		align-items: center;
		image {
			height: 36upx;
			width: 36upx;
			margin: 0 8upx;
		}
	}
}
.wx-tip-box {
	position: absolute;
	left: 50%;
	transform: translate(-50%,0);
	width: 100%;
	top: 20upx;
	.wx-tip-img {
		position: absolute;
		right: 60upx;
		width: 100upx;
		height: 150upx;
		image {
			height: 100%;
			width: 100%;
		}
	}
	.wx-tip-body {
		position: relative;
		width:85%;
		top: 150upx;
		text-align: left;
		background: #fff;
		padding: $page-padding;
		border-radius: 8upx;
		margin: 0 auto;
	}
}
</style>
