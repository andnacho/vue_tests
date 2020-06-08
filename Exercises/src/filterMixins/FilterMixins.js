export const FilterMixins = {
    data () {
        return {
            text: ''
        }
    },
    computed: {
        textInversed () {
            return this.text.split("").reverse().join("");
        },
        textCounted () {
            if (this.text.length == 0) {
                return ''
            }
            return this.text + '(' + this.text.length + ')';
        }
    }
};