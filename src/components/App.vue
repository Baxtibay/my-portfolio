<template>
  <HeaderSection />

  <main class="main-content">
    <div class="container">
      <RouterView :projects="projects" />
    </div>
  </main>

  <FooterSection />
</template>

<style scoped></style>

<script>
import HeaderSection from "./HeaderSection.vue"
import FooterSection from "./FooterSection.vue"
export default {
  components: {HeaderSection,FooterSection,},
  // data() {
  //   return {
  //     projects: [
  //       {
  //         id: 1,
  //         img: 'https://github.com/Baxtibay/my-portfolio/blob/main/src/assets/projects-img/portfolio-Image.png?raw=true',
  //         name: 'Restaurant',
  //         githubLink: 'https://github.com/Baxtibay/restaurant',
  //         deployLink: '',
  //         infoLink: '',
  //         texnologyes: ['Html', 'Css' ,'JavaScript'],
  //       },
  //       {
  //         id: 2,
  //         img: '',
  //         name: 'Akademnashir',
  //         githubLink: '',
  //         deployLink: '',
  //         infoLink: '',
  //         texnologyes: ['Html', 'Css' ,'JavaScript'],
  //       },
  //       {
  //         id: 3,
  //         img: '',
  //         name: 'Koffe roaster',
  //         githubLink: '',
  //         deployLink: '',
  //         infoLink: '',
  //         texnologyes: ['Html', 'Css' ,'JavaScript'],
  //       },
  //       {
  //         id: 4,
  //         img: '',
  //         name: 'AnsorMed',
  //         githubLink: '',
  //         deployLink: '',
  //         infoLink: '',
  //         texnologyes: ['Html', 'Css' ,'JavaScript'],
  //       },
  //       {
  //         id: 5,
  //         img: '',
  //         name: 'Countries',
  //         githubLink: '',
  //         deployLink: '',
  //         infoLink: '',
  //         texnologyes: ['Html', 'Css' ,'JavaScript'],
  //       },
  //     ]
  //   }
  // }
}

</script>