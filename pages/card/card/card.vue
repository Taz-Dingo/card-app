<template>
	<view class="page">
		<view class="card-box">
			<pack-card 
				:username="user.name"
				:userAvatar="user.avatar ? user.avatar : defaultAvatar"
				:popCount="user.pop_count"
				:upCount="user.up_count"
				:collectCount="user.collect_count"
				@up="upCard"
				@collet="collectCard"
			></pack-card>
		</view>
		<view class="gap"></view>
		<view class="card-handle-box">
			<view class="card-handle">
				<view class="card-handle-btn">存入手机</view>
				<view class="card-handle-btn" @tap="leaveCard">回传名片</view>
				<button class="card-handle-btn" open-type="share">发送名片</button>
				<view class="card-handle-btn">
					<navigator url="/pages/user_center/user_center/user_center" open-type="switchTab">我的</navigator>
				</view>
			</view>
		</view>
		<view class="gap"></view>
		<view class="contact-info-box">
			<view class="contact-info">
				<view class="contact-info-list">
					<text class="iconfont">&#xe645;</text>
					<text class="text">{{user.mobile ? user.mobile : '尚未完善'}}</text>
					<view class="btn" @tap="callUser">拨打</view>
				</view>
			</view>
			<view class="contact-info">
				<view class="contact-info-list">
					<text class="iconfont">&#xe645;</text>
					<text class="text">{{user.wechat ? user.wechat : '尚未完善'}}</text>
					<view class="btn" @tap="copyWechat">复制</view>
				</view>
			</view>
		</view>
		<view class="gap"></view>
		<!-- 品牌头条start -->
		<pack-box :title="'头条'">
			<view slot="title">
				<text class="iconfont">&#xe645;</text>
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
			<view slot="title">
				<text class="iconfont">&#xe645;</text>
			</view>
			<view slot="content">
				<video class="card-video" :src="user.brand.video" controls></video>
			</view>
			<view class="gap"></view>
		</pack-box>
		<!-- 品牌视频介绍end -->
	
		<!-- 品牌荣誉start -->
		<pack-box :title="'企业荣誉'">
			<view slot="title">
				<text class="iconfont">&#xe645;</text>
			</view>
			<view slot="content">
				<view class="glory">
					<view class="glory-list" v-for="(glory,gIndex) in gloryList" :key="gIndex">
						<text class="iconfont glory-iconfont">&#xe645;</text>
						<view class="glory-time">{{glory.time}}</view>
						<view class="glory-content">{{glory.content}}</view>
					</view>
				</view>
			</view>
		</pack-box>
		<!-- 品牌荣誉end -->
		<view class="gap"></view>
		<!-- 品牌风采start -->
		<pack-box :title="'企业风采'">
			<view slot="title">
				<text class="iconfont">&#xe645;</text>
			</view>
			<view slot="content">
				<view v-for="(img,mIndex) in mienImgs" :key="mIndex">
					<image src="img" mode="aspectFit"></image>
				</view>
			</view>
		</pack-box>
		<!-- 品牌风采end -->
		
	</view>
</template>

<script>
	import packCard from '@/components/pack-card.vue';
	import packBox from '@/components/pack-box.vue';
	import packArticle from '@/components/pack-article.vue';
	export default {
		components: {
			packCard,
			packBox,
			packArticle,
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
			const user_id = option.user_id;
			console.log(option)
			if (option.auth_token) {
				console.log('token', option.auth_token)
				global.setToken(option.auth_token);
			}
			await this.loadUser(user_id);
			
			this.$http.auth('article', {brand_id: this.user.brand_id, recommend: 1}).then(res => {
				this.recArticles = res.data.data.data;
			}).catch(err => {});
			
			this.user.card_id && this.$http.auth('card_material', {card_id: this.user.card_id}).then(res => {
				this.gloryList = res.data.gorys;
				this.mienImgs = res.data.mien_imgs;
				this.video = res.data.video;
				this.music = res.data.music;
			}).catch(err => {});
		},
		methods: {
			//打用户电话
			callUser() {
				this.getUserContact('mobile').then(res => {
					
				})
			},
			//复制用户微信号
			copyWechat() {
				this.getUserContact('wechat').then(res => {
					
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
				this.$http.auth('card_up', {card_id: this.user.card_id}).then(res => {
					this.loadUser();
				}).catch(err => {});
			},
			collectCard() {
				this.$http.auth('card_collect', {card_id: this.user.card_id}).then(res => {
					this.loadUser();
				}).catch(err => {});
			},
			async loadUser(user_id) {
				await this.$http.auth("user_info", {user_id: user_id ? user_id : this.user.id}).then(res=>{
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
		}
		.glory-time {
			margin: 0 16upx;
		}
	}
</style>
