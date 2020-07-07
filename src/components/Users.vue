<template>
  <div v-if="error">{{ error }}</div>
  <AsyncUser v-else v-for="user in users.data" :key="user.id" :user="user" />
</template>

<script>
import { defineAsyncComponent } from "vue";
import Loading from "./Loading.vue";
import useUsers from "../modules/users";

const AsyncUser = defineAsyncComponent({
  loader: () => import("./User.vue" /* webpackChunkName: "user" */),
  loadingComponent: Loading,
  delay: 200,
  suspensible: false
});

export default {
  name: "Users",

  async setup() {
    const { users, error, load } = useUsers();

    await load();

    return { users, error };
  },
  components: {
    AsyncUser
  }
};
</script>

<style>
</style>