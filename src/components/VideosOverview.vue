<template>
    <article v-bind:class="imageClass">
        <header id="main" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
            <h1 class="title">{{ title }}</h1>
            <h2 class="subtitle" v-if="subtitle">{{ subtitle }}</h2>
        </header>

        <section class="post-content" v-if="description">
            {{ description }}
        </section>

        <section>
            <div class="bootstrap-iso">
                <div class="col-md-1"></div>
                <div class="col-md-10 centered">

                    <!-- Portfolio Grid Section -->
                    <section class="portfolio"> <!-- TODO Change class to videos -->
                        <div class="row">

                            <div v-for="video in videos" class="col-sm-4 col-xs-4 portfolio-item">
                                <v-link v-bind:href="video.href" class="portfolio-link" data-keyboard="true">
                                    <div class="caption" v-bind:title="video.title">
                                        <div class="caption-content">
                                            <i class="fa fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img v-bind:src="video.img" class="" alt="">
                                </v-link>
                            </div>

                        </div>
                    </section>

                </div>
                <div class="col-md-1"></div>
            </div>
        </section>

    </article>
</template>

<script>
    import VLink from './VLink.vue'

    export default {
        components: {
            VLink
        },
        data() {
            return {
                title: 'title',
                subtitle: 'subtitle', // TODO change this all
                description: '',
                image: '/assets/img/background/taiwan_101.jpg',
                imageClass: 'feature-image',
                videos: [
                    {title: 'JJ Lin', href: '/videos/001', img: 'assets/img/artists/jj_lin_0.jpg'}
                ]
            }
        },
    }
</script>

<!--&lt;!&ndash; Bootstrap-3.3.7 isolation CSS TODO move this &ndash;&gt;-->
<!--<link rel="stylesheet" type="text/css" href="/assets/css/vendor/bootstrap-iso.min.css">-->

<!--&lt;!&ndash; Bootstrap JS TODO move this &ndash;&gt;-->
<!--<script src="/assets/js/vendor/bootstrap.min.js"></script>-->

