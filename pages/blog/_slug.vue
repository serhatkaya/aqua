<template>
  <div class="terminal-container">
    <BlogHeader :post="post" />
    <div class="terminal-body">
      <div
        class="terminal-content"
        @click="onBlogClick"
        v-html="post.content"
      ></div>
    </div>
  </div>
</template>
<script>
import VxFullScreenImage from "~/utils/VxFullScreenImage";
import { descMeta, imageMeta, titleMeta } from "~/utils/meta-tag.util";
export default {
  name: "BlogDetail",
  data: () => ({}),
  methods: {
    onBlogClick(event) {
      if (!event.target) {
        return;
      }
      if (event?.target?.nodeName == "IMG") {
        VxFullScreenImage.show(
          event?.target?.src ??
            "https://via.placeholder.com/200x200?text=Image not found"
        );
      }
    },
  },
  computed: {
    post() {
      const slug = this?.$route?.params?.slug ?? "";
      return this.$store.getters.posts.find((x) => x.slug == slug);
    },
  },
  head() {
    return {
      title: `${this.post.title} - ${this.$config.titlePrefix}`,
      meta: [
        ...titleMeta(this.$config.titlePrefix, this.post.title, false),
        ...imageMeta(this.post.thumbnail),
        ...descMeta(`${this.post.shortDesc} - ${this.$config.titlePrefix}`),
      ],
    };
  },
};
</script>
