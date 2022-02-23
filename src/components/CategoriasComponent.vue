<template>
    <div class="categorias">
        <router-link :key="category.id" v-for="category in categories" :to="category.slug">{{ category.nome }}</router-link> 
    </div>
</template>

<script>
export default {
    name: "CategoriasComponent",
    data(){
        return{
            categories: ""
        }
    },
    methods:{
    get_categories: async function(){
            const categorias_fetch = await fetch("http://localhost/reactjs/api/get_categories.php?pega_categorias=true").
                then(function(response){
                    return response.text();
                }).then(function(body){
                    return JSON.parse(body)
                });
            this.categories = categorias_fetch;
        }
    },
    mounted(){
        this.get_categories();
    }
}
</script>

<style scoped>
    a{
        color: var(--cor-2);
        text-decoration: none;
        margin-right: 8px;
    }
</style>
