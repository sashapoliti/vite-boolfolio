<template>
  <section>
    <h1>Project list</h1>
  </section>

  <section>
    <ul>
      <li v-for="project in projects" :="project.id">
        {{ project.title }}
      </li>
    </ul>
  </section>
</template>

<script>
import axios from "axios";
import { store } from "../store";


export default {
  name: "ProjectList",
  data() {
    return {
      store,
      projects: [],
    };
  },
  methods: {
    getAllProject() {
      /* this.nextPage++; */
      axios
        .get(
          this.store.apiBaseUrl +
            "/projects" /* , {params: {page: this.nextPage}} */
        )
        .then((response) => {
          this.projects = response.data.results /* .data */;
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
