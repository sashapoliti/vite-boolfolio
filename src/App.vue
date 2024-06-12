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
  methods: {
    getTypes() {
      axios.get(`${this.store.apiBaseUrl}/types`).then((response) => {
        this.store.types = response.data.results;
        console.log(this.store.types);
      })
    }
  },
  mounted() {
    this.getTypes()
  },
};
</script>

<style lang="scss" scoped></style>
