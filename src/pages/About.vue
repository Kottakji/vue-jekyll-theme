<template>
    <main-layout>
        <PageWithTags>
            <p>About page</p>
        </PageWithTags>
    </main-layout>
</template>

<script>
    import MainLayout from '../layouts/Main.vue'
    import PageWithTags from '../components/PageWithTags.vue'

    export default {
        components: {
            MainLayout,
            PageWithTags
        }
    }
</script>
