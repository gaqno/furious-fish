<template>
    <ul class="extra-info">
        <li>
            <div class="my-account">
                <div class="extra-title">
                    <h5>Minha conta</h5>
                </div>
                <ul>
                    <li><nuxt-link href="/account">Minha conta</nuxt-link></li>
                    <li><nuxt-link href="/wishlist">Lista de desejos</nuxt-link></li>
                    <li><nuxt-link href="/cart">Carrinho</nuxt-link></li>
                    <li><nuxt-link href="/checkout">Checkout</nuxt-link></li>
                    <li><nuxt-link href="/register">Criar conta</nuxt-link></li>
                </ul>
            </div>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        return {}
    }
})
</script>
