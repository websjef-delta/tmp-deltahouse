<template>
  <Layout>
    <h1 v-for="comps in $page.comp.the_compendiums" :key="comps.compendium" v-html="comps.compendium.title"/>
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
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>
