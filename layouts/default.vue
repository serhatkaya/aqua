<template>
  <div class="wrapper">
    <div class="container">
      <div class="terminal-nav">
        <header class="terminal-logo">
          <div class="logo terminal-prompt">
            <a href="/" class="no-style">Serhat KAYA</a>
          </div>
        </header>
        <nav class="terminal-menu">
          <ul vocab="https://schema.org/" id="nav-menu" typeof="BreadcrumbList">
            <li>
              <NuxtLink to="/" class="menu-item">
                <span>Home</span>
              </NuxtLink>
              <meta property="position" />
            </li>
            <li typeof="ListItem">
              <NuxtLink
                to="/blog"
                property="item"
                typeof="WebPage"
                class="menu-item"
                data-route="blog"
              >
                <span property="name">Blog</span>
              </NuxtLink>
              <meta property="position" content="3" />
            </li>
            <li typeof="ListItem">
              <NuxtLink
                to="/projects"
                property="item"
                typeof="WebPage"
                class="menu-item"
              >
                <span property="name">Projects</span>
              </NuxtLink>
              <meta property="position" content="2" />
            </li>
            <li typeof="ListItem">
              <NuxtLink
                to="/contact"
                property="item"
                typeof="WebPage"
                class="menu-item"
              >
                <span property="name">Contact</span>
              </NuxtLink>
              <meta property="position" content="3" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="container content">
      <nuxt-child></nuxt-child>
    </div>
    <footer class="fixed-footer">
      <div class="social-links">
        <a :href="`https://github.com/${$config.github}`" target="_blank"
          ><i class="fab fa-github"></i
        ></a>
        <a
          :href="`https://www.linkedin.com/in/${$config.linkedin}`"
          target="_blank"
          ><i class="fab fa-linkedin"></i></a
        ><a :href="`mailto:${$config.email}`" target="_blank"
          ><i class="fa fa-envelope"></i
        ></a>
      </div>
    </footer>
  </div>
</template>
<script>
import { descMeta, imageMeta } from "~/utils/meta-tag.util";
export default {
  name: "DefaultLayout",
  data: () => ({}),
  methods: {},
  head() {
    return {
      title: this.$config.titlePrefix,
      meta: [
        ...descMeta(this.$config.metaDesc),
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:site",
          content: "@twiktir",
        },
        {
          name: "twitter:creator",
          content: "@twiktir",
        },
        {
          rel: "canonical",
          href: `${this.$config.url}${this.$route.path}`,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "site_name",
          content: `${this.$config.titlePrefix} Personal Website`,
        },
        ...imageMeta(`${this.$config.url}/img/social-thumb.png`),
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container.content {
  margin-bottom: 4rem;
}
.fixed-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #222;
  color: #fff;
  text-align: center;
  padding: 10px;
  font-size: 14px;
  z-index: 9999;
  border-top: 1px dotted #62c4ff;
}

.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-links a {
  display: inline-block;
  margin: 0 10px;
  color: #fff;
  font-size: 24px;
}

.social-links a:hover {
  color: #62c4ff;
  text-decoration: none;
  background-color: inherit;
}
a.nuxt-link-exact-active {
  color: #fff !important;
}
</style>
