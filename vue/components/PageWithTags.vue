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

        <TagList v-bind:tags="tags"></TagList>

    </article>
</template>

<script>
    import VLink from '../components/VLink.vue'
    import TagList from '../components/TagList.vue'

    export default {
        props: [
            'title',
            'subtitle',
            'imageClass',
            'image',
            'tags'
        ],
        components: {
            VLink,
            TagList
        },
    }
</script>

