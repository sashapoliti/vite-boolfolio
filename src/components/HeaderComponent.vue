<template>
  <header>
    <nav class="navbar">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="menuItem in menuItems">
          <router-link class="nav-link" :to="{ name: menuItem.routeName }">
            {{ menuItem.name }}
          </router-link>
        </li>
      </ul>
      <div class="nav-item ms-auto">
        <a href="http://localhost:8000" class="nav-link">
          <i class="fa-solid fa-user"></i> <span>Area Riservata</span>
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      menuItems: [
        {
          name: "Home",
          routeName: "home",
        },
        {
          name: "Projects",
          routeName: "projects",
        },
        {
          name: "About",
          routeName: "about-us",
        },
        {
          name: "Contact",
          routeName: "contact",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
