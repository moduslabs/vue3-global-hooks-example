<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div v-if="error">Parent: {{ error }}</div>
    <Suspense>
      <template #default>
        <Users />
      </template>
      <template #fallback>
        <div>Loading your amazing vuesers...</div>
      </template>
    </Suspense>
    <SecondaryUsage />
  </div>
</template>

<script>
import Users from "./components/Users.vue";
import SecondaryUsage from "./components/SecondaryUsage.vue";
import { ref, onErrorCaptured } from "vue";

export default {
  name: "App",
  setup() {
    const error = ref(null);

    onErrorCaptured(e => {
      error.value = e;
    });

    return { error };
  },
  components: {
    Users,
    SecondaryUsage
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
