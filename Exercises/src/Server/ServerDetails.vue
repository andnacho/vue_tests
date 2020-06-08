<template>
    <div class="col-xs-12 col-sm-6">
        <div v-if="details != null">
            <p>Name: {{ details.name}}</p>
            <p>Status: {{ details.status}}</p>
        </div>
        <div v-else>
            <p>Server Details are currently not updated</p>
        </div>
    </div>
</template>

<script>
    import {eventBus} from "../main";

    export default {
        name: "ServerDetails",
        data() {
            return {
                details: null
            }
        },
        created() {
            eventBus.$on('serverWasChanged', (data) => {
                this.details = data;
            })
        }

    }
</script>

<style scoped>

</style>