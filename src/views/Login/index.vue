<template>
  <div class="login">
    <div class="wrapper">
      <div class="title">
        <img src="../../assets/images/chong.jpg" alt="" srcset="">
      </div>
      <div class="content">
        <div class="common-form">
          <div class="item">
            <el-input v-model="form.name" placeholder="账号"></el-input>
          </div>
          <div class="item">
            <el-input v-model="form.password" show-password placeholder="密码"></el-input>
          </div>
          <div class="item pwd">
            <el-checkbox label="记住密码" name="type"></el-checkbox>
            <div>
              <el-button type="text">注册PetMall账号</el-button>
              <el-button type="text">忘记密码？</el-button>
            </div>
          </div>
          <div class="item btn">
            <el-button type="primary" @click="login">登录</el-button>
          </div>
          <div class="item btn">
            <el-button>返回</el-button>
          </div>
        </div>
      </div>
      <!-- <div class="control">
        <div class="pr">

        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { setToken } from '@/utils/auth'
export default {
  data() {
    return {
      form: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      if(this.form.name == 'admin' && this.form.password=='123456') {
        setToken('admin')
        this.$router.push('/')
      }else {
        // this.$message.error('密码错误')
      }
      
    }
  }
}
</script>


<style>
  .login {
    height: 100vh;
    background: url('/static/images/bg_9b9dcb65ff.png') repeat;
    overflow: hidden;
  }
  .login .wrapper {
    width: 450px;
    border: 1px solid #dadada;
    border-radius: 10px;
    margin: 100px auto;
    background-color: #fff;
    box-shadow: 0 9px 30px -6px rgb(0 0 0 / 20%), 0 18px 20px -10px rgb(0 0 0 / 4%), 0 18px 20px -10px rgb(0 0 0 / 4%), 0 10px 20px -10px rgb(0 0 0 / 4%);
  }
  .login .title {
    text-align: center;
    margin: 50px 0;
  }
  .login .title img {
    height: 75px;
    width: 75px;
    border-radius: 50%;
  }

  .login .content {
    padding: 0 40px 30px;
  }
  .login .content .item {
    margin-bottom: 15px;
  }
  .login .content .pwd {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .login .content .btn button {
    width: 100%;
  }
  
</style>