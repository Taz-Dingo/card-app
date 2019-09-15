<template>
	<view class="page-search">
		<view class="search-box">
			<view class="search-input">
				<input type="text" v-model="keyword" placeholder="请输入姓名、职位、品牌等信息"/>
				<text class="iconfont" @tap="searchUser">&#xe618;</text>
			</view>
		</view>
		<view class="search-result">
			<view v-for="(user,index) in userList" :key="index">
				<pack-user :user="user" @add="add"></pack-user>
			</view>
			<view v-if="searched && userList.length === 0" class="empty">
				<text class="tip">TA还没有开通名片</text>
				<button class="btn">去邀请</button>
			</view>
			<uni-load-more v-if="userList && userList.length" :status="loadingStatus"></uni-load-more>
		</view>
	</view>
</template>

<script>
	import packUser from '@/components/pack-user.vue'
	import uniLoadMore from '@/components/uni/uni-load-more.vue'
	export default {
		components: {
			packUser,
			uniLoadMore
		},
		data() {
			return {
				userList: [],
				keyword: '',
				page: 1,
				loadingStatus: 'more',
				searched: false
			}
		},
		methods: {
			searchUser() {
				if (!this.keyword || this.loadingStatus === 'loading') {
					return
				}
				uni.showLoading()
				this.loadingStatus = 'loading'
				this.$http.auth('user_search', {keyword: this.keyword, page: this.page}).then(res => {
					uni.hideLoading()
					this.searched = true
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
.page-search {
	.search-box {
		background-color: $uni-bg-color;
		padding:14upx $page-padding;
		margin-bottom: 15upx;
	}
	.search-input {
		display: flex;
		margin: 0 auto;
		width: 88%;
		align-items: center;
		padding: 0 20upx;
		border-radius: 6upx;
		justify-content: space-between;
		background-color: $page-bg;
		input {
			background-color: $page-bg;
		}
	}
	.search-result {
		.empty {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 20upx;
			.tip {
				font-size: $fsize3;
				color: $uni-text-color-grey;
				margin-bottom: 15upx;
			}
			.btn {
				font-size: $fsize2;
				color: $tcolor;
				border: 1upx solid $tcolor;
			}
		}
	}
}

</style>
