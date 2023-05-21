<template>
  <div class="row">
    <div class="col-md-12">
      <div class="checkout-form-list">
        <label>Nome completo <span class="required">*</span></label>
        <input type="text" v-model="form.name" placeholder="Nome completo" />
      </div>
    </div>
    <div class="col-md-6">
      <div class="checkout-form-list">
        <label>Endereço de email <span class="required">*</span></label>
        <input type="email" v-model="form.email" placeholder="Seu email" />
      </div>
    </div>
    <div class="col-md-6">
      <div class="checkout-form-list">
        <label>Telefone <span class="required">*</span></label>
        <input type="text" v-model="form.phone" placeholder="Ex: 11912341234" />
      </div>
    </div>
    <div class="col-md-6">
      <div class="checkout-form-list">
        <label>Informe o CEP <span class="required">*</span></label>
        <input type="text" v-model="form.zip" />
      </div>
    </div>
    <div class="col-md-6">
      <div class="checkout-form-list">
        <label>Não sabe seu CEP? <span class="required">*</span></label>
        <button class="os-btn os-btn-black" @click="showCepFinder = !showCepFinder">
          Clique aqui
        </button>
      </div>
    </div>
    <div class="col-md-12" v-show="showCepFinder">
      <div class="checkout-form-list">
          <iframe 
            width="400" 
            height="400" 
            frameborder="0" 
            scrolling="no" 
            marginheight="0" 
            marginwidth="0"
            src="http://www.buscacep.correios.com.br/sistemas/buscacep/">
          </iframe>
      </div>
    </div>
    <div class="col-md-8">
      <div class="checkout-form-list">
        <label>Logradouro <span class="required">*</span></label>
        <input type="text" v-model="form.address" />
      </div>
    </div>
    <div class="col-md-4">
      <div class="checkout-form-list">
        <label>Número <span class="required">*</span></label>
        <input type="text" v-model="form.address_number" />
      </div>
    </div>
    <div class="col-md-12">
      <div class="checkout-form-list">
        <label>Bairro <span class="required">*</span></label>
        <input type="text" v-model="form.address2" />
      </div>
    </div>
    <div class="col-md-12">
      <div class="checkout-form-list">
        <label>Complemento <span class="required">*</span></label>
        <input v-model="form.address_complement" type="text" placeholder="Apartamento, bloco. (opcional)" />
      </div>
    </div>
    <div class="col-md-12">
      <div class="checkout-form-list create-acc">
        <input @click="handleCreateAccount" id="cbox" type="checkbox" />
        <label for="cbox">Criar conta?</label>
      </div>
      <div v-if="createAccount" id="cbox_info" class="checkout-form-list create-account">
        <p>
          Crie sua conta para seguir com o processo de compra. <br />
          <span class="required">*</span> Campos obrigatórios
        </p>
        <label>Senha <span class="required">*</span></label>
        <input v-model="form.password" type="password" placeholder="****" />
        <button @click="handleSingUp(form)" class="os-btn os-btn-black disabled mt-4" type="submit">
          Criar conta
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useClientStore } from '~/store/client';

const client = useClientStore();
const createAccount = ref(false);
const { signUp } = supabase()
const showCepFinder = ref(false)
const form = ref({
  name: '',
  email: '',
  phone: '',
  address: '',
  address2: '',
  address_number: '',
  address_complement: '',
  city: '',
  state: '',
  zip: '',
  password: '',
  data: {}
});

const handleCreateAccount = () => {
  createAccount.value = !createAccount.value;
};

const handleSingUp = async (form) => {
  const { user, session, error } = await signUp({
    email: form.email,
    name: form.name,
    location: {
      address: form.address,
      address2: form.address2,
      address_number: form.address_number,
      address_complement: form.address_complement,
      city: form.city,
      state: form.state,
      zip: form.zip,
    },
    phone: form.phone,
    password: form.password,
  }).then((response) => {
    client.$patch({
      user: response.user,
      session: response.session,
    })
    
  }).catch((error) => {
    console.log(error);
  })
}

const getZip = (cep) => {
  return new Promise((resolve, reject) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => { resolve(data) })
      .catch((error) => { reject(error) })
  })
}

watchEffect(() => {
  if (form.value.zip.length >= 7) {
    const cep = form.value.zip.replace(/\D/g, '');
    getZip(cep)
      .then((data) => {
        form.value.address = data.logradouro;
        form.value.address2 = data.bairro;
        form.value.city = data.localidade;
        form.value.state = data.uf;
      })
      .catch((error) => {
        console.log(error);
      }
      );
  }
})
</script>
