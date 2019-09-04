<template>
	<view>
		<view class="article-header">
			<view class="main-img">
				
			</view>
			<view class="header-mask">
				<view>{{article.title}}</view>
				<view>{{article.created_date}}</view>
			</view>
		</view>
		<view class="article-content">
			<rich-text :nodes="article.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				article: {},
			}
		},
		onLoad(option) {
			const id = option.id
			this.$http.post('article_detail', {id: id}).then(res => {
				this.article = res.data.data;
				console.log(res)
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
