<template>
	<view class="content">
		<view class="bottom_view">
			<view class="content_view">
				<view class="name_1">自测地点：</view>
				<view class="name_button">
					<view class="button_view" :class="current === 0 ? 'activeButton' : ''" @click="setStyle(0)">到院自测</view>
					<view class="button_view" :class="current === 1 ? 'activeButton' : ''" @click="setStyle(1)">居家自测</view>
				</view>
			</view>
			<view class="content_view">
				<view class="name_1">自测时间：</view>
				<view class="name_button">
					<view class="time_view">{{returnTimes()}}</view>
				</view>
			</view>
		</view>
		<view v-for="(item, index) in data" :key="'data' + index">
			<view class="top_view_2">
				<view class="qz"></view>
				<view class="title_view2">{{item.t1}}</view>
				<view class="title_view3">{{item.t2}}</view>
			</view>
			<view class="bottom_view_2">
				<table class="table_view">
					<tr><!--tr 代表一行-->
						<th v-for="(item1, index1) in item.th" :key="'th' + index1">{{item1.name}}</th>
					</tr>
					<tr v-for="(item2, index2) in item.tr" :key="'tr' + index2">
						<th scope="row">{{item2.name}}</th>
						<td v-for="item3 in item.th.length - 1" :key="'td' + item3">
							<checkbox></checkbox>
						</td>
					</tr>
				</table>
			</view>
		</view>
		<view class="submit_view">提 交</view>
		<view style="margin-bottom: 10px;"></view>
	</view>
</template>

<script>
	import {getCurrentTime} from '@/utils'
	export default {
		data() {
			return {
				current: 0,
				data: [
					{
						t1: '眼部症状',
						t2: '过去一周内眼睛是否感受到以下不适？',
						th: [
							{id: 0, name: ''},
							{id: 1, name: '全部时间'},
							{id: 1, name: '大部分时间'},
							{id: 1, name: '一半时间'},
							{id: 1, name: '少部分时间'},
							{id: 1, name: '无'}
						],
						tr: [
							{id: 1, name: '对光敏感'},
							{id: 1, name: '感觉眼镜像进了沙子一样'},
							{id: 1, name: '眼睛疼痛'}
						]
					},
					{
						t1: '视觉功能',
						t2: '过去一周内眼睛是否感受到以下不适？',
						th: [
							{id: 0, name: ''},
							{id: 1, name: '全部时间'},
							{id: 1, name: '大部分时间'},
							{id: 1, name: '一半时间'},
							{id: 1, name: '少部分时间'},
							{id: 1, name: '无'}
						],
						tr: [
							{id: 1, name: '视力波动'},
							{id: 2, name: '视力差，看不清'},
							{id: 3, name: '读书、写字'},
							{id: 4, name: '夜间驾驶'},
							{id: 5, name: '玩电脑、游戏机'},
							{id: 6, name: '看电视'}
						]
					},
					{
						t1: '环境触发因素',
						t2: '过去一周内，眼睛在以下环境中是否感到不适？',
						th: [
							{id: 0, name: ''},
							{id: 1, name: '全部时间'},
							{id: 1, name: '大部分时间'},
							{id: 1, name: '一半时间'},
							{id: 1, name: '少部分时间'},
							{id: 1, name: '无'}
						],
						tr: [
							{id: 1, name: '刮风'},
							{id: 2, name: '在非常干燥的环境里'},
							{id: 3, name: '在开空调的房间'}
						]
					}
				]
			}
		},
		onLoad() {
		},
		methods: {
			returnTimes () {
				return `${getCurrentTime('all')}`
			},
			setStyle (current) {
				this.current = current
			}
		}
	}
</script>

<style lang="less" scoped>
	.content {
		.bottom_view{
			display: flex;
			width: 100%;
			.content_view{
				padding: 0 10px;
				width: 50%;
				.name_1{
					font-size: 16px;
					padding: 5px;
				}
				.name_button{
					display: flex;
					.button_view{
						font-size: 15px;
						font-weight: bold;
						background: rgba(0, 0, 0, .1);
						width: 50%;
						color: rgba(0, 0, 0, .5);
						padding: 5px 10px;
						text-align: center;
						margin: 5px;
						border: none;
						border-radius: 20px;
					}
					.activeButton{
						background: #c7f6f7;
						color: #00adaf;
					}
					.time_view{
						font-size: 15px;
						color: #00adaf;
						padding: 5px 0;
						text-align: left;
						margin: 5px 0;
					}
				}
			}
		}
		.top_view_2{
			margin: 20px 20px 0 20px;
			padding-bottom: 15px;
			width: 90%;
			border-bottom: 1px solid #2cbcbe;
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
			.title_view3{
				display: inline-block;
				color: #00adaf;
				font-weight: bold;
				font-size: 13px;
				margin-left: 15px;
			}
		}
		.bottom_view_2{
			.table_view{
				margin: auto;
				width: 90%;
				font-size: 15px;
				color: rgba(0, 0, 0, .5);
				background: #ebffff;
				border-collapse: collapse;
				th{
					border: 1px solid rgba(0, 0, 0, .1);
					padding: 10px;
				}
				tr{
					border: 1px solid rgba(0, 0, 0, .1);
				}
				td{
					border: 1px solid rgba(0, 0, 0, .1);
					text-align: center;
					/deep/.uni-checkbox-input{
						border-radius: 100%;
						width: 15px;
						height: 15px;
						color: #00adaf !important;
						&::before{
							position: absolute;
							top: 50%;
							left: 50%;
							transform: translate(-50%, -50%) scale(1.3);
						}
					}
				}
			}
		}
		.submit_view{
			text-align: center;
			padding: 10px;
			font-size: 15px;
			border-radius: 20px;
			margin: 20px;
			color: white;
			background: #00adaf;
		}
	}
</style>
