<template>
  <div class="modal" tabindex="-1" v-if="show">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{title}}</h5>
        <button type="button" class="btn-close" aria-label="Close" @click="onClose"></button>
      </div>
      <div class="modal-body">
        <p>{{text}}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="onClose">{{button.close}}</button>
        <button type="button" class="btn btn-danger" @click="onConfirm">{{button.submit}}</button>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Emit, Prop } from "vue-property-decorator";

@Component
export default class PopupComponent extends Vue{
    constructor(){
        super();
    }

    @Prop({type: Boolean, required: true, default: false}) show: Boolean;
    @Prop({type: String, required: true, default: 'Do you want to do this?'}) text: String;
    @Prop({type: String, required: true, default: 'Warning'}) title: String;
    @Prop({type: Object, required: true, default: {close: 'Cancel', submit: 'Ok'}}) button: Object;

    
    onClose(){
      this.$emit('close');
    }

    @Emit('confirm')
    onConfirm(){
        return true;
    }
    
}
</script>

<style scoped>
    .modal{
        display: block;
    }
</style>