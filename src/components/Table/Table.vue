<template>
  <div class="table-component col-12">
    <div class="table-controls col-12">
        <div class="form-group mb-3" v-if="showSearch">
            <label for="">Search</label>
            <input type="text" class="form-control" v-model="searchValue" @input="currentPage = 1" aria-describedby="inputGroup-sizing-default">
        </div>
        <div class="table-add-record">
           <r-link route="employer"><button class="btn btn-primary" title="Add new user">Add</button></r-link>
        </div>
    </div>
    <table class="table table-striped table-bordered">
      <thead>
            <tr>
                <th v-for="(header, index) in headers" :key="index">{{ header.title }}</th>
                <th></th>
            </tr>
      </thead>
      <tbody>
            <tr v-for="data in currentData" :key="data.id">
                <td v-for="(header, index) in headers" :key="index">{{data[header.key]}}</td>
                <td>
                    <div class="table-actions">
                        <div class="table-edit-record table-action" @click="edit(data.id)" title="Edit">
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.086 2.106L10.738 4.758L4.03 11.44L1.404 8.788L8.086 2.106ZM12.74 1.456L11.57 0.285998C11.102 -0.182002 10.374 -0.182002 9.906 0.285998L8.788 1.404L11.44 4.056L12.766 2.73C13.078 2.392 13.078 1.82 12.74 1.456ZM-5.44172e-06 12.506C-0.0520055 12.714 0.155995 12.922 0.363995 12.87L3.302 12.168L0.675995 9.516L-5.44172e-06 12.506Z" fill="#4F5C9C"/>
                            </svg>
                        </div>
                        <div class="table-remove-record table-action" title="Delete" @click="removeConfirm(data.id)">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0)">
                                    <path d="M8 2V1.5C7.99955 1.10231 7.84137 0.721041 7.56017 0.439833C7.27896 0.158625 6.89769 0.000446645 6.5 0L5.5 0C5.10231 0.000446645 4.72104 0.158625 4.43983 0.439833C4.15863 0.721041 4.00045 1.10231 4 1.5V2H0.5V3H11.5V2H8ZM5 1.5C5.00015 1.36744 5.05288 1.24035 5.14661 1.14661C5.24035 1.05288 5.36744 1.00015 5.5 1H6.5C6.63256 1.00015 6.75965 1.05288 6.85339 1.14661C6.94712 1.24035 6.99985 1.36744 7 1.5V2H5V1.5Z" fill="#4F5C9C"/>
                                    <path d="M1.90419 10.6657C1.94465 11.0327 2.11918 11.3719 2.39432 11.6181C2.66946 11.8644 3.02583 12.0004 3.39506 12H8.60494C8.97419 12.0004 9.33056 11.8644 9.6057 11.6181C9.88084 11.3719 10.0554 11.0327 10.0958 10.6656L10.892 3.5H1.108L1.90419 10.6657ZM8.00175 4.45844L8.99825 4.54157L8.49825 10.5416L7.50175 10.4585L8.00175 4.45844ZM5.5 4.5H6.5V10.5H5.5V4.5ZM3.99825 4.45844L4.49825 10.4585L3.50175 10.5416L3.00175 4.54157L3.99825 4.45844Z" fill="#4F5C9C"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                    <rect width="12" height="12" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </td>
            </tr>
      </tbody>
    </table>
    <div class="pagination">
        <p @click="--currentPage" v-if="totalPages > 2">&lt;</p>
        <p :class="`pagination__page ${currentPage === pageNumber ? 'active' : ''}`" v-for="pageNumber in totalPages" :key="pageNumber" @click="currentPage = pageNumber--">
            {{ pageNumber }}
        </p>
        <p @click="++currentPage" v-if="totalPages > 2">&gt;</p>
    </div>
    <confirm title="Remove user?" text="Do you want to remove user?" :button="{close: 'Cancel', submit: 'Remove'}" :show="removeConfirmShow" @close="removeConfirmShow = false" @confirm="remove"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Emit } from "vue-property-decorator";
import Confirm from '@components/Confirm/Confirm.vue';
import User from "@pages/employer-form/models/user";

@Component({
    components: {
        Confirm
    }
})
export default class TableComponent extends Vue {
    constructor(){
        super();
    }
    
    @Prop({type: Array, required: true, default: []}) data: Array<User>;
    @Prop({type: Array, required: true, default: []}) headers: Array<Object>;
    @Prop({type: Number, required: true, default: 10}) perPage: number;
    @Prop({type: Boolean, required: false, default: false}) showSearch: Boolean;
    @Prop({type: String, required: false, default: ''}) searchBy: String;
    
    page: number = 1;
    pageUsers: Array<Object> = new Array<Object>();
    searchValue: string = '';
    removeConfirmShow: Boolean = false;
    chooseUserId: Number;

    created(){
        this.pageUsers = this.data.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage);;
    }

    get totalPages(){
        return Math.ceil(this.data.length / this.perPage);
    }

    get currentPage(){
        if(this.page >= this.totalPages){
            return this.totalPages
        }else{
            return this.page;
        }
    }

    set currentPage(val: number){
        if(val > 0 && val <= this.totalPages){
            this.page = val;
        }
    }

    get currentData(){
        const filterData = this.data.filter(row => {
            if(this.searchValue == ''){
                return true;
            }

            if(this.searchBy){
                for(const key of this.searchBy.split(',')){
                    if(row[key.trim()].toString().toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1){
                        return true;
                    }
                }
            }

            return false;
        });

        return filterData.slice((this.currentPage - 1) * this.perPage, this.currentPage  * this.perPage);
    }

    removeConfirm(id: number){
        this.removeConfirmShow = true;
        this.chooseUserId = id;
    }

    remove(){
        this.removeConfirmShow = false;
        this.$emit('onRemove', this.chooseUserId);
    }

    edit(id: number){
        this.$emit('onEdit', id);
    }

}
</script>

<style scoped>
    table{
        margin: 10px 0;
    }

    thead tr{
        background-color: #0d6efd;
        color: #fff;
    }

    .table-actions{
        display: flex;
    }

    .table-actions svg{
        width: 17px;
        height: 17px;
    }

    .table-actions svg path{
        fill: #0d6efd;
    }

    .table-remove-record svg path{
        fill: #dc3545;
    }

    .table-action{
        cursor: pointer;
        margin: 0 5px;
        transition: .2s;
    }

    .pagination{
        width: fit-content;
        border-radius: 4px;
        overflow: hidden;
    }
    .pagination p{
        padding: 10px;
        margin: 0;
        background-color: #0d6efd;
        color: #fff;
        cursor: pointer;
        transition: .2s;
    }

    .pagination p:hover{
        background-color: #3c86f5ad;
    }

     .pagination p.active{
         background: #094db3;
     }
</style>