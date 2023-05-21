import { defineStore } from "pinia";
import { App } from "@/types/app";

export const useAppStore = defineStore({
  id: "app",
  state: (): App => {
    return {
      loading: false,
      cookiesConcent: false,
      logged: false,
      client: {
        user: {}
      },
      sidebar: {
        template: "",
        show: false,
        data: {}
      },
      darkMode: false,
      slide: {
        show: false,
        template: "",
        data: {}
      },
      toaster: {
        show: false,
        title: "",
        message: "",
        icon: "",
        type: "",
        data: {}
      },
      modal: {
        description: "",
        show: false,
        template: "",
        title: "",
        data: {}
      }
    };
  },
  getters: {
    getUser: (state) => state.client.user,
    getUserIdentifier: (state) => state.client.user.identities[0].identity_data,
  },
  actions: {
    toggleToast() {
      this.toaster.show = !this.toaster.show;
      this.toaster.title = "";
      this.toaster.message = "";
      this.toaster.icon = "";
      this.toaster.type = "";
      this.toaster.data = {};
    },
    logout() {
      this.$reset();
    }
  }
});