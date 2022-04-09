<template>
  <div class="store-content page-cart">
    <div class="gray-box">
      <div class="title">
        <h2>购物清单</h2>
      </div>
      <div class="table-cart">
        <div class="cart-flex cart-title">
          <div class="table-item1">商品信息</div>
          <div class="table-item">单价</div>
          <div class="table-item">数量</div>
          <div class="table-item">小计</div>
        </div>
        <div class="cart-flex cart-item" v-for="(item, index) in cartList" :key="item.id">
          <div class="table-item1">
            <div class="item-icon">
              <i class="el-icon-success" v-if="item.selected"></i>
              <i class="circle" v-else></i>
            </div>
            <div class="item-content">
              <img :src="item.src">
              <p>{{item.title}}</p>
            </div>
          </div>
          <div class="table-item">￥{{item.price}}</div>
          <div class="table-item">
            <el-input-number v-model="num" :min="1" :max="10"></el-input-number>
          </div>
          <div class="table-item">￥{{item.totalAmt}}</div>
        </div>
        <div class="cart-info">
          <div class="table-item1">
            <div class="item-icon">
              <i class="el-icon-success" v-if="selectAll"></i>
              <i class="circle" v-else></i>
            </div>
            <div>全选</div>
          </div>
          <div class="table-item info-list">
            <div>已选<span class="num">0</span>件商品</div>
            <div class="list-sum">共计<span>72</span>件商品</div>
          </div>
          <div class="table-item info-list">
            <div>应付总额：<span class="num">￥0</span></div>
            <div class="list-sum">应付总额不含运费</div>
          </div>
          <div class="table-item info-list">
            <el-button type="primary">现在结算</el-button>
            <el-button type="info" disabled>现在结算</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      cartList: [
        {
          id: 1,
          src: require('../../assets/images/dog-01.jpg'),
          selected: true,
          title: 'Smartisan 明信片',
          price: 1000,
          count: 10,
          totalAmt: 10000
        },
        {
          id: 2,
          src: require('../../assets/images/dog-02.jpg'),
          selected: true,
          title: 'Smartisan 明信片',
          price: 1000,
          count: 10,
          totalAmt: 10000
        },
        {
          id: 3,
          src: require('../../assets/images/dog-02.jpg'),
          selected: true,
          title: 'Smartisan 明信片',
          price: 1000,
          count: 10,
          totalAmt: 10000
        },
        {
          id: 4,
          src: require('../../assets/images/dog-02.jpg'),
          selected: true,
          title: 'Smartisan 明信片',
          price: 1000,
          count: 10,
          totalAmt: 10000
        }
      ],
      selectAll: true
    }
  },
}
</script>

<style>
  .table-cart {
    padding-bottom: 91px;
  }
  .store-content {
    clear: both;
    width: 1220px;
    min-height: 600px;
    padding: 0 0 25px;
    margin: 0 auto;
  }
  .page-cart {
    padding-top: 40px;
  }
  .gray-box {
    overflow: hidden;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #dcdcdc;
    border-color: rgba(0,0,0,.14);
    box-shadow: 0 3px 8px -6px rgb(0 0 0 / 10%);
  }
  .store-content .gray-box{
    position: relative;
    margin-bottom: 30px;
    overflow: hidden;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #dcdcdc;
    border-color: rgba(0,0,0,.14);
    box-shadow: 0 3px 8px -6px rgb(0 0 0 / 10%);
  }
  .store-content .gray-box .title {
    padding-left: 30px;
    position: relative;
    z-index: 10;
    height: 60px;
    padding: 0 10px 0 24px;
    border-bottom: 1px solid #d4d4d4;
    border-radius: 8px 8px 0 0;
    box-shadow: 0 1px 7px rgb(0 0 0 / 6%);
    background: #f3f3f3;
    background: linear-gradient(#fbfbfb,#ececec);
    line-height: 60px;
    font-size: 18px;
    color: #333;
  }
  .cart-flex {
    display: flex;
    align-items: center;
  }
  .cart-item {
    height: 140px;
  }
  .cart-item img {
    width: 80px;
    height: 80px;
    margin-right: 20px;
  }
  .cart-title {
    line-height: 38px;
    height: 38px;
    padding: 0 0 0 30px;
    font-size: 12px;
    background: #eee;
    border-bottom: 1px solid #dbdbdb;
    border-bottom-color: rgba(0,0,0,.08);
  }
  .table-item1 {
    width: 45%;
    display: flex;
  }
  .table-item {
    flex: 1;
    text-align: center;
  }
  .circle {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 5px solid #ebebeb;
    border-radius: 50%;
  }
  .el-icon-success {
    font-size: 20px;
    color: #409eff;
  }
  .item-icon {
    display: flex;
    align-items: center;
    margin: 0 20px;
  }
  .item-content {
    display: flex;
    align-items: center;
  }
  .cart-info {
    display: flex;
    align-items: center;
    height: 90px;
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 1;
    background-position: 50%;
    background: #fdfdfd;
    background: linear-gradient(#fdfdfd,#f9f9f9);
    border-top: 1px solid #e9e9e9;
    box-shadow: 0 -3px 8px rgb(0 0 0 / 4%);
  }
  /* .info-list {
    display: flex;
  } */
  .list-sum {
    color: #959595;
  }
  .cart-info .num {
    color: red;
    font-weight: 600;
    margin: 0 10px;
  }
</style>