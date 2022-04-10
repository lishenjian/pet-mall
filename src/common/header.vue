<template>
  <div>
    <header class="w">
      <div class="w-box">
        <div class="nav-logo">
          <img src="../assets/images/chong.jpg" alt="" srcset="">
        </div>
        <div class="right-box">
          <div class="nav-list">
            <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
            <router-link to="/goods"><a>全部商品</a></router-link>
          </div>
          <div class="nav-aside" ref="aside">
            <div class="user pr">
              <!-- <router-link to="/user">个人中心</router-link> -->
              <!--用户信息显示-->
              <!-- <div class="nav-user-wrapper pa" v-if="login">
                <div class="nav-user-list">
                  <ul>
                    <li class="nav-user-avatar">
                      <div>
                        <span class="avatar" :style="{backgroundImage:'url('+userInfo.info.file+')'}">
                        </span>
                      </div>
                      <p class="name">{{userInfo.info.username}}</p>
                    </li>
                    <li>
                      <router-link to="/user/orderList">我的订单</router-link>
                    </li>
                    <li>
                      <router-link to="/user/information">账号资料</router-link>
                    </li>
                    <li>
                      <router-link to="/user/addressList">收货地址</router-link>
                    </li>
                    <li>
                      <router-link to="/user/support">售后服务</router-link>
                    </li>
                    <li>
                      <router-link to="/user/coupon">我的优惠</router-link>
                    </li>
                    <li>
                      <a href="javascript:;" @click="_loginOut">退出</a>
                    </li>
                  </ul>
                </div>
              </div> -->
            </div>
            <div class="shop pr" ref="positionMsg">
              <router-link to="/cart">
                <span class="cart-num">
                  <i class="el-icon-shopping-cart-2"></i>
                  {{totalNum}}
              </span>
              </router-link>
              
              <!--购物车显示块-->
              <!-- <div class="nav-user-wrapper pa active" v-show="showCart">
                <div class="nav-user-list">
                  <div class="full" v-show="totalNum">
                    <div class="nav-cart-items">
                      <ul>
                        <li class="clearfix" v-for="(item,i) in cartList" :key="i">
                          <div class="cart-item">
                            <div class="cart-item-inner">
                              <a @click="openProduct(item.productId)">
                                <div class="item-thumb">
                                  <img :src="item.productImg">
                                </div>
                                <div class="item-desc">
                                  <div class="cart-cell"><h4>
                                    <a href="" v-text="item.productName"></a>
                                  </h4>
                                    <h6><span class="price-icon">¥</span><span
                                      class="price-num">{{item.salePrice}}</span><span
                                      class="item-num">x {{item.productNum}}</span>
                                    </h6></div>
                                </div>
                              </a>
                              <div class="del-btn del" @click="delGoods(item.productId)">删除</div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="nav-cart-total"><p>共 <strong>{{totalNum}}</strong> 件商品</p> <h5>合计：<span
                      class="price-icon">¥</span><span
                      class="price-num">{{totalPrice}}</span></h5>
                      <h6>
                        <y-button classStyle="main-btn"
                                  style="height: 40px;width: 100%;margin: 0;color: #fff;font-size: 14px;line-height: 38px"
                                  text="去购物车" @btnClick="toCart"></y-button>
                      </h6>
                    </div>
                  </div>
                  <div v-show="!totalNum" style="height: 313px;text-align: center" class="cart-con">
                    <p>您的购物车竟然是空的!</p>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- <slot name="nav">
      <div class="nav-sub" :class="{fixed:st}">
        <div class="nav-sub-wrapper" :class="{fixed:st}">
          <div class="w">
            <ul class="nav-list2">
              <li>
                <router-link to="/"><a @click="changGoods(-1)" :class="{active:choosePage===-1}">首页</a></router-link>
              </li>
              <li>
                <a @click="changGoods(-2)" :class="{active:choosePage===-2}">全部</a>
              </li>
              <li v-for="(item,i) in navList" :key="i">
                <a @click="changGoods(i, item)" :class="{active:i===choosePage}">{{item.picUrl}}</a>
              </li>
            </ul>
            <div></div>
          </div>
        </div>
      </div>
    </slot> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: false,
      totalNum: 10,
      navList: [
        {
          "id": 59,
          "panelId": 0,
          "type": 0,
          "sortOrder": 3,
          "fullUrl": "",
          "picUrl": "宠课堂",
          "productImageBig": "宠课堂"
        },
        {
          "id": 60,
          "panelId": 0,
          "type": 0,
          "sortOrder": 3,
          "fullUrl": "",
          "picUrl": "萌爪联盟",
          "productImageBig": "萌爪联盟"
        },
      ]
    }
  },
}
</script>

<style>
  header {
    height: 100px;
    z-index: 30;
    position: relative;
  }
  
  .w-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%
  }
  .w-box .right-box {
    display: flex;
  }
  .w-box .nav-list {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 22px;
  }
  a {
    font-style: normal;
    text-decoration: none;
    color: #5079d9;
    cursor: pointer;
    transition: all .15s ease-out;
  }
  .w-box a {
    width: 110px;
    color: #c8c8c8;
    display: block;
    font-size: 14px;
    padding: 0 25px;
    margin-left: -10px;
  }
  .nav-aside {
    display: flex;
    align-items: center;
  }
  .cart-num {
    color: #c8c8c8;
  }
  .el-icon-shopping-cart-2 {
    font-size: 24px;
  }
  .nav-sub {
    position: relative;
    z-index: 20;
    height: 90px;
    background: #f7f7f7;
    box-shadow: 0 2px 4px rgb(0 0 0 / 4%);
  }
  .nav-sub .nav-sub-wrapper {
    padding: 31px 0;
    height: 90px;
    position: relative;
  }
  .nav-sub .nav-list2{
    line-height: 28px;
    display: flex;
    align-items: center;
    height: 100%;
  }
  .nav-sub .nav-list2 li:first-child {
    padding-left: 0;
  }

  .nav-sub .nav-list2 li {
    position: relative;
    float: left;
    padding-left: 2px;
  }
  .nav-sub .nav-list2 li:first-child a {
    padding-left: 10px;
  }
  .nav-sub .nav-list2 li a {
    display: block;
    padding: 0 10px;
    color: #666;
  }
  ul {
    list-style: none;
  }
</style>