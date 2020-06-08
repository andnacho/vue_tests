<template>
    <div>
        <div class="row">
            <servers-container :server-quantity="serverQuantity"></servers-container>
            <server-details></server-details>
        </div>
    </div>
</template>

<script>
    import ServerDetails from "./ServerDetails.vue";
    import ServersContainer from "./ServersContainer.vue";

    export default {
        name: "Servers",
        components: {
            'serversContainer': ServersContainer,
            'serverDetails': ServerDetails
        },
        props: {
            'serverQuantity': Number
        }
    }
</script>

<style scoped>

</style>