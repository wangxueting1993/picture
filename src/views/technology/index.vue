<template>
  <div>
    <home-banner/>
    <div class="blue_bg">
      <div class="gridmark_main clearfix">
        <div class="cont__imgl l animated bounceInLeft">
          <img class="cont__img" src="../../assets/images/technology/1.png" alt="">
        </div>
        <div class="cont__main r animated bounceInRight">
          <div class="cont__title">智能点码阵列</div>
          <div class="cont__info">
            Grid Onput即极小的点（dot）构成的新二维码技术。市场上的点读笔多数采用的OID2码，即格睿码克的三代码Grid3（侵犯我司专利）。格睿码克做为点阵码发明者，持续对点码技术创新与改良，现已升级至第五代码，码点发行量约达300万亿，优势在于对成像光学系统及采集算法不断优化，实现高精度，大信息量，多种印刷载体的各类应用，并可避免损害原印刷物的设计。
          </div>
        </div>
      </div>
    </div>
    <div class="white_bg">
      <div class="gridmark_main clearfix">
        <div class="cont__main l animated bounceInLeft">
          <div class="cont__title">纳米窄带光学薄膜</div>
          <div class="cont__info">
            格睿码克研发的精准高速定位点阵码采集系统，现已与世界首创纳米窄带光学薄膜技术相匹配。这项新型技术使普通智能电视、投影设备、显示设备、传统教育黑板等可用低成本投入，达到具有触控，互动，书写的多元化教育或会议场景的需求。
          </div>
        </div>
        <div class="cont__imgr r animated bounceInRight">
          <img class="cont__img" src="../../assets/images/technology/2.png" alt="">
        </div>
      </div>
    </div>
    <div class="blue_bg">
      <div class="gridmark_main clearfix">
        <div class="cont__imgl l animated bounceInLeft">
          <img class="cont__img" src="../../assets/images/technology/3.png" alt="">
        </div>
        <div class="cont__main r animated bounceInRight">
          <div class="cont__title">
            智能嵌入式算法
            </div>
          <div class="cont__info">
            格睿码克自主研发的智能嵌入式算法，是结合智能点阵与其他自主知识产权技术后升级和改良的新型算法。格睿码克拥有极强的底层嵌入式算法开发能力，作为纸质媒体与数码的相结合，服务于多家海内外知名客户，满足不同领域，不同应用的客户方案需求。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import homeBanner from 'components/banner'
export default {
  name: 'home',
  components: {
    homeBanner
  }
}
</script>
<style lang="stylus" scoped>
.gridmark_banner
  background url("../../assets/images/home/banner.png") no-repeat center center
  background-color #F4F4FF
  background-size cover
.cont
  &__img
    width 500px
    height 405px
    border-radius 6px
  &__imgl
    margin-right 90px
  &__imgr
    margin-right 40px
  &__main
    width 485px
    height 220px
    font-size 18px
    line-height 24px
    color color-hover
    margin-top 100px
    text-align left
  &__title
    fong-size 18px
    font-weight 600
    margin-top 60px
  &__info
    margin-top 5px
    line-height 24px
    letter-spacing 1px
    font-size 16px
  &__main--info
    display inline-block
  &__yellow
    color color-yellowH
  &__red
    color color-redH
</style>
