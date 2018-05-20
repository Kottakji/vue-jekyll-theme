<template>
    <footer>
        <div class="tag-list">
            <div class="meta" v-if="tags">Tags</div>

            <v-link class="button" v-for="(tag, key) in tagsWithHref" v-bind:href="tag.href" :key="key">
                <p><i class="fa fa-tag fa-fw"></i> {{ tag.title }}</p>
            </v-link>
        </div>
    </footer>
</template>

<script>
    import VLink from './VLink.vue'

    export default {
        props: ['tags'],
        components: {
            VLink
        },
        computed: {
            tagsWithHref: function () {
                return this.tags.map(function (item) {
                    return {title: item, href: '/tags#' + item}
                })
            }
        }
    }
</script>

