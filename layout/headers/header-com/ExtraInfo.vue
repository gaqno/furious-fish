<template>
    <ul class="extra-info">
        <li>
            <div class="my-account">
                <div class="extra-title">
                    <h5>Minha conta</h5>
                </div>
                <ul>
                    <li><nuxt-link :href="app.logged ? '/account' : '/login'">{{ app.logged ? 'Perfil' : 'Login'}}</nuxt-link></li>
                    <li><nuxt-link href="/wishlist">Lista de desejos</nuxt-link></li>
                    <li><nuxt-link href="/cart">Carrinho</nuxt-link></li>
                    <li><nuxt-link href="/checkout">Checkout</nuxt-link></li>
                    <li v-if="app.logged"><nuxt-link>Logout</nuxt-link></li>
                </ul>
            </div>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { useAppStore } from '~/store/app';

const app = useAppStore()
</script>
