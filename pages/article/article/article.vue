<template>
	<view>
		<view class="tag-box">
			<view class="tab-list">
				<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x>
					<view v-for="(tab,index) in tagList" :key="tab.id" :class="['swiper-tab-list',tabIndex==index ? 'active' : '']" :id="tab.id"
					 :data-current="index" @click="tabChange(index)">{{tab.name}}</view>
				</scroll-view>
			</view>
			<view class="more">
				<text class="iconfont">&#xe645;</text>
			</view>
		</view>
		<view class="">
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in listData" :key="key" @click="goDetail(value)">
					<view class="uni-media-list">
						<image class="uni-media-list-logo" :src="value.cover"></image>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top">{{value.title}}</view>
							<view class="uni-media-list-text-bottom">
								<text>{{value.author_name}}</text>
								<text>{{value.published_at}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import segmentedControl from '@/components/segmented-control.vue'
	export default {
		components: {
			segmentedControl,
		},
		data() {
			return {
				tagList: [
					{name: '行业'},
					{name: '行业'},
					{name: '行业'},
					{name: '行业'},
					{name: '行业'},
					{name: '行业'},
					{name: '行业'},
					{name: '行业'},
				],
				tabIndex: 0,
			}
		},
		methods: {
			tabChange(index) {
				this.tabIndex = index;
			},
			getList() {
				var data = {
					column: "id,post_id,title,author_name,cover,published_at" //需要的字段名
				};
				if (this.last_id) { //说明已有数据，目前处于上拉加载
					data.minId = this.last_id;
					data.time = new Date().getTime() + "";
					data.pageSize = 10;
				}
				uni.request({
					url: 'https://unidemo.dcloud.net.cn/api/news',
					data: data,
					success: (data) => {
						if (data.statusCode == 200) {
							let list = this.setTime(data.data);
							this.listData = this.reload ? list : this.listData.concat(list);
							this.last_id = list[list.length - 1].id;
							this.reload = false;
						}
					},
					fail: (data, code) => {
						console.log('fail' + JSON.stringify(data));
					}
				})
			},
		}
	}
</script>

<style lang="scss">
.tag-box {
	display: flex;
	.tab-list {
		max-width: 90%;
	}
	.more {
		width: 60upx;
	}
}
.swiper-tab-list{
	position: relative;
	&.active {
		color: $tcolor;
	}
	&.active:after{
		position: absolute;
		display: block;
		content: '';
		width: 8px;
		height: 1px;
		border-radius: 1px;
		background: $tcolor;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}
}
</style>
