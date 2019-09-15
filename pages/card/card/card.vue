<template>
	<view class="page">
		<view class="card-box">
			<pack-card 
				:username="user.name"
				:userAvatar="user.avatar ? user.avatar : defaultAvatar"
				:popCount="user.pop_count"
				:upCount="user.up_count"
				:collectCount="user.collect_count"
				:brandName="user.is_is_founder ? user.brand.name : ''"
				:logo="user.brand && user.brand.logo ? user.brand.logo : '/static/logo.png'"
				@up="upCard"
				@collect="collectCard"
			></pack-card>
		</view>
		<view class="gap"></view>
		<view class="card-handle-box">
			<view class="card-handle">
				<!-- #ifdef MP-WEIXIN -->
				<view class="card-handle-btn">存入手机</view>
				<!-- #endif -->
				<view class="card-handle-btn" @tap="leaveCard">回传名片</view>
				<button class="card-handle-btn" open-type="share" @tap="shareCard">发送名片</button>
				<view class="card-handle-btn">
					<navigator url="/pages/user_center/user_center/user_center" open-type="switchTab">我的</navigator>
				</view>
			</view>
		</view>
		<view class="gap"></view>
		<view class="contact-info-box">
			<view class="contact-info">
				<view class="contact-info-list">
					<text class="iconfont">&#xe60e;</text>
					<text class="text">{{user.mobile ? user.mobile : '尚未完善'}}</text>
					<view class="btn" @tap="callUser">拨打</view>
				</view>
			</view>
			<view class="contact-info">
				<view class="contact-info-list">
					<text class="iconfont">&#xe64f;</text>
					<text class="text">{{user.wechat ? user.wechat : '尚未完善'}}</text>
					<view class="btn" @tap="copyWechat">复制</view>
				</view>
			</view>
		</view>
		<view class="gap"></view>
		<!-- 品牌头条start -->
		<pack-box :title="'头条'">
			<view slot="title">
				<text class="iconfont box-title-icon">&#xe6a9;</text>
			</view>
			<view slot="content">
				<view v-for="(article,aIndex) in recArticles" :key="aIndex" @tap="articleDetail(article.id)">
					<pack-article :article="article" :hideImg="aIndex !== 0"></pack-article>
				</view>
			</view>
		</pack-box>
		<!-- 品牌头条end -->
		<view class="gap"></view>
		<!-- 品牌视频介绍start -->
		<pack-box :title="'视频介绍'" v-if="user.brand && user.brand.video">
			<view slot="title ">
				<text class="iconfont box-title-icon">&#xe64e;</text>
			</view>
			<view slot="content">
				<video class="card-video" :src="user.brand.video" controls></video>
			</view>
			<view class="gap"></view>
		</pack-box>
		<!-- 品牌视频介绍end -->
	
		<!-- 品牌荣誉start -->
		<pack-box :title="'企业荣誉'" v-if="gloryList && gloryList.length">
			<view slot="title">
				<text class="iconfont box-title-icon">&#xe61b;</text>
			</view>
			<view slot="content">
				<view class="glory">
					<view class="glory-list" v-for="(glory,gIndex) in gloryList" :key="gIndex">
						<text class="iconfont glory-iconfont">&#xe719;</text>
						<view class="glory-content">{{glory}}</view>
					</view>
				</view>
			</view>
		</pack-box>
		<view class="gap" v-if="gloryList && gloryList.length"></view>
		<!-- 品牌荣誉end -->
		
		<!-- 品牌风采start -->
		<pack-box :title="'企业风采'" v-if="mienImgs && mienImgs.length">
			<view slot="title">
				<text class="iconfont box-title-icon">&#xe694;</text>
			</view>
			<view slot="content">
				<view v-for="(img,mIndex) in mienImgs" :key="mIndex">
					<image :src="img" mode="aspectFit"></image>
				</view>
			</view>
		</pack-box>
		<!-- 品牌风采end -->
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
	import packCard from '@/components/pack-card.vue'
	import packBox from '@/components/pack-box.vue'
	import packArticle from '@/components/pack-article.vue'
	import uniPopup from '@/components/uni/uni-popup.vue'
	// #ifdef H5
	const jweixin = require('jweixin-module')
	// #endif
	export default {
		components: {
			packCard,
			packBox,
			packArticle,
			uniPopup
		},
		data() {
			return {
				user: {},
				defaultAvatar: '/static/avatar_default.jpeg',
				recArticles: [],
				gloryList: [],
				mienImgs: [],
				video: '',
				music: '',
			}
		},
		async onLoad(option) {
			if (option.auth_token) {
				console.log('token', option.auth_token)
				global.setToken(option.auth_token);
			}
			
			if (option.user_id) {
				uni.setStorageSync('card_user_id', option.user_id)
			}
  		},
		async onShow() {
			const card_user_id = uni.getStorageSync('card_user_id')
			console.log(card_user_id)
			await this.loadUser(card_user_id)
			
			this.$http.auth('article', {brand_id: this.user.brand_id, recommend: 1}).then(res => {
				this.recArticles = res.data.data.data;
			}).catch(err => {});
			
			this.user.brand_id && this.$http.auth('brand_material', {user_id: this.user.id, active: 1}).then(res => {
				this.gloryList = res.data.glory;
				this.mienImgs = res.data.mien;
				this.video = res.data.video;
			}).catch(err => {});
			// #ifdef H5
			if (global.is_weixin()) {
				let apis = ['updateAppMessageShareData', 'updateTimelineShareData']
				let shareParam = {
					title: `${this.user.name}的${this.user.brand ? this.user.brand.name : ''}微名片请惠存! `,
					desc: '姓名:' + this.user.name + '  公司/品牌:' + (this.user.brand ? this.user.brand.name : ''),
					link: location.href.split("#")[0] + '?user_id=' + this.user.id,
					imgUrl: this.user.avatar
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
		onHide() {
			console.log('hide')
			uni.setStorageSync('card_user_id', null)
		},
		methods: {
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
			//回传名片
			leaveCard() {
				uni.showLoading()
				this.$http.auth('send_card', {card_id: this.user.card ? this.user.card.id : 0}).then(res => {
					uni.showToast({
						title: res.message
					})
					uni.hideLoading()
				})
			},
			articleDetail(id) {
				uni.navigateTo({
					url: `/pages/article/article_detail/article_detail?id=${id}`
				})
			},
			upCard() {
				console.log(this.user)
				this.$http.auth('card_up', {card_id: this.user.card.id}).then(res => {
					this.loadUser(this.user.id);
				}).catch(err => {});
			},
			shareCard() {
				// #ifdef H5
				this.$refs.share.open()
				// #endif
			},
			collectCard() {
				console.log(this.user.id)
				this.$http.auth('card_collect', {card_id: this.user.card.id}).then(res => {
					this.loadUser(this.user.id);
				}).catch(err => {});
			},
			async loadUser(user_id) {
				await this.$http.auth("user_info", {user_id: user_id}).then(res=>{
						if (res.errcode === 0) {
							this.user = res.data.data;
						}
				});
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: $uni-bg-color-grey;
	}
	.card-box {
		padding: 0 $page-padding;
		margin-top: 16upx;
	}
	.card-handle-box {
		background-color: $uni-bg-color;
		padding: 20upx 0;
	}
	.card-handle {
		width: 92%;
		display: flex;
		margin: 0 auto;
		&-btn {
			flex: 1;
			font-size: $fsize2;
			color: $uni-text-color-inverse;
			background-color: $tcolor;
			text-align: center;
			margin: 10upx;
			padding: 10upx 0;
			border-radius: 8upx;
			line-height: 1.8;
		}
	}
	.contact-info-box {
		padding: 0 $page-padding;
	}
	.contact-info {
		background-color: $uni-bg-color;
		&-list {
			display: flex;
			padding: 10upx;
			just-content: center;
			align-items: center;
			font-size: $fsize2;
			.iconfont {
				color: $tcolor;
			}
			.text {
				flex: 1;
				margin-left: 10upx;
			} 
			.btn {
				border: 1px solid #eee;
				padding: 10upx 14upx;
				border-radius: 8upx;
				color: $tcolor;
			}
		}
	}
	.card-video {
		width: 100%;
	}
	.glory-list {
		display: flex;
		font-size: $fsize3;
		align-items: center;
		.glory-iconfont {
			color: $tcolor;
			margin-right: 16upx;
		}
		.glory-time {
			margin: 0 16upx;
		}
	}
	.box-title-icon {
		color: $tcolor;
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
