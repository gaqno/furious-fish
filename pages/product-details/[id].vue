<template>
  <layout :transparent="true">
    <breadcrumb-area :title="state.products[0].title"  :subtitle="state.products[0].category[0]"/>
    <shop-details-area :item="item"/>
  </layout>
</template> 

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "~~/layout/Layout.vue";
import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
import { useGraphQLStore } from "~~/store/useGraphQL";
import ShopDetailsArea from "~~/components/shop-details/ShopDetailsArea.vue";

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    ShopDetailsArea,
  },
  setup() {
    const state = useGraphQLStore();
    const id = useRoute().params.id;
    const item = state.products.find(p => String(p.id) === String(id))
    useHead({
      title: "Produto",
    });
    return { item, state }
  },
});
</script>
