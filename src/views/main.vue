<template lang="pug">
  .main
    v-header
    publicity-img
    announcement
    introduce
    download
    v-footer
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State, Getter, namespace } from "vuex-class";
import header from '@/components/home/header.vue'
import publicityImg from '@/components/home/publicityImg.vue'
import introduce from '@/components/home/introduce.vue'
import download from '@/components/home/download.vue'
import footer from '@/components/home/footer.vue'
import announcement from '@/components/home/announcement.vue'

const appNamespaceState = namespace("app", State);
const appNamespaceGetter = namespace("app", Getter);

@Component({
  components: {
    'v-header': header,//头部
    publicityImg,//轮转图片
    announcement,//公告通知
    introduce,//首页介绍
    download,//下载
    'v-footer': footer//底部
  }
})
export default class App extends Vue {

  mounted() {}
}
</script>

<style lang="scss" scoped>

</style>
