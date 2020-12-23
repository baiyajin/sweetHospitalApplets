<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
    /*padding上下10px*/
    .padding_top_bottom_10{
        padding: 10px 0;
    }
    /*居中*/
    .ele_center{
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: relative;
    }
</style>
