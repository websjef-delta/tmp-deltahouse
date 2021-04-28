<template>
    <layout>
        <div v-html="$page.post.content"/>
    </layout>
</template>

<!--
<page-query>
    query Post ($path: String!){
        post
    }
</page-query>
-->

<script>
export default {
    metaInfo(){
        return {
            thite: this.$page.title
        }
    }
}
</script>
