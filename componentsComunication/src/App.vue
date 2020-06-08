<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :max-quotes="maxQuotes"></app-header>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Info: Click on a quote to delete it!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from "./quotesApp/QuoteGrid.vue";
    import NewQuote from "./quotesApp/NewQuote.vue";
    import Header from "./quotesApp/Header.vue";
    export default {
        data () {
            return {
                quotes: [
                    'Just the test for'
                ],
                maxQuotes: 10
            }
        },
        methods: {
            newQuote(quote) {
                if (this.quotes.length >= this.maxQuotes) {
                    return alert('Please delete Quotes first');
                }
                this.quotes.push(quote);
            },
            deleteQuote(index){
                this.quotes.splice(index, 1);
            }
        },
        components: {
            'appQuoteGrid': QuoteGrid,
            'appNewQuote': NewQuote,
            'appHeader': Header
        }
    }
</script>

<style scoped>

</style>
