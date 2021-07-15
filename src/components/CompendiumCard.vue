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
.c-card h2 {
    font-size: 1vh;
    margin: 2rem 0 1rem 0;
}
.c-card img{
    width: inherit;
}
.c-card {
    align-items: center;   
    justify-content: center; 
    background-color: #59a673;
    margin: 1vh 0 1vh 1vh;
    border-radius: 1vh;
    width: 15vw;
    padding: .5vw;
}
  
</style>