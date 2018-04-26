<template lang="pug">
  .main-wrapper
    v-header
    .content-wrapper
      modules
      div(v-if="load")
        headline
        board
        super_sale
        shop_list
      .loading(v-else)
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State, Action, Getter, namespace } from "vuex-class";
import header from "@/components/demo/header.vue";
import modules from "@/components/demo/modules.vue";
import headline from "@/components/demo/headline.vue";
import board from "@/components/demo/board.vue";
import super_sale from "@/components/demo/super_sale.vue";
import shop_list from "@/components/demo/shops.vue";

const appNamespaceState = namespace('app', State);
const appNamespaceAction = namespace('app', Action);
const appNamespaceGetter = namespace('app', Getter);

@Component({
  components: {
    "v-header": header,
    modules,
    headline,
    board,
    super_sale,
    shop_list
  }
})
export default class Demo extends Vue {
  @appNamespaceGetter login: boolean;
  @appNamespaceAction initAjax: () => void;
  @appNamespaceGetter load: boolean;

  get isLogin(): boolean {
    return this.login;
  }

  mounted() {
    this.initAjax();
  }
}
</script>

<style lang="stylus">
.content-wrapper {
  padding-top: 50px;
}

.loading {
  background: url('//www.dpfile.com/app/app-m-module/static/6261145dd7c0f26bc0a26831e5cb358a.gif') center 30px no-repeat #fff;
  background-size: 90px;
  height: 300px;
}
</style>
