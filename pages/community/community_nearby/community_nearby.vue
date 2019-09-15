<template>
	<view>
		<view class="nearby-header">
			<view class="nearby-header-cont">
				<text class="title-main">事业签名</text>
				<text class="title-sub">您身边的人脉宝库，助您成功！</text>
				<button class="btn" @tap="addSign">点击添加</button>
			</view>
			<view class="nearby-header-sub">
				<text>资源就近交换，销售人之间的合作更容易！</text>
			</view>
		</view>
		<view class="gap"></view>
		<view class="nearby-lists">
			<view v-for="(user,index) in userList" :key="index" class="n-list b-line" @tap="viewUser(user.id)">
				<view class="avatar">
					<image class="image" src="/static/avatar_default.jpeg" mode=""></image>
				</view>
				<view class="mid">
					<view class="row">
						<text>{{user.name}}</text>
						<text class="sub">{{user.created_at}}</text>
					</view>
					<view class="row">
						<view class="collect-info">
							<text class="tag" v-if="user.brand">{{user.brand.name}}</text>
							<text class="tag" v-else>未选择</text>
						</view>
						<view class="sub">
							<text class="iconfont address-icon">&#xe60f;</text>
							<text>1.2km</text>
						</view>
					</view>
					<view class="row">
						<text class="sign sub">{{user.signature}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userList: [],
				page: 1,
				loadingStatus: 'more',
			}
		},
		onLoad() {
			this.$store.dispatch('loadUserInfo').then(user => {
				if (!user.lat || !user.lng) {
					
				}
			})
			this.loadUser()
		},
		methods: {
			loadUser() {
				this.$http.auth('user_search', {page: this.page}).then(res => {
					this.userList = this.userList.concat(res.data.data.data);
					if (this.page < res.data.data.last_page) {
						this.loadingStatus = 'more'
						this.page ++
					} else {
						this.loadingStatus = 'noMore'
					}
					console.log(this.loadingStatus)
				}).catch(err => {})
			},
			viewUser(user_id) {
				uni.setStorageSync('card_user_id', user_id)
				uni.switchTab({
					url: `/pages/card/card/card`
				})
			},
			addSign() {
				uni.navigateTo({
					url: '/pages/user_center/user_setting/user_setting'
				})
			}
		}
	}
</script>

<style lang="scss">
page {
	background-color: $page-bg;
}
.nearby-header {
	background-color: $uni-bg-color;
	padding: $page-padding;
	&-cont {
		background-color: $tcolor;
		color: #fff;
		padding: 20upx 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		.title-main {
			font-size: 40upx;
		}
		.title-sub {
			font-size: 24upx;
		}
		.btn {
			font-size: $fsize2;
			margin-top: 20upx;
			background-color: #fff;
			color: $tcolor;
			border-radius: 20upx;
			line-height: 1.6;
		}
	}
	&-sub {
		font-size: $fsize1;
	}
}
.nearby-lists {
	.n-list {
		display: flex;
		align-items: center;
		background-color: #fff;
		padding: 12upx $page-padding;
		.avatar {
			height: 100upx;
			width: 100upx;
			border-radius: 50%;
			overflow: hidden;
			margin-right: 14upx;
			.image {
				height: 100%;
				width: 100%;
			}
		}
		.sub {
			font-size: $fsize3;
			color: $uni-text-color-grey;
			.iconfont {
				color: $tcolor;
			}
		}
		.mid {
			flex: 1;
			display: flex;
			flex-direction: column;
			max-width: 83%;
			.row {
				display: flex;
				justify-content: space-between;
			}
			.collect-info {
				font-size: $fsize4;
				.tag {
					background-color: $tcolor;
					color: #fff;
					padding: 1upx 6upx;
					margin-right: 6upx;
				}
			}
			.sign {
				text-overflow:ellipsis;
				overflow:hidden;
				white-space:nowrap;
			}
		}
	}
}
</style>
