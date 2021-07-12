<template>
  <div class="post">
    <article>
      <header>
        <g-image width="150" :src="post.bilde" />
        <h1 v-html="post.title"></h1>
      </header>
      <p v-html="post.excerpt"></p>
      <br />
      <g-link :to="post.path">Les Mer</g-link>
    </article>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style >
.post {
}
.post h1 {
  margin: 2rem 0 1rem 0;
}
.post article {
  background-color: white;
  margin: 2rem 20vw;
  padding: 4vw;
  line-height: 1.3em;
  font-size: 2.2vh;
  text-align: center;
  border-radius: 3rem;
}

.post a {
  background-color: var(--buttonGreen);
  margin: 10rem 0;
  padding: 0.7rem 1.2rem;
  font-weight: 400;
  border-radius: 0.8rem;
  color: white;
}
</style>