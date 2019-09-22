<template>
	<view>
		<view class="gap"></view>
		<view class="add-box">
			<button-file-add v-if="!logo" @click="add"></button-file-add>
			<view class="logo" v-else @tap="add">
				<image class="image" :src="logo" mode="scaleToFill"></image>
			</view>
			<view class="tip">
				LOGO尺寸270 X 200像素
			</view>
		</view>
		<button-submit title="完成" @submit="submit"></button-submit>
	</view>
</template>

<script>
	import buttonSubmit from '@/components/button-submit.vue';
	import buttonFileAdd from '@/components/button-file-add.vue';
	export default {
		components: {
			buttonSubmit,
			buttonFileAdd
		},
		data() {
			return {
				logo: '',
			}
		},
		onLoad() {
			this.$store.dispatch('loadUserInfo').then(user => {
				user.brand && user.brand.logo && (this.logo = user.brand.logo)
			})
		},
		methods: {
			add() {
				// 上传照片
				uni.chooseImage({
					count: 1, // 默认9
					sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
					sourceType: ['camera', 'album'],
					success: chooseImageRes => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						uni.showLoading({
							title: '上传中'
						});
						console.log(tempFilePaths)
						this.$http.file(tempFilePaths[0]).then(res => {
							uni.hideLoading();
							this.logo = res
						}).catch(err => {
							console.log(err)
							global.toast('上传失败')
						});
					},
					fail: (res) => {
						console.log(res);
					}
				});
			},
			submit() {
				if (!this.logo) {
					global.toast('请先上传LOGO')
					return
				}
				this.$http.auth('set_logo', {logo: this.logo}).then(res => {
					global.toast('保存成功', () => {
						uni.navigateBack()
					})
				}).catch(err => {})
			}
		}
	}
</script>

<style lang="scss">
page {
	background-color: $page-bg;
}
.add-box {
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: $uni-bg-color;
	padding: 40upx 0;
	flex-direction: column;
	.tip {
		font-size: $fsize2;
		color: $uni-text-color-grey;
		margin-top: 20upx;
	}
	.logo {
		width: 160upx;
		height: 160upx;
		.image {
			height: 100%;
			width: 100%;
		}
	}
}
</style>
