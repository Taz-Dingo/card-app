<template>
	<view>
		<form @submit="submit">
			<view class="gap"></view>
			<view class="user-base-info bg">
				<view class="left avatar">
					<image class="image" :src="user.avatar ? user.avatar : defaultAvatar" mode=""></image>
				</view>
				<view class="right">
					<view class="u-list b-line">
						<view class="u-list-left required"></view>
						<view class="u-list-mid">
							<input type="text" name="name" v-model="user.name" placeholder="请输入您的姓名"/>
						</view>
					</view>
					<view class="u-list">
						<view class="u-list-left required"></view>
						<view class="u-list-mid">
							<input type="text" name="mobile" disabled v-model="user.mobile" />
						</view>
					</view>
				</view>
			</view>
			<view class="gap"></view>
			<view class="brand-and-wechat bg">
				<view class="u-list b-line" @tap="selectBrand">
					<view class="u-list-left">
						品牌
						<text class="required"></text>
					</view>
					<view class="u-list-mid">
						<text v-if="user.brand">{{user.brand.name}}</text>
						<text v-else>请选择品牌</text>
					</view>
					<view class="u-list-right">
						<text class="iconfont arrow">&#xe628;</text>
					</view>
				</view>
				<view class="u-list b-line">
					<view class="u-list-left">
						职位/称谓
					</view>
					<view class="u-list-mid">
						<input type="text" v-model="user.office" placeholder="请输入您的职位" />
					</view>
				</view>
				<view class="u-list b-line">
					<view class="u-list-left">
						微信号
					</view>
					<view class="u-list-mid">
						<input type="text" v-model="user.wechat" placeholder="请输入您的微信号" />
					</view>
				</view>
			</view>
			<view class="gap"></view>
			<view class="address-and-sign bg">
				<view class="u-list b-line" @tap="showMulLinkageTwoPicker">
					<view class="u-list-left">
						地址
					</view>
					<view class="u-list-mid">
						<text v-if="user.province && user.city">{{user.province + ' ' + user.city}}</text>
						<text v-else>请选择地址</text>
					</view>
				</view>
				<view class="u-list b-line">
					<view class="u-list-left">
						详细地址
					</view>
					<view class="u-list-mid">
						<input type="text" v-model="user.address" maxlength="24" placeholder="请输入您的详细地址" />
					</view>
				</view>
				<view class="u-list b-line">
					<view class="u-list-left">
						事业签名
					</view>
					<view class="u-list-mid">
						<input type="text" v-model="user.signature" maxlength="24" placeholder="请输入您的事业签名" />
					</view>
				</view>
			</view>
			<mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
			 @onConfirm="selectArea" :pickerValueArray="pickerValueArray"></mpvue-picker>
			<button-submit title="保存" :loading="loading" formType="submit"></button-submit>
		</form>
	</view>
</template>

<script>
	import buttonSubmit from '@/components/button-submit.vue';
	import mpvuePicker from '@/components/mpvue-picker/mpvuePicker.vue';
	import cityData from '@/common/city.data.js';
	import graceChecker from '@/common/graceChecker.js';
	// #ifdef H5
	const jweixin = require('jweixin-module')
	// #endif
	export default {
		components: {
			buttonSubmit,
			mpvuePicker,
		},
		data() {
			return {
				user: {},
				defaultAvatar: '/static/avatar_default.jpeg',
				loading: false,
				mulLinkageTwoPicker: cityData,
				cityPickerValueDefault: [0, 0, 1],
				themeColor: '#007AFF',
				mode: '',
				deepLength: 1,
				pickerValueDefault: [0],
				pickerValueArray:[],
				hide: false
			}
		},
		onShow() {
			this.reloadUser()
		},
		methods: {
			selectBrand() {
				uni.navigateTo({
					url: '/pages/brand/brand_select/brand_select'
				})
			},
			reloadUser() {
				this.$store.dispatch('reloadUserInfo').then(user => {
					this.user = user
					if ((!user.lat || !user.lng) && global.is_weixin()) {
						let apis = ['getLocation']
						let _this = this
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
							    wx.getLocation({
							      type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
							      success: (res) => {
									console.log(res)
							        _this.user.lat = res.latitude; // 纬度，浮点数，范围为90 ~ -90
							        _this.user.lng = res.longitude; // 经度，浮点数，
							      },
								  fail: (err) => {
									 alert(JSON.stringify(err))
								  },
								  cancel: (res) => {
									 alert(JSON.stringify(res))
								  }
							    });
							});
							
						}).catch(err => {})
					}
				})
			},
			// 二级联动选择
			showMulLinkageTwoPicker() {
				this.pickerValueArray = this.mulLinkageTwoPicker
				this.mode = 'multiLinkageSelector'
				this.deepLength = 2
				this.pickerValueDefault = [0, 0]
				this.$refs.mpvuePicker.show()
			},
			selectArea(e) {
				const [province, city] = e.label.split('-');
				this.$set(this.user, 'province', province)
				this.$set(this.user, 'city', city)
				console.log(this.user.city, e)
			},
			submit(e) {
				if (this.loading) {
					return
				}
				//定义表单规则
				var rule = [
					{name:"name",  checkType : "notnull", checkRule:"",  errorMsg:"请输入您的姓名"},
				];
				//进行表单检查
				var formData = e.detail.value;
				var checkRes = graceChecker.check(formData, rule);
				if(checkRes){
					this.loading = true
					console.log(this.user)
					delete this.user.card
					delete this.user.brand
					this.$http.auth('user_edit', {user: JSON.stringify(this.user)}).then(res => {
						this.loading = false
						global.toast('保存成功', () => {
							uni.switchTab({
								url: '/pages/card/card/card'
							})
						});
					}).catch(err => {})
				}else{
					uni.showToast({ title: graceChecker.error, icon: "none" });
					this.loading = false
				}
				
				
				
			}
			
		}
	}
</script>

<style lang="scss">
page {
	background-color: $page-bg;
}
.bg {
	background-color: $uni-bg-color;
}
.user-base-info {
	display: flex;
	align-items: center;
	padding: 0 $page-padding;
	.left {
		width: 140upx;
		height: 140upx;
		&.avatar {
			.image {
				height: 100%;
				width: 100%;
			}
		}
	}
	.right {
		flex: 1;
		display: flex;
		flex-direction: column;
		.u-list-left {
			min-width: 40upx;
		}
	}
}
.arrow {
	color: $uni-text-color-grey;
}
.required {
	&:before {
		content: '*';
		color: #FF5151;
	}
}
.u-list {
	display: flex;
	align-items: center;
	padding: 16upx $page-padding;
	&-left {
		min-width: 160upx;
		max-width: 260upx;
	}
	&-mid {
		flex: 1;
		font-size: $fsize2;
	}
}
.uni-input-placeholder {
	font-size: $fsize2;
}
.uni-input-wrapper {
	font-size: $fsize2;
}
</style>
