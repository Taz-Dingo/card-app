<script>
export default {
	onLaunch: function() {
		console.log('App Launch');

		setTimeout(() => {
			uni.setTabBarBadge({
				index: 1,
				text: '31'
			});
			uni.showTabBarRedDot({
				index: 3
			});
		}, 1000);
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
@import './common/css/uni.css';
@import './common/css/public.css';
/*每个页面公共css */
@font-face {
  font-family: 'iconfont';  /* project id 1050106 */
  src: url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2');
  
}

.iconfont {
	font-family: 'iconfont' !important;
	font-size: 16px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
