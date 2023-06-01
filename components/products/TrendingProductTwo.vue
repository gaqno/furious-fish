<template>
  <section class="product__area pt-60 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="section__title-wrapper text-center mb-55">
            <div class="section__title mb-10">
              <h2>Produtos em alta!</h2>
            </div>
            <div class="section__sub-title">
              <p>
                Produtos mais vendidos da loja
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-3 col-sm-1" v-for="product in graphql_products.products" :key="product.id">
          <product-item :item="product" />
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import ProductItem from "./ProductItem.vue";
import { useGraphQLStore } from "~/store/useGraphQL";

const graphql_products = useGraphQLStore()
</script>

