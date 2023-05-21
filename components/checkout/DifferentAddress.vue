<template>
  <div class="different-address">
    <div class="ship-different-title">
      <h3>
        <label for="ship-box">Mandar para um endereço diferente?</label>
        <input @click="handleShipBox" id="ship-box" type="checkbox" />
      </h3>
    </div>
    <div v-if="shipBox" id="ship-box-info">
      <div class="row">
        <div class="col-md-6">
          <div class="checkout-form-list">
            <label>Destinatário <span class="required">*</span></label>
            <input type="text" placeholder="First Name" />
          </div>
        </div>
        <div class="col-md-12">
          <div class="checkout-form-list">
            <label>Endereço <span class="required">*</span></label>
            <input type="text" placeholder="Endereço" />
          </div>
        </div>
        <div class="col-md-12">
          <div class="checkout-form-list">
            <input
              type="text"
              placeholder="Apartamento, bloco. (opcional)"
            />
          </div>
        </div>
        <div class="col-md-12">
          <div class="checkout-form-list">
            <label>Cidade <span class="required">*</span></label>
            <input type="text" placeholder="Cidade" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="checkout-form-list">
            <label>Estado<span class="required">*</span></label>
            <input type="text" placeholder="State / County" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="checkout-form-list">
            <label>CEP <span class="required">*</span></label>
            <input type="text" placeholder="Postcode / Zip" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="checkout-form-list">
            <label>Endereço de email <span class="required">*</span></label>
            <input type="email" placeholder="Seu email" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="checkout-form-list">
            <label>Telefone <span class="required">*</span></label>
            <input type="text" placeholder="Phone number" />
          </div>
        </div>
      </div>
    </div>
    <!-- <ClientOnly> -->
    <div class="order-notes">
      <div class="checkout-form-list">
        <label>informações adicionais</label>

        <textarea
          id="checkout-mess"
          cols="30"
          rows="10"
          placeholder="Informações adicionar sobre o seu pedido, detalhes sobre a entrega, etc.."
        />
      </div>
    </div>
    <!-- </ClientOnly> -->
  </div>
</template>

<script>
import CountrySelect from "./CountrySelect.vue";

export default {
  components: { CountrySelect },
  data() {
    return {
      shipBox: false,
    };
  },
  methods: {
    handleShipBox() {
      this.shipBox = !this.shipBox;
    },
  },
};
</script>
