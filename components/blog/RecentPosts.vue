<template>
  <div class="blog-posts">
    <h2>Recent Blog Posts</h2>
    <div class="blog-post" v-for="post of recents" :key="post.slug">
      <NuxtLink :to="`/blog/${post.slug}`" class="blog-title"
        ><h3>{{ post.title }}</h3></NuxtLink
      >
      <p>
        {{ post.shortDesc }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecentPosts",
  data: () => ({}),
  methods: {},
  computed: {
    recents() {
      return [...this.$store.getters.posts].reverse().slice(0, 5);
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-posts {
  flex: 1;
  border: 1px solid #e8e9ed;
  padding: 40px;
}
.blog-title {
  &:hover {
    color: #e8e9ed;
  }
}
@media (max-width: 768px) {
  .blog-posts {
    flex: unset;
    width: 100%;
  }
}
</style>
