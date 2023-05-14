<template>
  <div class="row">
    <div class="col-md-6">
      <div class="checkout-form-list">
        <label>Nome completo <span class="required">*</span></label>
        <input type="text" placeholder="Nome completo" />
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
          placeholder="Apartamento, bloco. (opicional)"
        />
      </div>
    </div>
    <div class="col-md-6">
      <div class="checkout-form-list">
        <label>Endereço de email <span class="required">*</span></label>
        <input type="email" placeholder="Your Email" />
      </div>
    </div>
    <div class="col-md-6">
      <div class="checkout-form-list">
        <label>Telefone <span class="required">*</span></label>
        <input type="text" placeholder="Phone number" />
      </div>
    </div>
    <div class="col-md-12">
      <div class="checkout-form-list create-acc">
        <input @click="handleCreateAccount" id="cbox" type="checkbox" />
        <label for="cbox">Criar conta?</label>
      </div>
      <div v-if="createAccount" id="cbox_info" class="checkout-form-list create-account">
        <p>
          Crie sua conta para facilitar o processo de compra. <br />
          <span class="required">*</span> Campos obrigatórios
        </p>
        <label>Senha <span class="required">*</span></label>
        <input type="password" placeholder="password" />
      </div>
    </div>
  </div>
</template>

<script>
import CountrySelect from "./CountrySelect.vue";

export default {
  components: { CountrySelect },
  data() {
    return {
      createAccount: false,
    };
  },
  methods :{
    handleCreateAccount () {
      this.createAccount = !this.createAccount
    }
  }
};
</script>
