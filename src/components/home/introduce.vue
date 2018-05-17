<template lang="pug">
  .Introduce
    el-row(:gutter="0" type="flex")
      el-col(:xs="8" :sm="8")
        .introduce-box
          div
            .introduce-img
              img(v-lazy="introdeceImg.tradeImg")
            .introduce-box-title 快速买卖
            .introduce-box-content AAB交易平台是一个全自动化的交易平台，方便快捷
      el-col(:xs="8" :sm="8")
        .introduce-box
          div
            .introduce-img
              img(v-lazy="introdeceImg.securityImg")
            .introduce-box-title 安全可靠
            .introduce-box-content 冷存储、SSL、多重加密等银行级别安全技术，十年金融安全经验的安全团队
      el-col(:xs="8" :sm="8")
        .introduce-box
          div
            .introduce-img
              img(v-lazy="introdeceImg.lookImg")
            .introduce-box-title 及时掌控
            .introduce-box-content WEB、APP多终端，行情及时掌握，交易随时随地
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {
  }
})
export default class Introduce extends Vue {

  //首页介绍图片地址
  introdeceImg: object = {
    tradeImg: '../../../static/img/trade.png',//交易图片
    securityImg: '../../../static/img/security.png',//安全图片
    lookImg: '../../../static/img/look.png'//观察掌控图片
  }

  mounted() {}
}
</script>

<style lang="scss" scoped>
  .Introduce{
    height: 300px;
  }
  .introduce-box{
    display: flex;/*Flex布局*/
    display: -webkit-flex; /* Safari */
    align-items: center;
    text-align: center;
    height: 300px;
    transition: transform 0.3s, z-index 0.3s;
    -webkit-transition: transform 0.3s, z-index 0.3s;
    &:hover{
      transform: translate(0, -10px);
      z-index: 9999;
    }
    >div{
      width: 100%;
    }
    .introduce-img{
      // margin-top: 40px;
      text-align: center;
      img{
        width: 10%;
        height: 10%;
      }
    }
    .introduce-box-title{
      margin-top: 20px;
      text-align: center;
      font-size: 1.3rem;
    }
    .introduce-box-content{
      width: 70%;
      margin-left: 15%;
      margin-top: 10px;
      text-align: center;
      font-size: .9rem;
    }
  }
</style>
