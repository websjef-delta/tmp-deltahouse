<template>
  <article>
    <header>
        <g-image width="150" :src="post.bilde"/>
        <h1 v-html="post.title"></h1>
    </header>
    <p v-html="post.excerpt"></p>
    <br>
    <g-link :to="post.path">Les Mer</g-link>
</article>
</template>

<script>
export default {
    props: ['post']
}
</script>
