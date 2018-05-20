<template>
    <main-layout>
        <VideosOverview></VideosOverview>
    </main-layout>
</template>

<script>
    import MainLayout from '../layouts/Main.vue'
    import VideosOverview from "../components/VideosOverview.vue";

    export default {
        components: {
            VideosOverview,
            MainLayout,
        }
    }
</script>
