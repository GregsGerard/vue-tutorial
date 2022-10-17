<template>
  <form @submit.prevent="addFriend">
    <div>
      <label for="id">Id:</label>
      <input type="text" id="id" v-model="id"/>
    </div>
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name"/>
    </div>
    <div>
      <label for="phoneNumber">Phone Number</label>
      <input type="tel" id="phoneNumber" v-model="phoneNumber"/>
    </div>
    <div>
      <label for="emailAddress">Email</label>
      <input type="email" id="emailAddress" v-model="emailAddress"/>
    </div>
    <div>
      <label for="isFavorite">Favorite?</label>
      <input type="radio" id="isFavorite" v-model="isFavorite"/>
    </div>
    <div>
      <button>Add Friend</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: {
    'add-friend': function (id, name, phoneNumber, emailAddress, isFavorite) {
      // eslint-disable-next-line no-constant-condition
      if (id && name && phoneNumber && emailAddress && (isFavorite || true)) {
        return true;
      }
      return false;
    },
  },
  data() {
    return {
      id: '',
      name: '',
      phoneNumber: '',
      emailAddress: '',
      isFavorite: false,
    };
  },
  methods: {
    addFriend() {
      this.$emit('add-friend', this.id, this.name, this.phoneNumber, this.emailAddress, this.isFavorite);
      this. id = this.name = this.phoneNumber = this.emailAddress = '';
      this.isFavorite = false;
    },
  }
};
</script>