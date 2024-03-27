<template>
  <div class="email-me-content">
    <p class="email-me__text">Interested in doing a project together?</p>
    <router-link class="email-me__button" to="/contact">Email Me</router-link>
  </div>
</template>
<script>
export default {

}
</script>
<style>
.email-me-content{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 75px;
  border-radius: 25px;
  background-color: var(--primary-color);
}
.email-me__text {
  margin: 0;
  width: 60%;
  color: var(--white-color);
  font-size: 36px;
  font-weight: 600;
}
.email-me__button {
  padding: 17px 74px;
  border-radius: 10px;
  color: var(--black-100);
  text-decoration: none;
  font-weight: 600;
  font-size: 24px;
  background-color: #fff;
}
.email-me__button:hover {
  opacity: 0.8;
}
.email-me__button:active {
  opacity: 0.6;
}
@media only screen and (max-width: 1000px) {
  .email-me-content {
    padding: 42px 54px;
  }
  .email-me__text {
    font-size: 30px;
  }
  .email-me__button {
    font-size: 22px;
  }
}
@media only screen and (max-width: 800px) {
  .email-me-content {
    padding: 34px 44px;
  }
  .email-me__text {
    font-size: 26px;
  }
  .email-me__button {
    padding: 12px 60px;
    font-size: 18px;
  }
}
@media only screen and (max-width: 650px) {
  .email-me-content {
    padding: 28px 32px;
  }
  .email-me__text {
    font-size: 22px;
  }
  .email-me__button {
    padding: 12px 46px;
    font-size: 16px;
  }
}
@media only screen and (max-width: 550px) {
  .email-me-content {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 28px 32px;
  }
  .email-me__text {
    width: 100%;
    margin-bottom: 12px;
    font-size: 22px;
  }
  .email-me__button {
    padding: 12px 46px;
    font-size: 16px;
  }
}
</style>