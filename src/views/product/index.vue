<template>
  <div>
    <home-banner />
    <div class="gridmark_main product-up">
      <div class="product-up__title">
        公司产品
      </div>
      <div class="product-up__main">
        <el-row
          :gutter="24"
          class="row-space"
        >
          <el-col :span="6" v-for="(item, index) in list" :key="index">
            <div class="grid-content bg-purple">
              <div class="product-up__product product-up__transform" @mouseenter="item.show = true" @mouseleave="item.show = false" >
                <div>
                  <img
                    class="product-up__img"
                    :src="item.img"
                    alt=""
                  >
                </div>
                <div class="product-up__box" name='slide-fade'>
                  <span class="product-up__tip" v-if="item.show">
                    {{item.content}}
                  </span>
                </div>
                <div class="product-up__titles">
                  {{item.title}}
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row
          :gutter="24"
          class="row-space"
        >
          <el-col :span="6" v-for="(item, index) in list2" :key="index">
            <div class="grid-content bg-purple">
              <div class="product-up__product product-up__transform" @mouseenter="item.show = true" @mouseleave="item.show = false" >
                <div>
                  <img
                    class="product-up__img"
                    :src="item.img"
                    alt=""
                  >
                </div>
                <div class="product-up__box" name='slide-fade'>
                  <span class="product-up__tip" v-if="item.show">
                    {{item.content}}
                  </span>
                </div>
                <div class="product-up__titles">
                  {{item.title}}
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="use_place">
      <div class="gridmark_main product_place product">
        <div class="product__title">
          应用环境
        </div>
        <div class="product__main">
          <el-row
            :gutter="24"
            class="row-space"
          >
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <div class="product__product product__transform">
                  <div>
                    <img
                      class="product__img"
                      src="../../assets/images/product/2-1.png"
                      alt=""
                    >
                  </div>
                  <div>
                    <span class="product__tip">
                      点读笔：语言学习
                    </span>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <div class="product__product product__transform">
                  <div class="product__product">
                    <div>
                      <img
                        class="product__img"
                        src="../../assets/images/product/2-2.png"
                        alt=""
                      >
                    </div>
                    <div>
                      <span class="product__tip">
                        点读笔：游戏问答
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <div class="product__product product__transform">
                  <div class="product__product">
                    <div>
                      <img
                        class="product__img"
                        src="../../assets/images/product/2-3.png"
                        alt=""
                      >
                    </div>
                    <div>
                      <span class="product__tip">
                        手写笔：办公会议
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
                <div class="product__product product__transform">
                  <div>
                    <img
                      class="product__img"
                      src="../../assets/images/product/2-4.png"
                      alt=""
                    >
                  </div>
                  <div>
                    <span class="product__tip">
                      手写笔：教学培训
                    </span>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <div class="product__product product__transform">
                  <div class="product__product">
                    <div>
                      <img
                        class="product__img"
                        src="../../assets/images/product/2-5.png"
                        alt=""
                      >
                    </div>
                    <div>
                      <span class="product__tip">
                        AI设备：科教娱乐
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <div class="product__product product__transform">
                  <div class="product__product">
                    <div>
                      <img
                        class="product__img"
                        src="../../assets/images/product/2-6.png"
                        alt=""
                      >
                    </div>
                    <div>
                      <span class="product__tip">
                        AI设备：智能玩具
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
  </div>
</template>
<script>
import homeBanner from 'components/banner'
import pic1 from '../../assets/images/product/1-1.png'
import pic2 from '../../assets/images/product/1-2.png'
import pic3 from '../../assets/images/product/1-3.png'
import pic4 from '../../assets/images/product/1-4.png'
import pic5 from '../../assets/images/product/1-5.png'
import pic6 from '../../assets/images/product/1-6.png'
import pic7 from '../../assets/images/product/1-7.png'
import pic8 from '../../assets/images/product/1-8.png'
export default {
  name: 'news',
  data () {
    return {
      show: false,
      list: [
        {
          title: 'wifi-pen智能点读笔',
          content: 'wifi-pen除具备基本智能点读功能外，通过逻辑分析与数字运算技术，对英文，数字，算符进行书写、识别，并且实现语音播放等功能。',
          img: pic1,
          show: false
        },
        {
          title: 'G-Speak高音质智能点读笔',
          content: 'G-Speak高音质智能点读笔采用干电池供电，在智能点读功能基本上，实现录音与语音播放、自定义游戏及便签或互动问答等功能。',
          img: pic2,
          show: false
        },
        {
          title: 'G-Talk高音质智能点读笔',
          content: 'G-Talk高音质智能点读笔采用锂电池供电。在智能点读功能基本上，实现录音与语音播放、自定义游戏及便签或互动问答等功能。',
          img: pic3,
          show: false
        },
        {
          title: 'G-Talk3高音质智能点读笔',
          content: 'G-Talk3是一款高性价比，使用锂电池供电的高音质智能点读笔。在智能点读功能基本上，实现录音与语音播放、自定义游戏及便签或互动问答等功能',
          img: pic4,
          show: false
        }
      ],
      list2: [
        {
          title: 'G-PEN智能USB扫描手写笔',
          content: 'G-PEN智能USB扫描手写笔，通过USB连接，将书写、绘画等内容实时传输智能设别，实现设备与纸质媒体的相结合，并可作为高精度高速光学鼠标使用。因具有点阵码扫描功能，即可对防伪码进行识别。',
          img: pic5,
          show: false
        },
        {
          title: 'G-PEN2智能USB手写笔',
          content: 'G-PEN2是G-PEN智能USB手写笔的升级版。通过USB免驱连接电脑的画图板或其他应用软件互联，具备智能手写、绘画等功能并实现实时传输，还可作为高精度高速光学鼠标使用',
          img: pic6,
          show: false
        },
        {
          title: 'BT-PEN智能手写蓝牙笔',
          content: 'BT-PEN作为一款智能手写蓝牙笔，可通过笔迹智能识别，实现智能书写、绘画并可一键生成电子数据。同时可配合纳米窄带光学薄膜，满足高性价比高性能教育会议电视电子白板等媒介的输入需求',
          img: pic7,
          show: false
        },
        {
          title: 'AI多功能笔',
          content: 'AI多功能笔通过WIFI同步互联可对海量云端资源进行在线智能点读、问答及游戏互动。现已实现与微信实时连接，进行语音对话、资源传输、云端资源共享等功能。',
          img: pic8,
          show: false
        }
      ]
    }
  },
  components: {
    homeBanner
  }
}
</script>
<style lang="stylus" scoped>
.gridmark_banner
  background url('../../assets/images/product/banner.png') no-repeat center center
  background-color #F4F4FF
  background-size cover
.use_place
  background color-bg-default
  height 870px
.product_place
  padding-top 0
.product
  padding-top 0
  line-height 60px
  color color-hover
  height 550px
  &__title
    font-size 20px
    height 90px
    line-height 90px
  &__pro
  &__product
    border-radius 6px
    width 350px
    height 350px
    background color-whitebg
    span
      display inline-block
      font-size 16px
      color color-hover
  &__transform
    transition: box-shadow 0.5s;
    -webkit-transition: box-shadow 0.5s;
    // box-shadow:2px 2px 5px #999
  &__transform:hover
      box-shadow:2px 2px 15px 1px color-hover
  &__img
    width 330px
    height 240px
    margin-top 10px
  &__main
    display block
    height 450px
  &__tip
    // margin-right 25px
.product-up
  padding-top 0
  // line-height 45px
  color color-hover
  height 670px
  &__title
    font-size 20px
    height 90px
    line-height 90px
  &__box
    overflow hidden
    // padding-left 5px
    height 245px
    position absolute
    overflow hidden
    top 0
    left 10px
    background rgba(0,0,0,.6)
  &__product
    position relative
    border-radius 6px
    width 250px
    height 245px
    overflow hidden
    background color-bg-gray
    span
      display inline-block
      font-size 14px
      color #fff
  &__transform
    // box-shadow:2px 2px 5px #999
  &__transform:hover
      // transform translateY(-5%)
      // -ms-transform translateY(-5%)
      // -webkit-transform translateY(-5%)
  &__img
    width 230px
    height 192px
    margin-top 10px
  &__main
    display block
    height 450px
  &__tip
    width 230px
    line-height 25px
    text-align left
    margin 7px
  &__titles
    width 100%
    line-height 45px
    text-align center
    font-size 15px
.row-space
  margin-bottom 40px

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
</style>

