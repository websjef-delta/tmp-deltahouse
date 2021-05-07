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
    background-color: #59a673;
    margin: 2rem;
    border-radius: 2rem;
    width: 18rem;
    height: 18rem;
}
</style>