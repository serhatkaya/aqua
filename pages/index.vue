<template>
  <div class="container">
    <div class="intro">
      <h1>Hello folks!</h1>
      <h2>I'm Serhat</h2>
      <p class="intro-text">
        I am a passionate Software Developer currently working at EPAM Systems.
        With a deep love for coding and a constant desire to learn, I am always
        seeking out new challenges and expanding my knowledge. In addition to my
        programming expertise, I am also fascinated by automobiles, video games,
        and all things technological. This diverse range of interests fuels my
        curiosity and inspires me to stay at the forefront of innovation.
        Welcome to my website, where I share my experiences, insights, and
        discoveries in the world of software development and beyond.
      </p>
    </div>
    <recent-posts />
  </div>
</template>
<script>
import RecentPosts from "~/components/blog/RecentPosts.vue";
import { titleMeta, descMeta } from "~/utils/meta-tag.util";
export default {
  components: { RecentPosts },
  name: "Home",
  head() {
    return {
      title: this.$config.titlePrefix,
      meta: [
        {
          property: "og:url",
          name: "og:url",
          content: this.$config.url,
        },
        ...titleMeta(this.$config.titlePrefix, "Home", true),
        ...descMeta(this.$config.metaDesc),
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Media Query for Responsive Design */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
</style>
