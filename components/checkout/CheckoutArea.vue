<template>
  <section class="checkout-area pb-70">
    <div class="container">
      <form @submit.prevent="handleFormSubmit">
        <div class="row">
          <div class="col-lg-6">
            <div class="checkbox-form">
              <h3>Dados pessoais</h3>
              <BillingDetails />
              <!-- billing details start -->
            </div>
          </div>
          <div class="col-lg-6">
            <OrderArea />
            <h3>Pagamento</h3>
            <div id="wallet_container"></div>
            <div id="checkout-wrapper"></div>
            <div id="paymentBrick_container"></div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>


<script setup>
import { loadMercadoPago } from "@mercadopago/sdk-js";
import BillingDetails from "./BillingDetails.vue";
import OrderArea from "./OrderArea.vue";
import { useCartStore } from "~/store/useCart";
import { useAppStore } from "~/store/app";

const config = useRuntimeConfig()
await loadMercadoPago();
const mp = new MercadoPago(config.public.MP_TEST_KEY, { locale: 'pt-BR' });
const bricksBuilder = mp.bricks();
const cart = useCartStore()

const renderPaymentBrick = async (bricksBuilder) => {
  const settings = {
    initialization: {
      /*
      "amount" is the total amount to be paid by all means of payment with the exception of the Mercado Pago Account and Installment without a credit card, which have their processing value determined in the backend through the "preferenceId"
      */
      amount: useCartStore().totalPriceQuantity.total,
      preferenceId: "<PREFERENCE_ID>",
    },
    customization: {
      paymentMethods: {
        ticket: "all",
        bankTransfer: "all",
        creditCard: "all",
        debitCard: "all",
        mercadoPago: "all",
      },
    },
    callbacks: {
      onReady: () => {
        useAppStore().$patch({ loading: false })
      },
      onSubmit: ({ selectedPaymentMethod, formData }) => {
        // callback called when clicking the submit data button
        return new Promise((resolve, reject) => {
          console.log({ selectedPaymentMethod, formData })

          fetch("https://api.mercadopago.com/v1/payments", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${config.public.MP_TEST_ACCESS_TOKEN}`
            },
            body: JSON.stringify({...formData}),
          })
            .then((response) => response.json())
            .then((response) => {
              console.log({ response });
              resolve();
            })
            .catch((error) => {
              // handle error response when trying to create payment
              reject();
            });
        });
      },
      onError: (error) => {
        // callback called for all Brick error cases
        console.error(error);
      },
    },
  };
  window.paymentBrickController = await bricksBuilder.create(
    "payment",
    "paymentBrick_container",
    settings
  );
};
renderPaymentBrick(bricksBuilder);

onMounted(() => {
  useAppStore().$patch({ loading: false })
})

watchEffect(() => {
  const query = new URLSearchParams(window.location.search);
  if (query.get('success')) {
    console.log('Order placed! You will receive an email confirmation.');
  }

  if (query.get('canceled')) {
    console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
  }

})
</script>
