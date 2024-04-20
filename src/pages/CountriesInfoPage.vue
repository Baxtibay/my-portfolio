<template>
  <div class="project">
    <img class="project__img" src="../assets/projects-img/Countries-info-page-base.png" alt="">
    <div class="project__detail-wrapper">
      <div class="project__info">
        <h1 class="project__heading">Countries</h1>
        <div class="project__info-inner">
          <div class="project__item-link-wrapper">
            <ul class="project__texnology-list">
              <li class="project__texnology-item">
                <span class="project__texnology-text">HTML</span>
              </li>
              <li class="project__texnology-item">
                <span class="project__texnology-text">SCSS</span>
              </li>
              <li class="project__texnology-item">
                <span class="project__texnology-text">JS</span>
              </li>
            </ul>
            <routerLink class="project__link button-default button-outline" to="/not-found">Visit Website</routerLink>
          </div>
          <div class="project__about-text-wrapper">
            <p class="project__about-text">
              This was a small project which using the free api, JS, HTML and SCSS. I built a fully-responsive landing page and dark mode.
            </p>
          </div>
        </div>
      </div>
      <div class="project__background">
        <h2 class="project__background-heading">Project Background</h2>
        <p class="project__background-text">This project required knowledge of html, scss, javascript and rest-api.And should have been done the mobile responsive and dark mode. It wasn't difficult because it was a small landing page project. I also learnt how to use javascript functions in a real project using the free api and combining css with scss.
        </p>
        <h3 class="project__background-heading">Static Mobile Previews</h3>
        <img class="project__background-img" src="../assets/projects-img/Countries-info-page-mobil-view.png" width="700" height="1200" alt="">
      </div>
    </div>
    <EmailMe />
  </div>
</template>
<script>
import EmailMe from '@/components/EmailMe.vue'
export default {
  components: {
    EmailMe
  }
}
</script>
<style scoped>
.project {
  padding-top: 20px;
  text-align: center;
  margin-bottom: 80px;
}
.project__img {
  width: 100%;
}
.project__detail-wrapper {
  display: flex;
}

.project__info {
  width: 35%;
  margin-right: 30px;
  text-align: start;
}
.project__info-inner {
  display: flex;
  flex-direction: column;
  align-items: start;
}
.project__heading {
  margin-top: 0;
  margin-bottom: 18px;
  color: var(--black-80);
}
.project__item-link-wrapper {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 8px;
  order: 2;
}
.project__texnology-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  margin-bottom: 8px;
  padding: 0;
  list-style: none;
}
.project__texnology-item {
  margin-bottom: 4px;
}
.project__texnology-item:not(:last-child) {
  margin-right: 8px;
}
.project__texnology-text {
  display: inline-block;
  padding: 4px 8px;
  background-color: var(--blue-color);
  border-radius: 8px;
  color: var(--white-color);
}
.project__link {
  text-decoration: none;
  text-align: center;
}
.project__about-text-wrapper {
  order: 1;
}
.project__about-text {
  margin-top: 0;
  margin-bottom: 8px;
  color: var(--black-80);
}
.project__background {
  width: 65%;
  margin-top: 0;
  margin-bottom: 28px;
  text-align: start;
}
.project__background-heading {
  margin-top: 0;
  margin-bottom: 28px;
  color: var(--black-80);
  font-weight: 500;
}
.project__background-text {
  margin-top: 0;
  margin-bottom: 12px;
  color: var(--black-80);
}

.project__background-img {
  width: 100%;
}

@media only screen and (max-width: 1000px) {
  .project__info {
    margin-right: 0;
    margin-bottom: 12px;
  }
  .project__detail-wrapper {
    flex-direction: column;
    align-items: center;
  }
  .project__info,
  .project__background {
    width: 100%;
  }
  .project__info-inner {
    flex-direction: initial;
    align-items: start;

  }
  .project__item-link-wrapper {
    width: 30%;
    margin-right: 20px;
    orphans: 1;
  }
  .project__texnology-list {
    order: 0;
  }
  .project__link {
    order: 0;
    display: block;
  }
  .project__about-text-wrapper {
    width: 70%;
    order: 2;
  }
  .project__background-heading {
    margin-bottom: 16px;
  }
}
@media only screen and (max-width: 768px) {
  .project__heading {
    margin-bottom: 12px;
    font-size: 28px;
  }

  .project__background-heading {
    font-size: 22px;
  }
}
@media only screen and (max-width: 600px) {
  .project__info-inner {
    flex-direction: column;
  }
  .project__item-link-wrapper {
    width: 100%;
    margin-right: 0;
    flex-direction: initial;
    align-items: center;
  }
  .project__about-text-wrapper {
    width: 100%;
  }
  .project__texnology-list {
    margin-right: 8px;
    margin-bottom: 0;
  }
}

@media only screen and (max-width: 500px) {
  .project__info {
    text-align: center;
  }
  .project__item-link-wrapper {
    justify-content: center;
  }
  .project__info-inner {
    align-items: center;
  }

  .project__about-text,
  .project__background-text {
    text-align: justify;
  }

  .project__background {
    text-align: center;
  }
}

@media only screen and (max-width: 450px) {
  .project__item-link-wrapper {
    flex-direction: column;
  }
  .project__texnology-list {
    margin-bottom: 8px;
  }
  .project__heading {
    font-size: 20px;
  }
  .project__about-text,
  .project__background-text {
    font-size: 15px;
  }
  .project__background-heading {
    font-size: 18px;
  }
}
</style>