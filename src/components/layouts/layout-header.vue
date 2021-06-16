<template>
  <header class="col-12">
    <nav>
      <ul>
        <li><r-link route="home">Home</r-link></li>
        <li><r-link route="other" :params="{id:23}">Other</r-link></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class HeaderComponent extends Vue {
  constructor() {
    super();
  }


  created() {
  }
  
}
</script>

<style scoped>
  header{
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.253);
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 15px;
    margin-bottom: 15px;
    background: #0d6efd;
  }

  nav{
    width: 100%;
    height: 100%;
  }

  ul{
    width: fit-content;
    height: 100%;
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0 auto;
  }

  ul li{
    height: 100%;
  }

  ul li a{
    display: flex;
    align-items: center;
    padding: 0 10px;
    height: 100%;
    color: #fff;
    transition: .2s;
  }

  ul li a:hover{
    background: #3c86f5ad;
  }
  
  ul li a.router-link-exact-active{
    background: #094db3;
  }
</style>