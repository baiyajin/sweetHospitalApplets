<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row border">
				<text class="title">姓  名：</text>
				<input type="text" focus clearable v-model="UserName" placeholder="请输入姓名"></m-input>
			</view>
			<view class="input_line"></view>
			<view class="input-row border">
				<text class="title">性  别：</text>
				<input type="text" focus clearable v-model="UserName" placeholder="请输入性别"></m-input>
			</view>
			<view class="input_line"></view>
			<view class="input-row border">
				<text class="title">出生日期：</text>
				<input type="text" focus clearable v-model="UserName" placeholder="请输入出生日期："></m-input>
			</view>
			<view class="input_line"></view>
			<view class="input-row border">
				<text class="title">身份证号：</text>
				<input type="text" focus clearable v-model="UserName" placeholder="请输入身份证号"></m-input>
			</view>
			<view class="input_line"></view>
			<view class="input-row border">
				<text class="title">手 机 号：</text>
				<input type="text" focus clearable v-model="UserName" placeholder="请输入手机号"></m-input>
			</view>
			
		</view>
		<view class="btn-row">
			<button class="cu-btn bg-green block lg" @tap="register">确  定</button>
			<button class="cu-btn bg-green block lg canuer" @tap="register">取  消</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				UserName: '',
				password: '',
				email: ''
			}
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.content {
		.input-group {
			width: 93%;
			margin: 5px auto;
			border: 1px solid #e5e5e5;
			border-radius: 4px;
			padding: 5px;
			.input-row {
				display: flex;
				padding: 6px 8px;
				.title {
					color: #0b8e90;
				}
			}
			.input_line {
				border: 1px solid #e5e5e5;
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
