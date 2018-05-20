<template>
    <footer>
        <div class="tag-list">
            <div class="meta" v-if="tags">Tags</div>

            <v-link class="button" v-for="tag in tagsWithHref" v-bind:href="tag.href">
                <p><i class="fa fa-tag fa-fw"></i> {{ tag.title }}</p>
            </v-link>
        </div>
    </footer>
</template>

<script>
    import VLink from './VLink.vue'

    export default {
        components: {
            VLink
        },
        data() {
            return {
                tags: [
                    'about' // TODO
                ]
            }
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

