<template lang="pug">
  .mobile(v-if="!isWeichat")
    .logo
      img(v-lazy="logoImg")
      .logo-text 素币交易所
    .version
      span 版本：{{ version.name }}&nbsp;&nbsp;&nbsp;&nbsp;
      span 大小：{{ version.size }}
    // .helpArticle 
    //   el-row(:gutter="0" type="flex")
    //     el-col(:xs="3")
    //     el-col.helpArticle-div(:xs="9")
    //       el-button.helpArticle-button(type="text" @click="gotoHelp('atcHelp')") CNT交易帮助文档
    //     el-col.helpArticle-div(:xs="9")
    //       el-button.helpArticle-button(type="text" @click="gotoHelp('coinHelp')") 币币交易帮助文档
    //     el-col(:xs="3")
    .downImg
      img(v-lazy="version.imgUrl" @click="downloadApp(version.downloadUrl)")
  .mobile(v-else)
    .wechatBg
      img(src="../../static/img/wechatBg.png")
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

  //是否是微信浏览器打开
  isWeichat: boolean = false;

  //版本信息
  version: any = {
    type: 'android',
    name: '安卓版',
    size: '9.3M',
    downloadUrl: 'http://down.fctccoin.com/app/aabotc.apk',
    imgUrl: '../../static/img/androidImg.png'
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

  /**
   * 下载app 
   * @params url 下载地址*/
  downloadApp(url: string): void {
    //ios版本暂未开放下载
    if (this.version.type === 'ios') {
      this.$message({
        message: 'ios版本暂未开放下载',
        type: 'error',
        duration: 1000
      });
      return;
    }
    window.location.href = url;
  }

  mounted() {
    let ua = navigator.userAgent.toLowerCase();
    this.isWeichat = ua.indexOf('micromessenger') != -1;
  }

  created() {
    //判断当前浏览器类型（安卓 or ios）
    if ( browser.versions.android ) {
      this.version.type = 'android';
      this.version.name = '安卓版';
      this.version.size = '9.3M';
      this.version.downloadUrl = 'http://down.fctccoin.com/app/aabotc.apk';
      this.version.imgUrl = '../../static/img/androidImg.png';
    } else if ( browser.versions.ios) {
      this.version.type = 'ios';
      this.version.name = 'ios版';
      this.version.size = '6.3M';
      this.version.downloadUrl = 'http://down.fctccoin.com/app/aabotc.ipa';
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

    .helpArticle{
      margin-top: 10px;

      .helpArticle-div{
        text-align: center;
      }
      .helpArticle-button{
        text-align: center;
      }
    }

    .downImg{
      margin-top: 20px;
      text-align: center;

      img{
        width: 85%;
        height: 50px;
      }
    }

    .wechatBg{
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 999;

      img{
        position: absolute;
        top: 10%;
        width: 100%;
        height: 50%; 
      }
    }
  }
</style>
