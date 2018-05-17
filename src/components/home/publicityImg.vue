<template lang="pug">
  div
    swiper(:options="swiperOption")
      swiper-slide
        img(:src="atcImgUrl" @click="gotoAtcHelp")
      swiper-slide
        img(:src="coinImgUrl" @click="gotoCoinHelp")
      .swiper-pagination(slot="pagination")
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

@Component({
  components: {
    swiper, 
    swiperSlide
  }
})
export default class PublicityImg extends Vue {

  //atc图片地址
  atcImgUrl: string = '../../../static/img/atc.jpg'
  //货币图片地址
  coinImgUrl: string = '../../../static/img/coin.jpg'

  /**
   *swiper滚动图片参数 
   */
  private swiperOption: Object = {
    //自动轮转
    autoplay: {
      delay: 3000,//时间
      stopOnLastSlide: false,
      disableOnInteraction: false
    },
    //分页器
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  }

  /**
   *atc交易帮助文档
   */
  gotoAtcHelp(): void{
    this.$router.push({
      path: '/help/atcHelp'
    })
  }
  
  /**
   *币币交易帮助文档
   */
  gotoCoinHelp(): void {
    this.$router.push({
      path: '/help/coinHelp'
    })
  }

  mounted() {}
}
</script>

<style lang="scss" scoped>
  .swiper-container{
    height: 500px;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
