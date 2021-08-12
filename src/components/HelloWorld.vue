<!-- VIEW-->
<template>
  <div class="hello">
    <h1>{{ msg1 || 'Contacts' }}</h1>
    <ContactList v-bind:users="users" :editable="false" />
    <h1>{{ msg2 || 'Editable Contacts' }}</h1>
    <ContactList v-bind:users="users" :editable="true" />
    <div>{{ editedContacts }}</div>
  </div>
</template>
<!-- SCRIPTS/ LOGICS-->
<script>
import ContactList from './ContactList.vue';
import { getUsers } from '../services/userClient';
import { mapState } from 'vuex';
export default {
  name: 'HelloWorld',
  computed: {
    editedContacts() {
      return this.$store.getters.editedContactsIds;
    },
    ...mapState([
      // map this.users to store.state.count
      'users',
    ]),
  },
  props: {
    msg1: String,
    msg2: String,
  },
  components: {
    ContactList,
  },
  created: function() {
    getUsers().then((res) => {
      this.$store.commit('setUsers', res);
    });
  },
};
</script>

<!-- STYLES-->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
