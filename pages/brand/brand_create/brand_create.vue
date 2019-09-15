<template>
	<view>
	  <view class="brand-create">
	  	<view class="brand-info">
	  		<text class="title">我的品牌(简称)</text>
	  			<view class="brand-name">
	  				<text class="name">{{brand}}</text>
	  				<text class="iconfont del" @tap="clear">&#xe667;</text>
	  			</view>
	  	</view>
	  	<view class="industry">
	  		<text class="title required">选择行业</text>
			<view class="input" @tap="choseIndustry">{{industry.name ? industry.name : '请选择行业'}}</view>
	  	</view>
	  </view>
	  <view class="btn-box">
	  	<button class="sure-btn" :loading="loading" @tap="submit">确定</button>
	  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				brand: '',
				industry: {},
				loading: false
			}
		},
		onLoad(option) {
			console.log(option)
			this.brand = option.brand_name
			if (!this.brand) {
				uni.redirectTo({
					url: '/pages/brand/new_brand/new_brand'
				})
			}
			
			this.$http.auth('industry_list', {id: option.industry_id}).then(res => {
				this.industry = res.data.data;
			}).catch(err => {})
		},
		methods: {
			submit() {
				if (this.loading) {
					return
				}
				if (!this.industry) {
					global.toast('请选择行业')
					return
				}
				this.loading = true
				this.$http.auth('new_brand', {name: this.brand, industry_id: this.industry.id}).then(res => {
					this.loading = false
					global.toast('提交成功')
					uni.redirectTo({
						url: '/pages/brand/brand_select/brand_select'
					})
				}).catch(err => {})
			},
			choseIndustry() {
				uni.navigateTo({
					url: `/pages/brand/industry/industry?brand_name=${this.brand}`
				})
			},
			clear() {
				uni.redirectTo({
					url: '/pages/brand/new_brand/new_brand'
				})
			}
		}
	}
</script>

<style lang="scss">
page {
	background-color: $page-bg;
}
.tip {
	padding: $page-padding;
	font-size: $fsize3;
}
.btn-box {
	margin-top: 60upx;
}
.brand-create {
	background-color: $uni-bg-color;
	padding: $page-padding;
	.title {
		font-size: 35upx;
		&.required {
			&:after {
				content: '*';
				color: #dd524d;
			}
		}
	}
	.brand-name {
		display: flex;
		justify-content: space-between;
		margin-bottom: 20upx;
		.name {
			background-color: #C0C0C0;
			padding: 2upx 10upx;
			border-radius: 15upx;
		}
		.del {
			color: #fff;
			background-color: #C0C0C0;
			border-radius: 50%;
			height: 50upx;
			width: 50upx;
			line-height: 1.6;
			text-align: center;
		}
	}
	.industry {
		.input {
			border: 1upx solid #333;
			padding: 2upx 6upx;
			min-height: 46upx;
		}
	}
}
.sure-btn {
	width: 400upx;
	font-size: 30upx;
	background-color: $tcolor;
	color: #fff;
}
</style>