<template>
    <HeaderComponent/>
    <PostPageComponent :titulo="titulo" :descricao="descricao" :conteudo="conteudo" :imagem="imagem"/>
    <FooterComponent/>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import PostPageComponent from "../components/PostPageComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
    name: "PostView",
    data(){
        return{
            post_slug: this.$route.params.slug_post,
            categoria_slug: this.$route.params.slug_categoria,
            titulo: "",
            descricao: "",
            conteudo: "",
            imagem: ""
        }
    },
    components:{
        HeaderComponent,
        PostPageComponent,
        FooterComponent
    },
    methods:{
        get_post: async function(){
            const post_fetch = await
                fetch("http://localhost/reactjs/api/get_post_single.php?post="+this.post_slug+"&categoria="+this.categoria_slug).
                    then(response => response.text()).
                    then(body => JSON.parse(body));
            console.log(post_fetch);
            this.titulo = post_fetch.titulo;
            this.descricao = post_fetch.descricao;
            this.imagem = post_fetch.imagem;
            this.conteudo = post_fetch.conteudo;
        }
    },
    mounted(){
        this.get_post();
    }
}
</script>

<style>

</style>
