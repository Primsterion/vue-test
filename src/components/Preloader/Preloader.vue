<template>
  <div class="preloader" :class="active ? 'active' : '' ">
      <img :src="image" alt="">
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import imageLoader from '../../images/preloader.gif';

@Component
export default class PreloaderComponent extends Vue {

    active: boolean = true;
    image: string = imageLoader;

    constructor() {
        super();
    }

    created() {
        this.$mainStore.appEvents.on(this.updateStore);
    }

    beforeDestroy() {
        this.$mainStore.appEvents.removeListener(this.updateStore);
    }

    updateStore() {
        console.log('UPDATE');
        this.active = this.$mainStore.loading;
    }

}
</script>

<style>
    .preloader{
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        display: none;
        align-items: center;
        justify-content: center;
        background-color: #fff;
    }

     .preloader.active{
         display: flex;
     }
</style>