<template>
	<view>
		<view class="list">
			<navigator class="li" url="/pages/card/card_list/card_list" open-type="navigate">
				<view class="icon iconfont">&#xe658;</view>
				<view class="text">LOGO设置</view>
				<text class="iconfont">&#xe628;</text>
			</navigator>
			<navigator class="li" url="/pages/card/card_manage/card_manage" open-type="navigate">
				<view class="icon iconfont">&#xe7d1;</view>
				<view class="text">视频设置</view>
				<text class="iconfont">&#xe628;</text>
			</navigator>
			<navigator class="li" url="/pages/card/card_manage/card_manage" open-type="navigate">
				<view class="icon iconfont">&#xe6ba;</view>
				<view class="text">荣誉设置</view>
				<text class="iconfont">&#xe628;</text>
			</navigator>
		</view>
		<view class="list">
			<navigator class="li" url="/pages/card/card_list/card_list" open-type="navigate">
				<view class="icon iconfont">&#xe658;</view>
				<view class="text">图片管理</view>
				<text class="iconfont">&#xe628;</text>
			</navigator>
			<navigator class="li" url="/pages/card/card_manage/card_manage" open-type="navigate">
				<view class="icon iconfont">&#xe7d1;</view>
				<view class="text">背景音乐</view>
				<text class="iconfont">&#xe628;</text>
			</navigator>
		</view>
		<view class="list">
			<view class="li">
				<view class="icon iconfont">&#xe658;</view>
				<view class="text">头条设置</view>
				<view>
					<text class="tip">开启名片头条</text>
					<switch checked style="transform:scale(0.7)" @change="switchCardArticle" color="#f6375b"/>
					<text class="iconfont">&#xe628;</text>
				</view>
			</view>
			<view class="li">
				<view class="icon iconfont">&#xe658;</view>
				<view class="text">云店设置</view>
				<view>
					<text class="tip">开启云店首页</text>
					<switch checked style="transform:scale(0.7)" color="#f6375b"/>
					<text class="iconfont">&#xe628;</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			switchCardArticle(e) {
				this.$http.auth('card_set', {field: 'show_article', value: e.target.value ? 1:0}).then(res => {
					global.toast(res.message);
				}).catch(err => {});
			}
		}
	}
</script>

<style lang="scss">
page {
	background-color: $page-bg;
}
.list{
	width:100%;
	border-bottom:15upx solid  #f1f1f1;
	background: #fff;
	&:last-child{
		border: none;
	}
	.li{
		padding:10upx $page-padding;
		border-bottom:1px solid rgb(243,243,243);
		display:flex;
		align-items:center;
	&.noborder{
		border-bottom:0
		}
		.icon{
			flex-shrink:0;
			width:50upx;
			height:50upx;
			color: $tcolor;
			image{
				width:50upx;
				height:50upx;
			}
		}
		.text{
			padding-left:20upx;
			flex: 1;
			color:#666;
		}
		.to{
			flex-shrink:0;
			width:40upx;
			height:40upx;
		}
		.tip {
			color: #808080;
			font-size: $fsize4;
		}
	}
}
</style>
