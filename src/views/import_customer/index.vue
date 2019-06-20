<template>
  <div>
    <home-banner />
    <div class="gridmark_main import">
      <div class="import__title">
        客户中心
      </div>
      <div class="import__main">
        <el-row :gutter="24" class="row-space">
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="import__product import__transform">
                <div>
                  <img
                    class="import__img"
                    src="../../assets/images/import_customer/1.png"
                    alt=""
                  >
                </div>
                <div>
                  <span class="import__tip">
                    E-Pencil
                  </span>
                  <span class="import__tip">
                    日本公文式教育集团（Kumon）
                  </span>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="import__product import__transform">
                <div class="import__product">
                  <div>
                    <img
                      class="import__img"
                      src="../../assets/images/import_customer/2.png"
                      alt=""
                    >
                  </div>
                  <div>
                    <span class="import__tip">
                      kumiita
                    </span>
                    <span class="import__tip">
                      日本公文式教育集团（Kumon）
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="import__product import__transform">
                <div class="import__product">
                  <div>
                    <img
                      class="import__img"
                      src="../../assets/images/import_customer/3.png"
                      alt=""
                    >
                  </div>
                  <div>
                    <span class="import__tip">
                      Ting笔
                    </span>
                    <span class="import__tip">
                      （德国ting）
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="import__product import__transform">
                <div>
                  <img
                    class="import__img"
                    src="../../assets/images/import_customer/4.png"
                    alt=""
                  >
                </div>
                <div>
                  <span class="import__tip">
                    贝瓦地毯
                  </span>
                  <span class="import__tip">
                    （贝瓦网Beva）
                  </span>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="import__product import__transform">
                <div class="import__product">
                  <div>
                    <img
                      class="import__img"
                      src="../../assets/images/import_customer/5.png"
                      alt=""
                    >
                  </div>
                  <div>
                    <span class="import__tip">
                      Q-BO
                    </span>
                    <span class="import__tip">
                      DeAGOSTINI JAPAN
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="import__product import__transform">
                <div class="import__product">
                  <div>
                    <img
                      class="import__img"
                      src="../../assets/images/import_customer/6.jpg"
                      alt=""
                    >
                  </div>
                  <div>
                    <span class="import__tip">
                      G-speak
                    </span>
                    <span class="import__tip">
                      海外多家教育连锁机构
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
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
  background url('../../assets/images/import_customer/banner.png') no-repeat center center
  background-color #F4F4FF
  background-size cover
.import
  padding-top 0
  // line-height 90px
  color color-hover
  font-size 20px
  height 800px
  &__title
    line-height 90px
    height 90px
  &__product
    border-radius 6px
    width 350px
    height 310px
    background color-bg-gray
    span
      display inline-block
      font-size 16px
      color color-hover
  &__transform
    box-shadow:2px 2px 5px #999
  &__transform:hover
      transform translateY(-5%)
      -ms-transform translateY(-5%)
      -webkit-transform translateY(-5%)
      box-shadow:2px 2px 5px 1px color-hover
  &__img
    width 330px
    height 245px
    margin-top 10px
  &__main
    display block
    height 450px
  &__tip
    // margin-right 25px
    line-height 45px !important
.row-space
  margin-bottom 40px
</style>

