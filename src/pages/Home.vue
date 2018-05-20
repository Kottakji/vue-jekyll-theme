<template>
    <main-layout>
        <PageWithRecentVideos>
            <p>Welcome home</p>
        </PageWithRecentVideos>
    </main-layout>
</template>

<script>
    import MainLayout from '../layouts/Main.vue'
    import PageWithRecentVideos from '../components/PageWithRecentVideos.vue'

    export default {
        components: {
            MainLayout,
            PageWithRecentVideos
        }
    }
</script>
