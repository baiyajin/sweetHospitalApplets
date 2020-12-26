<template>
    <view class="content">
        <view class="login_form">
            <view class="phone">
                <input type="number" v-model="sufferPhone" placeholder="请输入手机号" @input="checkPhone"
                       placeholder-style="color: #d3d3d3">
            </view>
            <view class="name">
                <input type="password" v-model="sufferName" placeholder="请输入密码" placeholder-style="color: #d3d3d3">
            </view>
            <view class="buttons_view">
                <view class="login-btn" @tap="handLogin">登 录</view>
                <view class="login-btn" @tap="handRe">注 册</view>
            </view>
        </view>
        <my-custom-toast></my-custom-toast>
    </view>
</template>

<script>
    import {login} from '@/api/modules/api.js'
    import { isPhone } from '@/utils/index.js'

    export default {
        data() {
            return {
                sufferName: null,
                sufferPhone: null
            }
        },
        computed: {
            hintContent: {
                get () {
                    return this.$store.state.hintContent
                },
                set (val) {
                    this.$store.commit('updateHintContent', val)
                }
            }
        },
        methods: {
            checkPhone(value) {
                if (value.detail.value && !isPhone(value.detail.value)) {
                    this.hintContent = '手机号格式不正确'
                    return
                }
                this.hintContent = ''
            },
            async handLogin() {
                const {data} = await login(this.sufferName, this.sufferPhone)
                localStorage.setItem('userinfo', JSON.stringify(data))
                uni.switchTab({
                    url: '/pages/index/index'
                })
            },
            handRe() {
                uni.navigateTo({url: '/pages/mycenter/regster'})
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

            .buttons_view{
                margin-top: 20px;
                display: flex;
                .login-btn {
                    width: 50%;
                    height: 40px;
                    background: #4eabae;
                    border-radius: 20px;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    text-align: center;
                    line-height: 40px;
                    margin: 0 10px;
                    font-size: 18px;
                }
            }
        }
    }
</style>
