<script>
	import { authToken } from '@/utils/auth.js'
	export default {
		onLaunch () {
			authToken()
		},
		onShow () {
			console.log('App Show')
		},
		onHide () {
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
    /*处理chorme浏览器input记住密码后出现黄色背景的处理方法*/
    :-webkit-autofill {
        -webkit-text-fill-color: #fff !important;
        transition: background-color 5000s ease-in-out 0s;
    }
</style>
