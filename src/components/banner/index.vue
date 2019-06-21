<template lang="html">
  <!-- <div class="gridmark_banner" id="gridmark_banner">
  </div> -->
  <el-carousel :interval="5000" arrow="always" class="gridmark_banners"  :height="bannerHeight + 'px'">
    <el-carousel-item>
      <img
        class="info__jiaotong"
        src="../../assets/images/common/banner.png"
        alt=""
      >
    </el-carousel-item>
    <el-carousel-item>
      <img
        class="info__jiaotong"
        src="../../assets/images/common/banner2.jpeg"
        alt=""
      >
    </el-carousel-item>
    <el-carousel-item>
      <img
        class="info__jiaotong"
        src="../../assets/images/common/banner3.png"
        alt=""
      >
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'gridmarkBanner',
  data (){
    return {
      bannerHeight: ''
    }
  },
  methods: {
    setSize: function () {
      this.bannerHeight = 740 / 2560 * this.screenWidth
      if (this.bannerHeight > 740) this.bannerHeight = 740
      if (this.bannerHeight < 360) this.bannerHeight = 360
    }
  },
  mounted() {
    this.setSize();
    const that = this;
    window.addEventListener('resize', function () {
      window.screenWidth = document.body.clientWidth
      that.screenWidth = window.screenWidth
      that.setSize();
    }, false);
  }
}
</script>

<style lang="stylus">
.gridmark_banners {
  width: 100%;
  height: 673px;
  background-color: color-bg-default;
}

.el-carousel__container {
  height: 673px;
}

.info__jiaotong {
  width: 100%;
  height: inherit;
  min-height: 673px;
  min-width: 1400px;
}
</style>
