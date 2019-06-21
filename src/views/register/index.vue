<template>
  <login-layout :title=" active === 'login' ? '用户登录' : active === 'register'? '用户注册': '找回密码' ">
    <Login
      v-show="active === 'login'"
      @redirectToModule="active = $event"
    />
    <ForgotPassword
      v-show="active === 'register'"
      @redirectToModule="active = $event"
    />
    <RePassword
      v-show="active === 'reset'"
      @redirectToModule="active = $event"
    />
  </login-layout>
</template>

<script>
export function getUrlKey (name, source) {
  return decodeURIComponent((new RegExp(`[?|&]${name}=([^&;]+?)(&|#|;|$)`).test(source || location.href) ? RegExp.$1 : '').replace(/\+/g, '%20')) || null
}
import Layout from './Layout'
import ForgotPassword from './components/ForgotPassword.vue'
import RePassword from './components/rePassword.vue'
import Login from './components/Login'
export default {
  name: 'SignIn',

  components: {
    'login-layout': Layout,
    ForgotPassword,
    Login,
    RePassword
  },

  data () {
    return {
      active: ''
    }
  },

  methods: {},
  created () {
    console.log(this.$route.path)
    if (getUrlKey('type') === 'register') {
      this.active = 'register'
    } else {
      this.active = 'login'
    }
  }
}
</script>

<style lang="stylus">
  .login {
    &__form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: color-primary;
      .el-form-item {
        text-align left 
        &.login__code {
          position: relative;
          .login__verify {
            float: left;
            margin-right: -92px;
            padding-right: 92px;
          }
          .code-img {
            position: relative;
            margin-bottom: 2px;
            float: right;
            width: 80px;
          }
          &-img {
            position: absolute;
            right: 0;
            width: 30px;
            height: 50px;
            border: 1px solid red;
          }
        }
        &__label {
          font-size: 18px;
          padding: 0;
          text-align: center;
        }
      }
      .el-input__inner {
        color: color-text-primary;
        text-align: left !important;
        border: transparent;
        width: 360px;
        background #f5f5f5
      }
      .login__submit {
        display: block;
        margin: 0 auto;
        font-size: 16px;
        width 100%
        background: #FF4D4E;
        border none
        border-radius 0
      }
      .login__form-footer {
        margin-bottom: 20px;
        line-height: 20px;
        text-indent: 4px;
      }
    }
  }
</style>
