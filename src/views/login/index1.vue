<template>
  <el-form
    :model="params"
    :rules="rules"
    hide-required-asterisk
    class="login__form"
    label-width="27px"
    ref="form"
  >
    <el-form-item
      v-input-border="{ className: 'is-focus' }"
      prop="username"
      class="login__username border--bottom"
    >
      <i
        slot="label"
        class="b-icon-user b-icon__collor"
      />
      <el-input
        v-model="params.username"
        placeholder="用户名"
        class="border--hidden"
        @keypress.native.enter="submit()"
      />
    </el-form-item>
    <el-form-item
      v-input-border="{ className: 'is-focus' }"
      prop="password"
      class="login__password border--bottom"
    >
      <i
        slot="label"
        class="b-icon-password b-icon__collor"
      />
      <el-input
        v-model="params.password"
        type="password"
        placeholder="密码"
        class="border--hidden login__input-password"
        @keypress.native.enter="submit()"
      />
    </el-form-item>
    <div class="login__form-footer clearfix b-icon__collor">
      <el-checkbox
        v-model="remember"
        :true-label="1"
        :false-label="0"
        size="mini"
      >记住密码</el-checkbox>
      <span
        @click="redirectToModule"
        class="link pull-right b-icon__collor"
      >忘记密码</span>
    </div>
    <el-form-item
      label-width="0"
      class="login__form-footer"
    >
      <el-button
        type="primary"
        size="large"
        class="login__submit"
        round
        :loading="loading"
        @click.stop="submit()"
      >登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
// import md5 from 'js-md5'
// import { signIn } from 'index/api'
// import { UPDATE_TOKEN } from 'store/mutation-types'
export default {
  name: 'LoginModule',

  computed: {
    loading () {
      // return this.$store.state.loading.loading
    }
  },
  created () {
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

  data () {
    return {
      remember: 0,
      active: 'login',
      params: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
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
    redirectToModule () {
      console.log('tag')
      this.$emit('redirectToModule', 'forgot')
    },
    createObjectURL (object) {
      return (window.URL) ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object)
    },
    submit (callback) {
      if (callback) {
        this.$refs.form.validateField('username', err => {
          if (err) return callback(new Error(err))
          this.submitLogin(this.params, callback)
        })
      } else {
        this.$refs.form.validateField('username', err => {
          if (!err) {
            this.$refs.form.validateField('password')
          }
        })
      }
    },
    submitLogin (params, callback) {
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
  .b-icon__collor {
    color: #8e96a5;
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
