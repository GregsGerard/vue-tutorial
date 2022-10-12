const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullname() {
      console.log("running again");
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Gerard';
    },
  },
  methods: {
    outputFullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Gerard';
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
  }
});

app.mount('#events');
