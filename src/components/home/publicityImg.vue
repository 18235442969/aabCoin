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

  atcImgUrl: string = '../../../static/img/atc.jpg'
  coinImgUrl: string = '../../../static/img/coin.jpg'

  /**
   *swiper参数 
   */
  private swiperOption: Object = {
    autoplay: {
      delay: 30000,
      stopOnLastSlide: false,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  }

  /**
   *atc交易帮助
   */
  gotoAtcHelp(): void{
    this.$router.push({
      path: '/help/atcHelp'
    })
  }
  
  /**
   *币币交易帮助
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
