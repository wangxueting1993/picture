<template>
  <div class="nav_bg">
    <div class="nav-top clearfix">
      <div class="l">
        <img
          class="cont__img"
          src="../../assets/images/common/logo.png"
          alt=""
        >
      </div>
      <div class="nav r">
        <span class="login">登录</span>
        <span class="tip">|</span>
        <span class="register">注册</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'topnav',
  data() {
    return {
      activeName: 'second',
      styles: {},
      activeClass: 0,
      isUpload: false
    };
  },
  watch: {
    active: {
      handler: 'setUnderlineStyle',
      immediate: true
    },
    $route() {
      let router = this.$route.path
      this.jumpRouter(router)
      this.tabActive(router)
    }
  },
  methods: {
    jumpRouter(router) {
      if (
        router === '/reportUp/reportUpload' ||
        router === '/reportUp/recordUpload' ||
        router === '/reportUp/onlineDataUpload'
      ) {
        this.isUpload = true
      } else {
        this.isUpload = false
      }
    },
    tabActive(router) {
      if (router === '/home') {
        this.activeClass = 0
      } else if (router === '/product') {
        this.activeClass = 1
      } else if (router === '/technology') {
        this.activeClass = 2
      } else if (router === '/import_customer') {
        this.activeClass = 3
      } else if (router === '/patent') {
        this.activeClass = 4
      } else if (router === '/news') {
        this.activeClass = 5
      } else if (router === '/company_info') {
        this.activeClass = 6
      } else if (router === '/join_us') {
        this.activeClass = 7
      } else if (router === '/contact_us') {
        this.activeClass = 8
      }
    },
    setUnderlineStyle() {
      this.$nextTick(() => {
        const target = this.$refs[this.active]
        if (target) {
          const wrap = this.$refs.wrap.getBoundingClientRect()
          const { width, left } = target.$el.getBoundingClientRect()
          this.styles = {
            width: width + 'px',
            transform: `translate3d(${left - wrap.left}px, 0, 0)`
          }
        }
      })
    },
    tab(index) {
      this.activeClass = index
      switch (index) {
        case 0:
          this.$router.push({ path: '/home' })
          break
        case 1:
          this.$router.push({ path: '/product' })
          break
        case 2:
          this.$router.push({ path: '/technology' })
          break
        case 3:
          this.$router.push({ path: '/import_customer' })
          break
        case 4:
          this.$router.push({ path: '/patent' })
          break
        case 5:
          this.$router.push({ path: '/news' })
          break
        case 6:
          this.$router.push({ path: '/company_info' })
          break
        case 7:
          this.$router.push({ path: '/join_us' })
          break
        case 8:
          this.$router.push({ path: '/contact_us' })
          break
      }
    }
  },
  mounted() {
    // this.jumpRouter(this.$route.path)
    this.tabActive(this.$route.path)
  }
};
</script>
<style lang="stylus" scoped>
.nav_bg {
  background #fff
}
.nav-top {
  width: 1200px;
  margin: 0 auto;
  height: 80px;
  line-height: 80px;
  background: #fff;
}

.cont__img {
  width: 267px;
  height: 38px;
}

.nav {
  color: #E41F1A;
  font-size: 20px;
  cursor: pointer;

  .tip {
    display: inline-block;
    padding: 0 8px;
  }
}
</style>