<template lang="">
  <ContactRow :user="user" v-if="!editable" />
  <ContactRowEditable :user="user" v-if="editable" />
</template>
<script>
import ContactRow from './ContactRow.vue';
import ContactRowEditable from './ContactRowEditable.vue';
export default {
  name: 'Contact',
  components: {
    ContactRow,
    ContactRowEditable,
  },
  props: {
    user: Object,
    editable: Boolean,
  },
};
</script>
<style lang=""></style>
