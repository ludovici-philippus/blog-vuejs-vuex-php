<template>
    <div class="categorias">
        <router-link to="/algo">Algo</router-link> 
    </div>
</template>

<script>
export default {
    name: "CategoriasComponent",
    data(){
        categories: ""
    },
    methods:{
    get_categories: function(){
        
        }
    },
    mounted(){

    }
}
</script>

<style scoped>
    a{
        color: var(--cor-2);
        text-decoration: none;
    }
</style>
