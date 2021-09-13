<article>
    <h1>Laravel Vue Datatable</h1>
    <p>A Vuejs datatable with search and pagination component for Laravel paginators that works with almost all frameworks.</p>
    <h1> Requirements </h1>
    <ul>
        <li>Vuejs 2.x +</li>
        <li>Laravel 5.x +</li>
    </ul>
    <h1>Install</h1>
    
        npm install lara-vue-datatable
<h1> Usage</h1>

        import {DataTable, TableLength, Pagination, Search} from "lara-vue-datatable";

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

            export default {
                components: {
                    TableLength,
                    Pagination,
                    SandeshVueTable,
                    Search
                },
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
                          axios.get('your api url?per_page='+this.tableLength.default+'&page='
                              +this.users.current_page+'&searchText='+search)
                              .then((response) => {
                                  this.users = response.data;
                              });
                      },
                }
            }

<h1>Development</h1>
<p>To work on the library locally, run the following command:</p>

        npm run dev
<p>This will boot development server with Test component </p>

<h1>Credits</h1>
<p>Laravel Vue Pagination is created by Sandesh Satyal from NeoDigital Nepal Pvt Ltd. Released under the MIT license.</p>

<h1> Keywords </h1>
<p>Vue Vuejs component laravel datatable pagination</p>
</article>