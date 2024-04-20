<template>
  <section class="projects">
    <div class="projects__heading-wrapper">
      <h2 class="projects__heading">Portfolio</h2>
      <routerLink class="projects__link" to="/portfolio">
        <span class="projects__link-text">see more</span>
        <i class="fa-solid fa-arrow-right fa-lg"></i>
      </routerLink>
    </div>

    <div class="projects__content">

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
import Project from '@/components/Project.vue'
export default {
  components: {
    Project
  }
}
</script>
<style>
.projects {
  margin-bottom: 80px;
}
.projects__heading-wrapper {
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 64px;
}
.projects__heading {
  margin: 0;
  font-size: 48px;
  font-weight: 600;
  color: var(--black-100);
}
.projects__link {
  text-transform: capitalize;
  font-size: 20px;
  text-decoration: none;
  color: var(--black-50);
  transition: color .3s ease;
}

.projects__link:hover {
  color: var(--primary-color);
}
.projects__link:active {
  opacity: 0.6;
}
.projects__link-text {
  margin-right: 8px;
}

/* PROJECT-CONTENT */
.projects__content {
  display: flex;

  justify-content: space-between;
}

/* PROJECT-CARD */
.project-card {
  width: 100%;
  padding-bottom: 10px;
  box-shadow: 0 .2px var(--black-80);
}
.project-card:not(:last-child) {
  margin-right: 50px;
}

.project-card:nth-child(3n) {
  margin-right: 0;
}

.project-card__heading {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 30px;
  color: var(--primary-color);
}
.project-card__img-wrapper {
  width: 100%;
  overflow: hidden;
  margin-bottom: 10px;
  border-radius: 18px;
}

.project-card__img {
  width: 100%;
  height: auto;
  border-radius: 18px;
  object-fit: contain;
  transition: all 0.3s ease;
}

.project-card__img:hover {
  transform: scale(1.1);
}

.project__links {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
  justify-content: space-around;
}

.project__link {
  text-decoration: none;
  display: inline-block;
  justify-content: center;
  color: var(--black-80);
  transition: color 0.3s ease;
  font-weight: 500;
}

.project__link:hover {
  color: #fff;
}
.project__link.info-page:hover {
  color: var(--primary-color);
}

.project__link:not(:last-child) {
  margin-right: 20px;
}

.project__link-text {
  display: inline-block;
  margin-right: 4px;
}

.project__link-img {
  display: flex;
  flex-shrink: 0;
}

.project__link-svg {
  display: block;
}

.project__texnalogy-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0;
  margin-bottom: 10px;
  padding: 0;
  list-style: none;
}
.project__texnalogy-item {
  margin-bottom: 5px;
}

.project__texnalogy-item:not(:last-child) {
  margin-right: 10px;
}

.project__texnalogy-name {
  display: inline-block;
  padding: 4px 8px;
  background-color: var(--blue-color);
  border-radius: 32px;
  color: var(--white-color);
}

@media only screen and (max-width: 950px) {
  .projects__heading-wrapper {
    margin-bottom: 48px;
  }
  .projects__heading {
    font-size: 42px;
  }
  .projects__link {
    font-size: 18px;
  }
  .project-card {
    width: 90%;
  }
  .project-card__heading {
    font-size: 28px;
  }
}
@media only screen and (max-width: 950px) {
  .project-card:not(:last-child) {
    margin-right: 30px;
  }
}
@media only screen and (max-width: 768px) {
  .projects__heading-wrapper {
    margin-bottom: 32px;
  }
  .projects__heading {
    font-size: 32px;
  }
  .projects__link {
    font-size: 16px;
  }

  .project-card {
    width: 100%;
  }

  .project-card__heading {
    font-size: 22px;
  }
}

@media only screen and (max-width: 650px) {
  .projects__heading {
    font-size: 30px;
  }
  .project__links {
    display: inline-flex;
    flex-direction: column;
  }

  .project__link:not(:last-child) {
    margin-bottom: 5px;
  }

  .project-card {
    width: 100%;
  }
  .project-card__heading {
    font-size: 20px;
  }
  .project__links {
    margin-bottom: 15px;
  }
}

@media only screen and (max-width: 600px) {
  .projects__content {
    flex-direction: column;
    align-items: center;
  }
  .project-card {
    width: 90%;
  }
  .project-card:not(:last-child) {
    margin-right: 0;
    margin-bottom: 40px;
  }
}

@media only screen and (max-width: 500px) {
  .projects__heading-wrapper {
    padding: 0;
  }

}

@media only screen and (max-width: 450px) {
  .projects__heading {
    font-size: 24px;
  }
  .projects__link {
    font-size: 14px;
  }
  .project-card__heading {
    font-size: 18px;
  }
  .project__texnalogy-name {
    font-size: 12px;
  }
}

</style>