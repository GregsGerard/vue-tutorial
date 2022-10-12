const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm2(event) {
      alert('Submitted 2');
    },
    submitForm(event) {
      event.preventDefault();
      alert('Submitted');
    },
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
