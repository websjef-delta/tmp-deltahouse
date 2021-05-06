<template>
  <Layout>
    <div class="card-container">
      <h1>Komiteer</h1>
      <div class="category-cards">
        <category-card v-for="edge in $page.cat.edges" :key="edge.node.id" :category="edge.node"/>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query{
    cat: allPosts(filter: {layout: {eq: "committee"}}){
      edges{
        node{
          path
          title
          id 
          bilde
        }
      }
    }
  }
</page-query>

<script>
import CategoryCard from '../components/CategoryCard.vue'
export default {
  components: { CategoryCard },
  metaInfo: {
    title: 'Komiteer'
  }
}
</script>

<style>
  .category-cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center; 
    flex-direction: row;
    margin: 0 20%;
  }
  
  .card-container {
    text-align: center;
    font-size: 2.5rem;

  }
</style>