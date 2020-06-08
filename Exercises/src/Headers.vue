<template>
    <div>
        <div class="row">
            <div class="col-xs-12">
                <header>
                    <h1>{{ serverStatus }}</h1>
                </header>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                serverStatus: 'Server Status'
            }
        }
    }
</script>