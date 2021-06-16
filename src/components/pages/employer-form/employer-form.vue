<template>
    <layout>
        <div class="form-group">
            <label for="">Name</label>
            <input type="text" class="form-control" :class="currentUser.status != '' ? 'valid' : 'error'" v-model="currentUser.name">
        </div>
        <div class="form-group">
            <label for="">Position</label>
            <input type="text" class="form-control" :class="currentUser.status != '' ? 'valid' : 'error'" v-model="currentUser.status">
        </div>
        <div class="form-group">
            <label for="">Phone (Example: 78999999999)</label>
            <input type="tel" class="form-control" :class="phoneValid ? 'valid' : 'error'" @input="phoneCheck" v-model="currentUser.phone">
        </div>
        <div class="buttons">
            <button type="button" class="btn btn-danger"><r-link route="home">Cancel</r-link></button>
            <button type="button" class="btn btn-primary" v-if="!id" @click="addUser">Add</button>
            <button type="button" class="btn btn-primary" v-if="id" @click="updateUser">Save</button>
        </div>
    </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from "vue-property-decorator";


@Component
export default class PageEmployerFormComponent extends Vue{
    constructor(){
        super();
    }

    currentUser: Object = {
        name: '',
        status: '',
        phone: ''
    };

    get id(){
        if(!this.$route)
            return false;
        return this.$route.params.id;
    }

    phoneValid: Boolean = false

    addUser(){
        if(this.name !== '' && this.status !== '' && this.phoneValid){
            this.$mainStore.addUsers([...this.$mainStore.users, this.currentUser]);
            this.$router.replace({name: 'home'});
            this.$notify({
                group: 'main',
                title: 'Success',
                text: 'User has been added success'
            })
        }else{
            this.$notify({
                group: 'main',
                title: 'Error',
                type: 'error',
                text: 'Please enter the correct value in all fields'
            })
        }
    }

    updateUser(){
        try {
            this.$mainStore.updateUser(this.currentUser);
            this.$notify({
                group: 'main',
                title: 'Success',
                text: 'User has been update success'
            });
            this.$router.replace({name: 'home'});
        } catch (error) {
             this.$notify({
                group: 'main',
                title: 'Error',
                type: 'error',
                text: error.message
            })
        }
    }

    phoneCheck(){
        const regExp = new RegExp(/^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/g);
        this.phoneValid = regExp.test(this.currentUser.phone) ? true : false;
    }
   
    mounted(){
        if(!this.id){
            this.currentUser =  {
                id: this.$mainStore.users.length + 1,
                name: '',
                status: '',
                phone: ''
            }
        }else{
            const users = this.$mainStore.users.filter(user => user.id === this.id);
            if(users.length > 0){
                Object.assign(this.currentUser, users[0]);
                this.phoneCheck();
            }else{
                this.$notify({
                    group: 'main',
                    title: 'Error',
                    type: 'error',
                    text: 'This user does not exist'
                })
            }
        }
    }

    
}

</script>

<style scoped>
    .buttons{
        margin-top: 10px;
        text-align: center;
    }

    button a{
        color: #fff;
        text-decoration: none;
    }
</style>