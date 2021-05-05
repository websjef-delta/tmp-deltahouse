<template>
    <g-link :to="category.path">
        <article class="cat">
            <g-image :src="category.bilde"/> <!-- Icon -->
            <h1 v-html="category.title"></h1>
        </article>
    </g-link>
</template>

<script>
export default {
    props: ['category']
}
</script>

<style >
.cat h1 {
  margin: 2rem 0 1rem 0;
  color: white;
}
.cat img{
    width: 5rem;
}
.cat {
  background-color: #005500;
  margin: 3rem;
  padding: 3rem;
  line-height: 1.3em;
  text-align: center;
  border-radius: 2rem;
  width: 15rem;
  height: 15rem;
}
</style>