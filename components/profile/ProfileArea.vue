<template>
  <section class="profile__area pt-120 pb-50 grey-bg">
    <div class="container">
      <div class="profile__basic-inner pb-20 bg-white">
        <div class="row align-items-center">
          <div class="col-xxl-6 col-md-6">
            <div class="profile__basic d-md-flex align-items-center">
              <div class="profile__basic-thumb mr-30">
                <img :src="app.getUserIdentifier.picture" alt="">
              </div>
              <div class="profile__basic-content">
                <h3 class="profile__basic-title">
                  Bem vindo de volta, <span>{{ app.getUserIdentifier.full_name }}</span>
                </h3>
                <p>{{ state.cart_products.length }} Produtos no carrinho</p>
                <nuxt-link href="/cart">Ir para carrinho</nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-xxl-6 col-md-6">
            <div class="profile__basic-cart d-flex align-items-center justify-content-md-end">
              <div class="cart-info mr-10">
                <nuxt-link href="/cart">Ir para carrinho</nuxt-link>
              </div>
              <div class="cart-item">
                <nuxt-link href="/cart">
                  <i class="fa-regular fa-basket-shopping"></i>
                  <span class="cart-quantity">{{ state.cart_products.length }}</span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAppStore } from '~/store/app';
import { useCartStore } from '~~/store/useCart';

const app = useAppStore()
const state = useCartStore();
</script>
