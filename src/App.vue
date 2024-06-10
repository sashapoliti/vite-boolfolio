<template>
  <ul>
    <li v-for="project in projects" :="project.id">
      {{ project.title }}
    </li>
  </ul>
  <!-- <button @click="getAllProject">avanti</button> -->
</template>

<script>
import axios from "axios";
import { store } from "./store";

export default {
  name: "App",
  data() {
    return {
      store,
      projects: [],
      /* nextPage: 0, */
    };
  },
  methods: {    
    getAllProject() {
      /* this.nextPage++; */
      axios.get(this.store.apiBaseUrl + "/projects"/* , {params: {page: this.nextPage}} */).then((response) => {
        this.projects = response.data.results/* .data */;
        console.log(this.projects);
      });
    },
  },
  mounted() {
    this.getAllProject();
  },
};
</script>

<style lang="scss" scoped></style>
