<template>
	<view class="content">
    <view class="nav_list">
      <view class="list" v-for="(item, index) in navList" @tap="handelItem(index)" :class="index === selectIndex ? 'active': ''" :key="index">{{ item.name }}</view>
    </view>
    <view class="box1" v-if="selectIndex === 0">
      
    </view>
    <view class="box2" v-if="selectIndex === 1">
      暂无数据～
    </view>
	</view>
</template>

<script>
  import { login } from '@/api/modules/api.js'

	export default {
		data() {
			return {
        selectIndex: 0,
        navList: [
          { name: '自测分析' },
          { name: '诊断记录' }
        ]
			}
		},
		methods: {
      handelItem (index) {
        this.selectIndex = index
      }
		}
	}
</script>

<style lang="less" scoped>
	.content {
		width: 100vw;
    height: calc(100vh - 44px);
    background: #d5d5d5;
    display: flex;
    flex-direction: column;
    .nav_list {
      display: flex;
      justify-content: space-between;
      .list {
        width: 50%;
        display: flex;
        justify-content: center;
        height: 40px;
        align-items: center;
        &.active {
          background: #fff;
          color: #429497;
        }
      }
    }
    .box1, .box2 {
      flex: 1;
      background: #fff;
    }
    .box2 {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ddd;
    }
	}
</style>
