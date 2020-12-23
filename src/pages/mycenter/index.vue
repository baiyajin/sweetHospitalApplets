<template>
  <view class="content">
    <view v-if="!isLogin" class="loginContent">
      <view class="loginContent1">
        <view class="header_img"
          ><image src="~@/static/CC_55.png"></image
        ></view>
        <view class="erse">欢迎使用</view>
        <view class="erse margin_left_10">
          <navigator url="pages/mycenter/regster" open-type="navigate">
			 <view class="uni-link-item"> 登录/注册</view>
          </navigator>
        </view>
        <view class="erse erse1"
          ><image src="~@/static/CC_52.png"></image
        ></view>
      </view>
      <view class="loginContent2">
        <view class="loginContent2_div">
          <view class="conetns_left"
            ><view class="conetns_left_img"
              ><image src="~@/static/CC_43.png"></image
            ></view>
            <view class="conetns_left_font">关于系统</view></view
          >
          <view class="conetns_right"
            ><image src="~@/static/CC_62.png"></image
          ></view>
        </view>
      </view>
    </view>
    <!-- 登录 -->
    <view v-else class="loginContent">
      <view class="loginContent1">
        <view class="header_img"
          ><image src="~@/static/CC_55.png"></image
        ></view>
        <view class="erse">
          <view class="">xxx</view>
          <view class="">男 36岁</view>
        </view>
        <view class="erse margin_left_10 Certification">
          <image src="~@/static/CC_38.png"></image>
        </view>
        <view class="erse erse1"
          ><image src="~@/static/CC_52.png"></image
        ></view>
      </view>
      <view class="loginContent2">
        <view class="loginContent2_div">
          <view class="conetns_left"
            ><view class="conetns_left_img"
              ><image src="~@/static/CC_49.png"></image
            ></view>
            <view class="conetns_left_font">干眼管理</view></view
          >
          <view class="conetns_right"
            ><image src="~@/static/CC_62.png"></image
          ></view>
        </view>
        <view class="loginContent2_div-line"></view>
        <view class="loginContent2_div">
          <view class="conetns_left"
            ><view class="conetns_left_img"
              ><image src="~@/static/CC_46.png"></image
            ></view>
            <view class="conetns_left_font">通知消息</view></view
          >
          <view class="conetns_right"
            ><image src="~@/static/CC_62.png"></image
          ></view>
        </view>
        <view class="loginContent2_div-line"></view>
        <view class="loginContent2_div">
          <view class="conetns_left"
            ><view class="conetns_left_img"
              ><image src="~@/static/CC_43.png"></image
            ></view>
            <view class="conetns_left_font">关于系统</view></view
          >
          <view class="conetns_right"
            ><image src="~@/static/CC_62.png"></image
          ></view>
        </view>
      </view>

      <button type="default" class="login_Outs">退出登录</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      message: [],
      width: 0,
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,
      isLogin: false,
    };
  },
  onLoad() {
    this.width = document.body.clientWidth;
  },
  methods: {
    computedWidth(px) {
      return `calc(${this.width}px - ${px})`;
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  .loginContent {
    width: 100%;
    height: 120px;
    padding: 10px;
    .login_Outs {
      width: 70%;
      margin: 30px auto;
      background: #00adaf;
      color: #fff;
      border-radius: 32px;
      height: 35px;
      line-height: 35px;
    }
  }
  .loginContent1 {
    background: linear-gradient(90deg, #00adaf, #00d7da);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    border-radius: 12px;
    box-shadow: 4px 0px 0px #00d7da;
    width: 90%;
    .header_img {
      width: 80px;
      height: 80px;
      margin: 8px;
      uni-image {
        display: contents;
      }
    }
    .margin_left_10 {
      margin-left: 15%;
    }
    .erse1 {
      margin-left: 1%;
      uni-image {
        display: contents;
      }
      width: 10px;
      height: 20px;
    }
    .Certification {
      width: 95px;
      height: 32px;
      uni-image {
        display: contents;
      }
    }
  }
  .loginContent2 {
    margin: 10px auto;
    width: 93%;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    padding: 0 8px;

    .loginContent2_div {
      margin: 10px 4px;
      align-items: center;
      display: flex;
    }
    .conetns_left {
      flex-grow: 1;
      display: flex;
      .conetns_left_img {
        width: 30px;
        height: 30px;
        uni-image {
          display: contents;
        }
      }
      .conetns_left_font {
        margin-left: 3%;
      }
    }
    .loginContent2_div-line {
      border: 1px solid #e5e5e5;
    }
    .conetns_right {
      width: 10px;
      height: 15px;
      uni-image {
        display: contents;
      }
    }
  }
}
</style>
