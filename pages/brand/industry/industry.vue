<template>
	<view>
		<uni-collapse :accordion="true">
			<uni-collapse-item v-for="item in dataList" :key="item.id" :title="item.name" :show-animation="item.animation">
				<view class="industry-list b-line" v-for="(child,ci) in item.children" :key="ci" @tap="selectIndustry(child.id)">
					{{child.name}}
				</view>
			</uni-collapse-item>
		</uni-collapse>
	</view>
</template>

<script>
	import uniCollapse from '@/components/uni/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni/uni-collapse-item.vue'
	export default {
		components: {
			uniCollapse,
			uniCollapseItem
		},
		data() {
			return {
				brand: '',
				dataList: [],
			};
		},
		onLoad(option) {
			this.brand = option.brand_name
			this.$http.auth('industry_list').then(res => {
				this.dataList = res.data.data
			}).catch(err => {})
		},
		methods: {
			selectIndustry(id) {
				uni.redirectTo({
					url: `/pages/brand/brand_create/brand_create?brand_name=${this.brand}&industry_id=${id}`
				})
			}
		}
	}
</script>

<style lang="scss">
page {
	background-color: $page-bg;
}
.industry-list {
	padding: $page-padding;
}
</style>
