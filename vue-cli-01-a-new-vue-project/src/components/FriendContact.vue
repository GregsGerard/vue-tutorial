<template>
  <li key="id">
    <h2> {{ name }} {{ isFavorite === true ? '(favorite)' : '' }}</h2>
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
      type: Boolean,
      required: false,
      default: false,
      // validator: (value) => value === '1' || value === '0',
    },
  },
  // emits: ['toggle-favorite'],
  emits: {
    'toggle-favorite': function (id) {
      if (id){
        return true;
      } else {
        console.log('Id is missing!');
        return false;
      }
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
    };
  },
  methods: {
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
      // this.friendIsFavorite = !this.friendIsFavorite;
    },
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    }
  },
};
</script>