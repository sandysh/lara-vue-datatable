<template>
    <div>
    <TableLength :options="tableLength" @paginate="getUsers()"/>
      <search @get-users="getUsers($event)"></search>
        <data-table
            :dataList="users"
            :columns="columns" 
            :dbcolumns="dbcolumns" 
            :styles="'table-striped table-responsive'"
            :buttons="[
                {
                  label: 'Edit',
                  class: 'btn btn-success btn-sm',
                  action: 'edit'
                },{
                  label: 'Delete',
                  class: 'btn btn-danger btn-sm',
                  action: 'delete'
                },

            ]"
        >
        </data-table>

        <Pagination :pagination="users"
                        @paginate="getUsers()"
                        :offset="4"/>
    </div>
</template>

<script>
    import DataTable from "./DataTable";
    import Pagination from "./Pagination";
    import TableLength from "./TableLength";
    import Search from "./Search";
    import axios from "axios";

    export default {
        name: "Test",
        components: {Search, DataTable, Pagination, TableLength},
        data() {
            return {
                users: {},
                tableLength: {
                    default: 3,
                    lengths: [1,2,3,4,5],
                },
                columns: ['Name','Slug','Phone','Email'],
                dbcolumns: ['name','slug','phone','email'],
            }
        },

        methods: {
          getUsers(search) {
            console.log('search data', search);
            axios.get('http://neomeet.local/api/users?per_page='+this.tableLength.default+'&page='
                +this.users.current_page+'&searchText='+search)
                .then((response) => {
                  this.users = response.data;
                });
          },
          edit(data) {
              console.log('event data', data);
              this.getUsers();
          },

          delete(data) {
              console.log('event data', data);
          }
        },

        mounted() {
            this.getUsers();
            this.$on('action', (payload) => {
              if (payload.action === 'edit') {
                this.edit(payload.data);
              }
            });
            // console.log('column',this.columns[0]);
        }
    }
</script>

<style>
    @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css');
 </style>