import { createStore } from 'vuex';

export default createStore({
  state: {
    users: [],
  },
  mutations: {
    setUsers(state, usersList) {
      state.users = [...usersList];
    },
    updateUsers(state, updatedUsers) {
      state.users = updatedUsers;
    },
  },
  getters: {
    editedContacts(state) {
      return state.users.filter((user) => user?.edited);
    },
    editedContactsIds(state, getters) {
      return getters.editedContacts.map((user) => user.id);
    },
  },
  actions: {
    updateContactDetails(context, { type, id, value }) {
      let users = context.state.users.map((user) => {
        if (user.id === id) {
          let updatedUser = { ...user };
          updatedUser[type] = value;
          updatedUser['edited'] = true;
          return updatedUser;
        } else {
          return user;
        }
      });
      context.commit('updateUsers', users);
    },
  },
  modules: {},
});
