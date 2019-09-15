<template>
	<view>
		<view class="header">
			<view class="bg">
				<view class="box">
					<view class="box-hd">
						<navigator class="avator" url="/pages/user_center/user_setting/user_setting">
							<image class="image" :src="user.avatar ? user.avatar : defaultAvatar" mode=""></image>
						</navigator>
						<view class="user-name">{{user.name}}</view>
						<view class="vip-tag">普通会员</view>
					</view>
				</view>
			</view>
			<navigator class="vip-info" url="/pages/user_center/vip/vip">
				<view class="icon iconfont">&#xe7eb;</view>
				<view class="text">尚未开通</view>
				<view>
					<text>开通</text>
					<text class="iconfont">&#xe628;</text>
				</view>
			</navigator>
			<navigator class="setting iconfont" url="/pages/user_center/user_setting/user_setting" open-type="navigate">&#xe6ba;</navigator>
		</view>
		<view class="list-content">
			<view class="list">
				<navigator class="li" url="/pages/user_center/user_setting/user_setting" open-type="navigate">
					<view class="icon iconfont">&#xe603;</view>
					<view class="text">编辑信息</view>
					<text class="iconfont">&#xe628;</text>
				</navigator>
				<navigator class="li" url="/pages/card/card_list/card_list" open-type="navigate">
					<view class="icon iconfont">&#xe658;</view>
					<view class="text">名片夹</view>
					<text class="iconfont">&#xe628;</text>
				</navigator>
				<view class="li " @tap="toUserVisitor">
					<view class="icon iconfont">&#xe7d1;</view>
					<view class="text">访客数据</view>
					<text class="iconfont">&#xe628;</text>
				</view>
				<navigator class="li" url="/pages/card/card_manage/card_manage" open-type="navigate">
					<view class="icon iconfont">&#xe6ba;</view>
					<view class="text">名片管理</view>
					<text class="iconfont">&#xe628;</text>
				</navigator>
				<!-- <view class="li " >
					<view class="icon iconfont">&#xe60d;</view>
					<view class="text">联系客服</view>
					<text class="iconfont">&#xe628;</text>
				</view> -->
			</view>
			
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				user: {},
				defaultAvatar: '/static/avatar_default.jpeg',
			};
		},
		onLoad() {
			this.$store.dispatch("loadUserInfo").then(user => {
				console.log('user',user)
				this.user = user;
			});
		},
		methods: {
			toUserVisitor() {
				uni.navigateTo({
					url: '/pages/user_center/user_visitor/user_visitor'
				})
			},
		}
	}
</script>

<style lang="scss">
page{
	background-color:#f1f1f1;
	font-size: 30upx;
}
.header{
	background: #fff;
	height: 460upx;
	background-color: $tcolor;
	display: flex;
	flex-direction: column;
	position: relative;
	.setting {
		position: absolute;
		left: 20upx;
		top: 20upx;
		font-size: 40upx;
		color: $uni-text-color-inverse;
	}
	.bg{
		width: 100%;
		height:320upx;
		padding-top:70upx;
		flex: 1;
	}
	.vip-info {
		display: flex;
		padding: 10upx $page-padding;
		color: $uni-text-color-inverse;
		background-color: rgba(255,255,255, 0.2);
		align-items: center;
		.icon{
			flex-shrink:0;
			width:50upx;
			height:50upx;
			line-height: 1.3;
			font-size: 40upx;
			color: #515151;
			image{
				width:50upx;
				height:50upx;
			}
		}
		.text{
			flex: 1;
			padding-left:20upx;
		}
		.to{
			flex-shrink:0;
			width:40upx;
			height:40upx;
		}
	}
}
.box{
	width: 100%;
	height: 320upx;
	margin: 0 auto;
	.box-hd{
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
		.avator{
			width: 120upx;
			height: 120upx;
			background: #fff;
			border: 5upx solid #fff;
			border-radius: 50%;
			overflow: hidden;
			.image{
				width: 100%;
				height: 100%;
			}
		}
		.user-name{
			color: $uni-text-color-inverse;
			width: 100%;
			text-align: center;
			margin-top: 20upx;
		}
		.vip-tag {
			background-color: #F0AD4E;
			color: #333333;
			padding: 0 10upx;
			border-radius: 10upx;
			margin-top: 16upx;
		}
	}
	.box-bd{
		display: flex;
		flex-wrap: nowrap;
		flex-direction: row;
		justify-content: center;
		.item{
			flex: 1 1 auto;
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: center;
			border-right: 1px solid #f1f1f1;
			margin: 15upx 0;
			&:last-child{
				border: none;
			}
			.icon{
				width: 60upx;
				height: 60upx;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.text{
				width: 100%;
				text-align: center;
				margin-top: 10upx;
			}
		}
	}
}
.list-content{
	background: #fff;
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
			width:100%;
			color:#666;
		}
		.to{
			flex-shrink:0;
			width:40upx;
			height:40upx;
		}
	}
}
</style>
