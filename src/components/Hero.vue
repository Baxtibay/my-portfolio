<template>
  <div class="hero">
    <div class="hero__content">
      <p class="hero__greeting">Hello</p>
      <h1 class="hero__heading">I'm Baxtibay Begniyazov a Frontend developer</h1>
      <p class="hero__text">I'm a front-end developer trying for a junior position. I enjoy developing comfortable and beautiful web applications for users. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. I'd love you to check my work.</p>
      <div class="socials">
        <p class="socials__text">Follow me</p>
        <ul class="socials__list">
          <li class="socials__item">
            <a class="socials__link tg-bg" href="https://t.me/frontend_web_devel0per" target="_blank">
              <i class="fa-brands fa-telegram fa-xl"></i>
            </a>
          </li>
          <li class="socials__item">
            <routerLink class="socials__link in-bg" to="/not-found">
              <i class="fa-brands fa-linkedin fa-xl"></i>
            </routerLink>
          </li>
          <li class="socials__item">
            <a class="socials__link ins-bg" href="https://www.instagram.com/baxti_programmer_?igsh=bWt0OXRhaThycGc3" target="_blank">
              <i class="fa-brands fa-instagram fa-xl"></i>
            </a>
          </li>
          <li class="socials__item">
            <a class="socials__link git-bg" href="https://github.com/Baxtibay" target="_blank">
              <i class="fa-brands fa-github fa-xl"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="buttons-wrapper">
        <routerLink class="button-default button-danger button-right" to="/contact">Send Request</routerLink>
        <routerLink class="button-default button-outline" to="/not-found">
          <span style="margin-right: 8px;">Resume</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 15 .621 2.485A2 2 0 0 0 3.561 19h14.878a2 2 0 0 0 1.94-1.515L21 15m-10-2V1v12Zm0 0L7 9l4 4Zm0 0 4-4-4 4Z"/></svg>
        </routerLink>
      </div>
    </div>
    <picture class="hero__img">
      <img class="img-inner" src="../assets/my-picture.png" alt="Baxtibay's picture" width="406" height="406">
    </picture>
  </div>
</template>
<script>
export default {

}
</script>
<style>

/* Button */
.button-default {
  padding: 14px 13px;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  transition: all .3s ease;
  border-radius: 10px;
}
.button-danger {
  background-color: #FF2950;
  border: 2px solid #FF2950;
  color: var(--white-color);
}

.button-danger:hover {
  background-color: transparent;
  color: #FF2950;
}

.button-danger:active {
  transform: scale(0.9);
}

.button-right {
  margin-right: 30px;
}

.button-outline {
  background-color: transparent;
  color: var(--black-50);
  border: 2px solid var(--primary-color);
}

.button-outline:hover {
  background-color: var(--primary-color);
  color: var(--white-color);
}

.button-outline:active {
  opacity: 0.6;
}

/* button end */


.hero {
  display: flex;
  justify-content: space-between;
  padding-top: 64px;
  padding-bottom: 125px;
}

.hero__content {
  max-width: 475px;
  margin-right: 10px;
}

.hero__greeting {
  margin-top: 0;
  margin-bottom: 16px;
}

.hero__heading {
  margin-top: 0;
  margin-bottom: 48px;
  font-size: 40px;
  line-height: 62px;
}

.hero__text {
  margin: 0;
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 30px;
}
.socials {
  display: flex;
  align-items: center;
  margin-bottom: 64px;
}
.socials__text {
  margin: 0;
  margin-right: 36px;
  font-size: 18px;
  line-height: 30px;
  color: var(--black-80);
}
.socials__list {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}
.socials__item {
  display: flex;
  align-items: center;
  justify-content: center;
}
.socials__item:not(:last-child) {
  margin-right: 16px;
}
.socials__link {
  justify-content: center;
  align-content: center;
  padding: 16px;
  border-radius: 50%;
  text-decoration: none;
  color: var(--white-color);
}

.socials__link:hover {
  opacity: 0.8;
}

.socials__link:active {
  opacity: 0.6;
}

.img-inner {
  display: flex;
  flex-shrink: 0;
  width: 406px;
  height: 406px;
  object-fit: contain;
  border-radius: 50%;
}


@media only screen and (max-width: 1000px) {
  .hero {
    padding-top: 58px;
    padding-bottom: 115px;
  }

  .hero__heading {
    margin-bottom: 44px;
  }

  .socials {
    margin-bottom: 58px;
  }
}

@media only screen and (max-width: 950px) {
  .hero__content {
    width: 42%;
  }

  .hero__heading {
    font-size: 34px;
    margin-bottom: 30px;
  }

  .socials {
    margin-bottom: 42px;
  }

  .socials__text {
    margin-right: 18px;
  }

  .img-inner {
    width: 380px;
    height: 380px;
  }

  @media only screen and (max-width: 900px) {
    .hero {
      padding-top: 46px;
      padding-bottom: 90px;
    }
    .hero__content {
    width: 42%;
    }

    .hero__heading {
      font-size: 30px;
      line-height: 42px;
      margin-bottom: 28px;
    }

    .socials {
      flex-wrap: wrap;
      margin-bottom: 28px;
    }

    .socials__text {
      margin-right: 18px;
      margin-bottom: 4px;
    }

    .button-right {
      margin-right:18px;
    }

    .button-danger {
      padding: 10px 12px;
    }

    .button-outline {
      padding: 10px 12px;
    }

    .img-inner {
      width: 380px;
      height: 380px;
    }
  }

  @media only screen and (max-width: 800px) {
    .hero {
      padding-top: 20px;
      padding-bottom: 75px;
    }

    .hero__heading {
      font-size: 28px;
      line-height: 38px;
      margin-bottom: 14px;
    }

    .button-right {
      margin-bottom: 6px;
    }

    .img-inner {
      width: 350px;
      height: 350px;
    }
  }

  @media only screen and (max-width: 768px) {
    .hero__greeting {
      margin-bottom: 6px;
    }

    .hero__content {
      width: 60%;
    }

    .hero__heading {
      font-size: 22px;
      line-height: 30px;
      margin-bottom: 8px;
    }

    .hero__text {
      margin-bottom: 16px;
      font-size: 14px;
      line-height: 20px;
    }

    .socials__link {
      padding: 14px;
    }

    .button-default {
      font-size: 16px;
    }

    .img-inner {
      width: 280px;
      height: 280px;
    }
  }

  @media only screen and (max-width: 600px) {
    .hero {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
    .hero__content {
      width: 100%;
      text-align: center;
    }
    .hero__img {
      margin-bottom: 10px;
    }
  }

  @media only screen and (max-width: 550px) {
    .hero__heading {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 4px;
    }

    .socials {
      flex-direction: column;
      justify-content: center;
    }

    .socials__text {
      margin-right: 0;
      font-size: 16px;
    }

    .button-default {
      font-size: 14px;
    }

    .img-inner {
      width: 350px;
      height: 350px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }


  }
}
</style>