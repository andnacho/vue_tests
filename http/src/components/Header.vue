<template>
    <nav class="nav nav-pills nav-fill">
        <router-link to="/"
                     tag="a"
                     class="nav-link"
                     active-class="nav-link active"
                     exact
        >Home</router-link>

        <router-link
                to="/user"
                class="nav-link"
                tag="a"
                active-class="nav-link active">User</router-link>
    </nav>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>

</style>