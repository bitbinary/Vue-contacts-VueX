<template>
  <div class="container">
    <table class="table">
      <TableHead />
      <tbody>
        <tr v-for="user in users.slice(0, 4)" v-bind:key="user.id">
          <Contact :user="user" :editable="editable" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Contact from './Contact.vue';
import TableHead from './TableHead.vue';
export default {
  components: { Contact, TableHead },
  name: 'ContactList',
  props: {
    users: {
      type: Array,
    },
    editable: {
      type: Boolean,
    },
  },
};
</script>
