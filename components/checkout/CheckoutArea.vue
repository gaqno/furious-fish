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
            <div id="checkout-wrapper"></div>
            <div id="cardPaymentBrick_container"></div>
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

await loadMercadoPago();
const mp = new MercadoPago('APP_USR-1581d397-fde9-40e0-9cb3-54231679b3ea', { locale: 'pt-BR' });
const bricksBuilder = mp.bricks();

const renderCardPaymentBrick = async (bricksBuilder) => {

  const settings = {
    initialization: {
      amount: 100, //value of the payment to be processed
    },
    customization: {
      visual: {
        style: {
          theme: 'bootstrap' // 'default' |'dark' | 'bootstrap' | 'flat'
        }
      }
    },
    callbacks: {
      onSubmit: (cardFormData) => {
        return new Promise((resolve, reject) => {
          fetch("/process_payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(cardFormData)
          })
            .then(resp => resp.json())
            .then((response) => {
              // get payment result
              resolve();
            })
            .catch((error) => {
              // get payment result error
              reject();
            })
        });
      },
      onReady: () => {
        // handle form ready
      },
      onError: (error) => {
        // handle error
      }
    }
  }

  const cardPaymentBrickController = await bricksBuilder.create('cardPayment', 'cardPaymentBrick_container', settings);
};

renderCardPaymentBrick(bricksBuilder);
</script>
