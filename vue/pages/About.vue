<template>
    <main-layout>
        <PageWithTags
                v-bind:title="title"
                v-bind:subtitle="subtitle"
                v-bind:image-class="imageClass"
                v-bind:image="image"
                v-bind:tags="tags"
        >
            <!-- Add content here -->
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
        },
        data() {
            return {
                title: 'Over mij',
                subtitle: '',
                imageClass:'feature-image',
                image: '/assets/img/background/taiwan_101.jpg',
                tags: [
                    'About'
                ]
            }
        }
    }
</script>
