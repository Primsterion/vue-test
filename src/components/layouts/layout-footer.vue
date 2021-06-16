<template>    
    <div class="footer col-12">
        <p>Kirill development (c) 2021</p>
    </div>
</template>
<script lang="ts">

import Vue from "vue";
import { Component } from 'vue-property-decorator'
@Component
    export default  class FooterComponent extends Vue{
        constructor() {
    super();
     //console.log("FooterComponent created");
  }
    }
</script>

<style scoped>
    .footer{
        display: flex;
        align-items: center;
        min-height: 50px;
        box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.253);
        margin-top: auto;
        background: #0d6efd;
        color: #fff;
        padding: 0 15px;
    }

    p{
        margin: 0;
    }
</style>