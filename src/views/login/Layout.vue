<template>
  <div>
    <TopNav />
    <div class="login__wrapper">
      <div class="login__header">
      </div>
      <div class="login__body">
        <div class="login__inner">
          <div class="login__title">{{ title }}</div>
          <slot />
        </div>
      </div>
      <div class="login__footer">
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from 'components/Layout/TopNav'
// import { getYear, addClass, removeClass } from '@/utils'
export function hasClass (el, className) {
  if (el.classList) return el.classList.contains(className)
  return el.className.split(/\s+/).includes(className)
}
export function addClass (el, cls) {
  if (!el) return
  var curClass = el.className
  var classes = (cls || '').split(' ')

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
}

const trim = function (string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}

export function removeClass (el, cls) {
  if (!el || !cls) return
  var classes = cls.split(' ')
  var curClass = ' ' + el.className + ' '

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.remove(clsName)
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ')
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
}
export default {
  name: 'Login',
  components: {
    TopNav
  },
  props: {
    title: String
  },
  data() {
    return {
      year: '2019'
    }
  },

  created() {
    addClass(document.body, 'login--bg')
  },

  beforeDestroy() {
    removeClass(document.body, 'login--bg')
  }
}
</script>

<style lang="stylus">
.login__wrapper {
  margin: 0 auto;
  // padding-top: 48px;
  background-size: cover;
}

.login--bg {
  background: url('../../assets/images/common/bg.png') no-repeat;
  background-size: cover;
  background-color #000
}

.login__header {
  font-size: 20px;
  color: #fff;
  letter-spacing: 2px;
}

.login__body {
  margin-top: 155px;
}

.login__inner {
  margin: 0 auto;
  width: 420px;
  background: #fff;
  padding: 23px 30px 3px 30px;
  border-radius: 6px;
  box-shadow: 0 17px 100px 6px rgba(#06512f, 0.15);
}

.login__title {
  margin: 20px;
  text-align: center;
  font-size: 20px;
  color: #FF4D4E;
}

.login {
  width: 420px;
  height: 290px;
  border-radius: 4px;
  overflow: hidden;
  margin: 0 auto;

  .el-input__inner {
    background-color: transparent;
  }

  &__footer {
    position: absolute;
    bottom: 30px;
    width: 100%;
    color: color-text-info;
    font-size: 11px;
    text-align: center;
    left: 0;

    .primary-text {
      color: #fff;
      margin: 0 0 5px;
    }
  }

  .link {
    position: relative;
    font-size: 12px;
  }
}
</style>
