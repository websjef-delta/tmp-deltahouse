<template>
  <Layout>
    <div class="text">
        <h1>404 - side ikke funnet</h1>
        <p>Det ser ut som siden du leter etter ikke fins</p>
        <g-link to="/">ta meg hjem</g-link>
    </div>
  </Layout>
</template>

<style>
:root{
    --deltaGreen: #005500;
    --buttonGreen: #002500;
}
.text{
    text-align: center;
    font-size: 1.8rem;
}
.text h1{
    font-size: 4rem;
}
.text p{
    margin: 1rem;
}
.text a{
    background-color: var(--buttonGreen);
    padding: 0.7rem 1.2rem;
    font-weight: 400;
    border-radius: 0.8rem;
    color: white;
}
</style>