<template>
  <Layout>
    <div class="page-container">
      <h1>Kompendier</h1>
      <p>{{$page.comp.intro}}</p>
      <div class="cards">
        <compendium-card v-for="comps in $page.comp.the_compendiums" :key="comps.compendium" :comp="comps.compendium"/>
      </div>
    </div>
  </Layout>
</template>

<page-query>
   query{
     comp: site(path: "/site/content/kompendier/"){
      intro
      the_compendiums{
        compendium{
          title
          price
          cover
        }
      }
    }
  }
</page-query>

<script>
import CompendiumCard from '../components/CompendiumCard.vue'
export default {
  components:{CompendiumCard},
  metaInfo: {
    title: 'Kompendier'
  }
}
</script>

<style>
  
  .page-container {
    margin-top: 2.6rem;
    text-align: center;
    font-size: 120%;
  }
  .cards{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
   
  }
</style>