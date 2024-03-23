<template>
  <section class="projects">
    <h2 class="projects__heading">Portfolio</h2>
    <div class="projects__wrapper">
      <Project v-for="project in projects" :project="project" />
    </div>
  </section>
</template>
<script>
import Project from '@/components/Project.vue';


export default {
  components: {Project},
  props: {
    projects: {
      type: Object,
      required: true
    }
  }
}

</script>
<style scoped>
.projects {
  padding: 30px 0;
}

.projects__heading {
  margin-top: 0;
  margin-bottom: 60px;
  color: var(--black-80);
}

.projects__wrapper {
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 30px;
}

@media only screen and (max-width: 950px) {
  .projects__wrapper {
    grid-template-columns: repeat(2, auto);
    justify-items: center;
  }
}

@media only screen and (max-width: 660px) {
  .projects__wrapper {
    /* grid-template-columns: repeat(1, 80%); */
    grid-template-columns: 100%;
    justify-items: center;
  }
}
</style>