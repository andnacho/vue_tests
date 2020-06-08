<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & mixins</h1>
                <p>
                    {{ text | toUppercase | to-lowercase}}
                </p>
                <hr>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">{{ fruit}}</li>
                </ul>

            </div>
            <app-list></app-list>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';
    import {fruitMixin} from './fruitMixin';

    export default {
        name: "App",
        mixins: [fruitMixin],
        data() {
            return {
                text: 'Hello there!',
            }
        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
        components: {
            'appList': List
        },
    }
</script>

<style scoped>

</style>