<template>
    <form>
        <InputComponent id="busca_input" type="text" name="busca" placeholder="Texto para busca..." is_input/>
        <button @click.prevent="pesquisar">🔎</button>
    </form>
</template>

<script>
import InputComponent from "./InputComponent.vue";
export default {
    name: "BuscaComponent",
    components:{
        InputComponent,
    },
    methods:{
        pesquisar: function(){
            const texto = document.querySelector('#busca').value;
            this.$store.commit("buscar", texto)
        }
    }
}
</script>

<style scoped>
form{
max-width: 400px;
margin: 10px auto;
display: flex;
flex-wrap: wrap;
flex-direction: row;
}

#busca_input{
width: 90%;
}

button{
width: 10%;
height: 40px;
border: 1px solid var(--cor-4);
background-color: var(--cor-4);
color: black;
font-weight: bold;
cursor: pointer;
font-size: 18px;
}
</style>
