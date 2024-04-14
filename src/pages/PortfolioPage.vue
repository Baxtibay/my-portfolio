<template>
  <section class="projects">
    <h2 class="projects__heading">Portfolio</h2>
    <div class="projects__wrapper">
      <!-- <Project v-for="project in projects" :project="project" /> -->
      <!-- PROJECT START -->
      <div class="project-card">
        <h3 class="project-card__heading">Akademnashir</h3>
        <div class="project-card__img-wrapper">
          <img class="project-card__img" src="/src/assets/projects-img/Akademnashr-preview.png" alt="project's picture" width="300" height="300">
        </div>
        <div class="project__links">
          <a class="project__link" href ="https://github.com/Baxtibay/Akademnashr-pro" target="_blank">
            <span class="project__link-text">Github</span>
            <i class="fa-brands fa-github"></i>
          </a>
          <a class="project__link" href="https://akademnashr-project-site.netlify.app/" target="_blank">
            <span class="project__link-text">Deploy</span>
            <i class="fa-solid fa-globe"></i>
          </a>
          <routerLink class="project__link" to="akademnashir-info-page">
            <span class="project__link-text">More info</span>
            <i class="fa-solid fa-circle-info"></i>
          </routerLink>
        </div>
        <ul class="project__texnalogy-list">
          <li class="project__texnalogy-item">
            <span class="project__texnalogy-name">JavaScript</span>
          </li>
          <li class="project__texnalogy-item">
            <span class="project__texnalogy-name">Html</span>
          </li>
          <li class="project__texnalogy-item">
            <span class="project__texnalogy-name">Css</span>
          </li>
        </ul>
      </div>
      <!-- PROJECT END -->

      <!-- PROJECT START -->
      <div class="project-card">
        <h3 class="project-card__heading">AnsorMed</h3>
        <div class="project-card__img-wrapper">
          <img class="project-card__img" src="../assets/projects-img/AnsorMed-preview.png" alt="project's picture" width="300" height="300">
        </div>
        <div class="project__links">
          <a class="project__link" href ="https://github.com/Baxtibay/AnsorMed" target="_blank">
            <span class="project__link-text">Github</span>
            <i class="fa-brands fa-github"></i>
          </a>
          <routerLink class="project__link" to="/in-progress">
            <span class="project__link-text">Deploy</span>
            <i class="fa-solid fa-globe"></i>
          </routerLink>
          <routerLink class="project__link" to="/ansormed-info-page">
            <span class="project__link-text">More info</span>
            <i class="fa-solid fa-circle-info"></i>
          </routerLink>
        </div>
        <ul class="project__texnalogy-list">
          <li class="project__texnalogy-item">
            <span class="project__texnalogy-name">JavaScript</span>
          </li>
          <li class="project__texnalogy-item">
            <span class="project__texnalogy-name">Html</span>
          </li>
          <li class="project__texnalogy-item">
            <span class="project__texnalogy-name">Css</span>
          </li>
        </ul>
      </div>
      <!-- PROJECT END -->
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