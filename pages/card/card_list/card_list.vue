<template>
	<view>
		<view v-if="loaded && dataList.length">
			
		</view>
		<view v-else class="empty">
			<button class="btn-add btn-sm" @tap="addUser">去添加</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [],
				loaded: false,
			}
		},
		onLoad() {
			this.$http.auth('card_list').then(res => {
				if (res.errcode === 0) {
					this.loaded = true;
				}
			}).catch(err => {})
		},
		methods: {
			addUser() {
				uni.navigateTo({
					url: '/pages/community/community_net/community_net'
				})
			}
		}
	}
</script>

<style lang="scss">
page {
	background-color: $page-bg;
}
.btn-add{
	width: 200upx;
	background-color: $tcolor;
	color: $uni-text-color-inverse;
	font-size: $fsize1;
}
</style>
