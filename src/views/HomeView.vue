<template>
    <HeaderComponent/>
    <MainComponent/>
    <FooterComponent/>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "../components/HeaderComponent.vue";
import MainComponent from "../components/MainComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
    name: 'HomeView',
    components: {
        HeaderComponent,
        MainComponent,
        FooterComponent
    }
}
</script>
