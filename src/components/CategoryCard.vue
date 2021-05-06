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
  font-size: 2rem;
  color: white;
}
.cat img{
    width: 5rem;
}
.cat {
    display: flex;
    flex-direction: column;
    align-items: center;   
    justify-content: center; 
    background-color: #005500;
    margin: 3rem;
    border-radius: 2rem;
    width: 20rem;
    height: 20rem;
}
</style>