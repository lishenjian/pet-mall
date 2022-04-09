<template>
  <div class="w">
    <div class="gray-box">
      <div class="gallery-wrapper">
        <div class="gallery">
          <div class="thumbnail">
            <div @click="setItem(item, index)" :class="{on: index==currentIndex}" v-for="(item, index) in smallImages" :key="item.id">
              <img :src="item.src" alt="" srcset="">
            </div>
          </div>
          <div class="thumb">
            <div class="big">
              <img :src="bigImag" alt="" srcset="">
            </div>
          </div>
        </div>
      </div>
      <div class="banner">
        <div class="sku-custom-title">
          <h4>Smartisan 帆布鞋</h4>
          <h6>
            <span>一双踏实、舒适的帆布鞋</span>
            <span class="price"><em>￥</em><i>1000</i></span>
          </h6>
        </div>
        <div class="num">
          <span class="params-name">数量</span>
          <el-input-number v-model="num" :step="1"></el-input-number>
        </div>
        <div class="buy">
          <el-button type="primary">加入购物车</el-button>
          <el-button>现在购买</el-button>
        </div>
      </div>
    </div>
    <div class="item-info"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      smallImages: [
        {
          id: 1,
          src: require('../../assets/images/detail01-01.jpg'),
        },
        {
          id: 2,
          src: require('../../assets/images/detail01-02.jpg'),
        },
        {
          id: 3,
          src: require('../../assets/images/detail01-03.jpg'),
        }
      ],
      currentIndex: 0,
      bigImag: '',
      num: 1
    }
  },
  mounted() {
    this.getDetail(this.$route.query.id)
  },
  methods: {
    getDetail(id) {
      this.$axios.get('/good/goodDetail01').then(res=>{
        console.log(res);
        this.bigImag = this.smallImages[0].src;
      })
    },
    setItem(item, index) {
      this.currentIndex=index;
      this.bigImag = item.src
    }
  }
}
</script>

<style scoped>
  .gray-box {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    overflow: hidden;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #dcdcdc;
    border-color: rgba(0,0,0,.14);
    box-shadow: 0 3px 8px -6px rgb(0 0 0 / 10%);
    padding: 60px;
  }
  .gray-box .gallery-wrapper .gallery{
    display: flex;
    width: 540px;
  }
  .gray-box .gallery-wrapper .gallery .thumbnail div.on {
    padding: 10px;
    border: 3px solid #ccc;
    border: 3px solid rgba(0,0,0,.2);
  }

  .gray-box .gallery-wrapper .gallery .thumbnail div:first-child {
    margin-top: 0;
  }
  .gray-box .gallery-wrapper .gallery .thumbnail div{
    width: 80px;
    height: 80px;
    margin-top: 10px;
    padding: 12px;
    border: 1px solid #f0f0f0;
    border: 1px solid rgba(0,0,0,.06);
    border-radius: 5px;
    cursor: pointer;
  }
  .gray-box .gallery-wrapper .gallery .thumbnail div img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .gray-box .gallery-wrapper .gallery .thumb .big {
    margin-left: 20px;
  }
  .gray-box .gallery-wrapper .gallery .thumb img {
    display: block;
    width: 440px;
    height: 440px;
  }
  .gray-box .banner {
    width: 450px;
    margin-left: 10px;
  }
  .gray-box .banner .sku-custom-title {
    overflow: hidden;
    padding: 8px 8px 18px 10px;
    position: relative;
  }
  .gray-box .banner h4 {
    font-size: 24px;
    line-height: 1.25;
    color: #000;
    margin-bottom: 13px;
  }
  .gray-box .banner h6 {
    font-size: 14px;
    line-height: 1.5;
    color: #bdbdbd;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .price {
    display: block;
    color: #d44d44;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: right;
  }
  em, i {
    font-style: normal;
  }
  .price i{
    padding-left: 2px;
    font-size: 24px;
  }
  .gray-box .banner .num {
    padding: 29px 0 8px 10px;
    border-top: 1px solid #ebebeb;
    display: flex;
    align-items: center;
  }
  .gray-box .banner .params-name {
    padding-right: 20px;
    font-size: 14px;
    color: #8d8d8d;
    line-height: 36px;
  }
  .gray-box .banner .buy {
    position: relative;
    border-top: 1px solid #ebebeb;
    padding: 30px 0 0 10px;
  }
</style>