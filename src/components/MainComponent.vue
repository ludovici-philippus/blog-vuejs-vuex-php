<template>
    <main>
        <section class="posts">
            <h1>Posts</h1>
            <div class="container">
                <PostComponent :key="post.id" v-for="post in posts" :imagem="post.imagem" :titulo="post.titulo"
                :descricao="post.descricao" :slug_categoria="post.slug_categoria"
                :slug_post="post.slug"/>
            </div>
        </section>
    </main>
</template>

<script>
import PostComponent from "./PostComponent.vue";
export default{
    name: "MainComponent",
    data(){
        return{
            posts: [],
            busca: this.$store.getters.getBusca
        }
    },
    components:{
        PostComponent
    },
    methods:{
        get_posts: async function(){ 
                const posts_fetch = await fetch("http://localhost/reactjs/api/get_posts.php?posts=true").
                    then(function(response){
                            return response.text();    
                        }).then(function(body){
                            return JSON.parse(body);
                        });
                this.posts = posts_fetch;
        },
        get_posts_busca: async function(){
            const posts_fetch = await fetch("http://localhost/reactjs/api/get_posts.php?posts=true&busca="+this.busca).
                then(response => response.text()).
                then(body => JSON.parse(body));

            this.posts = posts_fetch;
        }
    },
    mounted(){
        this.get_posts();
        console.log(this.busca);
    },
    watch: {
        '$store.getters.getBusca': function(){
            this.busca = this.$store.getters.getBusca;
            this.get_posts_busca();
        },
    }
}
</script>

<style scoped>
.container{
    flex-direction: row;
}

h1{
text-align: center;
margin: 10px 0;
}
</style>
