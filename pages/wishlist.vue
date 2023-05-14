<template>
  <layout :transparent="true">
    <breadcrumb-area title="Lista de desejos" subtitle="Lista de desejos"/>
    <wishlist-area/>
  </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "~~/layout/Layout.vue";
import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
import WishlistArea from "~~/components/cart-wishlists/WishlistArea.vue";

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    WishlistArea,
  },
  setup() {
    useHead({
      title: "Lista de desejos",
    });
  },
});
</script>
