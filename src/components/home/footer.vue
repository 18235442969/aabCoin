<template lang="pug">
  .footer
    el-row(:gutter="0" type="flex")
      el-col(:xs="12" :sm="9")
        .time ©2018 - 2019 AAB All Rights Reserved
      el-col(:xs="0" :sm="6") 
      el-col(:xs="12" :sm="9")
        .help
          span.help-content 关于我们&nbsp;&nbsp;
          span |&nbsp;&nbsp;
          span.help-content 费率说明&nbsp;&nbsp;
          span |&nbsp;&nbsp;
          span.help-content 常见问题&nbsp;&nbsp;
          span |&nbsp;&nbsp;
          span.help-content 简体中文
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {
  }
})
export default class Footer extends Vue {
  mounted() {}
}
</script>

<style lang="scss" scoped>
  .footer{
    height: 60px;
    background-color: #222428;
    color: #7A7A7A;
  }
  .time{
    margin-left: 30px;
    text-align: left;
    line-height: 60px;
    font-size: 1rem;
  }
  .help{
    margin-right: 20px;
    text-align: right;
    line-height: 60px;
    .help-content:hover{
      cursor: pointer;
      color: #ffffff;
    }
  }
</style>
