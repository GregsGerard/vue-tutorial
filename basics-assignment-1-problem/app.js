
Vue.createApp({
    data() {
        return {
            name: "Gregory GERARD",
            age: 42,
            imgUrl: "https://storage.googleapis.com/pod_public/1300/120047.jpg",
        }
    },
    methods: {
        calculateRandomNumber() {
            return Math.random().toFixed(2);
        }
    }
}).mount('#assignment');
