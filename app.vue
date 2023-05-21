<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useAppStore } from './store/app';
import { useClientStore } from './store/client';
import { useCartStore } from './store/useCart';
import { graphqlQuery } from './services/mercado-livre-api'
import { QUERY_ALL_PRODUCTS } from '@/graphql/products'
import { useProductsStore } from './store/useProducts';
import { useGraphQLStore } from './store/useGraphQL';

const cart = useCartStore();
const client = useClientStore();
const app = useAppStore();
const ml_products = useProductsStore();
const graphql_products = useGraphQLStore()
onMounted(() => {
  graphqlQuery(QUERY_ALL_PRODUCTS)
    .then(res => {
      console.log(res.data.data.allProdutos)
      graphql_products.setProducts(res.data.data.allProdutos)
    });
  })
  cart.get_cart_products;
  client.started;
  let cachedUser = localStorage.getItem('sb-gtqsnnaskkxelbrnleow-auth-token')
  watchEffect(() => cachedUser && app.$patch({
    logged: true,
    client: JSON.parse(cachedUser)
  }))
</script>

