<template>
  <section class="related__product pb-60">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="section__title-wrapper text-center mb-55">
            <div class="section__title mb-10">
              <h2>Produtos relacionados</h2>
            </div>
            <div class="section__sub-title">
              <p>
                Seleção de produtos relacionados com o produto atual
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(prdItem, i) in graphql_products.getRelatedProducts(item.category, item.id)"
          :key="i"
          class="col-xl-3 col-lg-3 col-md-6 col-sm-6"
        >
          <product-item :item="prdItem" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import ProductType from "~~/types/productType";
import { useGraphQLStore } from "~~/store/useGraphQL";
import ProductItem from "../products/ProductItem.vue";

const graphql_products = useGraphQLStore();
const props = defineProps({
  item: {
    type: Object as PropType<ProductType>,
    default: {},
    required: true,
  },
})

</script>
