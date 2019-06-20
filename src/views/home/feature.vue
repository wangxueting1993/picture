<template>
  <div class="use_place">
    <div class="gridmark_main product_place product">
      <div class="product__title">
        <div>
          FEATURES/ 功能特点
        </div>
        <div class="activeLine">
          <div>
          </div>
        </div>
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
                    src="../../assets/images/common/1-1.png"
                    alt=""
                  >
                </div>
                <div>
                  <span class="product__tip">
                    区块链技术
                  </span>
                  <span class="product__cont">
                    结合区块链技术对商品防伪内容和流转溯源等信息上链，避免被恶意篡改。
                  </span>
                </div>
                <div class="activeLine">
                  <div>
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
                      src="../../assets/images/common/1-2.png"
                      alt=""
                    >
                  </div>
                  <div>
                    <span class="product__tip">
                      防伪溯源
                    </span>
                    <span class="product__cont">
                      对受保护的商品进行防伪追溯，查找每一件商品的流转信息，再也不用担心商品窜货了。
                    </span>
                  </div>
                  <div class="activeLine">
                    <div>
                    </div>
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
                      src="../../assets/images/common/1-3.png"
                      alt=""
                    >
                  </div>
                  <div>
                    <span class="product__tip">
                      法务联动
                    </span>
                    <span class="product__cont">
                      与大成等顶尖律师事务所合作，帮助品牌方进行仿冒维权，一站式服务免除您的后顾之忧
                    </span>
                  </div>
                  <div class="activeLine">
                    <div>
                    </div>
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
                    src="../../assets/images/common/1-4.png"
                    alt=""
                  >
                </div>
                <div>
                  <span class="product__tip">
                    专利技术
                  </span>
                  <span class="product__cont">
                    采用航天科技的权威时间戳，证明商品时间的权威性，增加用户对品牌的信任度和忠诚度。
                  </span>
                </div>
                <div class="activeLine">
                  <div>
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
                      src="../../assets/images/common/1-5.png"
                      alt=""
                    >
                  </div>
                  <div>
                    <span class="product__tip">
                      权威证明
                    </span>
                    <span class="product__cont">
                      超级图片相关算法获得十多项国家发明专利，也获得政府专项基金的支持
                    </span>
                  </div>
                  <div class="activeLine">
                    <div>
                    </div>
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
                      src="../../assets/images/common/1-6.png"
                      alt=""
                    >
                  </div>
                  <div>
                    <span class="product__tip">
                      互动营销
                    </span>
                    <span class="product__cont">
                      扫一扫获得丰富的商品信息，下单购买，参与促销活动，提升用户体验
                    </span>
                  </div>
                  <div class="activeLine">
                    <div>
                    </div>
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
<style lang="stylus" scoped>
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
  height: 804px;
}

.product_place {
  padding-top: 0;
}

.product {
  padding-top: 0;
  // line-height: 60px;
  // color: color-hover;
  height: 550px;

  &__title {
    color: #1A1A1A;
    font-size: 20px;
    padding: 60px 0 40px 0;
  }

  &__pro, &__product {
    border-radius: 6px;
    width: 260px;
    height: 316px;
    background: color-whitebg;

    span {
      display: inline-block;
      // font-size: 16px;
      // color: color-hover;
    }
  }

  &__transform {
    transition: box-shadow 0.5s;
    -webkit-transition: box-shadow 0.5s;
    box-shadow: 3px 3px 15px 2px #e5e5e5;
  }

  &__transform:hover {
    box-shadow: 2px 2px 15px 1px color-hover;
  }

  &__img {
    width: 75px;
    height: 85px;
    margin-top: 21px;
  }

  &__main {
    display: block;
    height: 450px;
  }

  &__tip {
    margin: 16px 0 29px 0;
    font-size: 16px;
    color: #252525;
  }

  &__cont {
    margin: 0 44px 0 47px;
    height: 142px;
    font-size: 18px;
    color: #252525;
    text-align left 
  }
}

.product-up {
  padding-top: 0;
  // line-height 45px
  color: color-hover;
  height: 670px;

  &__title {
    font-size: 20px;
    height: 90px;
    line-height: 90px;
  }

  &__box {
    overflow: hidden;
    // padding-left 5px
    height: 245px;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 10px;
    background: rgba(0, 0, 0, 0.6);
  }

  &__product {
    position: relative;
    border-radius: 6px;
    width: 250px;
    height: 245px;
    overflow: hidden;
    background: color-bg-gray;

    span {
      display: inline-block;
      font-size: 14px;
      color: #fff;
    }
  }

  &__transform {
    // box-shadow:2px 2px 5px #999
  }

  &__transform:hover {
    // transform translateY(-5%)
    // -ms-transform translateY(-5%)
    // -webkit-transform translateY(-5%)
  }

  &__img {
    width: 230px;
    height: 192px;
    margin-top: 10px;
  }

  &__main {
    display: block;
    height: 450px;
  }

  &__tip {
    width: 230px;
    line-height: 25px;
    text-align: left;
    margin: 7px;
  }

  &__titles {
    width: 100%;
    line-height: 45px;
    text-align: center;
    font-size: 15px;
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
