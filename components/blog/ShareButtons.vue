<template>
  <div class="share-container">
    <ShareNetwork
      v-for="social in socials"
      :key="social.network"
      :network="social.network"
      :url="`${$config.url}/blogs/${post.slug}`"
      :title="`Read this awesome article! ${post.title}`"
      :hashtags="post.categories.join(',')"
    >
      <i :class="social.icon"></i>
    </ShareNetwork>
  </div>
</template>
<script>
export default {
  name: "ShareButtons",
  props: { post: Object },
  data: () => ({
    socials: [
      {
        network: "twitter",
        icon: "fab fa-twitter",
      },
      {
        network: "linkedin",
        icon: "fab fa-linkedin",
      },
      {
        network: "whatsapp",
        icon: "fab fa-whatsapp",
      },
      {
        network: "telegram",
        icon: "fab fa-telegram-plane",
      },
      {
        network: "email",
        icon: "fas fa-envelope",
      },
    ],
  }),
};
</script>
<style scoped lang="scss">
.share-container {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  a:hover {
    text-decoration: none;
    background-color: inherit;
    color: white;
  }
}
</style>
