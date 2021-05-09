<template>
  <Layout>
    <div class="page-container">
      <h1>{{$page.about.title}}</h1>
      <div v-html="$page.about.intro"/>
      <h1>{{$page.about.heading_om_styret}}</h1>
      <div v-html="$page.about.body_om_styret"/>
      <bio-card v-for="people in $page.about.boardmembers" :key="people.navn" :person="people" class="biocard"/>
      <div v-html="$page.about.content"/>
    </div>
  </Layout>
</template>

<page-query>
   query{
     about: site(path:"/site/content/om-oss/"){
      title
      intro
      heading_om_styret
      body_om_styret
      boardmembers{
        navn 
        bilde 
        aboutme
        position
      }
      content
    }
  }
</page-query>

<script>
import BioCard from '../components/BioCard.vue'
export default {
  components: { BioCard },
  metaInfo: {
    title: 'About us'
  }
}
</script>

<style>
  .page-container{
    text-align: center;
    max-width: 100rem;
    margin: 0 25%;
    font-size: 120%;
  }

  .page-container h1{
    margin-top: 2rem;
  }

  .biocard h1{
    margin-top: 0;
  }
</style>
