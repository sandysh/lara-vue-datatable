<template>
  <div class="container mt-5">
    <table class="table" :class="styles">
    <thead>
      <tr>
        <th  v-for="(column,index) in columns" :key="index" scope="col">{{column}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(data,index) in dataList.data" :key="index">
        <td v-for="(col,indx) in dbcolumns" :key="indx">{{data[dbcolumns[indx]]}}</td>
        <td>
          <button @click="transmitEvent(button.action, data)" v-for="(button,ind) in buttons" :key="ind" :class="button.class">
            {{button.label}}
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>

export default {
  props: {
    columns: {
      type: Array,
      default: () =>[]
    },
    dataList: {
      type: [Array, Object],
      default: () =>[]
    },
    styles: {
      type: String,
    },

    dbcolumns: {
      type: Array,
      default: () => []
    },
    options: {
      type: Object,
    },
    buttons: {
      type: Array
    }
  
  },

  methods: {
    transmitEvent(action, data){
        this.$parent.$emit('action', {action: action, data: data});
    },

     has(col) {
       return this.dataList.forEach((i)=>{
         let keys = Object.keys(i);
         console.log(keys);
          return keys.find((key)=>{
              return key === col;
          });
       });
     }
  },

};
</script>