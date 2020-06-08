<template>
    <div class="card" style="width: 20rem; margin: 2px auto">
      <div class="card-body">
        <h2 class="card-title">Información del usuario</h2>
        <p class="card-text">Full name: {{ userInfoData.name + ' ' + userInfoData.lastName }}</p>
        <p class="card-text">Mail: {{ userInfoData.mail }}</p>
        <p class="card-text">Password: {{ userInfoData.password }}</p>
        <p class="card-text">Store data: {{ userInfoData.isStored == 'isStored' ? true : false }}</p>
      </div>
        <button type="button" class="btn btn-primary" @click="$emit('isSubmitResponse', false)">Cancelar</button>
    </div>
</template>

<script>
    export default {
        name: "userInfo",
        props: ['userInfoData'],
        mounted() {
            console.log(this.userInfoData)
        }
    }
</script>

<style scoped>

</style>