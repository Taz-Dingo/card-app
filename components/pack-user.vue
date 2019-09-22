<template>
	<view class="pack-user b-line">
		<view class="pack-user-box">
			<view class="avatar">
				<image class="image" :src="user.avatar ? user.avatar : defaultAvatar" mode=""></image>
			</view>
			<view class="mid">
				<view class="">
					<text>{{user.name}}</text>
					<view class="office" v-if="user.card && user.card.office">
						{{user.card.office}}
					</view>
				</view>
				<view class="brand" v-if="user.brand">
					{{user.brand.name}}
				</view>
			</view>
			<view v-if="!diyBtn" class="btn-box" :class="{'disabled': user.added}" @tap="add(user)">
				<text v-if="!user.added">添加</text>
				<text v-else>已添加</text>
			</view>
			<view v-else>
				<slot></slot>
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
			},
			diyBtn: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				defaultAvatar: '/static/avatar_default.jpeg'
			};
		},
		methods: {
			add(user) {
				if (user.added) {
					return
				}
				this.$emit('add', user)
			}
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
		flex-direction: column;
	}
	.btn-box {
		border: 1upx solid $tcolor;
		padding: 2upx 0;
		text-align: center;
		width: 140upx;
		color: $tcolor;
		font-size: $fsize2;
		border-radius: 25upx;
		&.disabled {
			background-color: #c0c0c0;
			color: #fff;
			border: 1upx solid #c0c0c0;
		}
	}
}
</style>
