<template>
  <section class="contact">
    <div class="contact__content">
      <h2 class="contact__heading">Get in Touch</h2>
      <p class="contact__text">Please contact me if you have any questions or projects.  I will be happy to work with you.</p>
    </div>
    <div class="contact-about-contact-form-wrapper">
      <div class="contact__info">
        <ul class="info__list">
          <li class="info__item">
            <span class="icon icon-location"></span>
            <div class="info__item-inner">
              <h3 class="info__heading">Adress</h3>
              <div class="info__item-about">
                <dl class="info__definition-list">
                  <dt class="info__definition-title">Country:</dt>
                  <dd class="info__definition-description">Uzbekistan</dd>
                </dl>
                <dl class="info__definition-list">
                  <dt class="info__definition-title">Region:</dt>
                  <dd class="info__definition-description">Shimbay</dd>
                </dl>
                <dl class="info__definition-list">
                  <dt class="info__definition-title">Street:</dt>
                  <dd class="info__definition-description">T.Erniyazov 1</dd>
                </dl>
              </div>
            </div>
          </li>
          <li class="info__item">
            <span class="icon icon-phone"></span>
            <div class="info__item-inner">
              <h3 class="info__heading">Phone</h3>
              <p class="info__text">+998(90) 574 76 16</p>
            </div>
          </li>
          <li class="info__item">
            <span class="icon icon-email"></span>
            <div class="info__item-inner">
              <h3 class="info__heading">Email</h3>
              <p class="info__text">baxtibaybekniyazov@gmail.com</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="contact__form-wrapper">
        <form class="contact__form">
          <h4 class="contact__heading">Send message</h4>
          <input class="contact__input" type="text" name="name" placeholder="Name">
          <input class="contact__input" type="text" name="name" placeholder="Email">
          <textarea class="contact__input contact__textarea" name="textarea" placeholder="Message"></textarea>
          <button class="button-default button-outline contact-button button-block" type="button">Send</button>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
export default {

}
</script>
<style>
.contact__content {
  margin-bottom: 100px;
  padding-top: 40px;
  text-align: center;
}

.contact__heading {
  color: var(--primary-color);
  margin-top: 0;
  margin-bottom: 24px;
  padding: 0;
}
.contact__text {
  color: var(--black-50);
  font-weight: 500;
  margin-top: 0;
}
.contact-about-contact-form-wrapper {
  display: flex;
  justify-content: space-between;
}

.info__list {
  margin: 0;
  margin-right: 15px;
  padding: 0;
  list-style: none;
}
.info__item {
  display: flex;
}

.info__item:not(:last-child) {
  margin-bottom: 20px;
}

.info__item-inner {
  display: flex;
  flex-direction: column;
}

.icon {
  display: inline-block;
  width: 50px;
  height: 50px;
  padding: 20px;
  margin-right: 10px;
  background-color:var(--blue-color);
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center center;
}

.icon-location {
  background-image: url("../assets/location.png");
}

.icon-phone {
  background-image: url("../assets/telephone.png");
}

.icon-email {
  background-image: url("../assets/gmail.png");
}


.info__heading {
  color: var(--primary-color);
  margin: 0;
}
.info__definition-list {
  display: flex;
  margin: 0;
}
.info__definition-title {
  color: var(--black-80);
  font-weight: 600;
  margin-right: 10px;
  font-size: 14px;
}
.info__definition-description {
  color: var(--black-50);
  font-weight: 500;
  margin: 0;
  letter-spacing: 0.4px;
}
.info__text {
  margin: 0;
  color: var(--black-80);
  font-weight: 500;
}


/* CONTACT-FORM */
.button-block {
  display: block;
}

.contact__heading {
  margin-top: 0;
  margin-bottom: 12px;
}

.contact__input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  color: var(--black-80);
  font-weight: 500;
  border: none;
  outline: none;
  font-family: "Poppins", "Arial", sans-serif;
}

::placeholder {
  color: var(--black-50);
  font-weight: 600;
  font-size: 15px;
}

.contact__textarea {
  min-height: 100px;
  resize: vertical;
}

.contact-button {
  padding: 8px 40px;
}

@media only screen and (max-width: 1100px) {
  .contact__content {
    margin-bottom: 62px;
    padding-top: 30px;
  }
}

@media only screen and (max-width: 1000px) {
  .contact__content {
    margin-bottom: 40px;
  }

  .icon {
    width: 30px;
    height: 30px;
  }

  .contact__heading {
    font-size: 18px;
  }

  .info__heading {
    font-size: 15px;
  }

  .info__text,
  .info__definition-description {
    font-size: 14px;
  }

  .contact__input {
    /* width: 90%; */
    padding: 7px 10px;
  }

  ::placeholder {
    font-size: 13px;
  }

}
@media only screen and (max-width: 650px) {
  .contact-about-contact-form-wrapper {
    flex-direction: column;
  }

  .contact__info {
    margin-bottom: 40px;
  }

  .contact__text {
    font-size: 14px;
  }
}

@media only screen and (max-width: 450px) {
  .info__heading {
    font-size: 14px;
  }

  .info__text {
    font-size: 13px;
  }

  .info__definition-title,
  .info__definition-description {
    font-size: 13px;
  }
  .contact__form {
    display: flex;
    flex-direction: column;
  }

  .contact__heading {
    font-size: 15px;
    margin-bottom: 6px;
  }
}
</style>