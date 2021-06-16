<template>
  <div class="wrapper">
    <slot name="header">
      <layout-header/>
    </slot>    
   
    <div id="content">
      <div class="container">
         <slot/>
      </div>
    </div>
    <slot name="footer">
      <layout-footer />
    </slot>    
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class LayoutComponent extends Vue {
  //name: "layout"
  constructor() {
    super();
  }
}
</script>

<style>
  html, body{
    height: 100%;
  }

  .wrapper{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  ul{
    margin: 0;
    padding: 0;
  }
  p{
    margin: 0;
  }


</style>
