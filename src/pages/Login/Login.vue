<template>
  <div class="personal-wrap">
    <FongleHeader/>

    <div class="login-type-wrap" v-show="isShow">
      <div class="login-type">
        <div class="content">
          <div class="logo-wrap">
            <img src="./images/logo.png" alt="">
          </div>
          <div class="btn-wrap">
            <div class="w-button phone-button" @click="phoneLogin">
              <i class="b-icon icon-phone"></i>
              <span>手机号码登录</span>
            </div>
            <div class="w-button email-button" @click="emailLogin">
              <i class="b-icon icon-email"></i>
              <span>邮箱帐号登录</span>
            </div>
            <div class="btn">
              <span class="word-left">手机号快捷注册</span>
              <i class="icon-right"></i>
            </div>
          </div>
        </div>
        <div class="three-wrap">
          <div class="item-wrap">
            <span class="item">
              <i class="icon icon-wechat"></i>
              <span class="name">微信</span>
            </span>
          </div>
          <div class="item-wrap">
            <span class="item">
              <i class="icon icon-qq"></i>
              <span class="name">QQ</span>
            </span>
          </div>
          <div class="item-wrap">
            <span class="item">
              <i class="icon icon-weibo"></i>
              <span class="name">微博</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="login-container" v-show="!isShow">
      <div class="view" v-show="!loginWay">
        <div class="logo"><img src="./images/logo.png" alt=""></div>
        <div class="user-box"><input type="text" maxlength="11" placeholder="请输入手机号" v-model="phone">
          <div class="code-wrap"><input type="text" maxlength="6" placeholder="请输入短信验证码" v-model="code">
            <div class="test-code">
              <button :disabled="!rightPhone" class="code-btn" @click.prevent="getCode"
                      :class="{'right-phone': rightPhone}">{{computeTime > 0 ? `已发送${computeTime}s` : '获取验证码'}}
              </button>
            </div>
          </div>
        </div>
        <div class="btn-wrap">
          <div class="w-button phone-button" @click="login"><i class="b-icon icon-phone"></i><span>登录</span></div>
          <div class="w-button email-button" @click="phoneLogin"><i class="b-icon icon-email"></i><span>其他方式登录</span>
          </div>
          <div class="btn"><span class="word-left">手机号快捷注册</span><i class="icon-right"></i></div>
        </div>
      </div>
      <div class="view" v-show="loginWay">
        <div class="logo"><img src="./images/logo.png" alt=""></div>
        <div class="user-box"><input type="text" maxlength="11" placeholder="邮箱账号" v-model="email">
          <div class="code-wrap"><input type="text" maxlength="6" placeholder="密码" v-model="pwd"></div>
        </div>
        <div class="btn-wrap">
          <div class="w-button phone-button"><i class="b-icon icon-phone" @click="login"></i><span>登录</span></div>
          <div class="w-button email-button"><i class="b-icon icon-email" @click="emailLogin"></i><span>其他方式登录</span>
          </div>
        </div>
      </div>
    </div>

    <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"/>

  </div>
</template>

<script>
  import FongleHeader from '../../components/FongleHeader/FongleHeader.vue'
  import AlertTip from '../../components/AlertTip/AlertTip.vue'

  export default {
    data() {
      return {
        isShow: true,//是否显示登录页面
        loginWay: true, //切换登录的方式
        phone: '',
        code: '',
        computeTime: 0,//验证码计时开始时间
        email: '',
        pwd: '',
        alertText: '', // 提示文本
        alertShow: false //是否显示提示框
      }
    },
    computed: {
      //正则验证手机
      rightPhone() {
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods: {
      showAlert(alertText) {
        this.alertShow = true
        this.alertText = alertText
      },
      closeTip() {
        this.alertShow = false
        this.alertText = ''
      },
      phoneLogin() {
        this.isShow = !this.isShow
        this.loginWay = !this.loginWay
      },
      emailLogin() {
        this.isShow = !this.isShow
      },
      getCode() {
        if (!this.computeTime) {
          this.computeTime = 30
          this.intervalId = setInterval(() => {
            this.computeTime--
            if (this.computeTime <= 0) {
              clearInterval(this.intervalId)
            }
          }, 1000)
        }
      },
      //异步登录
      login() {
        let result
        const {phone, rightPhone, code, showAlert} = this
        if (!this.loginWay) {
          if (!rightPhone) {
            //电话格式错误
            showAlert('电话格式错误')
          } else if (!/^\d{6}$/.test(code)) {
            //验证码错误
            showAlert(验证码格式错误)
          } else {
            this.$router.replace('personal')
          }
        } else {
          const {email, pwd} = this
          if (!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(email)) {
            //用户名必修指定
            showAlert('邮箱格式错误')
          } else if (!pwd) {
            //密码必修指定
            showAlert('请输入密码')
          } else {
            this.$router.replace('./personal')
          }
        }
      },
    },


    components: {
      FongleHeader,
      AlertTip
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .personal-wrap
    .login-type-wrap
      background-color #F4F4F4
      position relative
      padding-top (88 /$rem)
      .login-type
        height 100%
        background #F2F5F4
        position relative
        .content
          padding-bottom (548 /$rem)
          .logo-wrap
            text-align center
            padding (160 /$rem 0)
            img
              width (268 /$rem)
              height (90 /$rem)
          .btn-wrap
            padding (0 40 /$rem)
            .w-button
              border-radius (6 /$rem)
              margin-bottom (32 /$rem)
              text-align center
              color #fff
              border 1px solid #b4282d
              font-size (28 /$rem)
              vertical-align middle
              &.phone-button
                height (94 /$rem)
                line-height (94 /$rem)
                background-color #b4282d
              &.email-button
                height (94 /$rem)
                line-height (94 /$rem)
                color #b4282d
              .b-icon
                position relative
                top (-2 /$rem)
                margin-right (10 /$rem)
                background-image url("./images/xb1.png")
                background-size (40 /$rem 290 /$rem)
                background-repeat no-repeat
                vertical-align middle
                width (40 /$rem)
                height (40 /$rem)
                display inline-block
                &.icon-phone
                  background-position (0 -50 /$rem)
                &.icon-email
                  background-position (0 0)
            .btn
              text-align center
              vertical-align middle
              font-size (28 /$rem)
              color #333
              .word-left
                display inline-block
              .icon-right
                display inline-block
                vertical-align bottom
                width (28 /$rem)
                height (28 /$rem)
                background-image url("./images/right.png")
                background-size 100% 100%
                background-repeat no-repeat
        .three-wrap
          position absolute
          left 0
          bottom (80 /$rem)
          width 100%
          text-align center
          .item-wrap
            display inline-block
            text-align center
            height (40 /$rem)
            padding-right (25 /$rem)
            border-right 1px solid #979797
            font-size 0
            &:last-child
              border none
            &:nth-child(2)
            .item
              display inline-block
              .icon
                vertical-align middle
                display inline-block
                width (40 /$rem)
                height (40 /$rem)
                background-size 100% 100%
                background-repeat no-repeat
                &.icon-wechat
                  background-image url("./images/wechat.png")
                &.icon-qq
                  background-image url("./images/qq.png")
                &.icon-weibo
                  background-image url("./images/weibo.png")
              .name
                vertical-align middle
                color #7F7F7F
                font-size (28 /$rem)
    .login-container
      padding-top (88 /$rem)
      .view
        .logo
          margin-top (150 /$rem)
          text-align center
          > img
            width (192 /$rem)
            height (64 /$rem)
        .user-box
          margin-top (100 /$rem)
          font-size (30 /$rem)
          padding (0 40 /$rem)
          input
            border-bottom 1px solid #d4d4d4
            padding-bottom (30 /$rem)
            padding-left (16 /$rem)
            width 100%
            margin (20 /$rem 0)
            outline 0
          .code-wrap
            position relative
            .test-code
              position absolute
              top (12 /$rem)
              right 0
              padding (10 /$rem)
              border-radius (10 /$rem)
              border 1px solid #333
              .code-btn
                border 0
                color #ccc
                background transparent
                font-size (30 /$rem)
                &.right-phone
                  color black
        .btn-wrap
          padding (100 /$rem 40 /$rem 0)
          .w-button
            border-radius (6 /$rem)
            margin-bottom (32 /$rem)
            text-align center
            color #fff
            border 1px solid #b4282d
            font-size (28 /$rem)
            vertical-align middle
            &.phone-button
              height (94 /$rem)
              line-height (94 /$rem)
              background-color #b4282d
            &.email-button
              height (94 /$rem)
              line-height (94 /$rem)
              color #b4282d
            .b-icon
              position relative
              top (-2 /$rem)
              margin-right (10 /$rem)
              background-image url("./images/xb1.png")
              background-size (40 /$rem 290 /$rem)
              background-repeat no-repeat
              vertical-align middle
              width (40 /$rem)
              height (40 /$rem)
              display inline-block
              &.icon-phone
                background-position (0 -50 /$rem)
              &.icon-email
                background-position (0 0)
          .btn
            text-align center
            font-size (28 /$rem)
            color #333
            .word-left
              display inline-block
            .icon-right
              display inline-block
              vertical-align bottom
              width (28 /$rem)
              height (28 /$rem)
              background-image url("./images/right.png")
              background-size 100% 100%
              background-repeat no-repeat
</style>
