<template>
  <section>
    <h1>Project list</h1>
  </section>

  <section>
    <div class="row">
        <div class="col-12 col-lg-6 col-xl-4 col-xxl" v-for="project in projects" :key="project.id">
            <ProjectCard :object="project" />
        </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { store } from "../store";

import ProjectCard from "../components/ProjectCard.vue";

export default {
  name: "ProjectList",
  components: {
    ProjectCard
  },
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
