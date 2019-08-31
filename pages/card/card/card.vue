<template>
	<view class="page">
		<view class="card-box">
			<pack-card></pack-card>
		</view>
		<view class="gap"></view>
		<view class="card-handle-box">
			<view class="card-handle">
				<view class="card-handle-btn">存入手机</view>
				<view class="card-handle-btn">存入手机</view>
				<view class="card-handle-btn">存入手机</view>
				<view class="card-handle-btn">存入手机</view>
			</view>
		</view>
		<view class="gap"></view>
		<view class="contact-info-box">
			<view class="contact-info">
				<view class="contact-info-list">
					<text class="iconfont">&#xe645;</text>
					<text class="text">尚未完善</text>
					<view class="btn">拨打</view>
				</view>
			</view>
			<view class="contact-info">
				<view class="contact-info-list">
					<text class="iconfont">&#xe645;</text>
					<text class="text">尚未完善</text>
					<view class="btn">拨打</view>
				</view>
			</view>
		</view>
		<view class="gap"></view>
		<!-- 品牌头条start -->
		<pack-box :title="'头条'">
			<view slot="title">
				<text class="iconfont">&#xe645;</text>
			</view>
			<view slot="content">
				<pack-article></pack-article>
			</view>
		</pack-box>
		<!-- 品牌头条end -->
		<view class="gap"></view>
		<!-- 品牌视频介绍start -->
		<pack-box :title="'视频介绍'">
			<view slot="title">
				<text class="iconfont">&#xe645;</text>
			</view>
			<view slot="content">
				<video class="card-video" src="" controls></video>
			</view>
		</pack-box>
		<!-- 品牌视频介绍end -->
		<view class="gap"></view>
		<!-- 品牌荣誉start -->
		<pack-box :title="'企业荣誉'">
			<view slot="title">
				<text class="iconfont">&#xe645;</text>
			</view>
			<view slot="content">
				<view class="glory">
					<view class="glory-list" v-for="(glory,gIndex) in gloryList" :key="gIndex">
						<text class="iconfont glory-iconfont">&#xe645;</text>
						<view class="glory-time">{{glory.time}}</view>
						<view class="glory-content">{{glory.content}}</view>
					</view>
				</view>
			</view>
		</pack-box>
		<!-- 品牌荣誉end -->
		<view class="gap"></view>
		<!-- 品牌风采start -->
		<pack-box :title="'企业风采'">
			<view slot="title">
				<text class="iconfont">&#xe645;</text>
			</view>
		</pack-box>
		<!-- 品牌风采end -->
	</view>
</template>

<script>
	import packCard from '@/components/pack-card.vue';
	import packBox from '@/components/pack-box.vue';
	import packArticle from '@/components/pack-article.vue';
	export default {
		components: {
			packCard,
			packBox,
			packArticle,
		},
		data() {
			return {
				gloryList: [
					{
						time: '2017年5月5日',
						content: '范德萨发生答复啊',
					}
				],
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	page {
		background: $uni-bg-color-grey;
	}
	.card-box {
		padding: 0 $page-padding;
	}
	.card-handle-box {
		background-color: $uni-bg-color;
		padding: 20upx 0;
	}
	.card-handle {
		width: 92%;
		display: flex;
		margin: 0 auto;
		&-btn {
			flex: 1;
			font-size: $fsize2;
			color: $uni-text-color-inverse;
			background-color: $tcolor;
			text-align: center;
			margin: 10upx;
			padding: 10upx 0;
			border-radius: 8upx;
		}
	}
	.contact-info-box {
		padding: 0 $page-padding;
	}
	.contact-info {
		background-color: $uni-bg-color;
		&-list {
			display: flex;
			padding: 10upx;
			just-content: center;
			align-items: center;
			font-size: $fsize2;
			.text {
				flex: 1;
				margin-left: 10upx;
			} 
			.btn {
				border: 1px solid #eee;
				padding: 10upx 14upx;
				border-radius: 8upx;
				color: $tcolor;
			}
		}
	}
	.card-video {
		width: 100%;
	}
	.glory-list {
		display: flex;
		font-size: $fsize3;
		.glory-iconfont {
			color: $tcolor;
		}
		.glory-time {
			margin: 0 16upx;
		}
	}
</style>
