<template>
  <div>
    <home-banner />
    <feature-pan />
    <zixun />
    <div class="moreBox">
      <div class="more">了解更多</div>
    </div>
    <partner />
  </div>
</template>
<script>
import animate from 'animate.css'
import homeBanner from 'components/banner'
import featurePan from './feature'
import zixun from './zixun'
import partner from './partner'
export function hasClass (el, className) {
  if (el.classList) return el.classList.contains(className)
  return el.className.split(/\s+/).includes(className)
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
  name: 'home',
  components: {
    homeBanner,
    featurePan,
    zixun,
    partner
  },
  created () {
    removeClass(document.body, 'login--bg')
  }
}
</script>
<style lang="stylus" scoped>
.gridmark_banners {
  background: url('../../assets/images/common/banner.png') no-repeat center center;
  background-color: #F4F4FF;
  background-size: cover;
}
.moreBox {
  position relative
  margin-top 46px
}
.more {
    width: 100px;
    height: 30px;
    position: absolute;
    color: #fff;
    background: #e41f1a;
    top: 0;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    left: 50%;
    transform: translate(-50%);
    cursor pointer
}

.cont {
  &__title {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 700;
  }

  &__img {
    width: 580px;
    height: 440px;
    border-radius: 6px;
  }

  &__imgl {
    // margin-right 180px
  }

  &__imgr {
    // margin-right 80px
  }

  &__main {
    width: 540px;
    height: 437px;
    font-size: 22px;
    line-height: 30px;
    color: color-hover;
    text-align: left;
  }

  &__info {
    margin-top: 5px;
    line-height: 30px;
    letter-spacing: 1px;
    font-size: 20px;
  }

  &__main--info {
    display: inline-block;
  }

  &__yellow {
    color: color-yellowH;
  }

  &__red {
    color: color-redH;
  }
}
</style>
