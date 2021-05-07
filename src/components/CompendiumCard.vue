<template>
    <article class="c-card">
        <g-image :src="comp.cover"/> <!-- Icon -->
        <h2 v-html="comp.title"/>
        <p>{{comp.price}} kr</p>
    </article>
</template>

<script>
export default {
    props: ['comp']
}
</script>

<style>
.c-card h1 {
  margin: 2rem 0 1rem 0;
  font-size: 2rem;
  color: white;
}
.c-card img{
    width: inherit;
}
.c-card {
    align-items: center;   
    justify-content: center; 
    background-color: #59a673;
    margin: 2rem;
    border-radius: 2rem;
    width: 30rem;
    height: 30rem;
}
  
</style>