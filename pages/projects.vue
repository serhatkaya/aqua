<template>
  <ProjectList :projects="projects" />
</template>
<script>
export default {
  name: "Projects",
  computed: {
    projects() {
      return this.$store.getters.projects;
    },
  },
};
</script>
