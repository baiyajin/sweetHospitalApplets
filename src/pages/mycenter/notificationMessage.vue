<template>
  <!-- 消息通知 -->
  <view class="content">
	  <view class="contentList" v-if="contentList.length != 0">
		 <view class="list" v-for="(item, index) in contentList" :key="index" @tap="change(item)">
			 <view class="title"><i class="messRed" v-if="index < 3"></i>{{item.title}}</view>
			 <view class="date">{{item.date}}</view>
		 </view>
	  </view>
	  <view class="noData" v-else>
		  	<view class="noData1">
				<image src="~@/static/NoData.png" ></image>
			 	<view class="titles">暂无数据</view>
			</view>
	  </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
		contentList: [
			{
				title: '2012年12月20日需进行复诊',
				date: '2013年2月2日'
			},
			{
				title: '2012年12月20日需进行复诊',
				date: '2013年2月2日'
			},
			{
				title: '2012年12月20日需进行复诊',
				date: '2013年2月2日'
			},
			{
				title: '2012年12月20日需进行复诊',
				date: '2013年2月2日'
			}
		]
	};
  },
  methods: {
	  change (data) {
 		uni.navigateTo({ url: '/pages/mycenter/messageDetail?data=' + JSON.stringify(data) })
	  }
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 100vw;
  height: calc(100vh - 44px);
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 15upx;
  .contentList {
	  background: #fff;
	  border-radius: 6px;
	  width: 92%;
	  border: 1px solid #d5d5d5;
	  padding: 15upx 15upx;
	  .list {
		  display: flex;
		  border-top: 1px solid #d5d5d5;
		  padding: 20upx;
		  &:first-child {
			  border-top: none
		  }
		  &:hover {
			  background: #f2fbfb;
		  }
		  .title {
			flex: 6.5;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			font-size: 32upx;
			text-indent: 20upx;
			position: relative;
			.messRed {
				position: absolute;
				background: #D10031;
				width: 20upx;
				height: 20upx;
				border-radius: 50%;
				left: 2upx;
			}
		  }
		  .date {
			font-size: 28upx;
			flex: 3.5;
			text-align: right;
			color: #666;
		  }
	  }

  }
  .noData {
	height: calc(100vh - 44px);
	justify-content: center;
	display: flex;
	align-items: center;
	justify-content: center;
	.noData1 {
		image {
			width: 380upx;
			height: 380upx;
		}
		.titles {
			text-align: center;
			color: #a6a6a7;
		}
	}
	 
  }
}
</style>
