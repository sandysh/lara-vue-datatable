<template>
  <input type="text" @keyup="$emit('get-users', $event.target.value)">
</template>

<script>
  export default {
    data() {
      return {
        searchInput: '',
      }
    }
  }
</script>