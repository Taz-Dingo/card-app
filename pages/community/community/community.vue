<template>
	<view>
		<view class="uni-card">
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<navigator class="uni-list-cell-navigate uni-navigate-right uni-navigate-badge" url="/pages/community/community_net/community_net">
						<view><text class="iconfont">&#xe645;</text>人脉集市</view>
						<uni-badge text="1" type="success"></uni-badge>
					</navigator>
				</view>
			</view>
			<view class="gap"></view>
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<navigator class="uni-list-cell-navigate uni-navigate-right uni-navigate-badge" url="/pages/community/community_history/community_history">
						<view><text class="iconfont">&#xe645;</text>人脉追踪</view>
						<uni-badge text="1" type="success"></uni-badge>
					</navigator>
				</view>
			</view>
			<view class="gap"></view>
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<navigator class="uni-list-cell-navigate uni-navigate-right uni-navigate-badge">
						<view><text class="iconfont">&#xe645;</text>我的好友</view>
						<uni-badge text="1" type="success"></uni-badge>
					</navigator>
				</view>
			</view>
			<view class="gap"></view>
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<navigator class="uni-list-cell-navigate uni-navigate-right uni-navigate-badge">
						<view><text class="iconfont">&#xe645;</text>我的好友</view>
						<uni-badge text="1" type="success"></uni-badge>
					</navigator>
				</view>
			</view>
			<view class="gap"></view>
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
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
page,.uni-card {
	background-color: $uni-bg-color-grey;
}
.uni-card {
	
}
</style>
