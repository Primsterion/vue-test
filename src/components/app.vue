<template>
    <div class="app">
      <preloader :active="loading"/>
      <router-view/>
      <notifications group="main" />
      
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import 'bootstrap/dist/css/bootstrap.css'
import { Component } from "vue-property-decorator";
import Preloader from '@components/Preloader/Preloader.vue';

@Component({
  components: {
    Preloader
  }
})
export default class AppComponent extends Vue {  

  loading: boolean = false

  constructor() {
    super();
    //console.log("AppComponent created");
  }  

}
</script>

<style>
.app{
  height: 100%;
}

input.valid{
  border-color: rgb(20, 190, 20);
}

input.error{
  border-color: rgb(187, 46, 46);
}

</style>