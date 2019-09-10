<template>
	<view>
		<view v-if="loaded && dataList.length">
			<view v-for="(user,index) in dataList" :key="index">
				<pack-friend :user="user"></pack-friend>
			</view>
		</view>
		<view v-else class="empty">
			<text>你还没有好友，快去添加吧</text>
			<button class="btn-add btn-sm" @tap="addUser">去添加</button>
		</view>
	</view>
</template>

<script>
	import packFriend from '@/components/pack-friend.vue'
	export default {
		components: {
			packFriend,
		},
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
					this.dataList = res.data.data;
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
.empty {
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
}
.btn-add{
	margin-top: 26upx;
	width: 200upx;
	background-color: $tcolor;
	color: $uni-text-color-inverse;
	font-size: $fsize1;
}
</style>
