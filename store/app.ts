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
      toast: {
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
      this.toast.show = !this.toast.show;
      this.toast.title = "";
      this.toast.message = "";
      this.toast.icon = "";
      this.toast.type = "";
      this.toast.data = {};
    },
    logout() {
      this.$reset();
    }
  }
});