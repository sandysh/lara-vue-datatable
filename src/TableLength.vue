<template>
    <select v-model="options.default" class="record-size-dropdown" aria-label="Default select example">
        <option v-for="(opt, index) in options.lengths" :key="index" :value="opt" :selected="options.default === opt">{{opt}}</option>
    </select>
</template>

<script>
    export default {
        props:{
            options: {
                type: Object,
                default: () => {
                    return {
                        default: 10,
                        lengths: [10,20,30,40,50],
                    }
                }
            }
        },

        watch: {
            options: {
                handler(val) {
                    this.options.default = val.default;
                    this.$emit('paginate');
                }, deep: true
            }
        }
    }
</script>

<style>
  .record-size-dropdown {
    width: 10%;
    float: left;
  }
  .search-bar {
    float: right;
  }
</style>