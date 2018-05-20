<template>
    <header class="site-header">

        <!-- Logo and title -->
        <div class="branding">
            <v-link href="/">
                <img class="avatar" :src="avatar" alt=""/>
            </v-link>

            <h1 class="site-title">
                <v-link href="/">{{ title }}</v-link>
            </h1>
        </div>

        <!-- Toggle menu -->
        <nav class="clear">
            <a id="pull" class="toggle" href="#">
                <i class="fa fa-bars fa-lg"></i>
            </a>

            <!-- Menu -->
            <ul>

                <li v-for="link in links">
                    <v-link v-bind:href="link.href">{{link.title}}</v-link>
                </li>
            </ul>
        </nav>
    </header>

</template>

<script>
    import VLink from '../components/VLink.vue'

    export default {
        props: [
            'avatar',
            'title',
            'links',
        ],
        components: {
            VLink
        },
    }
</script>

