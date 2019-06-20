<template>
  <div class="use_place">
    <div class="gridmark_main product_place product">
      <div class="product__title">
        <div>
          COOPERTIVE PARTNER/ 合作伙伴
        </div>
        <div class="activeLine">
          <div>
          </div>
        </div>
      </div>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img
              class="product__img"
              src="../../assets/images/common/1.png"
              alt=""
            >
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <img
              class="product__img"
              src="../../assets/images/common/2.png"
              alt=""
            >
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"> <img
              class="product__img"
              src="../../assets/images/common/3.png"
              alt=""
            ></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <img
              class="product__img"
              src="../../assets/images/common/4.png"
              alt=""
            >
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img
              class="product__img"
              src="../../assets/images/common/5.png"
              alt=""
            >
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <img
              class="product__img"
              src="../../assets/images/common/6.png"
              alt=""
            >
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img
              class="product__img"
              src="../../assets/images/common/7.png"
              alt=""
            >
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <img
              class="product__img"
              src="../../assets/images/common/8.png"
              alt=""
            >
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img
              class="product__img"
              src="../../assets/images/common/9.png"
              alt=""
            >
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <img
              class="product__img"
              src="../../assets/images/common/10.png"
              alt=""
            >
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <img
              class="product__img"
              src="../../assets/images/common/11.png"
              alt=""
            >
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <img
              class="product__img"
              src="../../assets/images/common/12.png"
              alt=""
            >
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
/deep/ {
  .el-row {
    margin-bottom 39px
  }
  .grid-content {
    width: 267px;
    height: 135px;

    // border: 3px solid rgba(230, 230, 230, 1);
    // border-radius: 8px;
    img {
      width: 100%;
      height: 100%;
      display: inline-block;
    }
  }
}

.activeLine {
  width: 100%;
  text-align: center;
  position: relative;
  height: 4px;

  div {
    width: 63px;
    height: 4px;
    background: #E41F1A;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
  }
}

.use_place {
  // background color-bg-default
  height: 870px;
}

.product_place {
  padding-top: 0;
}

.product {
  padding-top: 0;
  height: 550px;

  &__title {
    color: #1A1A1A;
    font-size: 20px;
    padding: 60px 0 40px 0;
  }
}

.row-space {
  margin-bottom: 40px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
</style>
