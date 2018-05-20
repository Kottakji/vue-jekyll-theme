<template>
    <article v-bind:class="imageClass">
        <header id="main" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
            <h1 v-bind:id="title" class="title">
                {{ title }}
            </h1>

            <h2 class="subtitle" v-if="subtitle">{{ subtitle }}</h2>

        </header>
        <section class="post-content">
            <slot></slot>
        </section>

        <!-- Tag list for portfolio -->
        <TagList></TagList>

    </article>
</template>

<script>
    import VLink from '../components/VLink.vue'
    import TagList from '../components/TagList.vue'

    export default {
        components: {
            VLink,
            TagList
        },
        data() {
            return {
                title: 'Over mij', // TODO
                subtitle: '',
                imageClass:'feature-image',
                image: '/assets/img/background/taiwan_101.jpg',
            }
        }
    }
</script>

