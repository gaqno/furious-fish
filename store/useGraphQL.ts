import { defineStore } from "pinia";

export const useGraphQLStore = defineStore("GRAPHQL_PRODUCTS", {
  state: () => ({
    products: [],
    filterProducts: []
  } as any),
  actions: {
    setProducts(products: any[]) {
      this.products = products;
      this.filterProducts = products;
    }
  },
  getters: {}
});
