import { defineStore } from "pinia";
import ProductType from "~~/types/productType";

export const useGraphQLStore = defineStore("GRAPHQL_PRODUCTS", {
  state: () => ({
    products: [] as any
  }),
  actions: {
    setProducts(products: ProductType[]) {
      this.products = products;
    }
  },
  getters: {}
});
