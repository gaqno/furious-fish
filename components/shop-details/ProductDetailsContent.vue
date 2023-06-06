<template>
  <div :class="`product__modal-content ${style_2 ? 'product__modal-content-2' : ''}`">
    <h4>
      <nuxt-link :href="`/product-details/${item.id}`">
        <span v-html="item.title"></span>
      </nuxt-link>
    </h4>
    <div class="rating rating-shop mb-15">
      <ul>
        <li><span><i class="fas fa-star"></i></span></li>
        <li><span><i class="fas fa-star"></i></span></li>
        <li><span><i class="fas fa-star"></i></span></li>
        <li><span><i class="fas fa-star"></i></span></li>
        <li><span><i class="fal fa-star"></i></span></li>
      </ul>
      <span class="rating-no ml-10">
        {{ item.reviews?.length }} avaliações
      </span>
    </div>
    <div class="product__price-2 mb-25">
      <span class="">R${{ item.price }}</span>
      <span v-if="item.old_price" class="old-price">R${{ item.old_price }}</span>
    </div>
    <div class="product__modal-form">
      <form action="#">
        <div v-for="variant in item.variants" :key="variant.key" class="product__modal-input color mb-20">
          <label>{{ variant.key }} <i class="fas fa-star-of-life"></i></label>
          <select>
            <option>- Por favor, selecione. -</option>
            <option v-for="(clr, i) in variant.value" :key="i">{{ clr }}</option>
          </select>
        </div>
        <div class="product__modal-required mb-5">
          <span>Campos obrigatórios *</span>
        </div>

        <div class="pro-quan-area d-lg-flex align-items-center">
          <div class="product-quantity-title">
            <label>Quantidade</label>
          </div>
          <div class="product-quantity">
            <div class="cart-plus-minus">
              <input type="text" v-model="state.orderQuantity">
              <div @click="state.orderQuantity > 1 ? state.orderQuantity-- : state.orderQuantity = 1"
                class="dec qtybutton">-</div>
              <div @click="state.orderQuantity++" class="inc qtybutton">+</div>
            </div>
          </div>
          <div class="pro-cart-btn ml-20 pt-4">
            <a @click.prevent="state.add_cart_product(item)" href="#" class="os-btn os-btn-black os-btn-3 mr-10">+
              Carrinho</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ProductType from '~~/types/productType';
import { useCartStore } from '~~/store/useCart';

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<ProductType>,
      default: {},
      required: true
    },
    style_2: {
      type: Boolean,
      default: false,
    }
  },

  setup() {
    const state = useCartStore()
    return { state }
  }
})
</script>
