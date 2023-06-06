<template>
  <Form :validation-schema="schema" @submit="onSubmit">
    <div class="mb-20">
      <label for="email-id">Email <span>**</span></label>
      <Field name="email" id="email-id" type="text" v-model="form.email" />
      <ErrorMessage name="email" class="text-danger" />
    </div>

    <div class="mb-20">
      <label for="pass">Senha <span>**</span></label>
      <Field name="password" id="pass" type="password" placeholder="***" v-model="form.password"/>
      <ErrorMessage name="password" class="text-danger" />
    </div>

    <div class="login-action mb-20 fix">
      <span class="log-rem f-left">
        <input id="remember" type="checkbox" />
        <label for="remember">Lembrar-se de mim!</label>
      </span>
      <span class="forgot-login f-right">
        <a href="#">Esqueceu sua senha?</a>
      </span>
    </div>
    <button @click="onSubmit(form)" class="os-btn w-100">Entrar</button>
    <div class="or-divide">
      <span>ou</span>
    </div>

    <div class="gap-2 text-center">
      <div class="fb-login-btn">
        <button @click="signInWithFacebook" class="fb-login os-btn os-btn-black w-100">
          <Icon name="carbon:logo-facebook" size="1.5em" />
          Entrar com Facebook
        </button>
      </div>
      <div class="google-login-btn my-2">
        <button @click.prevent="signInWithGoogle" class="fb-login os-btn os-btn-black w-100">
          <Icon name="carbon:logo-google" size="1.5em" />
          Entrar com Google
        </button>
      </div>
    </div>
    <div class="or-divide">
      <span>ou</span>
    </div>
    <nuxt-link href="/register" class="os-btn os-btn-black w-100">
      Registrar
    </nuxt-link>

  </Form>
</template>

<script setup lang="ts">
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";

const { signInWithFacebook, signInWithGoogle, signIn } = supabase()
const schema = yup.object({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(6).label("Password"),
});

const form = ref({
  email: "",
  password: "",
})

schema.validate({ email: "johndoe", password: "abc123" }).catch((err) => {
  err.name; // => 'ValidationError'
  err.errors; // => ['email must be a valid email']
});

const onSubmit = (values: any) => {
  schema.validate(values)
    .then((valid) => {
      if (valid) {
        signIn(values.email, values.password)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
      } else {
        console.log("invalid");
      }
    })
};

</script>

