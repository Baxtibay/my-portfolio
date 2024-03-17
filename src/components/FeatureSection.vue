<template>
  <div class="feature">
    <img class="feature__img" src="@/assets/feature-img.png" alt="feature's img" width="430" height="329">
    <div class="feature__content">
      <div class="project-about">
        <span class="project-count">120+</span>
        <p class="project-text">Completed Projects</p>
      </div>
      <div class="proposal">
        <h3 class="proposal__heading">Glad to Help You!</h3>
        <p class="proposal__text">As a web developer, I'm  learning new technologies and programming languages, and development techniques.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style>
.feature {
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  padding-left: 14px;
  padding-top: 48px;
  padding-right: 40px;
  padding-bottom: 48px;
  background-color: var(--primary-color);
  border-radius: 35px;
}

.feature__img {
  width: 430px;
  height: 329px;
  margin-right: 48px;
}

.feature__content {
  max-width: 570px;
  color: var(--white-color);
}

.project-count {
  font-size: 72px;
  font-weight: 600;
}

.project-text {
  margin-top: 0;
  margin-bottom: 48px;
}

.proposal__heading {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 48px;
  font-weight: 600;
}

.proposal__text {
  margin: 0;
  font-size: 24px;
  line-height: 45px;
}

@media only screen and (max-width: 1100px) {
  .project-count {
    font-size: 65px;
  }
  .proposal__heading {
    font-size: 44px;
  }
  .proposal__text {
    font-size: 20px;
    line-height: 38px;
  }
}

@media only screen and (max-width: 1000px) {
  .feature {
    padding-top: 32px;
    padding-right: 38px;
    padding-bottom: 32px;
  }

  .feature__img {
    width: 420px;
    height: 319px;
    margin-right: 32px;
  }

  .project-count {
    font-size: 56px;
  }

  .project-text {
    margin-bottom: 24px;
  }
  .proposal__heading {
    font-size: 38px;
    margin-bottom: 16px;
  }
  .proposal__text {
    font-size: 16px;
    line-height: 30px;
  }
}

@media only screen and (max-width: 850px) {
  .feature {
    padding-top: 22px;
    padding-right: 32px;
    padding-bottom: 22px;
  }

  .feature__img {
    width: 400px;
    height: 300px;
    margin-right: 32px;
  }

  .project-count {
    font-size: 42px;
  }

  .project-text {
    margin-bottom: 16px;
  }
  .proposal__heading {
    font-size: 30px;
    margin-bottom: 10px;
  }
  .proposal__text {
    font-size: 14px;
    line-height: 28px;
  }
}

@media only screen and (max-width: 768px) {
  .feature {
    padding-top: 22px;
    padding-right: 32px;
    padding-bottom: 22px;
  }

  .feature__img {
    width: 350px;
    height: 260px;
    margin-right: 16px;
  }

  .project-count {
    font-size: 36px;
  }

  .project-text {
    margin-bottom: 8px;
  }
  .proposal__heading {
    font-size: 26px;
    margin-bottom: 6px;
  }
  .proposal__text {
    font-size: 14px;
    line-height: 25px;
  }
}

@media only screen and (max-width: 690px) {
  .feature {
    padding: 20px 26px;
    flex-direction: column-reverse;
    align-items: center;
  }

  .feature__img {
    margin-right: 0;
    width: 425px;
    height: 290px;
  }

  .proposal__text {
    margin-bottom: 14px;
  }
}

@media only screen and (max-width: 560px) {
  .feature {
    padding: 18px 21px;
  }
  .feature__img {
    width: 360px;
    height: 235px;
  }
  .feature__content {
    text-align: center;
  }
}
</style>