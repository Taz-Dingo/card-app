<template>
	<view>
		<rich-text :nodes="protocol"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				protocol: ''
			};
		},
		onLoad() {
			this.$store.dispatch('loadSystemInfo').then(config => {
				if (config && config.protocol) {
					this.protocol = config.protocol
				}
			})
		}
	}
</script>

<style lang="scss">
	page {
		padding: 30upx $page-padding;
	}
</style>
