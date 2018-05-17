<template lang="pug">
  .slider
    .title 帮助文章
    ul.slider-list
      li.slider-li(:class="{active: sliderActiveClass.atcHelpActive}" @click="gotoHelp('atcHelp')") 人民币买币 新手指南
      li.slider-li(:class="{active: sliderActiveClass.coinHelpActive}" @click="gotoHelp('coinHelp')") 币币交易 新手攻略
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {
  }
})
export default class Slider extends Vue {

  //当前显示文章选择
  sliderActiveClass: any = {
    atcHelpActive: false,//atc帮助文档显示
    coinHelpActive: false//货币帮助文档显示
  }

  /**
   * 查看帮助文档
   * @params url 文档地址
   */
  gotoHelp(url: string):void {
    this.$router.push({
      path: `/help/${url}`
    })
  }

mounted() {
    //根据路由判断当前显示文章，控制侧边栏目显示
    switch (this.$route.path) {
      case '/help/atcHelp':
          this.sliderActiveClass.atcHelpActive = true
        break;
      case '/help/coinHelp':
          this.sliderActiveClass.coinHelpActive = true
        break;
      default:
        break;
    }
  }
}
</script>

<style lang="scss" scoped>
  .active{
    background-color: #454E6E;
    color: #ffffff !important;
    font-weight: 100;
  }
  .title{
    font-size: 1.2rem;
    font-weight: 600;
  }
  .slider-list{
    padding-left: 0;
  }
  .slider-li{
    display: flex;/*Flex布局*/
    display: -webkit-flex; /* Safari */
    align-items: center;
    list-style-type: none;
    min-height: 1.5rem;
    cursor: pointer;
    padding: 10px 10px;
    border-radius: 5px;
    font-size: .9rem;
    font-weight: 100;
    color: #263A4A;

    &:hover{
      background-color: #454E6E;
      color: #ffffff;
      font-weight: 100;
    }
    &:not(:first-child){
      margin-top: 10px;
    }
  }
</style>
