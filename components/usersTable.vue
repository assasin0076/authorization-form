<template>
  <div>
    <div>
      <vue-good-table
        :columns="columns"
        :rows="rows"/>
    </div>
    <v-btn @click="show">Click to see</v-btn>
    <v-btn href="/auth">Auth</v-btn>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'my-component',
  data(){
    return {
      columns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'id',
          field: 'id',
          type: 'number',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM do yy',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ],
      rows: [
        { id:1, name:"John", id: 20 },
        { id:2, name:"Jane", id: 24 },
        { id:3, name:"Susan", id: 16 },
        { id:4, name:"Chris", id: 55 },
        { id:5, name:"Dan", id: 40 },
        { id:6, name:"John", id: 20 },
      ],
    };
  },
  methods: {
    show() {
      this.$store.dispatch('usersData/getUsersData')
    },
  }
};
</script>
