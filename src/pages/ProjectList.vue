<template>
  <section>
    <h1>Project list</h1>
  </section>

  <section>
    <div class="row">
      <div
        class="col-12 col-lg-6 col-xl-4 col-xxl"
        v-for="project in projects"
        :key="project.id"
      >
        <ProjectCard :object="project" />
      </div>
    </div>
    <!-- pagination -->
    <nav>
      <ul class="pagination">
        <li class="page-item">
          <a
            class="page-link"
            :class="currentPage == 1 ? 'disabled' : ''"
            href="#"
            @click.prevent="setParams(currentPage - 1)"
            >Previous</a
          >
        </li>
        <li class="page-item" v-for="page in totalPage" :key="page">
          <a
            class="page-link"
            :class="currentPage == page ? 'active' : ''"
            href="#"
            @click.prevent="setParams(page)"
          >
            {{ page }}
          </a>
        </li>
        <li class="page-item">
          <a
            class="page-link"
            :class="currentPage == totalPage ? 'disabled' : ''"
            href="#"
            @click.prevent="setParams(currentPage + 1)"
            >Next</a
          >
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
import axios from "axios";
import { store } from "../store";

import ProjectCard from "../components/ProjectCard.vue";

export default {
  name: "ProjectList",
  components: {
    ProjectCard,
  },
  data() {
    return {
      store,
      projects: [],
      currentPage: 0,
      totalPage: 0,
      params: {},
    };
  },
  methods: {
    setParams(numpage) {
      this.currentPage = numpage;
      this.params = {
        page: this.currentPage,
      }
      this.getAllProject();
    },
    getAllProject() {
      axios
        .get(this.store.apiBaseUrl + "/projects", { params: this.params })
        .then((response) => {
          console.log(response.data);
          this.projects = response.data.results.data;
          this.currentPage = response.data.results.current_page;
          this.totalPage = response.data.results.last_page;

          this.params = null;
        });
    }
  },
  mounted() {
    this.getAllProject();
  },
};
</script>

<style lang="scss" scoped></style>
