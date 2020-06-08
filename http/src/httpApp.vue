<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Http
                </div>
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="user.name">
                </div>
                <div class="form-group">
                    <label>Last name</label>
                    <input type="text" class="form-control" v-model="user.lastName">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <input type="text" class="form-control" v-model="node">
                <button class="btn btn-primary" @click="fetchData">Get data</button>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users"> {{ u.name }} - {{ u.email }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    name: '',
                    email: '',
                    lastName: ''
                },
                users: [],
                resources: {},
                node: 'data'
            }
        },
        methods: {
            submit() {
                // this.$http.post('data.json', this.user)
                // .then(response => {
                //     this.fetchData();
                // }, error => {
                //     console.log(error);
                // });
                // this.resource.save({}, this.user);
                this.resource.saveAlt(this.user);
            },

            fetchData() {
                // this.$http.get('data.json')
                //     .then(response => {
                //        return response.json();
                // }).then(data => {
                //     const resultArray = [];
                //     for (let key in data) {
                //         resultArray.push(data[key]);
                //     }
                //     this.users = resultArray;
                // })
                this.resource.getData({node: this.node})
                    .then(response => {
                        return response.json();
                    }).then(data => {
                    const resultArray = [];
                    for (let key in data) {
                        resultArray.push(data[key]);
                    }
                    this.users = resultArray;
                })
            }
        },
        created() {
            const customActions = {
                saveAlt: {method: 'POST', url: 'alternative.json'},
                getData: {method: 'GET'}
            };
            this.resource = this.$resource('{node}.json', {}, customActions);
        }
    }
</script>

<style scoped>

</style>
