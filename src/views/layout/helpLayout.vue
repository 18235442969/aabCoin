<template lang="pug">
  .helpLayout
    v-header
    router-view
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import header from "../../components/home/header.vue"

@Component({
  components: {
    'v-header': header
  }
})
export default class HelpLayout extends Vue {
  mounted() {}
}
</script>

<style lang="scss" scoped>
  .helpLayout{
  }
</style>
