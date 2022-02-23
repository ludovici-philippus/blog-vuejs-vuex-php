<template>
    <HeaderComponent/>
    <MainComponent/>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "../components/HeaderComponent.vue";
import MainComponent from "../components/MainComponent.vue";

export default {
    name: 'HomeView',
    components: {
        HeaderComponent,
        MainComponent
    }
}
</script>
