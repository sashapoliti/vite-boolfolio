<template>
  <HeaderComponent />
  <main class="container">
    <router-view></router-view>
  </main>
</template>

<script>
import axios from "axios";
import { store } from "./store";

import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      store,
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped></style>
