<template>
    <div class="container">
        <Navbar
                v-bind:avatar="avatar"
                v-bind:title="title"
                v-bind:links="links"
        ></Navbar>
        <slot></slot>
    </div>
</template>

<script>
    import Navbar from '../components/Navbar.vue'

    export default {
        components: {
            Navbar,
        },
        data() {
            return {
                avatar: '/assets/img/logo.png', // TODO
                title: 'Frappant Chinees', // TODO
                links: [
                    {title: 'Over mij', href: '/about'},
                    {title: 'Het boek', href: '/book'},
                    {title: 'Leren met muziek videos', href: '/movie-videos'},
                    {title: 'Winkel', href: '/shop'},
                ],
            }
        }
    }
</script>
