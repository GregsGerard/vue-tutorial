
const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            inputTask: '',
            listShown: true,
        }
    },
    computed: {
        buttonText() {
            return this.listShown === true ? 'Hide' : 'Show';
        }
    },
    methods: {
        toggleListVisibility() {
            this.listShown = !this.listShown;
        },
        addTask() {
            if (this.inputTask.length > 0) {
                this.tasks.push({id: this.tasks.length + 1000, task: this.inputTask});
                this.inputTask = '';
            }
        },
    }
});

app.mount('#assignment');
