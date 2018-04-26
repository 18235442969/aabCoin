<template lang="pug">
  .mobile
    .logo
      img(v-lazy="logoImg")
      .logo-text AAB交易平台
    .version
      span 版本：{{ version.name }}&nbsp;&nbsp;&nbsp;&nbsp;
      span 大小：{{ version.size }}
    .downImg
      img(v-lazy="version.imgUrl" @click="downloadApp(version.downloadUrl)")
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { browser } from '../assets/js/userAgent'

@Component({
  components: {
  }
})
export default class Mobile extends Vue {
  //logo
  logoImg: string = '../../static/img/mobileLogo.png'

  //版本信息
  version: any = {
    name: '安卓版',
    size: '6.3M',
    downloadUrl: 'http://down.aabcoin.com/app/aabotc.apk',
    imgUrl: '../../static/img/androidImg.png'
  }

  /**
   * 下载app 
   * @params url 下载地址*/
  downloadApp(url: string): void {
    window.location.href = url;
  }

  mounted() {}

  created() {
    if ( browser.versions.android ) {
      this.version.name = '安卓版';
      this.version.size = '6.3M';
      this.version.downloadUrl = 'http://down.aabcoin.com/app/aabotc.apk';
      this.version.imgUrl = '../../static/img/androidImg.png';
    } else if ( browser.versions.ios) {
      this.version.name = 'ios版';
      this.version.size = '6.3M';
      this.version.downloadUrl = 'http://down.aabcoin.com/app/aabotc.apk';
      this.version.imgUrl = '../../static/img/iosImg.png';
    }
  }
}
</script>

<style lang="scss" scoped>
  .mobile{
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(../../static/img/mobileBg.jpeg);

    .logo{
      margin-top: 30%;
      text-align: center;

      img{
        width: 25%;
        height: 25%;
      }
      .logo-text{
        color: #ffffff;
        margin-top: 10px;
        font-size: 1.2rem;
        letter-spacing: 2px;
      }
    }

    .version{
      margin-top: 20px;
      text-align: center;
      color: #ffffff;
      font-size: 1rem;
    }

    .downImg{
      margin-top: 60px;
      text-align: center;

      img{
        width: 85%;
        height: 50px;
      }
    }
  }
</style>
