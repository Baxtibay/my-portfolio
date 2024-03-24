<template>
  <form class="contact__form" @submit.prevent>
          <h4 class="contact__heading">Contact me</h4>
          <input
            class="contact__input" type="text"
            :class="[{error: this.name == ''}]"
            name="name"
            placeholder="Name"
            :value="name"
            @input="name = $event.target.value"
            required
          >
          <input
            class="contact__input" type="email"
            :class="[{error: this.email == ''}]"
            name="email"
            placeholder="Email"
            :value="email"
            @input="email = $event.target.value"
            required
          >
          <textarea
            class="contact__input contact__textarea"
            :class="[{error: this.message == ''}]"
            name="message"
            placeholder="Message"
            :value="message"
            @input="message=$event.target.value"
            required
          ></textarea>
          <button class="button-default button-outline contact-button button-block" type="submit" @click="sendEmail">Send</button>
          <p class="contact__text">You can also contact me directly on <a class="contact__link" href="https://t.me/frontend_web_devel0per" target="_blank">telegram</a>, If you get any error with emailing</p>
        </form>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    sendEmail() {
      const bodyMessage = `
        Name: ${this.name} <br>
        Email: ${this.email} <br>
        Message: ${this.message} <br>
      `
      if(!this.name || !this.email || !this.message) return
      Email.send({
          Host : "smtp.elasticemail.com",
          Username : "baxtib890@gmail.com",
          Password : "0415C85030C2CEB156CFFCF0AF413B23B5E1",
          To : 'baxtib890@gmail.com',
          From : "baxtib890@gmail.com",
          Subject : this.message,
          Body : bodyMessage
      })
      .then(
        message => {
          if(message == 'OK') {
            Swal.fire({
              title: "Success!",
              text: "Message sent successfully!",
              icon: "success"
            });
          }
        }
      )
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}


</script>
<style>
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

.contact__heading {
  margin-top: 0;
  margin-bottom: 12px;
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

.contact__input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  color: var(--black-80);
  font-weight: 500;
  border: 2px solid transparent;
  outline: none;
  font-family: "Poppins", "Arial", sans-serif;
}

.contact__input:not(:focus):not(:placeholder-shown):valid {
  border: 2px solid green;
}

.contact__input:not(:focus):not(:placeholder-shown):invalid {
  border: 2px solid red;
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
  margin-bottom: 8px;
}

.contact__link {
  text-decoration: none;
  color: var(--blue-color);
}
</style>