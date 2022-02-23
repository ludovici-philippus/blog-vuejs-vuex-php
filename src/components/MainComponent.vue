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
            posts: []
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
                console.log(posts_fetch);
        }
    },
    mounted(){
        this.get_posts();
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
