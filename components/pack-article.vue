<template>
	<view>
		<view class="pack-article" v-if="!hideImg">
			<view class="pack-article-image">
				<image class="image" :src="article.main_img" mode=""></image>
			</view>
			<view class="pack-article-content">
				<view class="pack-article-content-title">
					{{article.title}}
				</view>
				<view class="pack-article-content-info">
					<view class="uni-tag uni-tag-inverted uni-tag-small">{{article.tag}}</view>
					<view class="text-left">
						
					</view>
					<view class="text-right">
						{{article.created_date}}
					</view>
				</view>
			</view>
		</view>
		<view class="pack-article" v-else>
			<view class="pack-article-content-title-one">
				{{article.title}}
			</view>
			<view class="uni-tag uni-tag-inverted uni-tag-small">{{article.tag}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			article: {
				type: Object,
				default() {
					return {}
				},
			},
			hideImg: {
				type: Boolean,
				default: true,
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.pack-article {
	display: flex;
	margin-bottom: 16upx;
	align-items: center;
	&-image {
		width: 180upx;
		height: 140upx;
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
		margin-left: 12upx;
		
		&-title {
			font-size: $fsize2;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
			word-break: break-all;	//英文换行，以字母为依据
			margin-bottom: 16upx;
			line-height: 1.2;
		}
		&-title-one {
			font-size: $fsize2;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 1;
			overflow: hidden;
			word-break: break-all;
			line-height: 1.2;
			flex: 1;
		}
		
		&-info {
			display: flex;
			font-size: $fsize3;
			align-items: center;
			
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
