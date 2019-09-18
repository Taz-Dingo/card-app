<template>
	<view>
		<view class="list">
			<view class="li" @tap="setLogo">
				<view class="icon iconfont">&#xe658;</view>
				<view class="text">LOGO设置</view>
				<view>
					<text v-if="brand.logo">
						<text class="tip com" v-if="!brand.logo_status">审核中</text>
						<text class="tip" v-else>审核通过</text>
					</text>
					<text class="iconfont">&#xe628;</text>
				</view>
			</view>
			<view class="li" @tap="setVideo">
				<view class="icon iconfont">&#xe7d1;</view>
				<view class="text">视频设置</view>
				<view>
					<text v-if="brand.video">
						<text class="tip com" v-if="!brand.video_status">审核中</text>
						<text class="tip" v-else>审核通过</text>
					</text>
					<text class="iconfont">&#xe628;</text>
				</view>
			</view>
			<view class="li" @tap="setGlory">
				<view class="icon iconfont">&#xe6ba;</view>
				<view class="text">荣誉设置</view>
				<view>
					<text v-if="brand.glory">
						<text class="tip com" v-if="!brand.glory_status">审核中</text>
						<text class="tip" v-else>审核通过</text>
					</text>
					<text class="iconfont">&#xe628;</text>
				</view>
			</view>
		</view>
		<view class="list">
			<navigator class="li" url="/pages/card/card_manage/card_imgs" open-type="navigate">
				<view class="icon iconfont">&#xe658;</view>
				<view class="text">图片管理</view>
				<text class="iconfont">&#xe628;</text>
			</navigator>
			<navigator class="li" url="/pages/card/card_manage/card_bgm" open-type="navigate">
				<view class="icon iconfont">&#xe7d1;</view>
				<view class="text">背景音乐</view>
				<text class="iconfont">&#xe628;</text>
			</navigator>
		</view>
		<view class="list">
			<view class="li">
				<view class="icon iconfont">&#xe658;</view>
				<view class="text">头条设置</view>
				<view>
					<text class="tip">开启名片头条</text>
					<switch :checked="user.card && user.card.show_article ? true : false" style="transform:scale(0.7)" @change="switchCardArticle" color="#f6375b"/>
					<text class="iconfont">&#xe628;</text>
				</view>
			</view>
			<!-- <view class="li">
				<view class="icon iconfont">&#xe658;</view>
				<view class="text">云店设置</view>
				<view>
					<text class="tip">开启云店首页</text>
					<switch checked style="transform:scale(0.7)" color="#f6375b"/>
					<text class="iconfont">&#xe628;</text>
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {},
				brand: {},
			}
		},
		onLoad() {
			this.$store.dispatch('loadUserInfo').then(user => {
				this.user = user
			})
			
			this.$http.auth('brand_status').then(res => {
				this.brand = res.data.brand
			}).catch(err => {})
		},
		methods: {
			switchCardArticle(e) {
				this.$http.auth('card_set', {field: 'show_article', value: e.target.value ? 1:0}).then(res => {
					global.toast(res.message);
				}).catch(err => {});
			},
			brandCheck(field) {
				return new Promise((resolve, reject) => {
					if (!this.brand) {
						uni.showModal({
						    title: '提示',
						    content: '新创建品牌才可以进行编辑',
							confirmText: '创建',
						    success: function (res) {
						        if (res.confirm) {
						            reject()
						        }
						    }
						})
					} else if (field && this.brand[field] && !this.brand[field + '_status']) {
						global.toast('审核中，不能编辑，请耐心等待')
					} else {
						resolve()
					}
				})
			},
			setLogo() {
				this.brandCheck('logo').then(res => {
					uni.navigateTo({
						url: '/pages/card/card_manage/card_logo'
					})
				}).catch(err => {
					uni.navigateTo({
						url: '/pages/brand/new_brand/new_brand'
					})
				})
			},
			setVideo() {
				this.brandCheck('video').then(res => {
					uni.navigateTo({
						url: '/pages/card/card_manage/card_video'
					})
				}).catch(err => {
					uni.navigateTo({
						url: '/pages/user_center/new_brand/new_brand'
					})
				})
			},
			setGlory() {
				this.brandCheck('glory').then(res => {
					uni.navigateTo({
						url: '/pages/card/card_manage/card_glory'
					})
				}).catch(err => {
					uni.navigateTo({
						url: '/pages/user_center/new_brand/new_brand'
					})
				})
			}
		}
	}
</script>

<style lang="scss">
page {
	background-color: $page-bg;
}
.list{
	width:100%;
	border-bottom:15upx solid  #f1f1f1;
	background: #fff;
	&:last-child{
		border: none;
	}
	.li{
		padding:10upx $page-padding;
		border-bottom:1px solid rgb(243,243,243);
		display:flex;
		align-items:center;
	&.noborder{
		border-bottom:0
		}
		.icon{
			flex-shrink:0;
			width:50upx;
			height:50upx;
			color: $tcolor;
			image{
				width:50upx;
				height:50upx;
			}
		}
		.text{
			padding-left:20upx;
			flex: 1;
			color:#666;
		}
		.to{
			flex-shrink:0;
			width:40upx;
			height:40upx;
		}
		.tip {
			color: #808080;
			font-size: $fsize4;
			&.com {
				color: $tcolor;
			}
		}
	}
}
</style>
