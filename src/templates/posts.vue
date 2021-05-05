<template>
    <layout>
        <div class="markdown-body">
            <h1 v-html="$page.posts.title"/>
            <img v-img="$page.posts.bilde"/>
            <div v-html="$page.posts.content"/>
        </div>
    </layout>
</template>

<page-query>
    query Post ($path: String!){
        posts (path: $path){
            content 
            title
            bilde
            }
    }
</page-query>

<script>
export default {
    metaInfo(){
        return {
            title: this.$page.post.title
        }
    }
}
</script>

<style>
    @import url('https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css');


    .markdown-body {
        font-size: 160%;
        box-sizing: border-box;
        min-width: 200px;
        max-width: 980px;
        margin: 0 auto;
        padding: 45px;
    }

    @media (max-width: 767px) {
        .markdown-body {
            padding: 15px;
        }
    }

</style>
