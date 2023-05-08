<template>
  <div class="terminal-header">
    <h1 v-if="post.title">{{ post.title }}</h1>
    <div class="header-info">
      <div class="publish-date">
        {{ post.pubDate | formatDate }}
      </div>
      <ShareButtons :post="post" />
    </div>
    <div class="header-thumbnail">
      <img :src="post.thumbnail" :alt="post.title" />
    </div>
  </div>
</template>
<script>
import ShareButtons from "./ShareButtons.vue";
export default {
  components: { ShareButtons },
  name: "BlogHeader",
  props: { post: Object },
};
</script>
<style lang="scss" scoped>
.header-info {
  display: flex;
  justify-content: space-between;
}
.header-thumbnail {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  img {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 100%;
    border-radius: 0.75rem;
  }
}
</style>
