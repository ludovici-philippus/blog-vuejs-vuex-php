<template>
    <article>
        <div class="container">
            <h2>{{ titulo }}</h2>
            <h4>{{ descricao }}</h4>
            <img :src="imagem" :alt="descricao" :title="titulo"/>
            <hr>
            <p>{{ conteudo }}</p>
        </div>
    </article>
</template>

<script>
export default{
    name: "PostPageComponent",
    props:{
        titulo: String,
        descricao: String,
        imagem: String,
        conteudo: String
    }
}
</script>

<style scoped>
img{
max-width: 400px;
text-align: center;
width: 100%;
margin: 10px auto;
}

h2{
    text-align: center
}

h4{
text-align: center;
font-weight: lighter;
}

p{
font-size: 16px;
margin-top: 10px;
}

.container{
flex-direction: column;
}
article{
margin: 20px 0;
}
</style>
