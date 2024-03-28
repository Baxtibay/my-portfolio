<template>
  <footer>
    <div class="container">
      <ul class="footer__list">
        <li class="footer__item">
          <i class="fa-regular fa-envelope email-svg"></i>
          <p class="footer__text">baxtibaybekniyazov@gmail.com</p>
        </li>
        <li class="footer__item">
          <p class="footer__text">© Copyright 2024 | Designed and coded by Baxtibay</p>
        </li>
        <li class="footer__item">
          <a class="footer__link" href="https://github.com/Baxtibay" target="_blank">
            <i class="fa-brands fa-github fa-2xl"></i>
          </a>
          <a class="footer__link" href="https://t.me/frontend_web_devel0per" target="_blank">
<i class="fa-brands fa-telegram fa-2xl"></i>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script>
export default {

}
</script>

<style>
footer {
  padding-top: 46px;
  padding-bottom: 46px;
  color: var(--white-color);
  background-color: var(--grey-blue);
}

.footer__list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
}
.footer__item {
  display: flex;
  align-items: center;
}

.footer__text {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
}

.email-svg {
  margin-right: 8px;
}

.footer__link {
  display: block;
  text-decoration: none;
  color: var(--white-color);
  transition: color .3s ease;
}

.footer__link:not(:last-child) {
  margin-right: 18px;
}

.footer__link:hover {
  color: var(--primary-color);
}

.footer__link:active {
  opacity: 0.6;
}

@media only screen and (max-width: 950px) {
  .footer__text {
    font-size: 14px;
  }
}
@media only screen and (max-width: 768px) {
  footer {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .footer__list {
    flex-direction: column;
  }

  .footer__item:nth-child(2) {
    order: 3;
    margin-bottom: 0;
  }
  .footer__item:nth-child(3) {
    order: 2;
  }

  .footer__item {
    margin-bottom: 24px;
  }
}

@media only screen and (max-width: 430px) {
  .footer__text {
    font-size: 12.5px;
  }
}

@media only screen and (max-width: 380px) {
  .footer__text {
    font-size: 11px;
  }
}
</style>