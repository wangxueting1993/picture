<template>
  <div class="use_place">
    <div class="gridmark_main product_place product">
      <div class="product__title">
        <div>
          NEWS CENTER / 资讯中心
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
              src="../../assets/images/common/2-1.png"
              alt=""
            >
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light fontPanle_red">
            <div class="fontPanle">
              <div class="year">2019</div>
              <div class="date">06-18</div>
              <div class="content">
                <span class="line">—</span>
                <span class="line_cont">采用数字指纹、AI识别等技术，让数字内容关联数字基因，实现数字内容流转后的追溯确权</span>
              </div>
              <div class="jiantou">
                →
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"> <img
              class="product__img"
              src="../../assets/images/common/2-3.png"
              alt=""
            ></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light grid-grey">
            <div class="fontPanle">
              <div class="year">2019</div>
              <div class="date">10-13</div>
              <div class="content">
                <span class="line">—</span>
                <span class="line_cont">采用数字指纹、AI识别等技术，让数字内容关联数字基因，实现数字内容流转后的追溯确权</span>
              </div>
              <div class="jiantou">
                →
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple grid-grey">
            <div class="fontPanle">
              <div class="year">2019</div>
              <div class="date">12-08</div>
              <div class="content">
                <span class="line">—</span>
                <span class="line_cont">采用数字指纹、AI识别等技术，让数字内容关联数字基因，实现数字内容流转后的追溯确权</span>
              </div>
              <div class="jiantou">
                →
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <img
              class="product__img"
              src="../../assets/images/common/2-2.png"
              alt=""
            >
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple grid-grey">
            <div class="fontPanle">
              <div class="year">2019</div>
              <div class="date">08-10</div>
              <div class="content">
                <span class="line">—</span>
                <span class="line_cont">采用数字指纹、AI识别等技术，让数字内容关联数字基因，实现数字内容流转后的追溯确权</span>
              </div>
              <div class="jiantou">
                →
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
            <img
              class="product__img"
              src="../../assets/images/common/2-4.png"
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
  .grid-content {
    width: 300px;
    height: 250px;
    background: #E41F1A;

    img {
      width: 100%;
      height: 100%;
      display: inline-block;
    }
  }

  .grid-grey {
    background: #EEEEEE;
  }
}

.fontPanle_red {
  color: #fff;
}

.fontPanle {
  text-align: left;
  padding-top: 80px;
  padding-left: 33px;

  .year {
    font-size: 10px;
  }

  .date {
    margin-top: 4px;
    font-size: 20px;
  }

  .content {
    span {
      display: inline-block;
    }

    .line {
      vertical-align: 32px;
    }

    .line_cont {
      width: 206px;
      font-size: 12px;
      padding-left: 4px;
    }
  }

  .jiantou {
    margin: 15px 0 0 22px;
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
  height: 630px;
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
