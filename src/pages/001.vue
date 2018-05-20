<template>
    <main-layout>
        <VideoPage>
            <!-- TODO insert things from markdown -->
        </VideoPage>
    </main-layout>
</template>

<script>
    import MainLayout from '../layouts/Main.vue'
    import VideoPage from "../components/VideoPage.vue";

    export default {
        components: {
            VideoPage,
            MainLayout,
        }
    }
</script>
