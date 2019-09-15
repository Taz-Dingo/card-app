<template>
	<view class="card-imgs">
		<view class="gap"></view>
		<view class="i-list" v-if="!user.is_founder">
			<text>默认图片</text>
			<view>
				<text>是否使用默认图片</text>
				<switch class="switch" style="transform:scale(0.7)" color="#f6375b" checked></switch>
			</view>
		</view>
		<view class="i-list">我的图片</view>
		<view class="img-list">
			<button-file-add class="add-btn" @click="add"></button-file-add>
			<view class="img-box" v-for="(img, index) in imgList" :key="index">
				<image class="image" :src="img" mode=""></image>
				<view class="btns">
					<text class="btn" @tap="setTop(index)">置顶</text>
					<text class="border"></text>
					<text class="btn" @tap="del(index)">删除</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import buttonFileAdd from '@/components/button-file-add.vue';
	export default {
		components: {
			buttonFileAdd
		},
		data() {
			return {
				imgList: [],
				user: {},
			}
		},
		onLoad() {
			this.$store.dispatch('loadUserInfo').then(user => {
				this.user = user
			})
			
			this.$http.auth('brand_material', {field: 'mien'}).then(res => {
				this.imgList = res.data.mien
			}).catch(err => {})
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
						this.$http.image(tempFilePaths).then(res => {
							uni.hideLoading();
							this.imgList.push(res)
							this.updateImgList()
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
			setTop(index) {
				const img = this.imgList[index]
				this.imgList.splice(index, 1)
				this.imgList.unshift(img)
				this.updateImgList()
			},
			del(index) {
				this.imgList.splice(index, 1)
				this.updateImgList()
			},
			updateImgList() {
				this.$http.auth('set_mien_imgs', {img_list: this.imgList}).then(res => {
					
				}).catch(err => {})
			}
		}
	}
</script>

<style lang="scss">
page {
	background-color: $page-bg;
}
.card-imgs {
	.i-list {
		background-color: $uni-bg-color;
		padding: 10upx $page-padding;
		margin-bottom: 20upx;
		display: flex;
		justify-content: space-between;
	}
	.img-list {
		background-color: $uni-bg-color;
		padding: $page-padding;
		display: flex;
		flex-wrap: wrap;
		.img-box {
			width: 160upx;
			height: 160upx;
			margin: 0 20upx 20upx 0;
			position: relative;
			.image {
				height: 100%;
				width: 100%;
			}
			.btns {
				position: absolute;
				bottom: 0;
				left: 0;
				display: flex;
				background-color: rgba(0, 0, 0, .5);
				width: 100%;
				color: #fff;
				font-size: $fsize2;
				padding: 6upx 0;
				.border {
					height: 40upx;
					width: 1upx;
					transform: scale(0.5);
					background-color: #fff;
				}
				.btn {
					flex: 1;
					text-align: center;
				}
			}
		}
		.add-btn {
			margin: 0 20upx 20upx 0;
		}
	}
}
</style>
