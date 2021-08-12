<template lang="">
  <th v-bind:class="{ active: edited }">{{ user.id }}</th>
  <td v-bind:class="{ active: edited }">{{ user.name }}</td>
  <td v-bind:class="{ active: edited }">{{ user.email }}</td>
  <td v-bind:class="{ active: edited }">{{ user.address.city }}</td>
</template>
<script>
export default {
  name: 'ContactRow',
  props: {
    user: {
      type: Object,
    },
  },
  computed: {
    editedContactsIds() {
      return this.$store.getters.editedContactsIds;
    },
    edited() {
      return this.editedContactsIds.includes(this.user.id);
    },
  },
};
</script>
<style scoped>
.active {
  color: blue;
}
</style>
