<template>
	<view class="segmented-control base-segmented-control" :class="styleType" :style="wrapStyle">
		<view v-for="(item, index) in values" class="segmented-control-item" :class="{'active':currentIndex==index}" :key="index" :style="index === currentIndex ? activeStyle : itemStyle"
		 @click="onClick(index)">
			{{item.name}}
			<text class="segmented-control-num" v-if="isNumb && item.num>0">({{item.num}})</text>
		</view>
	</view>
</template>

<script>
	/**
	 * @description tab组件
	 * @property {Number} current 当前选中的tab索引值，从0计数
	 * @property {Array} values 选项数组
	 * @property {String} activeColor 选中的标签字体颜色
	 * @property {String} styleType 分段器样式类型，可选值：button（按钮类型），text（文字类型）
	 * @property {String,Boolean} isNumb 选项是否有数字
	 */
	export default {
		name: 'segmented-control',
		props: {
			current: {
				type: Number,
				default: 0
			},
			values: {
				type: Array,
				default () {
					return [{
						name:'',
						num:''
					}];
				}
			},
			activeColor: {
				type: String,
				default: '#000'
			},
			isNumb:{
				type:[String,Boolean],
				default: false
			},
			styleType: {
				type: String,
				default: 'button'
			}
		},
		data() {
			return {
				currentIndex: this.current,
			}
		},
		watch: {
			current(val) {
				if (val !== this.currentIndex) {
					this.currentIndex = val;
				}
			}
		},
		computed: {
			wrapStyle() {
				let styleString = '';
				switch (this.styleType) {
					case 'text':
						styleString = `border:0;`;
						break;
					default:
						styleString = `border-color: ${this.activeColor}`;
						break;
				}
				return styleString;
			},
			itemStyle() {
				let styleString = '';
				switch (this.styleType) {
					case 'text':
						styleString = `color:#222222`;
						break;
					default:
						styleString = `color:#222222`;
						break;
				}
				return styleString;
			},
			activeStyle() {
				let styleString = '';
				switch (this.styleType) {
					case 'text':
						styleString = `color:#222222;`;
						break;
					default:
						styleString = `color:${this.activeColor};`;
						break;
				}
				return styleString;
			}
		},
		methods: {
			onClick(index) {
				if (this.currentIndex !== index) {
					this.currentIndex = index;
					this.$emit('clickItem', index);
				}
			}
		},
	}
</script>

<style lang="scss">
	@import '~@/uni.scss';
	.base-segmented-control.segmented-control {
		display: flex;
		flex-direction: row;
		font-size: 28upx;
		box-sizing: border-box;
		overflow: hidden;
		overflow-x: scroll;
		overflow-y: hidden;
		justify-content: initial;
		background:#fff;
		width: 100%;
		&::-webkit-scrollbar {
			display: none;
		}
	}

	.base-segmented-control.segmented-control.button {
		border: none;
	}
.base-segmented-control{
	
		.segmented-control.text {
			border: 0;
			border-radius: 0upx;
		}
	
	
		.segmented-control-item {
			flex: 1;
			text-align: center;
			line-height: 80upx;
			box-sizing: border-box;
			white-space: nowrap;
			margin: 0 10upx;
		}
	
		.segmented-control-item.active {
				position: relative;
				color: $tcolor !important;
				&::after{
					position: absolute;
					display: block;
					content: '';
					width: 18upx;
					height: 4upx;
					border-radius: 4upx;
					background: $tcolor;
					bottom: 0;
					left: 50%;
					transform: translateX(-50%);
				}
		}
	
		.segmented-control-item.text {
			border-left: 0;
		}
	
		.segmented-control-item:first-child {
			border-left-width: 0;
		}
}
</style>
