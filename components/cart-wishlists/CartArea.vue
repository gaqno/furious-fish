<template>
    <client-only>
        <section class="cart-area pt-100 pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div v-if="state.cart_products.length === 0" class='text-center'>
                            <h3>Sem produtos no carrinho</h3>
                            <nuxt-link class="os-btn os-btn-black mt-20" to="/shop">
                                Compre agora
                            </nuxt-link>
                        </div>
                        <form v-if="state.cart_products.length > 0" action="#">
                            <div class="table-content table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th class="product-thumbnail">Imagem</th>
                                            <th class="cart-product-name">Produto</th>
                                            <th class="product-price">Preço</th>
                                            <th class="product-quantity">Quantidade</th>
                                            <th class="product-subtotal">Total</th>
                                            <th class="product-remove">Remover</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <cart-item v-for="(cartItem, i) in state.cart_products" :key="i" :item="cartItem" />
                                    </tbody>
                                </table>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="coupon-all">
                                        <div class="coupon">
                                            <input required id="coupon_code" class="input-text" name="coupon_code" value=""
                                                placeholder="Cupom" type="text">
                                            <button class="os-btn os-btn-black" name="apply_coupon" type="button">
                                                Adicionar cupom
                                            </button>
                                        </div>
                                        <div class="coupon2">
                                            <button @click="state.clear_cart" class="os-btn os-btn-black" name="update_cart"
                                                type="button">Limpar carrinho</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-5 ms-auto">
                                    <div class="cart-page-total">
                                        <h2>Total do carrinho</h2>
                                        <ul class="mb-20">
                                            <li>Subtotal <span>R${{ state.totalPriceQuantity.total }}</span></li>
                                            <li>Total <span>R${{ state.totalPriceQuantity.total }}</span></li>
                                        </ul>
                                        <nuxt-link class="os-btn" href="/checkout">Ir para checkout</nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </client-only>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '~~/store/useCart';
import CartItem from './CartItem.vue';

export default defineComponent({
    components: { CartItem },
    setup() {
        const state = useCartStore();
        return { state }
    }
})
</script>