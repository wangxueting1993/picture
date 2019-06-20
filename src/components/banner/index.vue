<template lang="html">
  <div class="gridmark_banners" id="gridmark_banner">
  </div>
  <!-- <el-carousel :interval="2000" arrow="always" class="gridmark_banners"  :height="bannerHeight + 'px'"> -->

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
  height: 974px;
  background-color: color-bg-default;
}

.el-carousel__container {
  height: 456px;
}

.info__jiaotong {
  width: 100%;
  height: inherit;
  min-height: 456px;
  min-width: 1400px;
}
</style>
