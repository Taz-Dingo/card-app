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
		<view class="cate-box">
			<view class="brand">
				<view class="brand-th flex-row">
					<view class="flex-left">公司/品牌</view>
					<view class="flex-right">修改</view>
				</view>
				<view class="brand-td flex-row">
					<view class="flex-left"><pack-tag selected :text="'完美'"></pack-tag></view>
				</view>
			</view>
			<view class="gap"></view>
			<view class="cate">
				<text>关注的类别</text>
				<view class="">
					<view v-for="(item,cIndex) in category" :key="cIndex">
						<pack-tag :selected="item.selected" :text="item.name"></pack-tag>
					</view>
				</view>
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
	import packTag from '@/components/pack-tag.vue'
	export default {
		components: {
			segmentedControl,
			packTag,
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
				listData:[],
				category: [],
			}
		},
		onLoad() {
			this.$http.post('article_category').then(res => {
				this.category = res.data;
				console.log(res);
			}).catch(err => {});
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
			},
		}
	}
</script>

<style lang="scss">
page, .cate-box {
	background: $uni-bg-color-grey;
}
.tag-box {
	display: flex;
	background-color: $uni-bg-color;
	.tab-list {
		max-width: 88%;
	}
	.more {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
.cate-box {
	position: relative;
	width: 100%;
	.brand, .cate{
		padding: 10upx $page-padding;
		background-color: $uni-bg-color;
	}
	.brand-td {
		padding: 10upx 0;
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
