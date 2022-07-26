<template>
  <Layout>
    <header id="second-header">
      <g-image src="~/assets/img/gruppebilde-kull21.jpg" class="header-image" />
      <div class="body">
        <p>
          Skal du studere årsstudium/bachelor/master i matematiske fag eller
          bachelor/master i fysikk ved NTNU høsten 22? Meld deg på i Deltas
          fadderuke!
        </p>
        <a href="https://forms.gle/GoiATksMbXJmokkM7" class="link-button"
          >Påmelding</a
        >
      </div>
    </header>
    <g-link to="/kompendier">
      <section id="kompendier">
        <h1>Kompendier</h1>
        <ul>
          <li>

              <g-image width="200" src="~/assets/img/MA1101.jpg" alt="MA1101"/>
          </li>
          <li>
              <g-image width="200" src="~/assets/img/MA1102.jpg" alt="MA1102"/>
          </li>
          <li>
            <g-image width="200" src="~/assets/img/MA1201.jpg" alt="MA1201"/>
          </li>
          <li>
          <g-image width="200" src="~/assets/img/TFY4102.jpg" alt="TFY102"/>
          <li>
          <g-image width="200" src="~/assets/img/TFY4109.jpg" alt="MA1102"/>
          </li>
        </ul>
        <p class="link-button">Se alle</p>
      </section>
    /></g-link>
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
    news: allPosts(filter: {layout: {eq: "news"}}sortBy:"date" order:ASC perPage: 4){
      edges{
        node{
          path
          title
          excerpt
          id 
          
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
  font-size: 3vw;
  text-align: center;
  color: white;
  font-weight: 600;
}
#second-header a {
  font-weight: 400;
  font-size: 2.2vw;
  font-style: normal;
  background-color: var(--buttonGreen);
  padding: 0.5em;
  border-radius: 1rem;
}

#second-header .body {
  padding: 5vw 10vw;
}

a {
  text-decoration: none;
  color: inherit;
}
#kompendier {
  text-align: center;
  margin: 2vh;
}
.link-button {
  display: inline-block;
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
  margin: 1vh 0 3vh 1vw;
  width: 15vw;
}
#kompendier h1 {
  font-size: 3vh;
  margin: 2rem;
}

#nyheter {
  background-color: var(--deltaGreen);
  padding-bottom: 2vw;
}
#nyheter h2 {
  color: white;
  padding: .6vh 0 .6vh 0;
  text-align: center;
  font-size: 3.5vh;
  font-weight: 700;
}
</style>
