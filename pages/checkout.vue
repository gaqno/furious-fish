<template>
  <layout :transparent="true">
    <breadcrumb-area title="Checkout" subtitle="Checkout" />
    <client-only>
      <div v-if="state.cart_products.length === 0" class="text-center pt-100 pb-100">
        <h3>Sem items no carrinho</h3>
        <nuxt-link class="os-btn os-btn-black mt-15" to="/shop">
          Compre agora!
        </nuxt-link>
      </div>
      <div v-if="state.cart_products.length > 0">
        <coupon-area />
        <checkout-area />
      </div>
    </client-only>
  </layout>
</template>

<script setup lang="ts">
import Layout from "~~/layout/Layout.vue";
import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
import CouponArea from "~~/components/checkout/CouponArea.vue";
import CheckoutArea from "~~/components/checkout/CheckoutArea.vue";
import { useCartStore } from "~~/store/useCart";

const state = useCartStore();
useHead({ title: "Checkout" });
</script>
