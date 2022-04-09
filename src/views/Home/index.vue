<template>
  <div>
    <div class="w">
      <el-carousel class="banner">
        <el-carousel-item v-for="item in baners" :key="item.id">
          <img :src="item.src" alt="" srcset="">
        </el-carousel-item>
      </el-carousel>
      <!-- 热门宠物 -->
      <section class="mt30 clearfix">
        <div class="gray-box">
          <div class="title">
            <h2>热门宠物</h2>
          </div>
          <div>
            <div class="hot">
              <div class="good-item">
                <div>
                  <div class="good-img">
                    <img src="../../assets/images/s81.jpg" alt="" srcset="">
                  </div>
                  <h6 class="good-title">边境牧羊犬原产于苏格兰边境，为柯利牧羊犬之一种</h6>
                  <h3 class="sub-title ellipsis">天性聪颖、善于察言观色</h3>
                  <div class="good-price pr">
                    <div class="good-btns">
                      <el-button @click="gotoDetail(1)">查看详情</el-button>
                      <el-button type="primary">加入购物车</el-button>
                    </div>
                    <div class="good-amt">
                      <span>￥</span>1000
                    </div>
                  </div>
                </div>
              </div>
              <div class="good-item">
                <div>
                  <div class="good-img">
                    <img src="../../assets/images/z31.jpg" alt="" srcset="">
                  </div>
                  <h6 class="good-title">柯基犬即威尔士柯基犬（著名犬种）</h6>
                  <h3 class="sub-title ellipsis">体形较短，腿骨更直、更轻</h3>
                  <div class="good-price pr">
                    <div class="good-btns">
                      <el-button>查看详情</el-button>
                      <el-button type="primary">加入购物车</el-button>
                    </div>
                    <div class="good-amt">
                      <span>￥</span>1000
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 精选宠物 -->
      <section class="mt30 clearfix">
        <div class="gray-box">
          <div class="title">
            <h2>热门宠物</h2>
          </div>
          <div class="floors">
              <div class="good-item">
                <div>
                  <div class="good-img">
                    <img src="../../assets/images/dog-01.jpg" alt="" srcset="">
                  </div>
                  <h6 class="good-title">金毛犬</h6>
                  <h3 class="sub-title ellipsis">金毛寻回猎犬，伴侣犬，英国</h3>
                  <div class="good-price pr">
                    <div class="good-btns">
                      <el-button>查看详情</el-button>
                      <el-button type="primary">加入购物车</el-button>
                    </div>
                    <div class="good-amt">
                      <span>￥</span>1000
                    </div>
                  </div>
                </div>
              </div>
              <div class="good-item">
                <div>
                  <div class="good-img">
                    <img src="../../assets/images/dog-02.jpg" alt="" srcset="">
                  </div>
                  <h6 class="good-title">法国斗牛犬</h6>
                  <h3 class="sub-title ellipsis">活泼、聪明、肌肉发达</h3>
                  <div class="good-price pr">
                    <div class="good-btns">
                      <el-button>查看详情</el-button>
                      <el-button type="primary">加入购物车</el-button>
                    </div>
                    <div class="good-amt">
                      <span>￥</span>1000
                    </div>
                  </div>
                </div>
              </div>
               <div class="good-item">
                <div>
                  <div class="good-img">
                    <img src="../../assets/images/dog-03.jpg" alt="" srcset="">
                  </div>
                  <h6 class="good-title">拉布拉多寻回犬</h6>
                  <h3 class="sub-title ellipsis">个性温和、活泼，没有攻击性且智能高</h3>
                  <div class="good-price pr">
                    <div class="good-btns">
                      <el-button>查看详情</el-button>
                      <el-button type="primary">加入购物车</el-button>
                    </div>
                    <div class="good-amt">
                      <span>￥</span>1000
                    </div>
                  </div>
                </div>
              </div>
               <div class="good-item">
                <div>
                  <div class="good-img">
                    <img src="../../assets/images/dog-04.jpg" alt="" srcset="">
                  </div>
                  <h6 class="good-title">哈士奇</h6>
                  <h3 class="sub-title ellipsis">二哈，工作犬，西伯利亚</h3>
                  <div class="good-price pr">
                    <div class="good-btns">
                      <el-button>查看详情</el-button>
                      <el-button type="primary">加入购物车</el-button>
                    </div>
                    <div class="good-amt">
                      <span>￥</span>1000
                    </div>
                  </div>
                </div>
              </div>
              <div class="good-item">
                <div>
                  <div class="good-img">
                    <img src="../../assets/images/dog-05.jpg" alt="" srcset="">
                  </div>
                  <h6 class="good-title">柴犬</h6>
                  <h3 class="sub-title ellipsis">也叫丛林犬，动作轻盈敏捷，据说其祖先的血统中有松狮以及我国一些流浪狗的血脉</h3>
                  <div class="good-price pr">
                    <div class="good-btns">
                      <el-button>查看详情</el-button>
                      <el-button type="primary">加入购物车</el-button>
                    </div>
                    <div class="good-amt">
                      <span>￥</span>1000
                    </div>
                  </div>
                </div>
              </div>
              <div class="good-item">
                <div>
                  <div class="good-img">
                    <img src="../../assets/images/dog-06.jpg" alt="" srcset="">
                  </div>
                  <h6 class="good-title">博美犬</h6>
                  <h3 class="sub-title ellipsis">体形较短，腿骨更直、更轻</h3>
                  <div class="good-price pr">
                    <div class="good-btns">
                      <el-button>查看详情</el-button>
                      <el-button type="primary">加入购物车</el-button>
                    </div>
                    <div class="good-amt">
                      <span>￥</span>1000
                    </div>
                  </div>
                </div>
              </div>
              <div class="good-item">
                <div>
                  <div class="good-img">
                    <img src="../../assets/images/dog-07.jpg" alt="" srcset="">
                  </div>
                  <h6 class="good-title">比熊犬</h6>
                  <h3 class="sub-title ellipsis">温和而守规矩，敏感、顽皮、且挚爱</h3>
                  <div class="good-price pr">
                    <div class="good-btns">
                      <el-button>查看详情</el-button>
                      <el-button type="primary">加入购物车</el-button>
                    </div>
                    <div class="good-amt">
                      <span>￥</span>1000
                    </div>
                  </div>
                </div>
              </div>
              <div class="good-item">
                <div>
                  <div class="good-img">
                    <img src="../../assets/images/dog-08.jpg" alt="" srcset="">
                  </div>
                  <h6 class="good-title">泰迪犬</h6>
                  <h3 class="sub-title ellipsis">用作打猎、表演和陪伴</h3>
                  <div class="good-price pr">
                    <div class="good-btns">
                      <el-button>查看详情</el-button>
                      <el-button type="primary">加入购物车</el-button>
                    </div>
                    <div class="good-amt">
                      <span>￥</span>1000
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
      <!-- 狗狗零食 -->
      <section class="mt30 clearfix">
        <div class="gray-box">
          <div class="title">
            <h2>狗狗零食</h2>
          </div>
          <div class="floors">
              <div class="good-item">
                <div>
                  <div class="good-img">
                    <img src="../../assets/images/food-01.jpg" alt="" srcset="">
                  </div>
                  <h6 class="good-title"></h6>
                  <h3 class="sub-title ellipsis">蒙贝 自然香酥带肉牛棒骨 M号</h3>
                  <div class="good-price pr">
                    <div class="good-btns">
                      <el-button>查看详情</el-button>
                      <el-button type="primary">加入购物车</el-button>
                    </div>
                    <div class="good-amt">
                      <span>￥</span>1000
                    </div>
                  </div>
                </div>
              </div>
              <div class="good-item">
                <div>
                  <div class="good-img">
                    <img src="../../assets/images/food-02.jpg" alt="" srcset="">
                  </div>
                  <h6 class="good-title"></h6>
                  <h3 class="sub-title ellipsis">宝路 幼犬钙奶棒 60g </h3>
                  <div class="good-price pr">
                    <div class="good-btns">
                      <el-button>查看详情</el-button>
                      <el-button type="primary">加入购物车</el-button>
                    </div>
                    <div class="good-amt">
                      <span>￥</span>1000
                    </div>
                  </div>
                </div>
              </div>
               <div class="good-item">
                <div>
                  <div class="good-img">
                    <img src="../../assets/images/food-03.jpg" alt="" srcset="">
                  </div>
                  <h6 class="good-title"></h6>
                  <h3 class="sub-title ellipsis">蒙贝 6月以上中小型犬 天然小龙骨 6片</h3>
                  <div class="good-price pr">
                    <div class="good-btns">
                      <el-button>查看详情</el-button>
                      <el-button type="primary">加入购物车</el-button>
                    </div>
                    <div class="good-amt">
                      <span>￥</span>1000
                    </div>
                  </div>
                </div>
              </div>
               <div class="good-item">
                <div>
                  <div class="good-img">
                    <img src="../../assets/images/food-04.jpg" alt="" srcset="">
                  </div>
                  <h6 class="good-title"></h6>
                  <h3 class="sub-title ellipsis">蒙贝 自然香酥带肉牛棒骨 S号 </h3>
                  <div class="good-price pr">
                    <div class="good-btns">
                      <el-button>查看详情</el-button>
                      <el-button type="primary">加入购物车</el-button>
                    </div>
                    <div class="good-amt">
                      <span>￥</span>1000
                    </div>
                  </div>
                </div>
              </div>
              <div class="good-item">
                <div>
                  <div class="good-img">
                    <img src="../../assets/images/food-05.jpg" alt="" srcset="">
                  </div>
                  <h6 class="good-title"></h6>
                  <h3 class="sub-title ellipsis">蒙贝 自然香酥带肉牛棒骨 M号</h3>
                  <div class="good-price pr">
                    <div class="good-btns">
                      <el-button>查看详情</el-button>
                      <el-button type="primary">加入购物车</el-button>
                    </div>
                    <div class="good-amt">
                      <span>￥</span>1000
                    </div>
                  </div>
                </div>
              </div>
              <div class="good-item">
                <div>
                  <div class="good-img">
                    <img src="../../assets/images/food-06.jpg" alt="" srcset="">
                  </div>
                  <h6 class="good-title"></h6>
                  <h3 class="sub-title ellipsis">蒙贝 手抓牛排狗零食 80g</h3>
                  <div class="good-price pr">
                    <div class="good-btns">
                      <el-button>查看详情</el-button>
                      <el-button type="primary">加入购物车</el-button>
                    </div>
                    <div class="good-amt">
                      <span>￥</span>1000
                    </div>
                  </div>
                </div>
              </div>
              <div class="good-item">
                <div>
                  <div class="good-img">
                    <img src="../../assets/images/food-07.jpg" alt="" srcset="">
                  </div>
                  <h6 class="good-title"></h6>
                  <h3 class="sub-title ellipsis">麦富迪 狗狗零食 清口香系列 清口香奶棒 220g</h3>
                  <div class="good-price pr">
                    <div class="good-btns">
                      <el-button>查看详情</el-button>
                      <el-button type="primary">加入购物车</el-button>
                    </div>
                    <div class="good-amt">
                      <span>￥</span>1000
                    </div>
                  </div>
                </div>
              </div>
              <div class="good-item">
                <div>
                  <div class="good-img">
                    <img src="../../assets/images/food-08.jpg" alt="" srcset="">
                  </div>
                  <h6 class="good-title"></h6>
                  <h3 class="sub-title ellipsis">贝尔思味特 犬用亮白洁牙棒 S 240g</h3>
                  <div class="good-price pr">
                    <div class="good-btns">
                      <el-button>查看详情</el-button>
                      <el-button type="primary">加入购物车</el-button>
                    </div>
                    <div class="good-amt">
                      <span>￥</span>1000
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baners: [
        {
          id: 1,
          src: 'https://img2.epetbar.com/2022-03/23/17/0b97b249647719424deea1a98e3072e8.jpg?x-oss-process=style/water'
        },
        {
          id: 2,
          src: 'https://img2.epetbar.com/2022-03/10/10/683788d2ae0d83d1fa81a6ed1b9a5a86.jpg?x-oss-process=style/water'
        },
        {
          id: 3,
          src: 'https://img2.epetbar.com/2022-03/14/11/9553fd5888602ce9cdb350168b6a1a71.jpg?x-oss-process=style/water'
        }
      ]
    }
  },
  mounted() {
    
  },
  methods: {
    gotoDetail(id) {
      this.$router.push({
        path: '/detail',
        query: {
          id: 1
        }
      })
    }
  }
}
</script>

<style>
  .banner {
    min-height: 35vw;
  }
  .banner .el-carousel__container {
    min-height: 35vw;
  }
  .banner img {
    width: 100%;
    height: 100%;
  }
  .mt30 {
    margin-top: 30px;
  }
  .gray-box {
    position: relative;
    margin-bottom: 30px;
    overflow: hidden;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #dcdcdc;
    border-color: rgba(0,0,0,.14);
    box-shadow: 0 3px 8px -6px rgb(0 0 0 / 10%);
  }
  .floors {
    display: flex;
    flex-wrap: wrap;
  }
  .good-item {
    width: 25%;
    text-align: center;
    transition: all .5s;
    padding-bottom: 20px;
  }
  .good-item:hover {
    transform: translateY(-3px);
    box-shadow: 1px 1px 20px #999;
  }
  .good-item .good-btns {
    display: none;
  }
  .good-item:hover .good-btns {
    display: inline-block;
  }

  .good-item:hover .good-amt {
    display: none;
  }
  .good-item .good-img img {
    margin: 50px auto 20px;
    width: 206px;
  }
  .gray-box .title {
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
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .hot {
    display: flex;
  }
  .hot>div {
    flex: 1;
    width: 25%;
  }
  .good-item .good-title {
    line-height: 1.2;
    font-size: 16px;
    color: #424242;
    margin: 0 auto;
    padding: 0 14px;
    text-align: center;
    overflow: hidden;
  }
  .good-item h3 {
    text-align: center;
    line-height: 1.2;
    font-size: 12px;
    color: #d0d0d0;
    padding: 10px;
  }
  .good-item .good-price {
    text-align: center;
    line-height: 50px;
    height: 50px;
    color: #d44d44;
    font-family: Arial;
    font-size: 18px;
    font-weight: 700;
  }
</style>