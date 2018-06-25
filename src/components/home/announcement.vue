<template lang="pug">
  .announcement
    .announcement-content
      span.title 热烈庆祝素币交易所正式上线公告
      span.line &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;
      span.title 素币交易所交易手续费公告
      span.line &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;
      span.title 关于新用户优惠公告
      span.line &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;
      span.title 素币交易所交易信息公告
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {
  }
})
export default class Announcement extends Vue {
  mounted() {}
}
</script>

<style lang="scss" scoped>
  .announcement{
    min-height: 35px;
    max-height: 70px;
    line-height: 35px;
    background-color: #efefef;
    .title{
      letter-spacing: 2px;
    }
    .title:hover{
      cursor: pointer;
      color: #007eff;
    }
    .line{
      color: #908d8d;
    }
  }
  .announcement-content{
    text-align: center;
  }
</style>
