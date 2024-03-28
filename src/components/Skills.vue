<template>
  <section class="skills">
    <h2 class="skills__heading">Skills</h2>
    <ul class="skills__list">
      <li class="skills__item"><img class="skills__icon" src="../assets/icons/js.svg" alt="js icon"></li>
      <li class="skills__item"><img class="skills__icon" src="../assets/icons/html.svg" alt="html icon"></li>
      <li class="skills__item"><img class="skills__icon" src="../assets/icons/css.svg" alt="css icon"></li>
      <li class="skills__item"><img class="skills__icon" src="../assets/icons/sass.svg" alt="sass icon"></li>
      <li class="skills__item"><img class="skills__icon" src="../assets/icons/bootstrap.svg" alt="bootstrap icon"></li>
      <li class="skills__item"><img class="skills__icon" src="../assets/icons/tailwind.svg" alt="tailwind icon"></li>
      <li class="skills__item"><img class="skills__icon" src="../assets/icons/figma.svg" alt="figma icon"></li>
      <li class="skills__item"><img class="skills__icon" src="../assets/icons/photoshop.svg" alt="photoshop icon"></li>
      <li class="skills__item"><img class="skills__icon" src="../assets/icons/git.svg" alt="git icon"></li>
      <li class="skills__item"><img class="skills__icon" src="../assets/icons/github.svg" alt="github icon"></li>
    </ul>
  </section>
</template>
<script>
export default {

}
</script>
<style scoped>
.skills {
  margin-bottom: 80px;
}
.skills__heading {
  margin-top: 0;
  margin-bottom: 32px;
  font-weight: 600;
  font-size: 52px;
  color: var(--black-100);
}
.skills__list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
}
.skills__item {
  width: 5.66%;
  text-align: center;
}
.skills__item:not(:last-child) {
  margin-right: 2.65%;
}
.skills__icon {
  width: 64px;
}

@media only screen and (max-width: 1000px) {
  .skills__heading {
    font-size: 42px;
  }
  .skills__item {
    width: 15%;
    margin-bottom: 4px;
  }
  .skills__item:nth-child(5n) {
    margin-right: 0;
  }
}
@media only screen and (max-width: 768px) {
  .skills {
    margin-bottom: 50px;
  }
  .skills__heading {
    font-size: 32px;
  }
}
@media only screen and (max-width: 600px) {
  .skills__heading {
    font-size: 30px;
  }
  .skills__item {
    width: 30%;
  }
  .skills__item:nth-child(5n) {
    margin-right: 2.65%;
  }
  .skills__item:nth-child(3n) {
    margin-right: 0;
  }
}
@media only screen and (max-width: 450px) {
  .skills__heading {
    font-size: 24px;
  }
  .skills__icon {
    width: 58px;
  }
}
</style>