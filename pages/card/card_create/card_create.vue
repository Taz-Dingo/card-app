<template>
	<view class="card-create-page">
		<view class="card-create">
			<text class="title">用一张名片</text>
			<text class="title">开启的无限可能</text>
			<form class="form" @submit="submit">
				<view class="avatar">
					<pack-user-avatar :src="user.avatar"></pack-user-avatar>
				</view>
				<view class="form-input">
					<text class="label">姓名</text>
					<input placeholder="请输入您的姓名" name='name' v-model="user.name"/>
				</view>
				<view class="form-input">
					<text class="label">手机</text>
					<input placeholder="请输入您的手机号" name='mobile' @input="phoneInput" v-model="user.mobile" type="number"/>
				</view>
				<view class="form-input" v-if="mobileStatus">
					<text class="label">验证码</text>
					<view class="form-box">
						<input name='code' placeholder="请输入验证码" v-model="code" type="number"/>
						<text class="gray timer" v-if="leftTime <= 0" @tap="sendCode">获取</text>
						<text class="gray timer" v-else>{{leftTime}}s</text>
					</view>
				</view>
				<view class="form-input" @tap="selectBrand">
					<text class="label">品牌</text>
					<view class="brand-select">
						<text class="gray" v-if="!user.brand_id">请选择品牌</text>
						<text v-else>{{user.brand.name}}</text>
						<text class="iconfont gray">&#xe628;</text>
					</view>
				</view>
				<view class="btn-box">
					<button class="btn" :loading="loading" form-type="submit">创建名片</button>
				</view>
			</form>
		</view>
	</view>
</template>

<script>
	import packUserAvatar from '@/components/pack-user-avatar.vue'
	import graceChecker from '@/common/graceChecker.js';
	export default {
		components: {
			packUserAvatar
		},
		data() {
			return {
				user: {},
				mobileStatus: false,
				code: '',
				leftTime: 0,
				timer: null,
				loading: false,
			};
		},
		onShow() {
			this.$store.dispatch('reloadUserInfo').then(user => {
				this.mobileStatus = user.mobile ? true : false
				this.user = user
			})
		},
		methods: {
			phoneInput(e) {
				const mobile = e.detail.value;
				const rule = [
					{name:"mobile",  checkType : "phone", checkRule:"",  errorMsg:"手机号格式错误"},
				];
				this.mobileStatus = graceChecker.check({mobile: mobile}, rule);
			},
			sendCode() {
				this.$http.auth('sms', {type: 'register', mobile: this.user.mobile}).then(res => {
					if (res.data) {
						this.leftTime = res.data.second ? res.data.second : 0;
						if (this.leftTime > 0) {
							this.setTimer()
						}
						if (res.data.code) {
							global.toast('验证码为:' + res.data.code)
						}
					}
				}).catch(err => {})
			},
			setTimer() {
				clearInterval(this.timer)
				this.timer = setInterval(() => {
					this.leftTime --;
					if (this.leftTime <= 0) {
						this.leftTime = 0
						clearInterval(this.timer)
					}
				}, 1000)
			},
			submit(e) {
				if (this.loading) {
					return
				}
				//定义表单规则
				var rule = [
					{name:"name",  checkType : "notnull", checkRule:"",  errorMsg:"请输入您的姓名"},
					{name:"mobile",  checkType : "notnull", checkRule:"",  errorMsg:"请输入您的手机号"},
				];
				
				//进行表单检查
				const formData = e.detail.value;
				console.log(formData)
				const checkRes = graceChecker.check(formData, rule);
				if(checkRes){
					if (!this.mobileStatus) {
						global.toast('手机号格式不正确')
						return
					}
					this.loading = true
					this.$http.auth('card_create', {username: this.user.name, mobile: this.user.mobile, code: this.code}).then(res => {
						this.loading = false
						global.toast('创建成功', () => {
							uni.switchTab({
								url: '/pages/card/card/card'
							})
						})
					}).catch(err => {
						this.loading = false
					})
				}else{
					uni.showToast({ title: graceChecker.error, icon: "none" });
					this.loading = false
				}
			},
			selectBrand() {
				uni.navigateTo({
					url: '/pages/brand/brand_select/brand_select?from=create'
				})
			},
		}
	}
</script>

<style lang="scss">
page, .card-create-page{
	height: 100%;
	width: 100%;
}
.card-create-page {
	background-size: 100% auto;
	background-repeat: no-repeat;
	background-image: url('~@/static/card_create_bg.jpg');
}
.card-create {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 15%;
	.title {
		font-size: $fsize-title;
		color: #fff;
	}
	.gray {
		color: gray;
	}
	.avatar {
		display: flex;
		justify-content: center;	
		margin: 40upx 0 20upx 0;
	}
	.form-input {
		width: 60%;
		border: 1upx solid #ccc;
		display: flex;
		margin: 40upx auto;
		padding: 10upx 20upx;
		border-radius: 40upx;
		background-color: $uni-bg-color;
		.label {
			min-width: 100upx;
			margin: 0 10upx;
			color: #6D6D72;
		}
		.form-box {
			display: flex;
			justify-content: space-between;
			flex: 1;
		}
		.timer {
			border: 1upx solid $tcolor;
			border-radius: 15upx;
			padding: 0 10upx;
			white-space:nowrap;
			background-color: $tcolor;
			color: #fff;
			font-size: $fsize3;
		}
	}
	.brand-select {
		flex: 1;
		display: flex;
		justify-content: space-between;	
		
	}
	.btn-box {
		.btn {
			width: 66%;
			font-size: $fsize1;
			color: #fff;
			background-color: $tcolor;
			border-radius: 40upx;
		}
	}
}
</style>
