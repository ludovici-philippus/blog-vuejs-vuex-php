<template>
    <div class="post-single">
        <router-link :to="slug">
            <img :src="imagem" :title=titulo :alt="descricao"/>
            <h3>{{ titulo }}</h3>
            <p>{{ descricao }}</p>
        </router-link>
        <router-link class="btn" :to="slug">Ler</router-link>
    </div>
</template>

<script>
export default {
    name: "PostComponent",
    props:{
        imagem: String,
        titulo: String,
        descricao: String,
        slug_post: String,
        slug_categoria: String
    },
    data(){
        return{
            slug: "/" + this.slug_categoria + "/" + this.slug_post
        }
    }
}
</script>

<style scoped>
.post-single{
width: 33%;
border: 4px solid #fff;
display: flex;
flex-direction: column;
justify-content: space-between;
text-align: center;
}
img{
max-width: 100%;
text-align: center;
}
a{
text-decoration: none;
color: #333;
}
.btn{
background-color: var(--cor-3);
color: white;
font-size: 16px;
padding: 5px 12px;
transition: 0.5s;
}
.btn:hover{
background-color: var(--cor-5);
}
</style>
