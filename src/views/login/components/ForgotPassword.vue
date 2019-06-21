<template>
  <div class="loginPan">
    <div class="code">
      <!-- <img
        class="product__img"
        src="../../..//assets/images/common/code.png"
        alt=""
      > -->
    </div>
    <el-form
      :model="params"
      class="login__form"
    >
      <el-form-item>
        <el-input
          v-model="params.username"
          placeholder="请输入手机号"
          class="border--hidden"
          @keypress.native.enter="submit()"
        />
      </el-form-item>
      <el-form-item>
        <div>
          <el-input
            class="yzCode"
            v-model="params.code"
            placeholder="请输入验证码"
            @keypress.native.enter="submit()"
          />
          <span class="getcode">获取验证码</span>
        </div>

      </el-form-item>
      <el-form-item>
        <el-input
          v-model="params.password"
          type="password"
          placeholder="重置密码"
          @keypress.native.enter="submit()"
        />
      </el-form-item>
      <el-form-item
        label-width="0"
        class="login__form-footer"
      >
        <el-button
          type="primary"
          size="large"
          class="login__submit"
          :loading="loading"
          @click.stop="submit()"
        >确定</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
// import md5 from 'js-md5'
// import { signIn } from 'index/api'
// import { UPDATE_TOKEN } from 'store/mutation-types'
export default {
  name: 'LoginModule',

  computed: {
    loading() {
      // return this.$store.state.loading.loading
    }
  },
  created() {
    const username = localStorage.getItem('username') || ''
    const password = localStorage.getItem('password') || ''
    Object.assign(this.params, {
      username,
      password
    })
    if (username && password) {
      this.remember = 1
    }
  },

  data() {
    return {
      remember: 0,
      active: 'login',
      params: {
        username: '',
        password: '',
        code: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入手机号'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            validator: (rule, value, callback) => {
              return this.submit(callback)
            },
            trigger: 'submit'
          }
        ]
      }
    }
  },

  methods: {
    redirectToModule() {
      console.log('tag')
      this.$emit('redirectToModule', 'forgot')
    },
    createObjectURL(object) {
      // return (window.URL) ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object)
    },
    submit(callback) {
      // if (callback) {
      //   this.$refs.form.validateField('username', err => {
      //     if (err) return callback(new Error(err))
      //     this.submitLogin(this.params, callback)
      //   })
      // } else {
      //   this.$refs.form.validateField('username', err => {
      //     if (!err) {
      //       this.$refs.form.validateField('password')
      //     }
      //   })
      // }
    },
    submitLogin(params, callback) {
      // this.$store.dispatch(UPDATE_TOKEN).then(token => {
      //   const { password, username } = params
      //   signIn({
      //     ...params,
      //     password: md5(md5(this.params.password))
      //   }).then(data => {
      //     if (this.remember) {
      //       localStorage.setItem('ccurrentId', '1')
      //       localStorage.setItem('username', username)
      //       localStorage.setItem('password', password)
      //     } else {
      //       localStorage.removeItem('username')
      //       localStorage.removeItem('password')
      //     }
      //     let { redirect } = this.$route.query
      //     this.$router.push(redirect || '/')
      //   }).catch(err => {
      //     let message = (err && err.message) || '登录失败'
      //     if (err && typeof err.message === 'string') {
      //       message = err.message
      //     }
      //     callback && callback(new Error(message))
      //   })
      // })
    }
  }
}
</script>

<style lang="stylus" scoped>
.loginPan {
  position: relative;

  .code {
    position: absolute;
    top: -79px;
    right: -22px;

    img {
      width: 41px;
      display: inline-block;
      height: 40px;
    }
  }
}

.b-icon__collor {
  color: #8e96a5;
}

.yzCode {
  width: 250px;
  float: left;
  overflow: hidden;
}

.getcode {
  display: inline-block;
  width: 100px;
  background: #FF4D4E;
  text-align: center;
  color: #fff;
  margin-left: 10px;
}

.verification-code {
  &-input {
    width: 166px;
    float: left;
  }

  &-img {
    width: 84px;
    height: 36px;
    margin: 0 15px;
  }

  &-text {
    font-size: 12px;
    line-height: 36px;
    cursor: pointer;
  }
}
</style>
