<template>
	<view class="pack-article">
		<view class="pack-article-image">
			<image class="image" src="/static/logo.png" mode=""></image>
		</view>
		<view class="pack-article-content">
			<view class="pack-article-content-title">
				发的发俺的沙发发生的发生的
			</view>
			<view class="pack-article-content-info">
				<view class="uni-tag uni-tag-inverted uni-tag-small">sdfsdf</view>
				<view class="text-left">
					1232131
				</view>
				<view class="text-right">
					1231231
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.pack-article {
	display: flex;
	&-image {
		width: 200upx;
		height: 180upx;
		.image {
			height: 100%;
			width: 100%;
		}
	}
	&-content {
		flex: 1;
		display: flex;
		justify-content: center;
		flex-direction: column;
		
		&-title {
			font-size: $fsize1;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
			word-break: break-all;	//英文换行，以字母为依据
			margin-bottom: 16upx;
		}
		
		&-info {
			display: flex;
			font-size: $fsize3;
			.text-left {
				flex: 1;
				margin-left: 10upx;
			}
		}
	}
}
.uni-tag {
		box-sizing: border-box;
		padding: 0 32upx;
		height: 60upx;
		line-height: calc(60upx - 2px);
		font-size: 28upx;
		display: inline-block;
		border-radius: 8upx;
}
.uni-tag-inverted {
	color: $tcolor;
	background-color: #FFFFFF;
	border: 2upx solid $tcolor;
	&.disabled {
		color: $uni-text-color-grey;
		border: 2upx solid $uni-text-color-grey;
	}
}
.uni-tag-small{
	height: 36upx;
	padding: 0px 8upx;
	line-height: calc(36upx - 2px);
	font-size: $fsize3;
}
</style>
