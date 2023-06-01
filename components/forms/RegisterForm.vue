<template>
  <Form :validation-schema="schema" @submit="onSubmit">
    <div class="mb-20">
      <label for="name">Primeiro nome<span>*</span></label>
      <Field name="name" id="name" type="text" />
      <ErrorMessage name="name" class="text-danger" />
    </div>
    
    <div class="mb-20">
      <label for="name">Último nome<span>*</span></label>
      <Field name="last_name" id="last_name" type="text" />
    </div>

    <div class="mb-20">
      <label for="email-id">Email <span>*</span></label>
      <Field name="email" id="email-id" type="text" />
      <ErrorMessage name="email" class="text-danger" />
    </div>

    <div class="mb-20">
      <label for="pass">Senha <span>*</span></label>
      <Field name="password" id="pass" type="password" />
      <ErrorMessage name="password" class="text-danger" />
    </div>

    <div class="mb-20">
      <label for="pass">Telefone <span>*</span></label>
      <Field name="password" id="phone" type="password" placeholder="Ex: (11)943215678" />
    </div>

    <div class="mt-10"></div>
    <button @click.prevent="signUp(schema.default)" type="submit" class="os-btn w-100">CADASTRAR</button>
    <div class="or-divide"><span>ou</span></div>
    <div class="d-flex gap-2">
      <div class="fb-login-btn">
        <button @click="signInWithFacebook" class="fb-login os-btn os-btn-black ">
          <Icon name="carbon:logo-facebook" size="2em"/>
          Entrar com Facebook
        </button>
      </div>
      <div class="google-login-btn">
        <button @click.prevent="signInWithGoogle" class="fb-login os-btn os-btn-black ">
          <Icon name="carbon:logo-google" size="2em" />
          Entrar com Google
        </button>
      </div>
    </div>
    <div class="mt-25"></div>
    <p class="mb-0">Já possuí uma conta? <nuxt-link href="/login">Entre agora!</nuxt-link></p>
    <nuxt-link href="/login" class="os-btn os-btn-black w-100">Entrar</nuxt-link>
  </Form>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";

const { signInWithFacebook, signInWithGoogle, signUp } = supabase()
const schema = yup.object({
  name: yup.string().required().label("Nome"),
  last_name: yup.string().required().label("Último nome"),
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(6).label("Password"),
  phone: yup.string().required().label("Telefone"),
});

const onSubmit = (values: object, { resetForm }: { resetForm: () => void }) => {
  alert(JSON.stringify(values, null, 2));
  console.log(JSON.stringify(values, null, 2))
  resetForm()
}


</script>

