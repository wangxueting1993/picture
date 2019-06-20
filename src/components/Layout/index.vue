<template>
  <el-container class="container">
    <el-header class="header_box">
      <top-nav />
    </el-header>
    <el-main style="height:100%">
      <el-scrollbar style="height:100%">
        <router-view class="main_bg" />
        <el-footer>
          <v-footer />
        </el-footer>
      </el-scrollbar>
    </el-main>
  </el-container>
</template>
<script>
import TopNav from './TopNav'
import VFooter from './Footer'
export default {
  name: 'topnav',
  components: {
    TopNav,
    VFooter
  }
}
</script>
<style lang="stylus">
.el-scrollbar__wrap
  overflow-x hidden !important
.container
  position fixed
  top 0
  bottom 0
  width 100%
  height 100%
.el-header
  width 100%
  height 80px !important
  padding 0 !important
  background #fff
.el-main
  width 100%
  padding 0 !important
  height auto
.el-footer
  width 100%
  padding 0 !important
  height 54px !important
</style>