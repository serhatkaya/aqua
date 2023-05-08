<template>
  <BlogList :posts="posts" />
</template>
<script>
import { titleMeta, descMeta } from "~/utils/meta-tag.util";
export default {
  name: "BlogIndex",
  data: () => ({}),
  methods: {},
  computed: {
    posts() {
      return (this.$store.getters.posts ?? []).map((post) => ({
        ...post,
        content: "",
        content_encoded: "",
        description: "",
      }));
    },
  },
  head() {
    return {
      title: `${this.$config.titlePrefix} - Blog`,
      meta: [
        ...titleMeta(this.$config.titlePrefix, "Blog", true),
        ...descMeta(`My blog posts`),
      ],
    };
  },
};
</script>
