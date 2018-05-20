<template>
    <div class="container">
        <Navbar></Navbar>
        <slot></slot>
    </div>
</template>

<script>
    import Navbar from '../components/Navbar.vue'

    export default {
        components: {
            Navbar,
        }
    }
</script>
