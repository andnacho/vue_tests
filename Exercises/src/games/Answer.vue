<template>
    <div class="alert alert-success text-center">
        <h1>That's Correct</h1>
        <hr>
        <button class="btn btn-primary" @click="onNextQuestion">Siguiente pregunta</button>
    </div>
</template>

<script>
    export default {
        name: "Answer",
        methods: {
            onNextQuestion() {
                this.$emit('confirmed');
            }
        }
    }
</script>

<style scoped>

</style>