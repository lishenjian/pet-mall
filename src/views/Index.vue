<template>
  <div>
    <!-- 导航 -->
     <m-header class="header-box"></m-header>
    
    <!-- 子路由的出口 -->
    <router-view></router-view>

    <!-- 底部组件 -->
    <m-footer></m-footer>
  </div>
</template>
<script>
import MHeader from '@/common/header.vue'
import MFooter from '@/common/footer.vue'
export default {
  name: 'home',
  components: {
    MHeader,
    MFooter
  },
  data() {
    return {
      
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
  .header-box {
    background: #1a1a1a;
    background-image: linear-gradient(#000,#121212);
    width: 100%;
  }
</style>