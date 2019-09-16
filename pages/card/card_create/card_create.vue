<template>
	<view>
		<view class="card-create">
			<text class="title">用一张名片</text>
			<text class="title">开启的无限可能</text>
			<form class="form" @submit="submit">
				<view class="avatar">
					<pack-user-avatar :src="user.avatar"></pack-user-avatar>
				</view>
				<view class="form-input">
					<text class="label">姓名</text>
					<input placeholder="请输入您的姓名" v-model="user.name"/>
				</view>
				<view class="form-input">
					<text class="label">手机</text>
					<input placeholder="请输入您的手机号" @input="phoneInput" v-model="user.mobile"/>
				</view>
				<view class="form-input" v-if="mobileStatus">
					<text class="label">验证码</text>
					<input placeholder="请输入验证码" v-model="code"/>
				</view>
				<view class="form-input">
					<text class="label">品牌</text>
					<view class="brand-select">
						<text class="gray" v-if="!user.brand_id">请选择品牌</text>
						<text v-else>{{user.brand.name}}</text>
						<text class="iconfont gray">&#xe628;</text>
					</view>
				</view>
				<view class="btn-box">
					<button class="btn">创建名片</button>
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
				code: ''
			};
		},
		onLoad() {
			
		},
		methods: {
			phoneInput(e) {
				const mobile = e.detail.value;
				const rule = [
					{name:"mobile",  checkType : "phone", checkRule:"",  errorMsg:"手机号格式错误"},
				];
				this.mobileStatus = graceChecker.check({mobile: mobile}, rule);
			},
			submit(e) {
				//定义表单规则
				var rule = [
					{name:"name",  checkType : "notnull", checkRule:"",  errorMsg:"请输入您的姓名"},
					{name:"mobile",  checkType : "notnull", checkRule:"",  errorMsg:"请输入您的手机号"},
				];
				//进行表单检查
				var formData = e.detail.value;
				var checkRes = graceChecker.check(formData, rule);
				if(checkRes){
					console.log(this.user)
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
.card-create {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 15%; 
	.title {
		font-size: $fsize-title;
		color: $tcolor;
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
		.label {
			min-width: 100upx;
			margin: 0 10upx;
			color: #6D6D72;
		}
	}
	.brand-select {
		flex: 1;
		display: flex;
		justify-content: space-between;	
		.gray {
			color: gray;
		}
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
