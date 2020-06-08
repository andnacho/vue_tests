<template>
    <div>
        <input type="text" v-model="text">
        <h1>Here we'll have the test</h1>
        <hr>

        <h2>{{ text | reverseText }}</h2>
        <h2>{{ text | countText }}</h2>
        <h2>{{ textInversed }} /computed</h2>
        <h2>{{ textCounted }} /computed</h2>

    </div>
</template>

<script>
    import {FilterMixins} from "./FilterMixins";

    export default {
        name: "Main",
        mixins: [FilterMixins]
    }
</script>

<style scoped>

</style>