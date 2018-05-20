<template>
    <div class="home">
        <div id="main" class="call-out" v-if="headerText" v-html="headerText"></div>

        <article>
            <section class="post-content">
                <slot></slot>
            </section>

            <section class="latest-videos">
                <h5>
                    {{ videosText }}
                </h5>
                <p>
                    <a v-for="video in videos" v-bind:href="video.href">{{ video.title }}</a>
                </p>
            </section>
        </article>
    </div>
</template>

<script>
    import VLink from '../components/VLink.vue'

    export default {
        props: [
            'headerText',
            'videosText',
            'videos',
        ],
        components: {
            VLink
        },
    }
</script>

