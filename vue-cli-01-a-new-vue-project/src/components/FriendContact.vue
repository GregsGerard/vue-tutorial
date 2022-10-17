<template>
  <li key="id">
    <h2> {{ name }} {{ friendIsFavorite === '1' ? '(favorite)' : '' }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">{{ detailsVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsVisible">
      <li><strong>Phone: </strong> {{ phoneNumber }}</li>
      <li><strong>Email: </strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: [
  //   'id',
  //   'name',
  //   'phoneNumber',
  //   'emailAddress',
  //   'isFavorite',
  // ],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: String,
      required: false,
      default: '0',
      validator: (value) => value === '1' || value === '0',
    },
  },
  data() {
    return {
      detailsVisible: false,
      friend: {
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '0123 45567 90',
        email: 'manuel@localhostcom',
      },
      friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleFavorite() {
      this.friendIsFavorite = this.friendIsFavorite === '1' ? '0' : '1';
    },
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    }
  },
};
</script>