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
              <div class="good-item" v-for="item in hotPets" :key="item.id">
                <div>
                  <div class="good-img">
                    <img :src="item.src">
                  </div>
                  <h6 class="good-title">{{item.title}}</h6>
                  <h3 class="sub-title ellipsis">{{item.remark}}</h3>
                  <div class="good-price pr">
                    <div class="good-btns">
                      <el-button @click="gotoDetail(1)">查看详情</el-button>
                      <el-button type="primary" @click="addItem(item)">加入购物车</el-button>
                    </div>
                    <div class="good-amt">
                      <span>￥</span>{{item.price}}
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
            <div class="good-item" v-for="item in siftPets" :key="item.id">
              <div>
                <div class="good-img">
                  <img :src="item.src" alt="" srcset="">
                </div>
                <h6 class="good-title">{{item.name}}</h6>
                <h3 class="sub-title ellipsis">{{item.remark}}</h3>
                <div class="good-price pr">
                  <div class="good-btns">
                    <el-button>查看详情</el-button>
                    <el-button type="primary" @click="addItem(item)">加入购物车</el-button>
                  </div>
                  <div class="good-amt">
                    <span>￥</span>{{item.price}}
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
              <div class="good-item" v-for="item in snacks" :key="item.id">
                <div>
                  <div class="good-img">
                    <img :src="item.src" alt="" srcset="">
                  </div>
                  <h6 class="good-title"></h6>
                  <h3 class="sub-title ellipsis">{{item.remark}}</h3>
                  <div class="good-price pr">
                    <div class="good-btns">
                      <el-button>查看详情</el-button>
                      <el-button type="primary" @click="addItem(item)">加入购物车</el-button>
                    </div>
                    <div class="good-amt">
                      <span>￥</span>{{item.price}}
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
      ],
      publicPath: process.env.BASE_URL,
      hotPets: [
        {
          id: 1,
          src: require('../../assets/images/s81.jpg'),
          name: '边境牧羊犬',
          title: '边境牧羊犬原产于苏格兰边境，为柯利牧羊犬之一种',
          remark: '天性聪颖、善于察言观色',
          price: 1000,
        },
        {
          id: 2,
          src: require('../../assets/images/z31.jpg'),
          name: '柯基犬',
          title: '柯基犬即威尔士柯基犬（著名犬种）',
          remark: '体形较短，腿骨更直、更轻',
          price: 800,
        },
      ],
      siftPets: [
        {
          id: 3,
          src: require('../../assets/images/dog-01.jpg'),
          name: '金毛犬',
          title: '',
          remark: '金毛寻回猎犬，伴侣犬，英国',
          price: 1000,
        },
        {
          id: 4,
          src: require('../../assets/images/dog-02.jpg'),
          name: '法国斗牛犬',
          title: '',
          remark: '活泼、聪明、肌肉发达',
          price: 1000,
        },
        {
          id: 5,
          src: require('../../assets/images/dog-03.jpg'),
          name: '拉布拉多寻回犬',
          title: '',
          remark: '个性温和、活泼，没有攻击性且智能高',
          price: 1000,
        },
        {
          id: 6,
          src: require('../../assets/images/dog-04.jpg'),
          name: '哈士奇',
          title: '',
          remark: '二哈，工作犬，西伯利亚',
          price: 1000,
        },
        {
          id: 7,
          src: require('../../assets/images/dog-05.jpg'),
          name: '柴犬',
          title: '',
          remark: '也叫丛林犬，动作轻盈敏捷，据说其祖先的血统中有松狮以及我国一些流浪狗的血脉',
          price: 1000,
        },
        {
          id: 8,
          src: require('../../assets/images/dog-06.jpg'),
          name: '博美犬',
          title: '',
          remark: '体形较短，腿骨更直、更轻',
          price: 1000,
        },
        {
          id: 9,
          src: require('../../assets/images/dog-07.jpg'),
          name: '比熊犬',
          title: '',
          remark: '温和而守规矩，敏感、顽皮、且挚爱',
          price: 1000,
        },
        {
          id: 10,
          src: require('../../assets/images/dog-08.jpg'),
          name: '泰迪犬',
          title: '',
          remark: '用作打猎、表演和陪伴',
          price: 1000,
        },
      ],
      snacks: [
        {
          id: 11,
          src: require('../../assets/images/food-01.jpg'),
          name: '蒙贝',
          title: '',
          remark: '蒙贝 自然香酥带肉牛棒骨 M号',
          price: 10,
        },
        {
          id: 12,
          src: require('../../assets/images/food-02.jpg'),
          name: '奶棒',
          title: '',
          remark: '宝路 幼犬钙奶棒 60g',
          price: 10,
        },
        {
          id: 13,
          src: require('../../assets/images/food-03.jpg'),
          name: '蒙贝',
          title: '',
          remark: '蒙贝 6月以上中小型犬 天然小龙骨 6片',
          price: 10,
        },
        {
          id: 14,
          src: require('../../assets/images/food-04.jpg'),
          name: '牛棒骨',
          title: '',
          remark: '蒙贝 自然香酥带肉牛棒骨 S号',
          price: 10,
        },
        {
          id: 15,
          src: require('../../assets/images/food-05.jpg'),
          name: '蒙贝',
          title: '',
          remark: '蒙贝 自然香酥带肉牛棒骨 M号',
          price: 10,
        },
        {
          id: 16,
          src: require('../../assets/images/food-06.jpg'),
          name: '手抓牛排',
          title: '',
          remark: '蒙贝 手抓牛排狗零食 80g',
          price: 10,
        },
        {
          id: 17,
          src: require('../../assets/images/food-07.jpg'),
          name: '香奶棒',
          title: '',
          remark: '麦富迪 狗狗零食 清口香系列 清口香奶棒 220g',
          price: 10,
        },
        {
          id: 18,
          src: require('../../assets/images/food-08.jpg'),
          name: '洁牙棒',
          title: '',
          remark: '贝尔思味特 犬用亮白洁牙棒 S 240g',
          price: 10,
        },
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
    },
    addItem(item) {
      let carts = JSON.parse(localStorage.getItem('myCart')) || [];
      let findIndex = carts.findIndex(list=>list.id==item.id)
      if(findIndex!=-1) {
        carts[findIndex].count++;
        carts[findIndex].totalAmt+=item.price;
      }else {
        carts.push({
          ...item,
          selected: true,
          count: 1,
          totalAmt: item.price*1
        })
      }
      localStorage.setItem('myCart', JSON.stringify(carts));
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