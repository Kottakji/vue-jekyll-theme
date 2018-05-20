<template>
    <article v-bind:class="imageClass">
        <header id="main" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
            <h1 v-bind:id="title" class="title">{{ title }}</h1>
            <p class="meta">
                {{ date }}
            </p>
        </header>
        <section class="post-content">
            <slot></slot>
        </section>
        <TagList></TagList>
    </article>
</template>

<script>
    import VLink from './VLink.vue'
    import TagList from './TagList.vue'

    export default {
        components: {
            VLink,
            TagList
        },
        data() {
            return {
                title: 'title',
                date: 'date', // TODO change all
                image: '/assets/img/background/video_page.jpg',
                imageClass: 'feature-image',
            }
        },
    }
</script>