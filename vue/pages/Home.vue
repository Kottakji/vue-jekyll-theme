<template>
    <main-layout>
        <PageWithRecentVideos
                v-bind:header-text="headerText"
                v-bind:videos-text="videosText"
                v-bind:videos="videos"
        >
            Hieronder de nieuwste muziek video’s om Chinees mee te leren. De lyrics staan zowel in het traditioneel als
            in het simplified Chinees. Daaronder staat een Nederlandse woordenlijst, waarmee je gemakkelijk Chineze
            muziek kunt leren.
        </PageWithRecentVideos>
    </main-layout>
</template>

<script>
    import MainLayout from '../layouts/Main.vue'
    import PageWithRecentVideos from '../components/PageWithRecentVideos.vue'

    export default {
        components: {
            MainLayout,
            PageWithRecentVideos,
        },
        data() {
            return {
                headerText: 'Chinees leren met Frappant Chinees <br>met het boek <br> of met muziek videos',
                videosText: 'Meest recente videos',
                videos: [
                    {title: '林俊杰《你是我的唯一》', href: '/videos/001'}
                ]
            }
        }
    }
</script>
