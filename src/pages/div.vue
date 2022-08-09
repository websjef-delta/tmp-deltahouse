<!--
This is the templates for all posts, ie: both comittees and news posts
 -->

<template>
    <layout>
        <div class="markdown-body">
            <div v-html="$page.theSite.content"/>
        </div>
    </layout>
</template>

<page-query>
    query{
        theSite: site(path: "/site/content/div/"){
            content
    }
}
</page-query>

<script>
export default {
    metaInfo(){
        return {
            title: "Diverse"
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
