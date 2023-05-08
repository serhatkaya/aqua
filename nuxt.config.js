export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "aqua",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/main.scss"],
  publicRuntimeConfig: {
    mediumUserId: process.env.MEDIUM_USER,
    mediumIntegrationToken: process.env.MEDIUM_INTEGRATION_TOKEN,
    titlePrefix: process.env.TITLE_PREFIX,
    url: process.env.URL,
    metaDesc: process.env.META_DESC,
    email: process.env.EMAIL,
    secondaryEmail: process.env.SECONDARY_EMAIL,
    twitter: process.env.TWITTER,
    github: process.env.GITHUB,
    linkedin: process.env.LINKEDIN,
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/date-filter.js" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/style-resources",
  ],
  styleResources: {
    scss: [],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "vue-social-sharing/nuxt"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    loaders: {
      sass: {
        implementation: require("sass"),
        sassOptions: {
          indentedSyntax: true, // For sass indented syntax
        },
      },
    },
  },
};
