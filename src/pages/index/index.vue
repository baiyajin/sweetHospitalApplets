<template>
	<view class="content">
		<view>
			<image class="padding_top_bottom_10" mode="widthFix" src="~@/static/CC_10.png"></image>
		</view>
		<view style="position: relative;width: 100%;">
			<swiper
				class="swiper"
				:indicator-dots="indicatorDots"
				indicator-color="white"
				indicator-active-color="#00adaf"
				:autoplay="autoplay"
				:interval="interval"
				:duration="duration">
				<swiper-item @tap.stop="handDetail(1)">
					<image class="ele_center" mode="aspectFit" src="~@/static/benner_01.png"></image>
				</swiper-item>
				<swiper-item @tap.stop="handDetail(2)">
					<image class="ele_center" mode="aspectFit" src="~@/static/benner_02.png"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="uni-flex padding_top_bottom_10">
			<view class="uni-flex-item" style="width: 150px">
				<image class="image_view ele_center" style="width: 80px;height:70px;" src="~@/static/CC_23.png"></image>
			</view>
			<view class="uni-flex-item" v-if="message.length">
				<view v-for="(i, d) in message" :key="d" class="list_view">
					<view class="status_view" v-if="!(d%2)"></view>
					<view class="title">{{i.title}}</view>
					<view class="content">{{i.content}}</view>
				</view>
			</view>
			<view class="uni-flex-item" v-else>
				<view v-for="(i, d) in message2" :key="d" class="list_view">
					<view class="title">{{i.title}}</view>
					<view class="content no_data">{{i.content}}</view>
				</view>
			</view>
			<view class="all_div">
				<view class="ele_center">
					<image class="image_view" src="~@/static/CC_29.png"></image>
					<view class="text_view">全部</view>
				</view>
			</view>
		</view>
		<view class="top_view">
			<view class="qz"></view>
			<view class="title_view2">日常预治小知识</view>
		</view>
		<view class="bottom_view">
			<view class="content_view" v-for="(item, index) in content" @tap="handDetail(index + 3)" :key="index">
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
					// {title: '复诊提醒', content: '2020年12月20日需进行复诊复诊进行复诊复诊'},
					// {title: '日常护理', content: '要御寒保暖，保护身体，免受免受'},
					// {title: '日常护理', content: '洗脸时注意眼睑及睫毛之清洁，用，用'},
					// {title: '复诊提醒', content: '2020年12月20日需进行复诊复诊'},
					// {title: '复诊提醒', content: '2020年12月20日需进行复诊复诊'},
					// {title: '复诊提醒', content: '2020年12月20日需进行复诊复诊'},
					// {title: '复诊提醒', content: '2020年12月20日需进行复诊复诊'},
					// {title: '日常护理', content: '洗脸时注意眼睑及睫毛之清洁，用，用'}
				],
				message2: [
					{title: '复诊提醒', content: '暂无提醒'},
					{title: '日常护理', content: '暂无提醒'}
				],
				content: [
						'你知道吗? 眼睑也有螨虫~',
						'“睛”神漫画 | 干眼症会影响视力吗？',
						'『干眼症』不只是眼干这么简单',
						'我国蠕形螨睑缘炎诊断和治疗专家共识',
						'提醒丨秋季干眼症频发 欲哭“无泪”！',
				],
				width: 0,
				indicatorDots: true,
				autoplay: false,
				interval: 2000,
				duration: 500
			}
		},
		async onLoad() {
			this.width = document.body.clientWidth
		},
		methods: {
			computedWidth (px) {
				return `calc(${this.width}px - ${px})`
			},
			handDetail (type) {
				uni.navigateTo({
					url: `/pages/webview/index?type=${type}`
				})
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
		.common_div{
			position: absolute;
			width: 100%;
			height: 100%;
		}
		.swiper{
			width: 100%;
			/deep/.uni-swiper-dot-active{
				border: 2px solid white;
			}
			/deep/.uni-swiper-dots{
				bottom: 20%;
			}
			.ele_center{
				width: 100%;
			}
		}
		.uni-flex{
			display: flex;
			width: 100%;
			.uni-flex-item{
				width: 80%;
				height: 120px;
				overflow: auto;
				.list_view{
					font-size: 15px;
					display: flex;
					margin: 10% 0 10% 10px;
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
					.no_data{
						color: gray;
					}
				}
			}
			.all_div{
				width: 20%;
				height: 120px;
				z-index: 9;
				position: relative;
				.ele_center{
					.image_view{
						left: 50%;
						transform: translate(-50%, 0);
						width: 28px;
						height: 16px;
					}
					.text_view{
						text-align: center;
						font-size: 16px;
						color: #00adaf;
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
			margin-bottom: 10px;
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
