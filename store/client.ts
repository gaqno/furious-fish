import { defineStore } from "pinia";

export const useClientStore = defineStore({
  id: "client",
  state: (): Client => {
    return {
      session: {},
      user: {}
    };
  },
  getters: {
    started: (state) => {
      return Object.keys(state.session).length > 0;
    }
  },
  actions: {
    logout() {
      this.$reset();
    }
  }
});