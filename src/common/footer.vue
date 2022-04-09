<template>
  <div class="footer-content">
    <div class="footer-top">
      <div class="footer-imgs ct w-max">
        <ul class="clearfix">
          <li class="fl"><a class="zp ft18" href="#">正品保障</a></li>
          <li class="fl"><a class="ck ft18" href="#">品类丰富</a></li>
          <li class="fl"><a class="ps ft18" href="#">优质服务</a></li>
          <li class="fl"><a class="hh ft18" href="#">科学养宠</a></li>
          <li class="fl"><a class="bs ft18" href="#">E宠公益</a></li>
          <li class="fl"><a class="cj ft18" href="#">爱宠12年</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-wrapper">
      <div class="info clearfix">
        <div class="footer-phone fl mr20 pr20">
        <img class="fl mt5 dogphone" src="//static.epetbar.com/www/newFooter/dog_phone.gif">
        <div class="footer-number fl">
        <h2 class="ft14 c666 bold">售后电话：</h2>
        <p class="c666 ft20 mt20">4008889200<span class="ml5 ft12">「免长途费」</span></p>
        <p class="c666 ft20 mt20">023-68851700<span class="ml5 ft12"></span></p>
        <p class="c444 ft12 mt10">服务时间：09:00--18:30（周一到周日）</p>
        </div>
        </div>
        <div class="pay-style fl">
        <h2 class="ft14 c666 bold">购物指南</h2>
        <p class="ft14 c444 mt20"><a href="#" target="_blank">新人优惠</a></p>
        <p class="ft14 c444 mt5"><a href="#" target="_blank">购物问题</a></p>
        <p class="ft14 c444 mt5"><a href="#" target="_blank">支付问题</a></p>
        </div>
        <div class="peisong-style fl">
        <h2 class="ft14 c666 bold"></h2>
        </div>
        <div class="shopping-guide fl">
        <h2 class="ft14 c666 bold">售后服务</h2>
        <p class="ft14 c444 mt20"><a href="#" target="_blank">退换货政策</a></p>
        <p class="ft14 c444 mt5"><a href="#" target="_blank">退款说明</a></p>
        <p class="ft14 c444 mt5"><a href="#" target="_blank">售后问题</a></p>
        </div>
        <div class="app-code fl ml20">
        <p class="ftc ft12">扫描下载APP</p>
        <p class="ftc ft12">下单更优惠</p>
        <a href="http://www.epet.com/app.html" target="_blank"><img src="//static.epetbar.com/www/images/dw2.png?v=10"></a>
        </div>
        <div class="wx-code fr">
        <p class="ftc ft12">扫描关注E宠</p>
        <p class="ftc ft12">商城微信</p>
        <img src="//static.epetbar.com/www/images/app-code.jpg?v=10">
        </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
  .footer-content {
    background: #f5f5f5;
    /* display: fixed;
    bottom: 0; */
  }
  .footer-content .footer-top {
    border-bottom: 1px solid #e5e5e5;
    height: 100px;
  }
  .ct {
    margin: 0 auto;
  }
  .w-max {
    width: 1200px;
  }
  .footer-content .footer-imgs ul {
    width: 1200px;
    margin: 0 auto;
    padding: 19px 0;
  }
  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .clearfix {
    *zoom: 1;
  }
  .footer-content .footer-imgs ul li {
    width: 200px;
  }

  .fl {
    float: left;
  }
  .footer-content .footer-imgs ul li .zp {
    background: url('../assets/images/logo.png') 0 0 no-repeat;
  }
  .footer-content .footer-imgs ul li .ck {
    background: url('../assets/images/logo.png') 0 -162px no-repeat;
  }
  .footer-content .footer-imgs ul li .ps {
    background: url('../assets/images/logo.png') 0 -242px  no-repeat;
  }
  .footer-content .footer-imgs ul li .hh {
    background: url('../assets/images/logo.png') 0 -82px  no-repeat;
  }
  .footer-content .footer-imgs ul li .bs {
    background: url('../assets/images/logo.png') 0 -322px  no-repeat;
  }
  .footer-content .footer-imgs ul li .cj {
    background: url('../assets/images/logo.png') 0 -402px  no-repeat;
  }
  a:link, a:visited {
    outline: 0;
  }

  .ft18 {
    font-size: 18px;
  }
  a {
    text-decoration: none;
    color: #444;
  }
  .footer-content .footer-imgs ul li a {
    display: block;
    height: 62px;
    padding-left: 72px;
    line-height: 62px;
    color: #444;
    font-weight: 700;
    transition: all .8s ease;
  }
  .footer-content .footer-wrapper {
    width: 1200px;
    margin: 0 auto;
    padding-top: 25px;
  }
  .footer-content .footer-wrapper .info {
    padding-bottom: 25px;
    border-bottom: 1px solid #e5e5e5;
  }
  .pr20 {
    padding-right: 20px;
  }

  .mr20 {
    margin-right: 20px;
  }
  .mt5 {
    margin-top: 5px;
  }
  .footer-content .footer-wrapper .footer-phone .footer-number {
    margin-left: 30px;
  }
  .bold {
    font-weight: 700;
  }

  .c666 {
    color: #666;
  }
  .ft14 {
    font-size: 14px;
  }
  .footer-content .footer-wrapper .footer-phone .footer-number p {
    margin-top: 15px;
  }

  .mt20, .mtop20 {
    margin-top: 20px;
  }
  .c666 {
    color: #666;
  }
  .ft20 {
    font-size: 20px;
  }
  .ml5 {
    margin-left: 5px;
  }
  .ft12 {
    font-size: 12px;
  }
  .c444 {
    color: #444;
  }
  .footer-content .footer-wrapper .pay-style, .footer-content .footer-wrapper .peisong-style, .footer-content .footer-wrapper .shopping-guide {
    margin-right: 100px;
  }

  .footer-content .footer-wrapper .pay-style {
    margin-left: 40px;
  }
  .footer-content .footer-wrapper .pay-style, .footer-content .footer-wrapper .peisong-style, .footer-content .footer-wrapper .shopping-guide {
    margin-right: 100px;
  }
  .footer-content .footer-wrapper .pay-style, .footer-content .footer-wrapper .peisong-style, .footer-content .footer-wrapper .shopping-guide {
    margin-right: 100px;
  }
  .footer-content .footer-wrapper .app-code, .footer-content .footer-wrapper .wx-code {
    margin-top: -5px;
  }
  .fr {
    float: right;
  }
  .footer-content .footer-wrapper .app-code {
    margin-right: 36px;
  }
  .ml20 {
    margin-left: 150px;
  }
  .footer-content .footer-wrapper .app-code, .footer-content .footer-wrapper .wx-code {
    margin-top: -5px;
  }
  </style>