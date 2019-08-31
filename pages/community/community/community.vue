<template>
	<view>
		<view class="uni-card">
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate uni-navigate-right uni-navigate-badge">
						<view><text class="iconfont">&#xe645;</text>我的好友</view>
						<uni-badge text="1" type="success"></uni-badge>
					</view>
				</view>
			</view>
			<view class="gap"></view>
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate uni-navigate-right uni-navigate-badge">
						<view><text class="iconfont">&#xe645;</text>我的好友</view>
						<uni-badge text="1" type="success"></uni-badge>
					</view>
				</view>
			</view>
			<view class="gap"></view>
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate uni-navigate-right uni-navigate-badge">
						<view><text class="iconfont">&#xe645;</text>我的好友</view>
						<uni-badge text="1" type="success"></uni-badge>
					</view>
				</view>
			</view>
			<view class="gap"></view>
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate uni-navigate-right uni-navigate-badge">
						<view><text class="iconfont">&#xe645;</text>我的好友</view>
						<uni-badge text="1" type="success"></uni-badge>
					</view>
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
