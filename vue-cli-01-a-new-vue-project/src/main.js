import { createApp } from 'vue';
import App from './App.vue';
import FriendContact from "@/components/FriendContact";
import AddFriend from "@/components/NewFriend";

const app = createApp(App);

app.component('friend-contact', FriendContact);
app.component('add-friend', AddFriend);
app.mount('#app');
