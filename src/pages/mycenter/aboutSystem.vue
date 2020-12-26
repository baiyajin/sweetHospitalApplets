<template>
<!-- 关于系统 -->
	<view class="content">
		<view class="header_top">
			 <image src="~@/static/about.png" ></image>
			 <view>{{Version}}</view>
		</view>
		<view class="introduction">
			{{introduction}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Version: 'V1.0.1',
				introduction: `简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介
				简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介`
			}
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.content {
		.header_top {
			height: 500upx;
			background: #f0f0f0;
			text-align: center;
			padding: 30upx;
			color: #008a8c;
		}
		.introduction {
			padding: 50upx;
			font-size: 16px;
			text-indent:50upx;
		}
	}
</style>
