
Vue.createApp({
    data() {
        return {
            inputText1: '',
            inputText2: '',
        }
    },
    methods: {
        updateOutput1(event) {
            this.inputText1 = event.target.value;
        },
        updateOutput2(event) {
            this.inputText2 = event.target.value;
        },
        showAlert() {
            alert('Button clicked');
        }
    }
}).mount('#assignment')
