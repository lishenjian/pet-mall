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
          <div class="table-control">操作</div>
        </div>
        <div class="cart-flex cart-item" v-for="(item, index) in cartList" :key="item.id">
          <div class="table-item1">
            <div class="item-icon">
              <i @click="selectCheck(index, item)" class="el-icon-success" v-if="item.selected"></i>
              <i @click="selectCheck(index, item)" class="circle" v-else></i>
            </div>
            <div class="item-content">
              <img :src="item.src">
              <p>{{item.title}}</p>
            </div>
          </div>
          <div class="table-item">￥{{item.price}}</div>
          <div class="table-item">
            <el-input-number @change="cartCountChange" v-model="item.count" :min="1" :max="10"></el-input-number>
          </div>
          <div class="table-item">￥{{item.totalAmt}}</div>
          <span class="list-del" @click="delCart(index)"></span>
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
            <div>已选<span class="num">{{selectCount}}</span>件商品</div>
            <div class="list-sum">共计<span>{{cartList.length}}</span>件商品</div>
          </div>
          <div class="table-item info-list">
            <div>应付总额：<span class="num">￥{{selectAmt}}</span></div>
            <div class="list-sum">应付总额不含运费</div>
          </div>
          <div class="table-item info-list">
            <el-button type="primary" v-if="selectCount">现在结算</el-button>
            <el-button type="info" v-else disabled>现在结算</el-button>
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
      cartList: [],
      selectAll: true,
      selectCount: 0,
      selectAmt: 0,
      totalCount: 0
    }
  },
  mounted() {
    this.cartList = JSON.parse(localStorage.getItem('myCart')) || [];
    this.computedInfo()
  },
  methods: {
    selectCheck(index, item) {
      item.selected = !item.selected;
      this.cartList.splice(index, 1, item);
      this.computedInfo()
    },
    computedInfo() {
      let selectCount = 0;
      let selectAmt = 0;
      this.cartList.forEach(item=>{
        if(item.selected) {
          selectCount++;
          selectAmt+=item.price*item.count;
        }
      })
      this.selectCount = selectCount;
      this.selectAll = this.cartList.length==selectCount&&selectCount!=0;
      this.selectAmt = selectAmt;
    },
    cartCountChange() {
      this.computedInfo()
    },
    delCart(index) {
      this.cartList.splice(index, 1);
      this.computedInfo()
    }
  }
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
  .table-control {
    width: 50px;
  }
  .list-del {
    position: absolute;
    right: 30px;
    display: block;
    width: 24px;
    height: 24px;
    margin: 0 auto;
    color: #c2c2c2;
    background: url(data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QOPaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YzYwOTQ1YzQtYmUxOC00NTEwLTlmNTItYzE2ZWZlY2I0ZWMwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3NTRCNTE1MkNCMTExRTZBRjlBQjM2NThGRUM3MzFDIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3NTRCNTE0MkNCMTExRTZBRjlBQjM2NThGRUM3MzFDIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTkzNDI3MDctMmYwOC00ZTdkLTllZjUtNmU0ZDc0OGJhYWM3IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NWZmMWFkZjUtNzBmZS0xMTc5LWIxMDAtZTU3NTliM2Y1ZWE3Ii8+IDwv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);
    background-size: 100% auto;
    transition: none;
    cursor: pointer;
  }
  .list-del:hover {
    background-position: 0 -36px;
  }
</style>