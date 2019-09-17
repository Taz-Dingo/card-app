<template>
	<view>
		<view class="gap"></view>
		<view class="add-box">
			<view class="video" v-if="video" @tap="add">
				<video :src="video" controls></video>
			</view>
			<button-file-add @click="add"></button-file-add>
			<view class="tip">
				上传视频
			</view>
		</view>
		
		<!-- <uni-popup ref="pop" :show="true" type="center">
			<view class="video-pop">
				<text>*仅支持腾讯、优酷视频链接</text>
				<textarea class="link-input" v-model="videoLink" placeholder="在此粘贴需要上传的视频链接,不得上传与所选品牌/公司无关的视频,否则将不允许通过!" />
				<button class="btn" @tap="submit">确定</button>
			</view>
		</uni-popup> -->
	</view>
</template>

<script>
	import uniPopup from '@/components/uni/uni-popup.vue';
	import buttonFileAdd from '@/components/button-file-add.vue';
	export default {
		components: {
			buttonFileAdd,
			uniPopup
		},
		data() {
			return {
				video: '',
				videoLink: ''
			}
		},
		onLoad() {
			this.$store.dispatch('loadUserInfo').then(user => {
				if (user.brand && user.brand.active_video) {
					this.video = user.brand.active_video
				}
			})
		},
		methods: {
			add() {
				//this.$refs.pop.open()
				// 上传照片
				uni.chooseVideo({
					count: 1,
					sourceType: ['camera', 'album'],
					success: res => {
						const tempFilePath = res.tempFilePath;
						uni.showLoading({
							title: '上传中'
						});
						console.log(tempFilePath)
						this.$http.file(tempFilePath).then(url => {
							uni.hideLoading();
							this.$http.auth('set_video', {video: url}).then(res => {
								this.video = url
								global.toast('上传成功')
							}).catch(err => {})
							this.video = res
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
		margin-top: 20upx;
	}
	.iframe {
		width: 100%;
	}
}
.video-pop {
	min-width: 460upx;
	.link-input {
		margin-top: 16upx;
		width: 100%;
		text-align: start;
	}
	.btn {
		font-size: $fsize1;
		color: #fff;
		background-color: $tcolor;
	}
}
</style>
