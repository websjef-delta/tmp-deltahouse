<template>
  <Layout>
    <header id="second-header">
      <g-image src="~/assets/img/gruppebilde-kull21.jpg" class="header-image" />
      <div class="body">
        <p>
          Skal du studere årsstudium/bachelor/master i matematiske fag eller
          bachelor/master i fysikk ved NTNU til høsten? Meld deg på i Deltas
          fadderuke!
        </p>
        <a href="https://forms.gle/G8RM8x3SV9NbEiySA" class="link-button"
          >Søk her</a
        >
      </div>
    </header>
    <section id="kompendier">
      <h1>Kompendier</h1>
      <ul>
        <li>
          <g-link to="/kompendier"
            ><g-image width="200" src="~/assets/img/MA1101.jpg" alt="MA1101"
          /></g-link>
        </li>
        <li>
          <g-link to="/kompendier"
            ><g-image width="200" src="~/assets/img/MA1102.jpg" alt="MA1102"
          /></g-link>
        </li>
        <li>
          <g-link to="/kompendier"
            ><g-image width="200" src="~/assets/img/MA1201.jpg" alt="MA1201"
          /></g-link>
        </li>
        <li>
          <g-link to="/kompendier"
            ><g-image width="200" src="~/assets/img/TFY4102.jpg" alt="TFY102"
          /></g-link>
        </li>
        <li>
          <g-link to="/kompendier"
            ><g-image width="200" src="~/assets/img/TFY4109.jpg" alt="MA1102"
          /></g-link>
        </li>
      </ul>
      <g-link class="link-button" to="/kompendier">Se alle</g-link>
    </section>
    <section id="nyheter">
      <h2>Nyheter</h2>
      <news-card
        v-for="edge in $page.news.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </section>
  </Layout>
</template>

<page-query>
  query{
    news: allPosts(filter: {layout: {eq: "news"}}){
      edges{
        node{
          path
          title
          excerpt 
          
        }
      }
    }
  }
</page-query>

<script>
import NewsCard from "../components/NewsCard.vue";
export default {
  components: { NewsCard },
  metaInfo: {
    title: "Delta - linjeforeningen for matte og fysikk ved NTNU",
  },
};
</script>

<style>
* {
  padding: 0;
  border: 0;
  margin: 0;
}
.header-image {
  width: 100vw;
}
:root {
  --deltaGreen: #005500;
  --buttonGreen: #002500;
}
html {
  width: 100vw;
}
#second-header {
  background-color: var(--deltaGreen);
  font-size: 4rem;
  text-align: center;
  color: white;
  font-weight: 700;
}
#second-header a {
  font-weight: 400;
  font-size: 2.2rem;
  font-style: normal;
  background-color: var(--buttonGreen);
  padding: 0.5em;
  border-radius: 1rem;
}
#second-header p {
  margin: 0 0 3rem 0;
}
#second-header .body {
  padding: 10rem 24rem;
}

a {
  text-decoration: none;
  color: inherit;
}
#kompendier {
  text-align: center;
  padding: 4rem 0;
}
.link-button {
  font-weight: 400;
  font-size: 2.2rem;
  font-style: normal;
  background-color: var(--buttonGreen);
  padding: 0.5em;
  border-radius: 1rem;
  color: white;
}
#kompendier ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

#kompendier li {
  list-style: none;
  margin: 2rem 3rem;
}
#kompendier h1 {
  font-size: 3rem;
  margin: 2rem;
}

#nyheter {
  background-color: var(--deltaGreen);
  padding: 5rem 15rem;
  font-size: 1.6rem;
}
#nyheter h2 {
  color: white;
  margin: 0 0 4rem 0;
  text-align: center;
  font-size: 3rem;
}
</style>
