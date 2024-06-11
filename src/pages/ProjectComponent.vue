<template>
  <div v-if="project">
    <h1>{{ project.title }}</h1>
    <img :src="getImg" :alt="project.title">
    <p v-html="project.description"></p>
    <span>{{ project.type?.name }}</span>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../store";

export default {
  name: "ProjectComponent",
  data() {
    return {
      store,
      project: {},
    };
  },
  methods: {
    getProject() {
      axios
        .get(`${this.store.apiBaseUrl}/projects/${this.$route.params.slug}`)
        .then((response) => {
          this.project = response.data.results;
        })
        .catch((error) => {
          this.$router.push({ name: "not-found" });
        })
        .finally();
    },
  },
  computed: {
    getImg() {
      return this.project.image
        ? this.store.imgBasePath + this.project.image
        : "https://picsum.photos/200/300";
    },
  },
  mounted() {
    this.getProject();
  },
};
</script>

<style lang="scss" scoped></style>
