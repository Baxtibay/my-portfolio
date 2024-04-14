<template>
  <section class="projects">
    <h2 class="projects__heading">Portfolio</h2>
    <div class="projects__wrapper">
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


export default {}

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

/* PROJECT */
.project-card {
  width: 100%;
  padding-bottom: 10px;
  box-shadow: 0 .2px var(--black-80);
}

.project-card:nth-child(3n) {
  margin-right: 0;
}

.project-card__heading {
  margin-top: 0;
  margin-bottom: 10px;
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
  margin-bottom: 10px;
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
  .project-card {
    width: 90%;
  }
}

@media only screen and (max-width: 650px) {
  .project__links {
    flex-direction: column;
  }

  .project__link:not(:last-child) {
    margin-bottom: 5px;
  }
}
/* PROJECT */

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