<template>
	<view>
		<view class="net-header">
			<view class="search-box" @tap="searchUser">
				<input type="text" value="" placeholder="搜索人脉"/>
				<text class="iconfont">&#xe618;</text>
			</view>
		</view>
		<view class="">
			<segmented-control :values="navList" @clickItem="navTap"></segmented-control>
		</view>
		<view class="user-list" v-if="userList && userList.length">
			<view v-for="(user,uIndex) in userList" :key="uIndex">
				<pack-user :user="user" @add="add"></pack-user>
			</view>
		</view>
		<view v-else>
			<uni-load-more :status="loadingStatus"></uni-load-more>
		</view>
	</view>
</template>

<script>
	import segmentedControl from '@/components/segmented-control.vue'
	import uniLoadMore from '@/components/uni/uni-load-more.vue'
	import packUser from '@/components/pack-user.vue'
	export default {
		components: {
			segmentedControl,
			uniLoadMore,
			packUser
		},
		data() {
			return {
				navList: [
					{
						key: 'recommend',
						name: '推荐'
					},
					{
						key: 'industry',
						name: '同行'
					},
				],
				userList: [],
				currentNavIndex: 0,
				loadingStatus: 'more',
				page: 1,
			}
		},
		onLoad() {
			this.loadUserList();
		},
		methods: {
			navTap(index) {
				this.currentNavIndex = index
				const currentNav = this.navList[index]
				this.page = 1
				this.loadingStatus = 'more'
				this.userList = []
				this.loadUserList()
			},
			loadUserList() {
				if (this.loadingStatus === 'loading' || this.loadingStatus === 'noMore') {
					return false
				}
				this.loadingStatus = 'loading'
				const currentNav = this.navList[this.currentNavIndex]
				let param = {}
				param[currentNav.key] = 1
				this.$http.auth('user_search', param).then(res => {
					this.userList = this.userList.concat(res.data.data.data);
					if (this.page < res.data.data.last_page) {
						this.loadingStatus = 'more'
						this.page ++
					} else {
						this.loadingStatus = 'noMore'
					}
				}).catch(err => {})
			},
			searchUser() {
				uni.navigateTo({
					url: '/pages/community/community_search/community_search'
				})
			},
			add(user) {
				this.$http.auth('add_friend', {user_id: user.id}).then(res => {
					if (res.errcode === 0) {
						this.$set(user, 'added', true)
					}
				}).catch(err => {})
			}
		}
	}
</script>

<style lang="scss">
page {
	background-color: $page-bg;
}
.search-box {
	display: flex;
	width: 50%;
	margin: 0 auto;
	align-items: center;
	background-color: #fff;
	padding: 0 20upx;
	border-radius: 6upx;
	justify-content: space-between;
}
.net-header {
	height: 160upx;
	display: flex;
	background-color: $tcolor;
	align-items: center;
}
</style>
