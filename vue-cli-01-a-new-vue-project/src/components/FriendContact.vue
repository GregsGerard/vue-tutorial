<template>
  <li>
    <h2> {{ friend.name }} </h2>
    <button @click="toggleDetails">{{ detailsVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsVisible">
      <li><strong>Phone: </strong> {{ friend.phone }}</li>
      <li><strong>Email: </strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsVisible: false,
      friend:  {
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '0123 45567 90',
        email: 'manuel@localhostcom',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    }
  },
};
</script>