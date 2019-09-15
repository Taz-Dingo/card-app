<template>
	<view>
	  <view class="input-box">
	  	<input class="uni-input" v-model="brand" placeholder="填写品牌\公司" />
	  </view>
	  <view class="tip">
	  	<text>设置品牌或者公司简称，每天给你推送你品牌或公司的专属获客文章</text>
	  </view>
	  <view class="btn-box">
	  	<button class="sure-btn"  @tap="submit">确定</button>
	  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				brand: '',
			}
		},
		methods: {
			submit() {
				if (this.brand == '') {
					global.toast('请填写品牌/公司')
					return
				}
				uni.navigateTo({
					url: `/pages/brand/brand_create/brand_create?brand_name=${this.brand}`
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
.sure-btn {
	width: 400upx;
	font-size: 30upx;
	background-color: $tcolor;
	color: #fff;
}
</style>
