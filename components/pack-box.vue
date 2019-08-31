<template>
	<view class="pack-box-view">
		<view class="pack-box">
			<view class="pack-box-title b-line">
				<view class="title">
					<view class="title-slot"><slot name="title"></slot></view>
					<text>{{title}}</text>
				</view>
				<view class="more" v-if="showMore">更多</view>
			</view>
			<view class="pack-box-content">
				<slot name="content"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: '',
			},
			showMore: {
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.pack-box-view {
	padding: $page-padding;
	background-color: $uni-bg-color;
}
.pack-box {
	&-title {
		display: flex;
		padding-bottom: 16upx;
		margin-bottom: 16upx;
		.title {
			flex: 1;
			text-align: center;
			font-size: $fsize1;
			&-slot {
				display: inline-block;
				margin-right: 8upx;
			}
		}
		.more {
			font-size: $fsize3;
		}
	}
}
</style>
