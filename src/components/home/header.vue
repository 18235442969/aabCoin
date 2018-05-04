<template lang="pug">
  div.header
    el-menu(class="el-menu-demo" mode="horizontal" background-color="#252a33" text-color="#fff" active-text-color="#ffd04b" :router="true")
      el-row(:gutter="0" type="flex")
        el-col(:xs="6" :sm="2" style="text-align: center;")
          img(v-lazy="logoSrc").logo-img
        el-col(:xs="6" :sm="2").home
          el-menu-item(index="/") 首页
        el-col(:xs="6" :sm="2").atc
          el-menu-item(index="/") ATC交易
        el-col(:xs="6" :sm="2").coin
          el-menu-item(index="/") 币币交易
        el-col(:xs="0" :sm="12")
        el-col(:xs="0" :sm="2").login
          el-menu-item(index="/") 登录
        el-col(:xs="0" :sm="2").registe
          el-menu-item(index="/") 注册
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {
  }
})
export default class Header extends Vue {

  logoSrc: string = '../../static/img/logo.png';

  mounted() {}
}
</script>

<style lang="scss" scoped>
  .home, .atc, .coin, .login, .registe{
    text-align: center;
  }
  .el-menu-demo:focus, .home:focus, .el-row:focus{
    outline: none;
  }
  .el-menu-item{
    height: 60.8px;
    line-height: 60.8px;

    &:hover{
      background-color: #ffffff !important;
      color: #1798f2 !important;
    }
  }
  .el-menu--horizontal{
    border-bottom: 0;
  }
  .logo-img{
    width: 56px;
    height: 99%;
  }
</style>
