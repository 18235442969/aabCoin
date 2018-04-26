<template lang="pug">
  div
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State, Getter, namespace } from "vuex-class";

const appNamespaceState = namespace("app", State);
const appNamespaceGetter = namespace("app", Getter);

@Component({
  components: {
  }
})
export default class App extends Vue {
  mounted() {}
}
</script>

<style lang="scss" scoped>

</style>
