<template>
  <div class="blog-list">
    <a
      class="terminal-card"
      v-for="project of projects"
      :key="project.url"
      :href="project.url"
      target="_blank"
    >
      <div
        class="card-header"
        :style="{ background: `url(${project.thumbnail})` }"
      ></div>
      <div class="card-body">
        <h2>{{ project.name }}</h2>
        <div class="content">{{ project.desc }}</div>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: "ProjectList",
  data: () => ({}),
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  methods: {},
};
</script>

<style scoped>
.card-body {
  height: auto;
}
</style>
