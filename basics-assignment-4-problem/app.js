
const app = Vue.createApp({
    data() {
        return {
            textInput: '',
            visible: true,
            styleInline: '',
        };
    },
    computed: {
        computedCss() {
            return {
                user1: this.textInput == 'user1',
                user2: this.textInput == 'user2',
                visible: this.visible,
                hidden: !this.visible,

            }
        }
    },
    methods: {
        toggleCssClass() {
            this.visible = !this.visible
        }
    }

});

app.mount('#assignment');
