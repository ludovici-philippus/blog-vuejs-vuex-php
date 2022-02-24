<template>
    <header>
        <div class="overlay"></div>
        <div class="header__content">        
            <div class="logo">
                <router-link to="/"><h1>Blog</h1></router-link>
            </div>
            <BuscaComponent/>
            <CategoriasComponent/>
        </div>
    </header>
</template>

<script>
    import CategoriasComponent from "./CategoriasComponent.vue";
    import BuscaComponent from "./BuscaComponent.vue"

    export default{
        name: "HeaderComponent",
        components:{
            CategoriasComponent,
            BuscaComponent
        }
    }
</script>

<style scoped>
header{
    width: 100%;
    min-height: 80vh;
    background-image: url("../assets/imgs/bg.jpg");
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    position: relative;
    z-index: 0;
}

.overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background-color: rgba(0, 0, 0, 0.65);
    z-index: 1;
}

.header__content{
    position: absolute;
    width: 100%;
    display: block;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    z-index: 2;
}

.logo a{
    text-decoration: none;
    color: white;
    font-size: 32px;
}
</style>
