<template>
	<view class="vip">
		<view class="vip-header">
			<view class="avatar">
				<pack-user-avatar :src="user.avatar"></pack-user-avatar>
			</view>
			<view class="info">
				<text>{{user.name}}</text>
				<text>{{user.vip_id ? user.vip_end_at + '到期' : '未开通'}}</text>
			</view>
		</view>
		<view class="btn-box">
			<button-submit title="开通" @submit="submit"></button-submit>
		</view>
	</view>
</template>

<script>
	import packUserAvatar from '@/components/pack-user-avatar.vue'
	import buttonSubmit from '@/components/button-submit.vue'
	export default {
		components: {
			packUserAvatar,
			buttonSubmit
		},
		data() {
			return {
				user: {}
			}
		},
		onLoad() {
			this.$store.dispatch('loadUserInfo').then(user => {
				this.user = user
			})
		},
		methods: {
			submit() {
				
			}
		}
	}
</script>

<style lang="scss">
.vip {
	&-header {
		height: 160upx;
		background-color: $tcolor;
		display: flex;
		padding: $page-padding;
		align-items: center;
		.avatar {
			min-width: 150upx;
		}
		.info {
			color: #fff;
			display: flex;
			flex-direction: column;
		}
	}
}
</style>
