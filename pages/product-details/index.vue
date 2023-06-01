<template>
  <layout :transparent="true">
    <breadcrumb-area :title="state.products[0].category[0]" subtitle="a" />
    <shop-details-area :item="state.products[0]" />
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
    useHead({
      title: "PESCA FURIOSA - Varas",
    });
    return { state }
  },
});
</script>
