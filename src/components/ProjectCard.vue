<template>
  <div class="card" style="width: 18rem">
    <img :src="getImg" class="card-img-top" :alt="object.title" />
    <div class="card-body">
      <h5 class="card-title">{{ object.title }}</h5>
      <p class="card-text" v-html="object.description? object.description.substring(0, 30) + '...' : ''"></p>
      <RouterLink
        :to="{ name: 'single-project', params: { slug: object.slug } }"
        class="btn btn-success"
      >
        Read more
      </RouterLink>
      <p class="card-text">
        <small class="text-body-secondary">
          Last updated: 3 {{ object.updated_at }}
        </small>
      </p>
    </div>
  </div>
</template>

<script>
import { store } from "../store";

export default {
  name: "ProjectCard",
  props: {
    object: Object,
  },
  data() {
    return {
      store,
    };
  },
  computed: {
    getImg() {
      return this.object.image
        ? this.store.imgBasePath + this.object.image
        : "https://picsum.photos/200/300";
    },
  },
};
</script>

<style lang="scss" scoped></style>
