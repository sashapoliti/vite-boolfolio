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
                }
            ],
        }
    }
}
</script>

<style lang="scss" scoped></style>
