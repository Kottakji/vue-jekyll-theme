<template>
    <main-layout>
        <PageWithTags
                v-bind:title="title"
                v-bind:subtitle="subtitle"
                v-bind:image-class="imageClass"
                v-bind:image="image"
                v-bind:tags="tags"
        >

            <p>Om Chinees te leren heb je goed lesmateriaal nodig.
                Er zijn genoeg boeken geschreven, die of bedoeld zijn als lesboeken, of alleen de karakters
                uitleggen, eventueel met handige hulpmiddelen.
                Met Frappant Chinees worden <strong>karakters uitgelegd</strong>, met een
                <strong>geheugensteuntje</strong> en meerdere <strong>voorbeeldzinnen</strong>.</p>

            <p>De karakters zijn in zowel <strong>traditionele en simplified</strong> Chinees.
                Ook handig dus voor studenten die interesse hebben om naar bijvoorbeeld Taiwan te gaan.</p>

            <p><a href="/shop/">Koop hier het boek voor €18.00</a></p>

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
                title: 'Het boek',
                subtitle: '',
                imageClass: 'feature-image',
                image: '/assets/img/background/chinese_muur.jpg',
                tags: [
                    'Boek',
                    'Chinees',
                    'Mandarijn',
                    'Simplified',
                    'Traditioneel',
                ]
            }
        }
    }
</script>
