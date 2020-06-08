<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server v-for="number in serverQuantity" :server-number="number"></server>
        </ul>
    </div>
</template>

<script>
    import Server from "./Server.vue";

    export default {
        name: "ServersContainer",
        data () {
            return {
                'serverDetails': [],
            }
        },
        props: {
            'serverQuantity': Number
        },
        components: {
            'server': Server,
        },
    }
</script>

<style scoped>

</style>