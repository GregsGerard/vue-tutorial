const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incrementCounter(number) {
      this.counter = this.counter + number;
    },
    decrementCounter(number) {
      this.counter = this.counter - number;
    },
  }
});

app.mount('#events');
