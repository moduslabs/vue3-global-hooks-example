<template>
  <div>{{ user.first_name }} {{ user.last_name }}</div>
</template>

<script>
export default {
  name: "User",
  props: {
    user: Object
  }
};
</script>

<style>
</style>