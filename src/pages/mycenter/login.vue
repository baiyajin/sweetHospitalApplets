<template>
	<view class="content">
    <view class="login_form">
      <view class="phone">
        <input type="number" v-model="sufferPhone" placeholder="请输入手机号" placeholder-style="color: #d3d3d3">
      </view>
      <view class="name">
        <input type="text" v-model="sufferName" placeholder="请输入姓名" placeholder-style="color: #d3d3d3">
      </view>
      <view class="login-btn" @tap="handLogin">登录</view>
      <view class="re-btn" @tap="handRe">注册</view>
    </view>
	</view>
</template>

<script>
  import { login } from '@/api/modules/api.js'

	export default {
		data() {
			return {
        sufferName: undefined,
        sufferPhone: undefined
			}
		},
		methods: {
      async handLogin () {
        const { data } = await login(this.sufferName, this.sufferPhone)
        localStorage.setItem('userinfo', JSON.stringify(data))
        uni.switchTab({
          url: '/pages/index/index'
        })
      },
      handRe () {
        uni.navigateTo({ url: '/pages/mycenter/regster' })
      }
		}
	}
</script>

<style lang="less" scoped>
	.content {
		width: 100vw;
    height: calc(100vh - 44px);
    background-image: url('@/static/login.jpg');
    background-repeat: no-repeat;
    background-position: center; 
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .login_form {
      .phone, .name {
        background: #fff;
        width: 240px;
        height: 40px;
        border-radius: 20px;
        input {
          width: 100%;
          height: 100%;
          padding-left: 10px;
        }
      }
      .name {
        margin-top: 20px;
      }
      .phone {
        margin-top: 80px;
      }
      .login-btn {
        width: 240px;
        height: 40px;
        background: #4eabae;
        margin-top: 20px;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
      }
      .re-btn {
        display: flex;
        justify-content: center;
        color: blue;
        padding-top: 5px;
      }
    }
	}
</style>
