<template>
	<view>
		<view class="net-header">
			<view class="search-box">
				<input type="text" value="" placeholder="搜索人脉"/>
				<text class="iconfont">&#xe833;</text>
			</view>
		</view>
		<view class="">
			<segmented-control :values="navList"></segmented-control>
		</view>
		<view class="user-list" v-if="userList && userList.length">
			<view v-for="(user,uIndex) in userList" :key="uIndex">
				<pack-user :user="user"></pack-user>
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
						name: '推荐'
					},
					{
						name: '同行'
					},
				],
				userList: [],
				loadingStatus: 'more',
				page: 1,
			}
		},
		onLoad() {
			this.loadUserList();
		},
		methods: {
			loadUserList() {
				if (this.loadingStatus === 'loading' || this.loadingStatus === 'noMore') {
					return false;
				}
				this.loadingStatus = 'loading';
				this.$http.post('user_search', {}).then(res => {
					this.userList = this.userList.concat(res.data.data.data);
					if (this.page < res.data.data.last_page) {
						this.loadingStatus = 'more';
						this.page ++;
					} else {
						this.loadingStatus = 'noMore';
					}
				}).catch(err => {});
			}
		}
	}
</script>

<style lang="scss">
	.search-box {
			display: flex;
			width: 50%;
			margin: 0 auto;
			align-items: center;
	}
</style>
