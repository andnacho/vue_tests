export const fruitMixin = {
    data() {
        return {
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: ''
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((element) => {
                var re = new RegExp(this.filterText, 'gi');
                return element.match(re);
            } );
        }
    },
    mounted() {
        console.log(this);
    }
}