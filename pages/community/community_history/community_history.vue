<template>
	<view class="community-history">
		<view class="header">
			<view class="h-item">
				<text class="h-item-num">{{toDayViewCount}}</text>
				<text>今天看我</text>
			</view>
			<view class="h-item">
				<text class="h-item-num">{{user.pop_count}}</text>
				<text>看我总数</text>
			</view>
			<!-- <view class="h-item">
				<text class="iconfont">&#xe655;</text>
				<text>追踪教程</text>
			</view> -->
		</view>
		<view class="gap"></view>
		<view class="h-list">
			<view v-for="(record,index) in dataList" :key="index" @tap="viewUserCard(record.card.user.id)">
				<pack-user :user="record.card.user" :diyBtn="true"></pack-user>
			</view>
			<uni-load-more :status="loadingStatus"></uni-load-more>
		</view>
	</view>
</template>

<script>
	import packUser from '@/components/pack-user.vue'
	import uniLoadMore from '@/components/uni/uni-load-more.vue'
	export default {
		components: {
			packUser,
			uniLoadMore,
		},
		data() {
			return {
				user: {},
				dataList: [],
				loadingStatus: 'more',
				countLoaded: false,
				toDayViewCount: 0,
				page: 1
			}
		},
		onLoad() {
			this.$store.dispatch('loadUserInfo').then(user => {
				this.user = user
			})
		},
		onShow() {
			this.loadData()
		},
		onReachBottom() {
			this.loadData()
		},
		methods: {
			loadData() {
				if (this.loadingStatus === 'loading' || this.loadingStatus === 'noMore') {
					return
				}
				this.loadingStatus = 'loading'
				this.$http.auth('card_record', {count: !this.countLoaded}).then(res => {
					const _data = res.data.data
					this.dataList = this.dataList.concat(_data.data)
					if (this.page < _data.last_page) {
						this.loadingStatus = 'more'
						this.page ++
					} else {
						this.loadingStatus = 'noMore'
					}
					if (res.data.today_view_count) {
						this.toDayViewCount = res.data.today_view_count
						this.countLoaded = true
					}
					console.log(this.dataList)
				}).catch(err => {})
			},
			viewUserCard(user_id) {
				uni.setStorageSync('card_user_id', user_id)
				uni.switchTab({
					url: `/pages/card/card/card`
				})
			},
		}
	}
</script>

<style lang="scss">
page {
	background-color: $page-bg;
}
.community-history {
	.header {
		background-color: $uni-bg-color;
		display: flex;
		padding: 16upx 0;
		.h-item {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			&-num,.iconfont {
				color: $tcolor;
			}
		}
	}
}
</style>
