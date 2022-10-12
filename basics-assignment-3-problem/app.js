
const app = Vue.createApp({
    data() {
        return {
            number: 0,
            // computedResult: '',
        }
    },
    computed: {
        result() {
            const win = 37;

            if (this.number === win) {
                return win;
            }
            return (this.number < win) ? 'Not there yet' : 'Too much!'
        }
    },
    watch: {
        result() {
            console.log("Watcher Executed")
            setTimeout(() => this.number = 0, 5000);
        }
    },
    methods: {
        addNumber(number) {
            this.number += number;
        } ,
        add1() {
            this.result++;
        },
        add5() {
            this.result += 5;
        }
    }
});


app.mount('#assignment');
