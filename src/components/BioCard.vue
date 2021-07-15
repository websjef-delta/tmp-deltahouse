<template>
        <article class="card">
            <div>
                <g-image :src="person.bilde"/>
            </div>
            <div class="text-container">
                <h1>{{person.position}}</h1>
                <h3>{{person.navn}}</h3>
                <p v-html="person.aboutme"/>
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
    margin: 5rem 10%;
    padding-right: 1rem;
    background-color: #59A673;
    border-radius: .5vw 1vw 5vh .5vw;
}
.card img{
    margin-right: 1.5vw;
    border-radius: .5vw;
    max-width: 40vw;
}

.text-container {
    text-align: left;
    margin-top: .5rem;
    margin-right: .5rem;
    margin-bottom: 7rem;
}
</style>
