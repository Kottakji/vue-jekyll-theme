<template>
    <header class="site-header">

        <!-- Logo and title -->
        <div class="branding">
            <v-link href="/">
                <img class="avatar" :src="siteAvatar" alt=""/>
            </v-link>

            <h1 class="site-title">
                <v-link href="/">{{ siteTitle}}</v-link>
            </h1>
        </div>

        <!-- Toggle menu -->
        <nav class="clear">
            <a id="pull" class="toggle" href="#">
                <i class="fa fa-bars fa-lg"></i>
            </a>

            <!-- Menu -->
            <ul>

                <!-- TODO optional
                    for pages, where not page.hide != true
                    And contains a page.title
                    -->
                <li v-for="link in normalLinks">
                    <v-link v-bind:href="link.href">{{link.title}}</v-link>

                </li>
                <li v-for="link in specialLinks">
                    <v-link class="clear" v-bind:href="link.href">
                        <i v-bind:class="link.icon" aria-hidden="true"></i>
                    </v-link>
                </li>
            </ul>
        </nav>
    </header>

</template>

<script>
    import VLink from '../components/VLink.vue'

    export default {
        components: {
            VLink
        },
        data() {
            return {
                siteAvatar: '/assets/img/logo.png', // TODO
                siteTitle: 'Frappant Chinees', // TODO
                normalLinks: [
                    {title: 'Over mij', href: '/about'},
                    {title: 'Het boek', href: '/book'},
                    {title: 'Leren met muziek videos', href: '/movie-videos'},
                    {title: 'Winkel', href: '/shop'},
                ],
                specialLinks: [
                    {icon: 'fa fa-search', href: '/search'},
                    {icon: 'fa fa-tags', href: '/tags'}
                ]

            }
        }
    }
</script>

