<template>
     <div>
        <h1>Trade or view your portfolio</h1>
         <h6>You may save & load your data</h6>
         <h6>Click on 'Make the date' to begin a new day!</h6>
         <hr>
         <p>Your Funds: {{ funds | currency }}</p>
    </div>
</template>

<script>
    export default {
        computed: {
            funds() {
                return this.$store.getters.funds
            }
        }
    }
</script>

<style scoped>

</style>