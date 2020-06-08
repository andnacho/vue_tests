<template>
    <div>
        <input type="text" v-model="text">
        <h1>Here we'll have the test</h1>
        <hr>

        <h2>{{ text | reverseText }}</h2>
        <h2>{{ text | countText }}</h2>
        <h2>{{ textInversed }} /computed</h2>
        <h2>{{ textCounted }} /computed</h2>

        <hr>

        <copy-main-cmp></copy-main-cmp>

    </div>
</template>

<script>
    import CopyMain from "./CopyMain.vue";
    export default {
        name: "Main",
        data () {
            return {
                text: ''
            }
        },
        filters: {
            reverseText (value) {
                return value.split("").reverse().join("");
            }
        },
        computed: {
            textInversed () {
                return this.text.split("").reverse().join("");
            },
            textCounted () {
                if (this.text.length == 0) {
                    return ''
                }
                return this.text + '(' + this.text.length + ')';
            }
        },
        components: {
            'copyMainCmp': CopyMain
        }
    }
</script>

<style scoped>

</style>