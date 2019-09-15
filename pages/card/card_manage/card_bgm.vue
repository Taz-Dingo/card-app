<template>
	<view class="card-bgm">
		<view class="gap"></view>
		<view class="b-list b-line">
			<text>是否开启</text>
			<view>
				<text class="b-list-tip">是否开启背景音乐</text>
				<switch checked style="transform: scale(0.7);" color="#f6375b"/>
			</view>
		</view>
		<view class="b-list b-line">
			<text>自动播放</text>
			<view>
				<text class="b-list-tip">是否自动播放背景音乐</text>
				<switch checked style="transform: scale(0.7);" color="#f6375b"/>
			</view>
		</view>
		<view class="gap"></view>
		<radio-group @change="bgmChange">
			<view class="b-list b-line" v-for="(bgm,index) in bgmList" :key="index">
				<text>{{bgm.name}}</text>
				<view>
					 <radio :value="bgm.id" :checked="index === current" color="#f6375b"/>
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
				bgmList: [{
					name: 'abc',
					url: ''
				},{
					name: 'abc',
					url: ''
				},{
					name: 'abc',
					url: ''
				}],
				current: 0,
				selectedId: ''
			}
		},
		methods: {
			bgmChange(e) {
				this.selectedId = e.target.value;
			},
			submit() {
				this.$http.auth('set_bgm').then(res => {
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
