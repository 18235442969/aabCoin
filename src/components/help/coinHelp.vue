<template lang="pug">
  .coinHelp
    el-row(:gutter="0" type="flex")
      el-col(:xs="1" :sm="2")
      el-col(:xs="0" :sm="3")
        slider
      el-col(:xs="0" :sm="1")
      el-col(:xs="22" :sm="10")
        .article
          .article-title 币币交易 新手攻略
          .article-content 
            p 1. 登录 www.fctccoin.com，找到“币币交易”，点击进入。 
            img.article-image(v-lazy="coinHelpImg.one")
            p 2.点击“资产”后可以看到如下页面，再点击“划转提现”即可实时免费将币划转至素币交易所币币交易账户。
            img.article-image(v-lazy="coinHelpImg.two")
            p 3.选择币币账户，输入需要划转的BTC、ETH或VRH的数量，点击“立即划转”即可成功划转。
            img.article-image(v-lazy="coinHelpImg.three")
      el-col(:xs="1" :sm="8")
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import slider from './slider.vue';

@Component({
  components: {
    slider
  }
})
export default class CoinHelp extends Vue {

  /**
   * 币币交易帮助图片地址
   */
  coinHelpImg: object = {
    one: '../../../static/img/coinHelpOne.png',
    two: '../../../static/img/coinHelpTwo.png',
    three: '../../../static/img/coinHelpThree.png'
  }


  mounted() {}
}
</script>

<style lang="scss" scoped>
  .coinHelp{
    margin-top: 30px;
    margin-bottom: 15px;
  }
  .article-title{
    font-size: 2rem;
    color: #263A4A;
  }
  .article-content{
    margin-top: 10px;
  }
  .article-image{
    width: 100%;
    min-height: 200px;
    max-height: 300px;
  }
</style>
