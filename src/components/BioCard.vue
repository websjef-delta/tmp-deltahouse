<template>
        <article class="card">
            <div>
                <g-image :src="person.bilde"/>
            </div>
            <div class="text-container">
                <h1>{{person.position}}</h1>
                <h3>{{person.navn}}</h3>
                <div v-html="person.aboutme"/>
            </div>

        </article>
</template>

<script>
export default {
    props: ['person']
}
</script>

<style >
.card   {
    display: flex;
    margin: 5rem 15%;
}
.card img{
    margin-right: 2rem;
    border-radius: .5rem;
    max-width: 290px;
}

.text-container {
    text-align: left;
}
.text-container div{
    margin-top: .5rem;
}
</style>
