<template>
  <section>
    <h2>My friends</h2>
    <ul>
      <li>blublu</li>
    </ul>
  </section>
</template>
<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '0123 45567 90',
          email: 'manuel@localhostcom',
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '0987 65432 10',
          email: 'manuel@localhostcom',
        },
      ]
    };
  },
};
</script>