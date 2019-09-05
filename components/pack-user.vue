<template>
	<view class="pack-user">
		<view class="pack-user-box">
			<view class="avatar">
				<image src="" mode=""></image>
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
			<view class="btn-box">
				<text>添加</text>
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
		}
	}
</script>

<style lang="scss">
.pack-user-box {
	display: flex;
	align-items: center;
	padding: 12upx $page-padding;
	.avatar {
		height: 160upx;
		width: 160upx;
	}
	.mid {
		flex: 1;
		display: flex;
		flex-direction: row;
	}
	.btn-box {
		border: 1upx solid $tcolor;
		padding: 10upx 36upx;
		color: $tcolor;
		font-size: $fsize2;
		border-radius: 25upx;
	}
}
</style>
