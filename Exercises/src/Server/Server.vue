<template>
    <li class="list-group-item">
        Server #{{ serverNumber }}
        <button @click="uploadInfo">Show detail</button>
    </li>
</template>

<script>
    import {eventBus} from "../main";

    var statuses = [
        'Normal',
        'Critical',
        'Relax'
    ];

    export default {
        name: "Server",
        props: ['serverNumber'],
        methods: {
            uploadInfo() {
                eventBus.changeServer( {
                    name: "Server #" + this.serverNumber,
                    status: statuses[Math.floor(Math.random() * (3 - 0)) + 0]
                })
            }
        }
    }

</script>

<style scoped>
    li {
        border: 1px solid blue;
    }
</style>