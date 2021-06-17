<template>
    <layout>
        <div class="login-container">
            <div class="col-3 m-auto login-form">
                <h1>Sign in</h1>
                <div class="form-group mb-3">
                    <label for="">Email</label>
                    <input type="email" class="form-control" v-model="email">
                </div>
                <div class="form-group">
                    <label for="">Password</label>
                    <input :type="showPassword ? 'text' : 'password'" class="form-control" v-model="password" >
                </div>
                <div class="form-check d-flex justify-content-end mt-1">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" v-model="showPassword">
                    <label class="form-check-label" for="flexCheckChecked">
                        Show password
                    </label>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary" @click="login">Login</button>
                </div>
            </div>
        </div>
        
    </layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class PageLoginComponent extends Vue{
    constructor(){
        super();
    }

    email: string = '';
    password: string = '';
    showPassword: boolean = false;

    login(){
        if(this.email.indexOf('@') === -1 || this.password.trim() === ''){
            this.$notify({
                group: 'main',
                title: 'Error',
                type: 'error',
                text: 'Form fields values is not correct'
            })
            return;
        }



        this.$api.AuthorizationService.LoginEvent.once(res => {
            if(res.IsSuccess){
                this.$router.push({name: 'home'});
            }else{
               this.$notify({
                    group: 'main',
                    title: 'Login error',
                    type: 'error',
                    text: 'Check your credentials'
                })
            }
        })
        this.$api.AuthorizationService.Login({
            Email: this.email,
            Password: this.password
        });
    }

    
}
</script>

<style scoped>
    .login-container{
        display: flex;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 120px);
        width: 100%;
    }

    .login-form{
        background-color: #124da5;
        color: #fff;
        padding: 25px;
        border-radius: 5px;
        box-shadow: 0 0 4px 3px #0003;
    }

    .login-form h1{
        font-size: 21px;
    }

    .form-check-label{
        margin-left: 5px;
    }
</style>