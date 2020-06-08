<template>
    <li class="list-group-item">
        Server #{{ serverNumber }}
    </li>
</template>

<script>
    export default {
        name: "Server",
        props: ['serverNumber']
    }

</script>

<style scoped>
    li {
        border: 1px solid blue;
    }
</style>