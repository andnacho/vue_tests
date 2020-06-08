<template>
    <div class="container">
        <headers></headers>
        <hr>
        How many server? <input type="number" :value="serverQuantity" @input="serverQuantity = $event.target.value">
        <hr>
        <servers :server-quantity="parseInt(serverQuantity)"></servers>
        <hr>
        <footer-server></footer-server>
        <div>
            <h2>Categories</h2>
            <div style="float:left" v-for="itemCategorie in itemCategories">
                <p>Name: {{ itemCategorie.name }}</p>
                <p>Descriptión: {{ itemCategorie.description }}</p>
                <p>Status: {{ itemCategorie.status }}</p>
                <p>Image: <img :src=" itemCategorie.image ?  itemCategorie.image.url : ''" alt=""></p>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "./../Headers.vue";
    import Servers from "./Servers.vue";
    import FooterServer from "./../FooterServer.vue";
    import axios from 'axios';

    export default {
        data () {
            return {
                serverQuantity: 5,
                itemCategories: {}
            }
        },
        components: {
            'headers': Header,
            'servers': Servers,
            'footerServer': FooterServer
        },
        mounted() {
            // var me = this;
            // axios({
            //     method: 'get',
            //     url: 'https://hopper.alegra.com/api/v1/item-categories',
            //     auth: {
            //         username: 'andres.castrillon@alegra.com',
            //         password: 'ea77797ddb97031a1c7a'
            //     }
            // }).then (function (response) {
            //     me.itemCategories = response.data;
            // });
        }
    }
</script>

<style scoped>

</style>