<template>
  <div class="blog-list">
    <NuxtLink
      class="terminal-card"
      v-for="post of posts"
      :key="post.slug"
      :to="`/blog/${post.slug}`"
    >
      <div
        class="card-header"
        :style="{ background: `url(${post.thumbnail})` }"
      ></div>
      <div class="card-body">
        <h2>{{ post.title }}</h2>
        <div class="date">{{ post.pubDate }}</div>
        <div class="content">{{ post.shortDesc }}</div>
      </div>
    </NuxtLink>
  </div>
</template>
<script>
export default {
  name: "BlogList",
  data: () => ({}),
  props: {
    posts: Array,
  },
  methods: {},
  created() {},
};
</script>
