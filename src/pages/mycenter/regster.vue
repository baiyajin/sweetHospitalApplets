<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row border">
				<text class="title">姓  名：</text>
				<input type="text" focus clearable v-model="sufferName" placeholder="请输入姓名" />
			</view>
			<view class="input_line"></view>
			<view class="input-row border">
				<text class="title">性  别：</text>
				<!-- <input type="text" focus clearable v-model="sufferSex" placeholder="请输入性别" /> -->
				<picker mode="selector" @change="bindPickerSex" range-key="name" :value="index" :range="array">
          <view class="uni-input">{{ sufferSex == 0 ? '男' : (sufferSex == 1 ? '女' : '请选择性别')  }}</view>
        </picker>
			</view>
			<view class="input_line"></view>
			<view class="input-row border">
				<text class="title">出生日期：</text>
				<picker mode="date" :value="sufferBirthday" :start="startDate" :end="endDate" @change="bindDateChange">
        	<view class="uni-input">{{ sufferBirthday || '请选择出生日期' }}</view>
        </picker>
			</view>
			<view class="input_line"></view>
			<view class="input-row border">
				<text class="title">身份证号：</text>
				<input type="text" focus clearable v-model="sufferIdCard" @input="checkIdCard" placeholder="请输入身份证号" />
			</view>
			<view class="input_line"></view>
			<view class="input-row border">
				<text class="title">手 机 号：</text>
				<input type="text" focus clearable v-model="sufferPhone" @input="checkPhone" placeholder="请输入手机号" />
			</view>
			<!--<view class="input-row border">
				<text class="title">门 诊 号：</text>
				<input type="text" focus clearable v-model="sufferPhone" @input="checkPhone" placeholder="请输入门诊号" />
			</view>-->

		</view>
		<view class="btn-row">
			<button class="cu-btn bg-green block lg" @click="register">确  定</button>
			<button class="cu-btn bg-green block lg canuer" @tap="onreturn">取  消</button>
		</view>
		<my-custom-toast></my-custom-toast>
	</view>
</template>

<script>
  import { regster } from '@/api/modules/api.js'
  import { isPhone, verifyIdCards } from '@/utils/index.js'

  export default {
		data() {
			return {
				sufferName: '',
				sufferSex: undefined,
				sufferIdCard: '',
				sufferBirthday: '',
				sufferPhone: '',
				array: [{ name: '男', id: '0' }, { name: '女', id: '1' }],
				index: -1,
			}
		},
		computed: {
			hintContent: {
				get () {
					return this.$store.state.hintContent
				},
				set (val) {
					this.$store.commit('updateHintContent', val)
				}
			},
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
    	},
		methods: {
			checkPhone(value) {
				if (value.detail.value && !isPhone(value.detail.value)) {
					this.hintContent = '手机号格式不正确'
					return
				}
				this.hintContent = ''
			},
			checkIdCard(value) {
				if (value.detail.value && !verifyIdCards(value.detail.value).code) {
					this.hintContent = '身份证号码格式不正确'
					return
				}
				this.hintContent = ''
			},
			async register () {
				const { sufferName, sufferSex, sufferIdCard, sufferBirthday, sufferPhone } = this

				await regster({
					sufferName, sufferSex, sufferIdCard, sufferBirthday, sufferPhone
				})
				uni.navigateTo({
					url: '/pages/mycenter/login'
				})
			},
			onreturn () {
			  uni.navigateBack({
					delta: 1
			  })
			},
			bindDateChange (e) {
				this.sufferBirthday = e.target.value
			},
			bindPickerSex (e) {
				this.sufferSex = e.detail.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
						year = year - 60;
				} else if (type === 'end') {
						year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		}
	}
</script>

<style lang="less" scoped>
	.content {
		.input-group {
			width: 93%;
			margin: 5px auto;
			border: 1px solid #e5e5e5;
			border-radius: 10px;
			padding: 5px;
			.input-row {
				display: flex;
				padding: 20px 8px;
				.title {
					color: #0b8e90;
					font-size: 16px;
					font-weight: bold;
					width: 30%;
					::before{
						content: "*";
						color: #f56c6c;
						margin-right: 4px;
					}
				}
				input, uni-picker{
					width: 70%;
				}
			}
			.uni-input {
				color: grey;
				font-size: 16px;
			}
			.input_line {
				border: 0.5px solid #e5e5e5;
				width: 95%;
				margin: auto;
			}
		}
		.btn-row {
			display: flex;
			.cu-btn {
				width: 40%;
				margin: 30px auto;
				background: #00adaf;
				color: #fff;
				border-radius: 32px;
				height: 35px;
				line-height: 35px;
				box-shadow: 3px 0 3px #e5e5e5;
			}
			.canuer {
				background: #aaaaaa;
			}
		}

	}
</style>
