import { reactive, toRefs } from "vue";

const state = reactive({
  error: null,
  users: null,
  loaded: false,
  loading: false,
});

export default function useUsers() {
  const load = async () => {
    if (!state.loaded) {
      try {
        const usersResponse = await fetch(
          "https://reqres.in/api/users?delay=2"
        );
        state.users = await usersResponse.json();
      } catch (e) {
        state.error = e;
      }
    }
  };

  return { ...toRefs(state), load };
}
