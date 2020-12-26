<template>
	<view class="content">
		<view class="bottom_view">
			<view class="content_view">
				<view class="name_1">自测地点：</view>
				<view class="name_button">
					<view class="button_view" :class="current === 0 ? 'activeButton' : ''" @click="setStyle(0)">居家自测</view>
					<view class="button_view" :class="current === 1 ? 'activeButton' : ''" @click="setStyle(1)">到院自测</view>
				</view>
			</view>
			<view class="content_view">
				<view class="name_1">自测时间：</view>
				<view class="name_button">
					<view class="time_view">{{returnTimes()}}</view>
				</view>
			</view>
		</view>
		<view>
			<view class="top_view_2" >
				<view class="qz"></view>
				<view class="title_view2">眼部症状</view>
				<view class="title_view3">过去一周内眼睛是否感受到以下不适？</view>
			</view>

			<view class="bottom_view_2">
				<table class="table_view">
					<tr>
						<th></th>
						<th v-for="(item, index) in options" :key="index">{{ item.name }}</th>
					</tr>
					
					<tr v-for="(item, index) in data" :key="index">
						<th>{{ item.title }}</th>
						<th v-for="(value, key) in item.list" :key="key">
							<view :id="'id1' + index + key" @tap="handselect('id1', index, key, value)" class="cicle"></view>
						</th>
					</tr>
				</table>
			</view>

			<view class="top_view_2" >
				<view class="qz"></view>
				<view class="title_view2">视觉功能</view>
				<view class="title_view3">过去一周内眼睛是否感受到以下不适？</view>
			</view>

			<view class="bottom_view_2">
				<table class="table_view">
					<tr>
						<th></th>
						<th v-for="(item, index) in options" :key="index">{{ item.name }}</th>
					</tr>
					
					<tr v-for="(item, index) in data1" :key="index">
						<th>{{ item.title }}</th>
						<th class="center" v-for="(value, key) in item.list" :key="key">
							<view :id="'id2' + index + key" @tap="handselect('id2', index, key, value)" class="cicle"></view>
						</th>
					</tr>
				</table>
			</view>

			<view class="top_view_2" >
				<view class="qz"></view>
				<view class="title_view2">环境触发因素</view>
				<view class="title_view3">过去一周内眼睛是否感受到以下不适？</view>
			</view>

			<view class="bottom_view_2">
				<table class="table_view">
					<tr>
						<th></th>
						<th v-for="(item, index) in options" :key="index">{{ item.name }}</th>
					</tr>
					
					<tr v-for="(item, index) in data2" :key="index">
						<th>{{ item.title }}</th>
						<th class="center" v-for="(dd, key) in item.list" :key="dd.id">
							<view :id="'id3' + index + key" @click="handselect('id3', index, key, dd)" class="cicle"></view>
						</th>
					</tr>
				</table>
			</view>
		</view>

		<view @tap="handSubmit" class="submit_view">提 交</view>
		<view style="margin-bottom: 10px;"></view>
	</view>
</template>

<script>
	import _ from 'loadsh'
	import {getCurrentTime} from '@/utils'
	import { typeList, submit } from '@/api/modules/api.js'
	export default {
		data() {
			return {
				current: 0,
				options: [
					{ name: '全部时间' },
					{ name: '大部分时间' },
					{ name: '一半时间' },
					{ name: '少部分时间' },
					{ name: '无' },
				],
				data: [],
				data1: [],
				data2: [],
				id1: [],
				id2: [],
				id3: [],
				form: {
					id: '',
					list: [],
					selfExamineDate: this.returnTimes(),
					selfExamineTypeCode: undefined,
					selfExamineTypeName: undefined,
					sufferIdCard: undefined,
					sufferName: undefined,
					sufferPhone: undefined,
					// sufferWechatOpenid: '',
					// sufferWechatNum: '',
					// sufferWechatName: ''
				}
			}
		},
		computed: {
			type () {
				return this.current === 0 ? 'athome' : 'athosp'
			}
		},
		onShow () {
			this.fetchList()
		},
		methods: {
			returnTimes () {
				return `${getCurrentTime('all')}`
			},
			setStyle (current) {
				this.current = current
				this.fetchList()
			},
			async handSubmit () {

				const userinfo = JSON.parse(localStorage.getItem('userinfo'))
				if (!userinfo) {
					uni.navigateTo({
						url:'/pages/mycenter/login'
					})
					return
				}
				this.form.selfExamineTypeCode = this.type
				this.form.selfExamineTypeName = this.type === 'athome' ? '居家自测' : '到院自测'
				this.form.sufferIdCard = userinfo.sufferIdCard
				this.form.sufferName = userinfo.sufferName
				this.form.sufferPhone = userinfo.sufferPhone

				const { data } = await submit(this.form)


				uni.navigateTo(
					{ url: `/pages/eyeSelfTest/scop?code=${data}` }
				)

			},
			handselect (key, start, end, dd) {
				this.id1 = key
				const id = key + start + end
				const cc = start + '' + end
				dd.id = undefined
				dd.infoId = ''
				dd.selfExamineTypeCode = undefined
				dd.selfExamineTypeName = undefined
				dd.isEnable = undefined
				this.form.list.push(dd)
				if (key == 'id1') {
					if (start == 0 && end == 0) {
						document.getElementById('id101').className = 'cicle'
						document.getElementById('id102').className = 'cicle'
						document.getElementById('id103').className = 'cicle'
						document.getElementById('id104').className = 'cicle'			
					} else if (start == 0 && end == 1) {
						document.getElementById('id100').className = 'cicle'
						document.getElementById('id102').className = 'cicle'
						document.getElementById('id103').className = 'cicle'
						document.getElementById('id104').className = 'cicle'							
					} else if (start == 0 && end == 2) {
						document.getElementById('id100').className = 'cicle'
						document.getElementById('id101').className = 'cicle'
						document.getElementById('id103').className = 'cicle'
						document.getElementById('id104').className = 'cicle'	
					} else if (start == 0 && end == 3) {
						document.getElementById('id100').className = 'cicle'
						document.getElementById('id101').className = 'cicle'
						document.getElementById('id102').className = 'cicle'
						document.getElementById('id104').className = 'cicle'	
					} else if (start == 0 && end == 4) {
						document.getElementById('id100').className = 'cicle'
						document.getElementById('id101').className = 'cicle'
						document.getElementById('id102').className = 'cicle'
						document.getElementById('id103').className = 'cicle'	
					} else if (start == 1 && end == 0) {
						document.getElementById('id114').className = 'cicle'
						document.getElementById('id111').className = 'cicle'
						document.getElementById('id112').className = 'cicle'
						document.getElementById('id113').className = 'cicle'	
					} else if (start == 1 && end == 1) {
						document.getElementById('id114').className = 'cicle'
						document.getElementById('id110').className = 'cicle'
						document.getElementById('id112').className = 'cicle'
						document.getElementById('id113').className = 'cicle'	
					} else if (start == 1 && end == 2) {
						document.getElementById('id114').className = 'cicle'
						document.getElementById('id110').className = 'cicle'
						document.getElementById('id111').className = 'cicle'
						document.getElementById('id113').className = 'cicle'	
					}  else if (start == 1 && end == 3) {
						document.getElementById('id114').className = 'cicle'
						document.getElementById('id110').className = 'cicle'
						document.getElementById('id111').className = 'cicle'
						document.getElementById('id112').className = 'cicle'	
					} else if (start == 1 && end == 4) {
						document.getElementById('id112').className = 'cicle'
						document.getElementById('id110').className = 'cicle'
						document.getElementById('id111').className = 'cicle'
						document.getElementById('id113').className = 'cicle'	
					} else if (start == 2 && end == 0) {
						document.getElementById('id124').className = 'cicle'
						document.getElementById('id121').className = 'cicle'
						document.getElementById('id122').className = 'cicle'
						document.getElementById('id123').className = 'cicle'	
					} else if (start == 2 && end == 1) {
						document.getElementById('id124').className = 'cicle'
						document.getElementById('id120').className = 'cicle'
						document.getElementById('id122').className = 'cicle'
						document.getElementById('id123').className = 'cicle'	
					} else if (start == 2 && end == 2) {
						document.getElementById('id124').className = 'cicle'
						document.getElementById('id120').className = 'cicle'
						document.getElementById('id121').className = 'cicle'
						document.getElementById('id123').className = 'cicle'	
					}  else if (start == 2 && end == 3) {
						document.getElementById('id124').className = 'cicle'
						document.getElementById('id120').className = 'cicle'
						document.getElementById('id121').className = 'cicle'
						document.getElementById('id122').className = 'cicle'	
					} else if (start == 2 && end == 4) {
						document.getElementById('id122').className = 'cicle'
						document.getElementById('id120').className = 'cicle'
						document.getElementById('id121').className = 'cicle'
						document.getElementById('id123').className = 'cicle'	
					}
				} else if (key == 'id2') {
					if (start == 0 && end == 0) {
						document.getElementById('id201').className = 'cicle'
						document.getElementById('id202').className = 'cicle'
						document.getElementById('id203').className = 'cicle'
						document.getElementById('id204').className = 'cicle'			
					} else if (start == 0 && end == 1) {
						document.getElementById('id200').className = 'cicle'
						document.getElementById('id202').className = 'cicle'
						document.getElementById('id203').className = 'cicle'
						document.getElementById('id204').className = 'cicle'							
					} else if (start == 0 && end == 2) {
						document.getElementById('id200').className = 'cicle'
						document.getElementById('id201').className = 'cicle'
						document.getElementById('id203').className = 'cicle'
						document.getElementById('id204').className = 'cicle'	
					} else if (start == 0 && end == 3) {
						document.getElementById('id200').className = 'cicle'
						document.getElementById('id201').className = 'cicle'
						document.getElementById('id202').className = 'cicle'
						document.getElementById('id204').className = 'cicle'	
					} else if (start == 0 && end == 4) {
						document.getElementById('id200').className = 'cicle'
						document.getElementById('id201').className = 'cicle'
						document.getElementById('id202').className = 'cicle'
						document.getElementById('id203').className = 'cicle'	
					} else if (start == 1 && end == 0) {
						document.getElementById('id214').className = 'cicle'
						document.getElementById('id211').className = 'cicle'
						document.getElementById('id212').className = 'cicle'
						document.getElementById('id213').className = 'cicle'	
					} else if (start == 1 && end == 1) {
						document.getElementById('id214').className = 'cicle'
						document.getElementById('id210').className = 'cicle'
						document.getElementById('id212').className = 'cicle'
						document.getElementById('id213').className = 'cicle'	
					} else if (start == 1 && end == 2) {
						document.getElementById('id214').className = 'cicle'
						document.getElementById('id210').className = 'cicle'
						document.getElementById('id211').className = 'cicle'
						document.getElementById('id213').className = 'cicle'	
					}  else if (start == 1 && end == 3) {
						document.getElementById('id214').className = 'cicle'
						document.getElementById('id210').className = 'cicle'
						document.getElementById('id211').className = 'cicle'
						document.getElementById('id212').className = 'cicle'	
					} else if (start == 1 && end == 4) {
						document.getElementById('id212').className = 'cicle'
						document.getElementById('id210').className = 'cicle'
						document.getElementById('id211').className = 'cicle'
						document.getElementById('id213').className = 'cicle'	
					} else if (start == 2 && end == 0) {
						document.getElementById('id224').className = 'cicle'
						document.getElementById('id221').className = 'cicle'
						document.getElementById('id222').className = 'cicle'
						document.getElementById('id223').className = 'cicle'	
					} else if (start == 2 && end == 1) {
						document.getElementById('id224').className = 'cicle'
						document.getElementById('id220').className = 'cicle'
						document.getElementById('id222').className = 'cicle'
						document.getElementById('id223').className = 'cicle'	
					} else if (start == 2 && end == 2) {
						document.getElementById('id224').className = 'cicle'
						document.getElementById('id220').className = 'cicle'
						document.getElementById('id221').className = 'cicle'
						document.getElementById('id223').className = 'cicle'	
					}  else if (start == 2 && end == 3) {
						document.getElementById('id224').className = 'cicle'
						document.getElementById('id220').className = 'cicle'
						document.getElementById('id221').className = 'cicle'
						document.getElementById('id222').className = 'cicle'	
					} else if (start == 2 && end == 4) {
						document.getElementById('id222').className = 'cicle'
						document.getElementById('id220').className = 'cicle'
						document.getElementById('id221').className = 'cicle'
						document.getElementById('id223').className = 'cicle'	
					}	else if (start == 3 && end == 0) {
						document.getElementById('id234').className = 'cicle'
						document.getElementById('id231').className = 'cicle'
						document.getElementById('id232').className = 'cicle'
						document.getElementById('id233').className = 'cicle'	
					} else if (start == 3 && end == 1) {
						document.getElementById('id234').className = 'cicle'
						document.getElementById('id230').className = 'cicle'
						document.getElementById('id232').className = 'cicle'
						document.getElementById('id233').className = 'cicle'	
					} else if (start == 3 && end == 2) {
						document.getElementById('id234').className = 'cicle'
						document.getElementById('id230').className = 'cicle'
						document.getElementById('id231').className = 'cicle'
						document.getElementById('id233').className = 'cicle'	
					}  else if (start == 3 && end == 3) {
						document.getElementById('id234').className = 'cicle'
						document.getElementById('id230').className = 'cicle'
						document.getElementById('id231').className = 'cicle'
						document.getElementById('id232').className = 'cicle'	
					} else if (start == 3 && end == 4) {
						document.getElementById('id232').className = 'cicle'
						document.getElementById('id230').className = 'cicle'
						document.getElementById('id231').className = 'cicle'
						document.getElementById('id233').className = 'cicle'	
					}	else if (start == 4 && end == 0) {
						document.getElementById('id244').className = 'cicle'
						document.getElementById('id241').className = 'cicle'
						document.getElementById('id242').className = 'cicle'
						document.getElementById('id233').className = 'cicle'	
					} else if (start == 4 && end == 1) {
						document.getElementById('id244').className = 'cicle'
						document.getElementById('id240').className = 'cicle'
						document.getElementById('id242').className = 'cicle'
						document.getElementById('id243').className = 'cicle'	
					} else if (start == 4 && end == 2) {
						document.getElementById('id244').className = 'cicle'
						document.getElementById('id240').className = 'cicle'
						document.getElementById('id241').className = 'cicle'
						document.getElementById('id243').className = 'cicle'	
					}  else if (start == 4 && end == 3) {
						document.getElementById('id244').className = 'cicle'
						document.getElementById('id240').className = 'cicle'
						document.getElementById('id241').className = 'cicle'
						document.getElementById('id242').className = 'cicle'	
					} else if (start == 4 && end == 4) {
						document.getElementById('id242').className = 'cicle'
						document.getElementById('id240').className = 'cicle'
						document.getElementById('id241').className = 'cicle'
						document.getElementById('id243').className = 'cicle'	
					}		else if (start == 5 && end == 0) {
						document.getElementById('id254').className = 'cicle'
						document.getElementById('id251').className = 'cicle'
						document.getElementById('id252').className = 'cicle'
						document.getElementById('id253').className = 'cicle'	
					} else if (start == 5 && end == 1) {
						document.getElementById('id254').className = 'cicle'
						document.getElementById('id250').className = 'cicle'
						document.getElementById('id252').className = 'cicle'
						document.getElementById('id253').className = 'cicle'	
					} else if (start == 5 && end == 2) {
						document.getElementById('id254').className = 'cicle'
						document.getElementById('id250').className = 'cicle'
						document.getElementById('id251').className = 'cicle'
						document.getElementById('id253').className = 'cicle'	
					}  else if (start == 5 && end == 3) {
						document.getElementById('id254').className = 'cicle'
						document.getElementById('id250').className = 'cicle'
						document.getElementById('id251').className = 'cicle'
						document.getElementById('id252').className = 'cicle'	
					} else if (start == 5 && end == 4) {
						document.getElementById('id252').className = 'cicle'
						document.getElementById('id250').className = 'cicle'
						document.getElementById('id251').className = 'cicle'
						document.getElementById('id253').className = 'cicle'	
					}					
				} else if (key == 'id3') {
					if (start == 0 && end == 0) {
						document.getElementById('id301').className = 'cicle'
						document.getElementById('id302').className = 'cicle'
						document.getElementById('id303').className = 'cicle'
						document.getElementById('id304').className = 'cicle'			
					} else if (start == 0 && end == 1) {
						document.getElementById('id300').className = 'cicle'
						document.getElementById('id302').className = 'cicle'
						document.getElementById('id303').className = 'cicle'
						document.getElementById('id304').className = 'cicle'							
					} else if (start == 0 && end == 2) {
						document.getElementById('id300').className = 'cicle'
						document.getElementById('id301').className = 'cicle'
						document.getElementById('id303').className = 'cicle'
						document.getElementById('id304').className = 'cicle'	
					} else if (start == 0 && end == 3) {
						document.getElementById('id300').className = 'cicle'
						document.getElementById('id301').className = 'cicle'
						document.getElementById('id302').className = 'cicle'
						document.getElementById('id304').className = 'cicle'	
					} else if (start == 0 && end == 4) {
						document.getElementById('id300').className = 'cicle'
						document.getElementById('id301').className = 'cicle'
						document.getElementById('id302').className = 'cicle'
						document.getElementById('id303').className = 'cicle'	
					} else if (start == 1 && end == 0) {
						document.getElementById('id314').className = 'cicle'
						document.getElementById('id311').className = 'cicle'
						document.getElementById('id312').className = 'cicle'
						document.getElementById('id313').className = 'cicle'	
					} else if (start == 1 && end == 1) {
						document.getElementById('id314').className = 'cicle'
						document.getElementById('id310').className = 'cicle'
						document.getElementById('id312').className = 'cicle'
						document.getElementById('id313').className = 'cicle'	
					} else if (start == 1 && end == 2) {
						document.getElementById('id314').className = 'cicle'
						document.getElementById('id310').className = 'cicle'
						document.getElementById('id311').className = 'cicle'
						document.getElementById('id313').className = 'cicle'	
					}  else if (start == 1 && end == 3) {
						document.getElementById('id314').className = 'cicle'
						document.getElementById('id310').className = 'cicle'
						document.getElementById('id311').className = 'cicle'
						document.getElementById('id312').className = 'cicle'	
					} else if (start == 1 && end == 4) {
						document.getElementById('id312').className = 'cicle'
						document.getElementById('id310').className = 'cicle'
						document.getElementById('id311').className = 'cicle'
						document.getElementById('id313').className = 'cicle'	
					} else if (start == 2 && end == 0) {
						document.getElementById('id324').className = 'cicle'
						document.getElementById('id321').className = 'cicle'
						document.getElementById('id322').className = 'cicle'
						document.getElementById('id323').className = 'cicle'	
					} else if (start == 2 && end == 1) {
						document.getElementById('id324').className = 'cicle'
						document.getElementById('id320').className = 'cicle'
						document.getElementById('id322').className = 'cicle'
						document.getElementById('id323').className = 'cicle'	
					} else if (start == 2 && end == 2) {
						document.getElementById('id324').className = 'cicle'
						document.getElementById('id320').className = 'cicle'
						document.getElementById('id321').className = 'cicle'
						document.getElementById('id323').className = 'cicle'	
					}  else if (start == 2 && end == 3) {
						document.getElementById('id324').className = 'cicle'
						document.getElementById('id320').className = 'cicle'
						document.getElementById('id321').className = 'cicle'
						document.getElementById('id322').className = 'cicle'	
					} else if (start == 2 && end == 4) {
						document.getElementById('id322').className = 'cicle'
						document.getElementById('id320').className = 'cicle'
						document.getElementById('id321').className = 'cicle'
						document.getElementById('id323').className = 'cicle'	
					}
				}
				const el = document.getElementById(id)
				if (el.className === 'active') {
					el.className = 'cicle'
				} else {
					el.className = 'active'
				}
			},
			async fetchList () {
				this.data = (await typeList(`${this.type}/eyeSymptoms`)).data
				this.data1 = (await typeList(`${this.type}/visualFunction`)).data
				this.data2 = (await typeList(`${this.type}/environmentalTriggers`)).data
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
						font-size: 12px;
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

				}
				.cicle {
					width: 15px;
					height: 15px;
					border-radius: 50%;
					border: 1px solid #ddd;
					margin: 0 auto;
				}
				.active {
					width: 15px;
					height: 15px;
					border-radius: 50%;
					border: 1px solid #ddd;	
					background: #00adaf;
					margin: 0 auto;
				}
				// .center {
				// 	display: flex;
				// 	justify-content: center;
				// 	align-items: center;
				// }
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
/deep/.uni-radio-input{
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
</style>
