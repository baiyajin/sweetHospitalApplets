<template>
	<view class="content">
		<view>
			<image class="padding_top_bottom_10" mode="widthFix" src="~@/static/CC_10.png"></image>
		</view>
		<view>
			<swiper
					:style="{width: width + 'px'}"
					class="swiper"
					:indicator-dots="indicatorDots"
					indicator-color="white"
					indicator-active-color="#00adaf"
					:autoplay="autoplay"
					:interval="interval"
					:duration="duration">
				<swiper-item>
					<image class="ele_center" mode="aspectFit" src="~@/static/CC_13.jpg"></image>
				</swiper-item>
				<swiper-item>
					<image class="ele_center" mode="aspectFit" src="~@/static/CC_13.jpg"></image>
				</swiper-item>
				<swiper-item>
					<image class="ele_center" mode="aspectFit" src="~@/static/CC_13.jpg"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="uni-flex padding_top_bottom_10">
			<view class="flex-item" style="width: 110px;">
				<image style="width: 80px;" mode="widthFix" src="~@/static/CC_23.png"></image>
			</view>
			<view class="flex-item" style="width: 100%;height: 70px;">
				<view v-for="(i, d) in message" :key="d" class="swiper_item">
					<view class="title">{{i.title}}</view>
					<view class="content">{{i.content}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				message: [
					{title: '复诊提醒', content: '2020年12月20日需进行复诊复诊进行复诊复诊'},
					{title: '日常护理', content: '要御寒保暖，保护身体，免受免受'},
					{title: '日常护理', content: '洗脸时注意眼睑及睫毛之清洁，用，用'},
					{title: '复诊提醒', content: '2020年12月20日需进行复诊复诊'},
					{title: '复诊提醒', content: '2020年12月20日需进行复诊复诊'},
					{title: '复诊提醒', content: '2020年12月20日需进行复诊复诊'},
					{title: '复诊提醒', content: '2020年12月20日需进行复诊复诊'},
					{title: '日常护理', content: '洗脸时注意眼睑及睫毛之清洁，用，用'}
				],
				width: 0,
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		onLoad() {
			this.width = document.body.clientWidth
		},
		methods: {
			computedWidth (px) {
				return `calc(${this.width}px - ${px})`
			}
		}
	}
</script>

<style lang="less" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.swiper{
			height: 90px;
			/deep/.uni-swiper-dot-active{
				border: 2px solid white;
			}
		}
		.uni-flex{
			display: flex;
			width: 92%;
			.flex-item{
				height: 150px;
				overflow: scroll;
				.swiper_item{
					display: flex;
					font-size: 15px;
					top: 0;
					padding: 5px 0;
					.title{
						width: 120px;
						text-align: center;
						background: #00adaf;
						color: white;
						border-radius: 4px;
					}
					.content{
						width: 100%;
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
						padding: 0 10px;
					}
				}
			}
		}
	}
</style>
