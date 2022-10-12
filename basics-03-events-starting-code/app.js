const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incrementCounter() {
      this.counter++;
    },
    decrementCounter() {
      this.counter--;
    },
  }
});

app.mount('#events');
