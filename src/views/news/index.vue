<template>
  <div>
    <home-banner/>
    <div class="gridmark_main news animated bounceInRight">
      <div class="news__title">
        2018年资本，团队，知识产权多方面优化重组后的公司正式更名为格睿码克科技（深圳）有限公司
      </div>
      <div class="news__title">
        2018年7月公证11项发明专利
      </div>
      <div class="news__title">
        2018年11月与闪联信息技术工程中心有限公司签订战略合作协议
      </div>
      <div class="news__title">
        2018年9月与深圳市光科全息技术有限公司签订战略合作协议
      </div>
      <div class="news__title">
        2019年1月与汉王科技股份有限公司签订战略合作协议
      </div>
    </div>
  </div>
</template>
<script>
import homeBanner from 'components/banner'
export default {
  name: 'news',
  components: {
    homeBanner
  }
}
</script>
<style lang="stylus" scoped>
.gridmark_banner
  background url("../../assets/images/news/banner.png") no-repeat center center
  background-color #F4F4FF
  background-size cover
.news
  height 470px
  margin-top 39px
  &__title
    font-size 16px
    border-left 4px solid color-hover
    color color-hover
    text-align left
    padding 2px 12px
    letter-spacing 1px
    margin-bottom 36px
</style>

