<template>
	<view>
		<view class="brand-select-header">
			<view class="search-box">
				<text class="iconfont">&#xe618;</text>
				<input type="text" ref="searchBox" v-model="searchWord" placeholder="填写品牌、公司简称搜索" @input="searchBrand"/>
			</view>
			<view class="current-brand" v-if="user.brand && !onSearch">
				<text>当前选择：{{user.brand.name}}</text>
			</view>
		</view>
		<view class="brand-content" v-if="!onSearch">
			<view class="my-brand" v-if="myBrands && myBrands.length">
				<view class="b-title">我的品牌</view>
				<view  class="b-list" v-for="(mb,mi) in myBrands" :key="mi" @tap="selectBrand(mb.id)">
					<view class="b-list-item">{{mb.name}}
						<text 
							v-if="mb.status_info"
							class="tag"
							:style="{
								color: mb.status_info.color,
								border: '1px solid ' + mb.status_info.color
							}"
						>{{mb.status_info.name}}</text>
					</view>
				</view>
			</view>
			<view class="brand-list" v-if="hotBrands && hotBrands.length">
				<view class="b-title">热门品牌</view>
				<view class="b-list" v-for="(hb,hi) in hotBrands" :key="hi" @tap="selectBrand(hb.id)">
					<view class="b-list-item">{{hb.name}}</view>
				</view>
			</view>
			<view  class="brand-list" v-for="(gb,gi) in brandList" :key="gi">
				<view class="b-title">{{gi}}</view>
				<view class="b-list" v-for="(brand,index) in gb" :key="index" @tap="selectBrand(brand.id)">
					<view class="b-list-item">{{brand.name}}</view>
				</view>
			</view>
			<view class="brand-tip">
				<text class="text">没有找到想要的品牌？</text>
				<view class="btn-box"><button class="btn" @tap="selectBlur">搜索一下</button></view>
			</view>
		</view>
		<view class="brand-content" v-else>
			<checkbox-group>
				<view class="search-list b-line" v-for="(sb,si) in searchList" :key="si" @tap="selectBrand(sb.id)">
					 <label>
						<checkbox style="transform:scale(0.7)"/>
					 </label>
					<text>{{sb.name}}</text>
				</view>
			</checkbox-group>
			<view class="empty">
				<text>找不到品牌？换简短的词再搜索试试？</text>
				<text v-if="!init">如果还找不到，点击<text class="link" @tap="createBrand">创建成我的品牌</text></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: {},
				myBrands: [],
				brandList: [],
				hotBrands: [],
				searchList: [],
				onSearch: false,
				searchWord: '',
				init: false,
				from: '',
			}
		},
		onLoad(option) {
			this.init = option.init
			this.from = option.from
			if (!option.init) {
				this.$store.dispatch('loadUserInfo').then(user => {
					this.user = user
					this.brandSearch({user_id: user.id}).then(res => {
						this.myBrands = res.data
					})
				})
			}
			
			this.brandSearch({init: option.init ? 1 : 0}).then(res => {
				this.brandList = res.data
				this.hotBrands = res.hot_brands
			});
		},
		methods: {
			brandSearch(param) {
				return new Promise((resolve, reject) => {
					this.$http.auth('brand_search', param).then(res => {
						resolve(res.data)
					}).catch(err => {})
				})
			},
			selectBrand(brand_id) {
				this.$http.auth('set_brand', {id: brand_id, init: this.init}).then(res => {
					uni.navigateBack()
				}).catch(err => {})
			},
			searchBrand(e) {
				if (!e.target.value) {
					this.onSearch = false
					return
				}
				this.searchList = []
				this.onSearch = true
				let myResult = this.myBrands.filter(item => item.name.includes(e.target.value))
				if (myResult && myResult.length) {
					this.searchList = this.searchList.concat(myResult)
				}
			},
			selectBlur() {
				this.$refs.searchBox.$refs.input.focus();
			},
			createBrand() {
				if (!this.searchWord) {
					return
				}
				uni.navigateTo({
					url: `/pages/brand/brand_create/brand_create?brand_name=${this.searchWord}&from=${this.from}`
				})
			}
		}
	}
</script>

<style lang="scss">
page {
	background-color: $page-bg;
}
.brand-select-header {
	direction: flex;
	background-color: $uni-bg-color;
	padding: $page-padding;
	.current-brand {
		font-size: $fsize3;
		color: $tcolor;
		margin-top: 15upx;
	}
}
.search-box {
	display: flex;
	margin: 0 auto;
	align-items: center;
	background-color: $page-bg;
	padding: 0 20upx;
	border-radius: 6upx;
	.iconfont {
		margin-right: 10upx;
	}
}
.brand-content {
	.empty {
		display: flex;
		flex-direction: column;
		text-align: center;
		color: $uni-text-color-grey;
		font-size: $fsize2;
		margin-top: 20upx;
		.link {
			color: $tcolor;
		}
	}
}
.b-title {
	padding: $page-padding;
}
.b-list {
	background-color: $uni-bg-color;
	padding: 16upx $page-padding;
	.tag {
		margin-left: 20upx;
		padding: 2upx 6upx;
		border-radius: 5upx;
		font-size: $fsize3;
	}
}
.search-list {
	background-color: $uni-bg-color;
	padding: 16upx $page-padding;
}
.brand-tip {
	position: fixed;
	bottom: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.8);
	color: $tcolor;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: $page-padding;
	.text {
		text-align: end;
	}
	.btn-box {
		.btn {
			font-size: $fsize2;
			margin: 0;
			color: #fff;
			background-color: $tcolor;
		}
	}
}
</style>
