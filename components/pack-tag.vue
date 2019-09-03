<template>
	<view class="pack-tag" :class="{'selected': selected}">
		<view class="">
			<text>{{text}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			selected: {
				type: Boolean,
				default: false
			},
			text: {
				type: String,
				default: ''
			}
		},
	}
</script>

<style lang="scss">
.pack-tag {
	display: inline-block;
	padding: 0 32upx;
	color: #555;
	background-color: #c0c0c0;
	border-radius: 8upx;
	border: 1upx solid #c0c0c0;
	line-height: 1.4;
	&.selected {
		background-color: $uni-bg-color;
		color: $tcolor;
		border: 1upx solid $tcolor;
	}
}
</style>
