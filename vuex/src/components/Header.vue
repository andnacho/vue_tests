<template>
    <div>
        <nav class="navbar navbar-inverse">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Stock Trace</router-link>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav nav mr-auto">
                    <router-link to="/portfolio" class="nav-item" active-class="active" tag="li"><a class="nav-link">Portfolio</a></router-link>
                    <router-link to="/stocks" class="nav-item" active-class="active" tag="li"><a class="nav-link">Stocks</a></router-link>
                    <strong class="navbar-text navbar-right">Funds: {{ funds | currency}}</strong>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li class="nav-item">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" @click="endDay">
                            Make the date
                        </a>
                    </li>

                    <li role="presentation"
                            class="dropdown"
                            :class="{open: isDropdownOpen}"
                            @click="isDropdownOpen = !isDropdownOpen">

                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                            Save & Load <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" @click="saveData">Save Data</a></li>
                            <li><a class="dropdown-item" href="#" @click="loadData">Load Data</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        data () {
            return {
                isDropdownOpen: false
            }
        },
        name: "Header",
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        },
        methods: {
            ...mapActions({
                randomizeStocks: 'randomizeStocks',
                fetchData: 'loadData'
            }),
            endDay() {
                this.randomizeStocks();
            },
            saveData() {
                const data = {
                    funds: this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.stocks
                };

                this.$http.put('data.json', data);
            },
            loadData() {
                this.fetchData();
            }
        }
    }
</script>

<style scoped>

</style>