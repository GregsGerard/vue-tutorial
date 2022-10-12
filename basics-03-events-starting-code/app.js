const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    incrementCounter(number) {
      this.counter = this.counter + number;
    },
    decrementCounter(number) {
      this.counter = this.counter - number;
    },
  }
});

app.mount('#events');
