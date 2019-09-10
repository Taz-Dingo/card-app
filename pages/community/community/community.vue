<template>
	<view>
		<view class="uni-card">
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<navigator class="uni-list-cell-navigate uni-navigate-right uni-navigate-badge" url="/pages/card/card_list/card_list">
						<view><text class="iconfont">&#xe60c;</text>我的好友</view>
						<uni-badge :text="count.friends" :style="{'backgroundColor': '#fff'}"></uni-badge>
					</navigator>
				</view>
			</view>
			<view class="gap"></view>
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<navigator class="uni-list-cell-navigate uni-navigate-right uni-navigate-badge" url="/pages/community/community_net/community_net">
						<view><text class="iconfont">&#xe6ab;</text>人脉集市</view>
						<uni-badge :text="count.user" :style="{'backgroundColor': '#fff'}"></uni-badge>
					</navigator>
				</view>
			</view>
			<view class="gap"></view>
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<navigator class="uni-list-cell-navigate uni-navigate-right uni-navigate-badge" url="/pages/community/community_history/community_history">
						<view><text class="iconfont">&#xe6b3;</text>人脉探索</view>
						<uni-badge :text="count.view > 0 ? '谁看了我(' + count.view + ')' : '谁看了我'" :style="{'backgroundColor': '#fff'}"></uni-badge>
					</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniBadge from '@/components/uni/uni-badge.vue'
	export default {
		components: {
			uniBadge,
		},
		data() {
			return {
				count: {
					user: '0',
					friends: '0',
					view: 0
				}
			}
		},
		onLoad() {
			this.$http.auth('user_count').then(res => {
				if (res.errcode === 0) {
					this.count.user = res.data.user_count.toString();
					this.count.friends = res.data.friends_count.toString();
					this.count.view = res.data.view_count;
				}
			}).catch(err => {})
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
page,.uni-card {
	background-color: $uni-bg-color-grey;
}
.uni-list {
	.iconfont {
		margin-right: 12upx;
	}
}
</style>
