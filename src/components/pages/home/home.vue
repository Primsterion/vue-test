<template>
  <layout> 
    <table-component :data="users" :headers="tableHeaders" :perPage="10" :showSearch="true" searchBy="name, status" @onEdit="goToEditUserPage" @onRemove="removeUser"/>
  </layout>
</template>

<script lang="ts">

import Vue from "vue";
import { Component } from "vue-property-decorator";
import TableComponent from "../../Table/Table.vue";

@Component({
  components: {
    TableComponent
  }
})
export default class PageHomeComponent extends Vue {

  users: Array<Object> = [];

  tableHeaders = [
    {
      title: 'Id',
      key: 'id'
    },
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Position',
      key: 'status'
    },
    {
      title: 'Phone',
      key: 'phone'
    }
  ]
  
  constructor() {
    super();    
  }


  created() { 
    this.$mainStore.usersEvent.on(this.updateUsers);
  }

  mounted() {
    this.users = this.$mainStore.users;
  }

  beforeDestroy(){
    this.$mainStore.usersEvent.removeListener(this.updateUsers);
  }

  goToEditUserPage(id: string){
    this.$router.push({name: 'employer', params: { id: id } });
  }

  removeUser(id: number){
    this.$mainStore.removeUser(id);
  }

  updateUsers(){
    this.users = this.$mainStore.users;
  }
  
}
</script>