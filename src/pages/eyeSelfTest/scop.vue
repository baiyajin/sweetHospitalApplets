<template>
	<view class="content">
    <view class="top_login">
      <image src="@/static/dd01.png" style="width: 200px;height: 160px"></image>
    </view>
    <view class="box">
      <view class="top">
        {{ data.selfExamineDate }}
      </view>
      <view class="bottom">
        <view class="title">本次总分</view>
        <view class="scop">
          <text class="vi">{{ data.totalScore }}</text>
          <text class="f">分</text>
        </view>
        <view class="text">{{ data.totalScoreLevelName }}</view>
        <view v-if="data.totalScoreLevelName != '轻度干眼'" class="y">建议到昆明市第一人民医院就诊</view>
      </view>
    </view>
	</view>
</template>

<script>
  import { getScop } from '@/api/modules/api.js'

	export default {
		data() {
			return {
        data: {}
			}
		},
		methods: {

		},
    async onLoad (option) {
      const { code } = option
      const { data } = await getScop(code)
      this.data = data
    }
 	}
</script>

<style lang="less" scoped>
	.content {
		width: 100vw;
    height: calc(100vh - 44px);
    background: #e8e8e8;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 6px;
    box-sizing: border-box;
    .top_login {  
      padding: 20px 0;
      box-sizing: border-box;
    }
    .box {
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 3px;
      box-sizing: border-box;
      .top {
        font-size: 14px;
        padding: 8px 20px 8px 0;
        text-align: right;
        border-bottom: 2px solid #4eabae;
      }
      .bottom {
        color: #4eaaad;
        padding: 10px 0 20px 0;
        
        .title {
          color: #000;
          font-size: 14px;
          padding-left: 10px;
        }
        .scop {
          font-size: 32px;
          font-weight: bold;
          .f {
            font-size: 16px;
            padding-left: 6px;
          }
        }
        
        .scop, .text, .y {
          text-align: center;
          font-weight: bold;
        }
        .text, .y {
          padding: 6px 0;
          color: #368689;
          font-size: 16px;
        }
      }
    }
	}
</style>
