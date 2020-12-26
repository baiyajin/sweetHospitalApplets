<template>
  <!-- 消息详情 -->
  <view class="content">
	   复诊提醒
	请于{{content.date}} 到 {{content.title}}
  </view>
</template>

<script>
export default {
  data() {
    return {
		content: []
	};
  },
  methods: {
	 onLoad (option) {
		this.content = JSON.parse(option.data)
		
	}
  },
};
</script>

<style lang="less" scoped>
.content {
  height: calc(100vh - 44px);
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 30upx;
  }
</style>
