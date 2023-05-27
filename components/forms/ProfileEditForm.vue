<template>
  <Form :validation-schema="schema" @submit="onSubmit">
      <div class="profile__edit-input">
        <p>Name</p>
        <Field name="name" type="text" placeholder="Seu nome" />
        <ErrorMessage name="name" class="text-danger" />
      </div>
      <div class="profile__edit-input">
        <p>Email</p>
        <Field name="email" type="email" placeholder="Seu email" />
        <ErrorMessage name="email" class="text-danger" />
      </div>
      <div class="profile__edit-input">
        <p>Phone</p>
        <Field name="phone" type="text" placeholder="Seu telefone" />
        <ErrorMessage name="phone" class="text-danger" />
      </div>
      <div class="profile__edit-input">
        <p>Endereço</p>
        <Field name="address" type="text" placeholder="Seu endereço" />
        <ErrorMessage name="address" class="text-danger" />
      </div>
      <div class="profile__edit-input">
        <button type="submit" class="os-btn os-btn-black w-100">Update</button>
      </div>
  </Form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Field, Form, ErrorMessage, } from "vee-validate";
import * as yup from "yup";

export default defineComponent({
  components: { Field, Form, ErrorMessage },
  setup() {
    const schema = yup.object({
      name: yup.string().required().label("Name"),
      email: yup.string().required().email().label("Email"),
      phone: yup.string().required().min(11).label("Phone"),
      address: yup.string().required().min(3).label("Message"),
    });

    function onSubmit(values: object,{resetForm}: {resetForm: () => void}) {
      alert(JSON.stringify(values, null, 2));
      resetForm()
    }
    return { schema, onSubmit };
  },
});
</script>

