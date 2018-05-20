<template>
    <main-layout>
        <VideosOverview
            v-bind:title="title"
            v-bind:subtitle="subtitle"
            v-bind:image="image"
            v-bind:imageClass="imageClass"
            v-bind:videos="videos"
        >

        </VideosOverview>
    </main-layout>
</template>

<script>
    import MainLayout from '../layouts/Main.vue'
    import VideosOverview from "../components/VideosOverview.vue";

    export default {
        components: {
            VideosOverview,
            MainLayout,
        },
        data() {
            return {
                title: 'Leren met muziek videos',
                subtitle: 'Leer de lyrics van Chinese liedjes',
                image: '/assets/img/background/muziek.jpg',
                imageClass: 'feature-image',
                videos: [
                    {title: '林俊杰《你是我的唯一》', href: '/videos/001', img: 'assets/img/artists/jj_lin_0.jpg'},
                ]
            }
        },
    }
</script>
