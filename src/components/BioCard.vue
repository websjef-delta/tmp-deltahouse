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
    margin: 5rem 15%;
    padding-right: 1rem;
    background-color: #59A673;
    border-radius: .5rem 1rem 6rem .5rem;
    min-height: 437px;
}
.card img{
    margin-right: 2rem;
    border-radius: .5rem;
    max-width: 290px;
    max-height: 437px;
}

.text-container {
    text-align: left;
    margin-top: .5rem;
    margin-right: .5rem;
    margin-bottom: 7rem;
}
</style>
