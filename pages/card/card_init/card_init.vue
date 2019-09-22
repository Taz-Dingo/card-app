<template>
	<view class="page">
		<view class="card-init">
				<view class="init-title">
					<text>您还没有创建名片哦</text>
				</view>
				<view class="init-image">
					<image class="image" src="/static/logo1.png" mode="scaleToFill"></image>
					<text class="tip">-高效扩充人脉宝库 迅速抢占市场先机-</text>
				</view>
				<view class="init-protocol" v-if="hasProtocol">
					<checkbox-group class="checkgroup">
						<label class="checkbox">
							<checkbox value="" checked style="transform: scale(0.7);"/>
						</label>
					</checkbox-group>
					<text>阅读并接受</text>
					<navigator class="protocol" url="/pages/system/protocol/protocol" open-type="navigate">《服务协议》</navigator>
				</view>
				<view class="btn-box">
					<button class="btn" @tap="quickStart">快速创建我的名片</button>
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hasProtocol: true,
			};
		},
		onLoad(option) {
			if (option.auth_token) {
				global.setToken(option.auth_token);
			}
			
			this.$store.dispatch('loadSystemInfo').then(config => {
				console.log(config)
				this.hasProtocol = config && config.protocol
			})
		},
		methods: {
			quickStart() {
				uni.navigateTo({
					url: '/pages/card/card_create/card_create'
				})
			}
		}
	}
</script>

<style lang="scss">
.card-init {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 26upx 0;
	.init-title {
		font-size: $fsize-title;
		font-weight: 600;
	}
	.init-image {
		height: 400upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		.image {
			height: 100%;
			width: 400upx;
		}
		.tip {
			font-size: $fsize3;
			color: $uni-text-color-grey;
		}
	}
	.init-protocol {
		display: flex;
		justify-content: center;
		width: 100%;
		margin: 20upx 0;
		.checkgroup {
			max-width: 40upx;
			margin-right: 25upx;
		}
		.protocol {
			color: #007AFF;
		}
	}
	.btn-box {
		.btn {
			color: #fff;
			background-color: $tcolor;
			font-size: $fsize1;
			margin-top: 20upx;
		}
	}
}
</style>
