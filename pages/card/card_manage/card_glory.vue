<template>
	<view class="glorys">
		<view class="add-form">
			<view class="lists">
				<view class="item" v-for="(item, index) in newGloryList" :key="index">
					<text>{{item}}</text>
					<text class="iconfont del" @tap="del(index)">&#xe667;</text>
				</view>
			</view>
			<input class="input" type="text" v-model="glory" placeholder="请添加下一条荣誉"/>
			<button class="btn" @tap="add">确认添加</button>
		</view>
		<view class="glory-list">
			<view class="glory-title">相关荣誉</view>
			<view  v-if="gloryList.length" class="glory-list-content">
				<view class="glory-item" v-for="(glory, index) in gloryList" :key="index">
					<text class="iconfont">&#xe719;</text>
					<text>{{glory}}</text>
				</view>
			</view>
			<view v-else class="glory-empty">
				暂无相关荣誉
			</view>
		</view>
		<button-submit title="保存" @submit="submit"></button-submit>
	</view>
</template>

<script>
	import buttonSubmit from '@/components/button-submit.vue';
	export default {
		components: {
			buttonSubmit,
		},
		data() {
			return {
				glory: '',
				gloryList: [],
				newGloryList: [],
			}
		},
		onLoad() {
			this.$http.auth('brand_material', {field: 'glory'}).then(res => {
				this.gloryList = res.data.glory
			}).catch(err => {})
		},
		methods: {
			add() {
				console.log(this.newGloryList.findIndex(item => item === this.glory))
				if (this.glory === '' || this.newGloryList.findIndex(item => item === this.glory) !== -1) {
					return
				}
				this.newGloryList.push(this.glory)
			},
			del(index) {
				this.newGloryList.splice(index, 1)
			},
			submit() {
				this.$http.auth('set_glory', {list: this.newGloryList}).then(res => {
					this.gloryList = this.newGloryList
					this.newGloryList = []
					global.toast('保存成功')
				}).catch(err => {})
			},
		}
	}
</script>

<style lang="scss">
page {
	background-color: $page-bg;
}
.glorys {
	.add-form {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 40upx;
		.lists {
			margin-bottom: 20upx;
			width: calc(80% + 32upx);
			.item {
				display: flex;
				justify-content: space-between;
				margin-bottom: 20upx;
				padding:0 16upx;
				background-color: $uni-bg-color;
				.del {
					color: #fff;
					background-color: $tcolor;
					border-radius: 50%;
					height: 40upx;
					width: 40upx;
					line-height: 1.4;
					text-align: center;
					margin-right: -10upx;
				}
			}
		}
		.input {
			width: 80%;
			background-color: $uni-bg-color;
			padding: 10upx 16upx;
			border-radius: 8upx;
		}
		.btn {
			font-size: $fsize2;
			background-color: $tcolor;
			color: #fff;
			margin-top: 20upx;
		}
	}
	.glory-list {
		.glory-title {
			font-size: $fsize1;
			font-weight: bold;
			margin-bottom: 15upx;
			padding: 0 $page-padding;
		}
		.glory-item {
			background-color: $uni-bg-color;
			width: 80%;
			padding: 10upx 16upx;
			display: flex;
			margin: 10upx auto;
			.iconfont {
				margin-right: 16upx;
				color: $tcolor;
			}
		}
		.glory-empty {
			font-size: $fsize2;
			color: $uni-text-color-grey;
			text-align: center;
		}
	}
}
</style>
