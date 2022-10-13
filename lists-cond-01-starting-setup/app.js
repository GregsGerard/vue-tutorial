const app = Vue.createApp({
  data() {
    return {
      currentInput: '',
      goals: []
    };
  },
  methods: {
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
    addGoal() {
      console.log('this.currentInput', '>', this.currentInput, '<');
      if (this.currentInput.length != 0) {
        this.goals.push(this.currentInput);
        this.currentInput = '';
      }
    }
  }
});

app.mount('#user-goals');
