<template>
	<view>
		<view v-if="loaded && dataList.length">
			<view v-for="(user,index) in dataList" :key="index">
				<pack-friend :user="user" @click="viewUserCard" @call="callUser" @del="delFriend"></pack-friend>
			</view>
		</view>
		<view v-else-if="loaded && dataList.length === 0" class="empty">
			<image class="img" src="/static/no_data.png" mode="scaleToFill"></image>
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
			},
			viewUserCard(user_id) {
				uni.setStorageSync('card_user_id', user_id)
				uni.switchTab({
					url: `/pages/card/card/card`
				})
			},
			//打用户电话
			callUser(user_id) {
				this.getUserContact('mobile', user_id).then(res => {
					location.href = 'tel:' + res
				})
			},
			delFriend(user_id) {
				this.$http.auth('del_friend', {user_id: user_id}).then(res => {
					global.toast('删除成功')
					const index = this.dataList.findIndex(item => item.id == user_id)
					this.dataList.splice(index, 1)
				}).catch(err => {})
			},
			getUserContact(platform, user_id) {
				return new Promise((resovel, reject) => {
					this.$http.auth('user_contact', {user_id: user_id}).then(res => {
						const contacts = res.data.data
						resovel(contacts[platform])
					}).catch(err => {})
				})
			},
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
	.img {
		margin: 0 auto;
		margin-bottom: 20upx;
	}
}
.btn-add{
	margin-top: 26upx;
	width: 200upx;
	background-color: $tcolor;
	color: $uni-text-color-inverse;
	font-size: $fsize1;
}
</style>
