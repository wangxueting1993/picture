<template>
  <div>
    <home-banner />
    <div class="gridmark_main info top">
      <div class="info__title">公司介绍</div>
      <div class="info__eg clearfix">
        <div class="info__eg__cont l animated bounceInLeft">
          格睿码克科技（深圳）有限公司（简称格睿码克）于2014年创建于深圳市南山区。是一家具备整体系统方案及软硬件研发能力的中外合资创新型高科技公司。一直以来，公司始终致力于智能领域的教育、书写及显示的相关科技进行研发与推进。经过多年经验积累与专业技术沉淀，因对科技领域的研究与探索而获得十一项自主知识产权的发明专利。在公司不断研发新型高科技产品的推动下，现已将国内外顶级技术专家及大量自主知识产权凝聚在一起，为全球十余家教育龙头企业提供专业服务。
        </div>
        <div class="info__eg__img r animated bounceInRight">
          <img
            class="info__eg__img"
            src="../../assets/images/company_info/info.png"
            alt=""
          >
        </div>
      </div>
    </div>
    <div class="leader">
      <div class="gridmark_main top">
        <div class="leader__title">创始人团队</div>
        <div class="leader__eg clearfix">
          <div class="leader__eg__img l animated bounceInLeft">
            <img
              class="leader__eg__img"
              src="../../assets/images/company_info/leader.png"
              alt=""
            >
          </div>
          <div class="leader__eg__cont l animated bounceInRight">
            <div class="leader__eg__title">吉田健治（Yoshida Kenji）简介</div>
            <div>日本大学 海洋建築专业　博士</div>
            <div>日本电气通讯大学 兼职教授</div>
            <div>数码景观株式会社（上市） 创始人</div>
            <div>IMJ株式会社（上市） 创始人</div>
            <div>拥有全球发明专利363项</div>
            <div>获得日本96博览会重赏展览映像部门 最高奖</div>
            <div>获得第4届日本制作大奖 优秀奖</div>
            <div>2012年度文部科学大臣发明奖</div>
            <div>2017年度日本全国发明表彰发明奖</div>
          </div>
        </div>
        <div>
        </div>
        <div class="leader__eg clearfix">
          <div class="leader__eg__img l animated bounceInLeft">
            <img
              class="leader__eg__img"
              src="../../assets/images/company_info/leader2.png"
              alt=""
            >
          </div>
          <div class="leader__eg__cont l animated bounceInRight">
            <div class="leader__eg__title">戴伟简介</div>
            <div>日本早稻田大学 微电子专业 硕士</div>
            <div>索尼公司 图像传感器 高级工程师兼项目负责人</div>
            <div>北京思比科微电子 市场总监</div>
            <div>拥有15年以上从业经验的光电影像领域专家</div>
            <div>为索尼，宾得，迈瑞等各行业知名企业搭建光电系统</div>
            <div>担任国内外多家光电影像相关企业的技术顾问</div>
          </div>
        </div>
        <div>
        </div>
        <div class="leader__eg clearfix">
          <div class="leader__eg__img l animated bounceInLeft">
            <img
              class="leader__eg__img"
              src="../../assets/images/company_info/leader3.png"
              alt=""
            >
          </div>
          <div class="leader__eg__cont l animated bounceInRight">
            <div class="leader__eg__title">股东及技术顾问团队</div>
            <div>国家千人计划专家,国家特聘专家&nbsp; 两名</div>
            <div>清华大学影像压缩处理专家教授 &nbsp;一名</div>
            <div>日本早稻田大学 九州大学 电气通讯大学等技术专家团队&nbsp; 五名</div>
          </div>
        </div>
      </div>
    </div>
    <div class="map">
      <div class="gridmark_main top">
        <div class="info__title">技术合作单位</div>
        <div class="map__img">
          <el-row>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <img
                  class="info__img"
                  src="../../assets/images/company_info/1.png"
                  alt=""
                >
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple-light">
                <img
                  class="info__shenzhen"
                  src="../../assets/images/company_info/2.png"
                  alt=""
                >
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <img
                  class="info__jiaotong1"
                  src="../../assets/images/company_info/3.png"
                  alt=""
                >
              </div>
            </el-col>
          </el-row>
          <el-row class="info__top">
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <img
                  class="info__zaodaotian"
                  src="../../assets/images/company_info/4.png"
                  alt=""
                >
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple-light">
                <img
                  class="info__dianzi"
                  src="../../assets/images/company_info/5.png"
                  alt=""
                >
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <img
                  class="info__zhongkeyuan"
                  src="../../assets/images/company_info/6.png"
                  alt=""
                >
              </div>
            </el-col>
          </el-row>
          <el-row class="info__top">
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <img
                  class="info__dianqi"
                  src="../../assets/images/company_info/7.png"
                  alt=""
                >
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import homeBanner from 'components/banner'
export default {
  name: 'info',
  components: {
    homeBanner
  }
}
</script>
<style lang="stylus" scoped>
.gridmark_banner
  background url('../../assets/images/company_info/banner.png') no-repeat center center
  background-color #F4F4FF
  background-size cover
.leader
  background color-bg-default
  background url('../../assets/images/company_info/bg.png') no-repeat center center
  background-size cover
  height 1567px
  &__box
    padding-top 0
  &__title
    font-size 30px
    color color-hover
    height 90px
    line-height 90px
  &__eg
    height 430px
    margin-bottom 60px
    &__title
      font-size: 25px;
      font-weight 700
    &__img
      width 400px
      margin-right 158px
    &__cont
      width 550px
      height 212px
      margin-top 10px
      color color-hover
      font-size 20px
      line-height 40px
      text-align left 
.map
  height 850px
  // background color-bg-default
  &__img
    width 1200px
    height 210px
    margin-top 40px
    // margin-left 32px
  &__title
    font-size 15px
    color color-hover
    height 45px
    line-height 45px
.info
  padding-top 0
  height 576px
  &__title
    font-size 30px
    color color-hover
    height 90px
    line-height 90px
  &__eg
    &__img
      width 600px
      height 426px
    &__cont
      width 535px
      height 212px
      // margin-top 25px
      color color-hover
      font-size 24px
      line-height 44px
  &__img
    width 257px
    height 88px
  &__shenzhen
    width 306px
    height 90px
  &__jiaotong1
    width 414px
    height 84px
  &__zaodaotian
    width 332px
    height 116px
  &__dianzi
    width 350px
    height 91px
  &__zhongkeyuan
    width 338px
    height 72px
  &__dianqi
    width 218px
    height 154px
  &__cont
    font-size 20px
    color color-hover
    line-height 22px
    font-family PingFangSC-Regular
  &__top
    margin-top 81px
.top
  padding-top 0
/deep/
  .grid-content
    text-align left !important
</style>
