<template>
  <div>
    <home-banner />
    <div class="gridmark_main join_us animated tada">
      <el-collapse
        v-model="activeName"
        accordion
      >
        <el-collapse-item
          title=""
          name="1"
        >
          <template slot="title">
            <div class="panle_title">
              <span>APP应用工程师</span>
              <span>1人</span>
              <span>深圳</span>
            </div>
          </template>
          <div class="panel__main">
            <div class="panel__cont">
              岗位职责：
            </div>
            <div class="panel__cont">
              1、根据用户需求确定程序功能，并进行模块化设计做相应的程序编写，完成APP开发。</div>
            <div class="panel__cont">
              2、检测程序的完整，简洁性，修改并达到最优化，根据测试结果修改自身BUG，并进行最优化调整。
            </div>
            <div class="panel__cont">
              3、根据后期反馈数据修改模块功能，进行产品升级和维护
            </div>
            <div class="panel__cont">
              任职要求：
            </div>
            <div class="panel__cont">
              1、计算机或相关专业，大专以上学历；
            </div>
            <div class="panel__cont">
              2、具有2年以上iPhone（或者Mac）开发经验，熟悉iOS平台下的GUI设计和实现，熟练掌握UI设计；
            </div>
            <div class="panel__cont">
              3、具备扎实的C/C++/Objective C/Swift语言基础，熟练使用Git/SVN等协同工具；
            </div>
            <div class="panel__cont">
              4、熟悉多Socket网络编程，熟悉TCP、UDP、HTTP等网络协议，熟悉JSON/XML等通讯协议；
            </div>
            <div class="panel__cont">
              5、对数据结构、基本算法熟练掌握，并具备基本的算法设计能力；
            </div>
            <div class="panel__cont">
              6、熟悉蓝牙BLE 通讯.已在App Store 发布过作品者优先。
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            <div class="panle_title">
              <span>销售经理</span>
              <span>2人</span>
              <span>深圳</span>
            </div>
          </template>
          <div class="panel__main">
            <div class="panel__cont">
              岗位职责：
            </div>
            <div class="panel__cont">
              1、制定点读笔、手写笔的推广和销售方案，完成负责销售任务；</div>
            <div class="panel__cont">
              2、了解行业、渠道客户需求，并提出新产品开发、改进建议；
            </div>
            <div class="panel__cont">
              3、做好相关服务工作及客户关系维护及回款
            </div>
            <div class="panel__cont">
              任职要求：
            </div>
            <div class="panel__cont">
              1、大专或以上学历，3年以上点读笔行业销售工作经验 ；
            </div>
            <div class="panel__cont">
              2、具有良好的客户沟通能力和销售技巧；
            </div>
            <div class="panel__cont">
              3、工作积极，责任心强，具有较强的团队合作精神。
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<script>
import homeBanner from 'components/banner'
export default {
  name: 'join_us',
  components: {
    homeBanner
  },
  data() {
    return {
      activeName: '1'
    };
  }
}
</script>
<style lang="stylus" scoped>
.gridmark_banner
  background url('../../assets/images/join_us/banner.png') no-repeat center center
  background-color #F4F4FF
  background-size cover
.join_us
  margin-top 16px
  height 900px
.panle_title
  padding-right 36px
  span
    display inline-block
    width 200px
    margin-left 36px
    font-size 20px
    color color-hover
    text-align left
.panel
  &__main
    margin 17px 0 19px 0
  &__cont
    font-size 16px
    color color-hover
    margin-bottom 19px
    text-align left
/deep/
  .el-collapse-item__header.is-active
    background-color color-panle
</style>
