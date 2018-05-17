<template lang="pug">
  .download
    el-row(:gutter="0" type="flex")
      el-col(:xs="0" :sm="8")
        .download-title AAB交易平台APP
        .download-content 更专业 更简单 更安全
      el-col(:xs="12" :sm="3")
        .qrcode
          img(v-lazy="appDownloadUrl.androidUrl")
          .android 安卓APP下载
      el-col(:xs="12" :sm="3" style="display: none;")
        .qrcode
          img(v-lazy="appDownloadUrl.iosUrl")
          .android 苹果APP下载
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {
  }
})
export default class Download extends Vue {

  //app下载图片地址
  appDownloadUrl: object = {
    androidUrl: '../../../static/img/qrcode.png',//安卓二维码地址
    iosUrl: '../../../static/img/qrcode.png',//ios二维码地址
  }

  mounted() {}
}
</script>

<style lang="scss" scoped>
  .download{
    background-image: url(../../../static/img/download.jpg);
    height: 300px;

    .download-title{
      margin-top: 70px;
      text-align: center;
      font-size: 2rem;
      color: #ffffff;
      font-weight: 500;
    }

    .download-content{
      margin-top: 10px;
      text-align: center;
      color: #ffffff;
      font-size: 1.2rem;
    }

    .qrcode{
      margin-top: 50px;
      img{
        width: 130px;
        height: 130px;
      }
      .android{
        margin-top: 6px;
        width: 130px;
        text-align: center;
        color: #ffffff;
        font-weight: 200;
        letter-spacing: 2px;
      }
    }
  }
</style>
