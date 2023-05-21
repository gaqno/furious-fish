<template>
    <div class="your-order mb-30 ">
        <h3>Seu pedido</h3>
        <div class="your-order-table table-responsive">
            <table>
                <thead>
                    <tr>
                        <th class="product-name">Produto</th>
                        <th class="product-total">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, i) in state.cart_products" :key="i" class="cart_item">
                        <td class="product-name">
                            {{ item.title }} <strong class="product-quantity"> × {{ item.orderQuantity }}</strong>
                        </td>
                        <td class="product-total">
                            <span class="amount">R${{ item.price }}</span>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr class="cart-subtotal">
                        <th>Total no carrinho</th>
                        <td><span class="amount">R${{ state.totalPriceQuantity.total.toFixed(2) }}</span></td>
                    </tr>
                    <tr class="shipping">
                        <th>Frete</th>
                        <td>
                            <ul>
                                <li>
                                    <input v-model="ship_cost" :value="7.00" id="flat-rate" name="ship-cost" type="radio" />
                                    <label for="flat-rate">
                                        SEDEX: <span class="amount">$7.00</span>
                                    </label>
                                </li>
                                <li>
                                    <input v-model="ship_cost" id="free" value="free" name="ship-cost" type="radio" />
                                    <label for="free">Entrega 24 horas:</label>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr class="order-total">
                        <th>Total do pedido</th>
                        <td>
                            <strong>
                                <span class="amount">
                                    R${{ typeof ship_cost === 'number' && ship_cost > 0 ?
                                        (state.totalPriceQuantity.total + ship_cost).toFixed(2)
                                        : state.totalPriceQuantity.total.toFixed(2) }}
                                </span>
                            </strong>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '~~/store/useCart';

export default defineComponent({
    data() {
        return {
            ship_cost: 0
        }
    },
    setup() {
        const state = useCartStore()
        return { state }
    }
})
</script>
