<template>
	<view class="card-bgm">
		<view class="gap"></view>
		<view class="b-list b-line">
			<text>是否开启</text>
			<view>
				<text class="b-list-tip">是否开启背景音乐</text>
				<switch :checked="bgmOpen" @change="bgmOpenChange" style="transform: scale(0.7);" color="#f6375b"/>
			</view>
		</view>
		<view class="b-list b-line">
			<text>自动播放</text>
			<view>
				<text class="b-list-tip">是否自动播放背景音乐</text>
				<switch :checked="bgmAutoPlay" @change="bgmAutoPlayChange" style="transform: scale(0.7);" color="#f6375b"/>
			</view>
		</view>
		<view class="gap"></view>
		<radio-group @change="bgmChange">
			<view class="b-list b-line" v-for="(bgm,index) in bgmList" :key="index">
				<text>{{bgm.name}}</text>
				<view>
					 <radio :value="bgm.id.toString()" :checked="index === current" color="#f6375b"/>
				</view>
			</view>
		</radio-group>
		<button-submit title="保存" @submit="submit"></button-submit>
	</view>
</template>

<script>
	import buttonSubmit from '@/components/button-submit.vue';
	export default {
		components: {
			buttonSubmit
		},
		data() {
			return {
				user: {},
				bgmList: [],
				current: 0,
				selectedId: '',
				bgmOpen: true,
				bgmAutoPlay: true,
				currentAudio: null
			}
		},
		async onLoad() {
			await this.$store.dispatch('loadUserInfo').then(user => {
				this.user = user
				this.bgmOpen = user.card && user.card.bgm_open ? true : false
				this.bgmAutoPlay = user.card && user.card.bgm_auto_play ? true : false
			})
			
			this.$http.auth('bgm_list').then(res => {
				this.bgmList = res.data.data
				this.bgmList.forEach((item, index) => {
					if (item.id === this.user.bgm_id) {
						this.current = index
					}
				})
			}).catch(err => {})
		},
		onUnload() {
			this.currentAudio && (this.currentAudio.destroy())
		},
		methods: {
			bgmChange(e) {
				this.selectedId = e.target.value;
				this.createAudio()
			},
			bgmOpenChange(e) {
				this.bgmOpen = e.target.value
			},
			bgmAutoPlayChange(e) {
				this.bgmAutoPlay = e.target.value
			},
			createAudio() {
				if (!this.currentAudio) {
					this.currentAudio = uni.createInnerAudioContext();
				}
				
				this.currentAudio.autoplay = true;
				this.currentAudio.src = this.bgmList[this.current].src;
			},
			submit() {
				this.$http.auth('set_bgm', {
					bgm_id: this.selectedId,
					bgm_open: this.bgmOpen ? 1 : 0,
					bgm_auto_play: this.bgmAutoPlay ? 1 : 0,
				}).then(res => {
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
.card-bgm {
	.b-list {
		background-color: $uni-bg-color;
		padding: 16upx $page-padding;
		display: flex;
		justify-content: space-between;
		align-items: center;
		&-tip {
			font-size: $fsize3;
			color: $uni-text-color-grey;
		}
		.iconfont {
			color: $uni-text-color-grey;
			&.selected {
				color: $tcolor;
			}
		}
	}
}
</style>
