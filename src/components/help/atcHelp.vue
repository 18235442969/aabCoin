<template lang="pug">
  .atcHelp
    el-row(:gutter="0" type="flex")
      el-col(:xs="1" :sm="2")
      el-col(:xs="0" :sm="3")
        slider
      el-col(:xs="0" :sm="1")
      el-col(:xs="22" :sm="10")
        .article
          .article-title 人民币买币 新手指南
          .article-content 
            p 在法币交易区，购买数字货币，so easy！（下文多图，若图片未打开，请刷新。） 
            p Step 1，输入网址 otc.huobipro.com； 有账号，点击“登录”, 再参考Step 3。 没有账号，点击“注册”；
            img.article-image(v-lazy="atcHelpImg.one")
            p Step 2，在注册页面，选择“国籍”，输入“手机号”，点击“获取验证码”（以手机注册为例）。
            p 然后输入收到的验证码，设置登录密码，再点“注册”。
            img.article-image(v-lazy="atcHelpImg.two")
            p Step 3, 点击右上角“登录”， 输入注册手机号码、登录密码，拖动滑块至最右，点击“登录”。
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
export default class AtcHelp extends Vue {

  /**
   * atc交易帮助图片地址
   */
  atcHelpImg: object = {
    one: '../../../static/img/atcHelpOne.png',
    two: '../../../static/img/atcHelpTwo.png'
  }

  mounted() {}
}
</script>

<style lang="scss" scoped>
  .atcHelp{
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
