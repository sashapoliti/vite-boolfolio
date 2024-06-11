<template>
  <header>
    <nav>
      <ul class="d-flex">
        <li v-for="menuItem in menuItems">
          <router-link :to="menuItem.routeName">{{
            menuItem.name
          }}</router-link>
        </li>
      </ul>
    </nav>
  </header>

  <!-- <ul>
    <li v-for="project in projects" :="project.id">
      {{ project.title }}
    </li>
  </ul> -->

  <main class="container">
    <router-view></router-view>
  </main>

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
      menuItems: [
        {
          name: "Home",
          routeName: "home",
        },
        {
          name: "Posts",
          routeName: "posts",
        },
      ],
      /* nextPage: 0, */
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
