<template>
	<view class="pack-user b-line">
		<view class="pack-user-box" @tap="viewUserCard">
			<view class="avatar">
				<image class="image" src="/static/avatar_default.jpeg" mode=""></image>
			</view>
			<view class="mid">
				<view class="">
					<text>{{user.name}}</text>
					<view class="collect-info">
						<text class="tag">收藏于</text>
						<text>{{user.created_at}}</text>
					</view>
				</view>
			</view>
			<view class="btn-box" @click.stop.prevent="stopPrevent">
				<view class="btn"><text class="iconfont" @tap="callUser">&#xe60e;</text></view>
				<view class="btn del"><text class="iconfont" @tap="delUser">&#xe633;</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			user: {
				type: Object,
				default() {
					return {}
				},
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			viewUserCard() {
				this.$emit('click', this.user.id)
			},
			callUser() {
				this.$emit('call', this.user.id)
			},
			delUser() {
				this.$emit('del', this.user.id)
			},
			stopPrevent() {}
		}
	}
</script>

<style lang="scss">
.pack-user-box {
	display: flex;
	align-items: center;
	padding: 12upx $page-padding;
	background-color: #fff;
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
	.mid {
		flex: 1;
		display: flex;
		flex-direction: row;
		.collect-info {
			font-size: $fsize4;
			.tag {
				background-color: $tcolor;
				color: #fff;
				padding: 1upx 6upx;
				margin-right: 6upx;
			}
		}
	}
	.btn-box {
		display: flex;
		.btn {
			border: 1upx solid $tcolor;
			padding: 2upx 0;
			text-align: center;
			color: $tcolor;
			font-size: $fsize2;
			border-radius: 50%;
			display: flex;
			align-items: center;
			height: 35upx;
			width: 35upx;
			margin-right: 10upx;
			&.del {
				color: #1296db;
				border: 1upx solid #1296db;
			}
			&.disabled {
				background-color: #c0c0c0;
				color: #fff;
				border: 1upx solid #c0c0c0;
			}
		}
	}
}
</style>
