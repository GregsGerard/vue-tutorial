<template>
  <form @submit.prevent="addInfos">
    <ul>
      <li>
        <label for="username">Username</label>
        <input type="text" id="username" v-model="inputUserName"/>
      </li>
      <li>
        <label for="age">Age</label>
        <input type="text" id="age" v-model="inputAge"/>
      </li>
      <li>
        <button>Add Username informations</button>
      </li>
    </ul>
  </form>
</template>

<script>
export default {
  emits: ['add-infos'],
  data() {
    return {
      inputUserName: '',
      inputAge: '',
    };
  },
  methods: {
    addInfos() {
      if (this.inputUserName != '' && this.inputAge != '') {
        this.$emit('add-infos', {username: this.inputUserName, age: this.inputAge});
        this.inputUserName = this.inputAge = '';
      }
    },
  },
};
</script>
