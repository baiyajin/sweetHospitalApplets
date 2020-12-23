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
			<view class="uni-flex-item" style="width: 150px">
				<image class="image_view ele_center" style="width: 80px;height:80px;" src="~@/static/CC_23.png"></image>
			</view>
			<view class="uni-flex-item">
				<view v-for="(i, d) in message" :key="d" class="list_view">
					<view class="status_view" v-if="!(d%2)"></view>
					<view class="title">{{i.title}}</view>
					<view class="content">{{i.content}}</view>
				</view>
			</view>
		</view>
		<view class="top_view">
			<view class="qz"></view>
			<view class="title_view2">日常预治小知识</view>
		</view>
		<view class="bottom_view">
			<view class="content_view" v-for="(item, index) in content" :key="index">
				<view class="circle"></view>
				<view class="title_view3">{{item}}</view>
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
				content: [
						'老花镜不能随便在路边买，和近视眼镜一样，要验光验配？',
						'做了近视手术后，就不能再做其他的眼睛手术了？',
						'角膜太薄，做不了近视激光手术，只能戴眼镜？',
						'得糖尿病久了，可能会失明？',
						'角膜移植和其他器官一样需要配对吗？',
						'散光只能戴眼镜，不能做手术矫正？',
					'老花镜不能随便在路边买，和近视眼镜一样，要验光验配？',
					'做了近视手术后，就不能再做其他的眼睛手术了？',
					'角膜太薄，做不了近视激光手术，只能戴眼镜？',
					'得糖尿病久了，可能会失明？',
					'角膜移植和其他器官一样需要配对吗？',
					'散光只能戴眼镜，不能做手术矫正？'
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
			.uni-flex-item{
				width: 100%;
				height: 120px;
				overflow: auto;
				.image_view{
				}
				.list_view{
					font-size: 15px;
					display: flex;
					margin: 5px 0 5px 10px;
					position: relative;
					.status_view{
						width: 10px;
						height: 10px;
						border-radius: 100%;
						background: red;
						position: absolute;
						left: -2.5px;
						top: -2.5px;
					}
					.title{
						width: 80px;
						background: #00adaf;
						color: white;
						text-align: center;
						border-radius: 5px;
						padding: 2px 0;
					}
					.content{
						margin-left: 5px;
						position: relative;
						width: 70%;
						display: inline !important;
						align-items: normal !important;
						white-space:nowrap;
						overflow:hidden;
						text-overflow:ellipsis;
					}
				}
			}
		}
		.top_view{
			margin-top: 10px;
			border-bottom: 1px solid #00adaf;
			padding-bottom: 15px;
			width: 90%;
			.qz{
				background: #00adaf;
				width: 4px;
				height:20px;
				display: inline-block;
				position: relative;
				top: 5px;
				border-radius: 5px;
			}
			.title_view2{
				display: inline-block;
				color: #00adaf;
				font-weight: bold;
				font-size: 16px;
				margin-left: 15px;
			}
		}
		.bottom_view{
			padding: 5px 20px;
			width: 90%;
			overflow: auto;
			.content_view{
				padding: 15px 0;
				display: flex;
				width: 100%;
				position: relative;
				border-bottom: 1px solid rgba(0, 0, 0, .1);
				.circle{
					background: #00adaf;
					width: 10px;
					height:10px;
					border-radius: 2px;
					display: inline-block;
					position: relative;
				}
				.title_view3{
					width: 90%;
					font-size: 15px;
					position: relative;
					white-space:nowrap;
					overflow:hidden;
					text-overflow:ellipsis;
					margin-left: 10px;
					margin-top: -5px;
				}
			}
		}
	}
</style>
