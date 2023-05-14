<template>
  <section class="coupon-area pt-100 pb-30">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="coupon-accordion">
            <!-- ACCORDION START -->
            <h3>
              Já possui conta?
              <span @click="handleCheckoutLogin" id="showlogin">Clique aqui para logar!</span>
            </h3>
            <div v-if="checkoutLogin" id="checkout-login" class="coupon-content">
              <div class="coupon-info">
                <p class="coupon-text">
                  Tem cupom? Informe abaixo para verificar a disponibilidade!
                </p>
                <form @submit.prevent="handleSubmit">
                  <p class="form-row-first">
                    <label>Email <span class="required">*</span></label>
                    <input type="text" v-model="formValue.name_or_email" />
                  </p>
                  <p class="form-row-last">
                    <label>Senha <span class="required">*</span></label>
                    <input type="text" v-model="formValue.password" />
                  </p>
                  <p class="form-row">
                    <button class="os-btn os-btn-black" type="submit">Login</button>
                    <label>
                      <input type="checkbox" v-model="formValue.isChecked" />
                      Lembrar-se de mim
                    </label>
                  </p>
                  <p class="lost-password">
                    <nuxt-link href="/login">Esqueceu sua senha?</nuxt-link>
                  </p>
                </form>
              </div>
            </div>
            <!-- ACCORDION END -->
          </div>
        </div>
        <div class="col-md-6">
          <div class="coupon-accordion">
            <!-- ACCORDION START -->
            <h3>
              Tem cupom?
              <span @click="handleCheckoutCoupon" id="showcoupon">Escreva aqui seu cupom para verificar disponibilidade.</span>
            </h3>
            <div v-if="checkoutCoupon" id="checkout_coupon" class="coupon-checkout-content">
              <div class="coupon-info">
                <form @submit.prevent="handleCouponSubmit">
                  <p class="checkout-coupon">
                    <input v-model="couponVal" type="text" placeholder="Cupom" />
                    <button class="os-btn os-btn-black" type="submit">Aplicar cupom</button>
                  </p>
                </form>
              </div>
            </div>
            <!-- ACCORDION END -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

interface formValueType {
  name_or_email:string,
  password:string,
  isChecked:boolean
}

export default defineComponent({
  data () {
    return {
      checkoutLogin:false,
      checkoutCoupon:false,
      formValue: {
        name_or_email: "",
        password: "",
        isChecked: false,
      } as formValueType,
      couponVal:''
    }
  },
  methods:{
    handleCheckoutLogin () {
      this.checkoutLogin = !this.checkoutLogin
    },
    handleCheckoutCoupon () {
      this.checkoutCoupon = !this.checkoutCoupon
    },
    handleSubmit() {
      this.formValue = {} as formValueType;
    },
    handleCouponSubmit() {
      console.log(this.couponVal);
      this.couponVal = '';
    },
  }
})
</script>

