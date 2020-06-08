<template>
    <div class="container">
        <h2>Formulario para testear</h2>
        <form v-if="isFormSubmitted == false">
            <div class="form-group">
                <label for="">Name</label>
                <input type="text" class="form-control" v-model="userInfoData.name">
            </div>
            <div class="form-group">
                <label for="">LastName</label>
                <input type="text" class="form-control" v-model="userInfoData.lastName">
            </div>
            <div class="form-group">
                <label for="">Email</label>
                <input type="email" class="form-control" v-model="userInfoData.mail">
            </div>
            <div class="form-group">
                <label for="">Password</label>
                <input type="password" class="form-control" v-model="userInfoData.password">
            </div>
            <div class="form-check">
                <label class="form-check-label"> Store data?
                    <input type="radio" class="form-check-input" value="isStored" v-model="userInfoData.isStored">
                    Yes
                </label>
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" value="isNotStored" v-model="userInfoData.isStored">
                    No
                </label>
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="isFormSubmitted = true">Submit</button>
        </form>
        <data-info :user-info-data="userInfoData" v-if="isFormSubmitted" @isSubmitResponse="isFormSubmitted = false"></data-info>
    </div>
</template>

<script>
    import dataInfo from "./dataInfo.vue";
    export default {
        name: "Form",
        components: {
            dataInfo: dataInfo
        },
        data() {
            return {
                userInfoData: {
                    name: '',
                    lastName: '',
                    mail: '',
                    password: '',
                    isStored: 'isNotStored'
                },
                isFormSubmitted: false
            }
        },
    }
</script>

<style scoped>

</style>