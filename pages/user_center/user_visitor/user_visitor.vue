<template>
	<view>
		<view class="gap"></view>
		<view class="visitor-header">
			<view class="vh-item">
				<text>曝光量</text>
				<text class="vh-item-num">{{user.pop_count}}</text>
			</view>
			<view class="vh-item">
				<text>点赞数</text>
				<text class="vh-item-num">{{user.up_count}}</text>
			</view>
			<view class="vh-item">
				<text>收藏数</text>
				<text class="vh-item-num">{{user.collect_count}}</text>
			</view>
		</view>
		<view class="gap"></view>
		<view class="vh-list">
			<view v-for="(record,index) in dataList" :key="index" @tap="viewUserCard(record.card.user.id)">
				<pack-user :user="record.card.user" :diyBtn="true"></pack-user>
			</view>
			<uni-load-more :status="loadingStatus"></uni-load-more>
		</view>
		<view class="visitor-empty">
			<button class="btn" @tap="spread">去推广</button>
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
				user: {},
				dataList: [],
				loadingStatus: 'more',
				countLoaded: false,
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
		methods: {
			spread() {
				uni.switchTab({
					url: '/pages/card/card/card'
				})
			},
			viewUserCard(user_id) {
				uni.setStorageSync('card_user_id', user_id)
				uni.switchTab({
					url: `/pages/card/card/card`
				})
			},
			loadData() {
				if (this.loadingStatus === 'loading' || this.loadingStatus === 'noMore') {
					return
				}
				this.loadingStatus = 'loading'
				this.$http.auth('card_record').then(res => {
					const _data = res.data.data
					this.dataList = this.dataList.concat(_data.data)
					if (this.page < _data.last_page) {
						this.loadingStatus = 'more'
						this.page ++
					} else {
						this.loadingStatus = 'noMore'
					}
					console.log(this.dataList)
				}).catch(err => {})
			},
		}
	}
</script>

<style lang="scss">
page {
	background-color: $page-bg;
}
.visitor-header {
	background-color: $uni-bg-color;
	display: flex;
	padding: 16upx 0;
	.vh-item {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		&-num {
			color: $tcolor;
		}
	}
}
.visitor-empty {
	.btn {
		font-size: $fsize2;
		width: 300upx;
		margin: 0 auto;
		background-color: $tcolor;
		color: #fff;
		margin-top: 20upx;
	}
}
</style>
