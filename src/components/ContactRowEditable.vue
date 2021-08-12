<template lang="">
  <th>{{ user.id }}</th>
  <td>
    <input v-model="name" @change="updateName(id, name)" />
  </td>
  <td>{{ user.email }}</td>
  <td>{{ user.address.city }}</td>
</template>
<script>
export default {
  name: 'ContactRowEditable',
  data: () => {
    return {
      name: '',
      email: '',
      city: '',
      id: null,
    };
  },
  methods: {
    updateName(id, name) {
      this.$store.dispatch('updateContactDetails', {
        type: 'name',
        id: id,
        value: name,
      });
    },
  },
  props: {
    user: {
      type: Object,
    },
  },
  created: function() {
    this.id = this.user.id;
    this.name = this.user.name;
    this.email = this.user.email;
    this.city = this.user.address.city;
  },
};
</script>
<style lang=""></style>
