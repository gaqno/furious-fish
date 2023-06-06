<template>
  <Layout :transparent="false">
    <LoginRegisterLoginArea />
  </Layout>
</template>

<script setup lang="ts">
import bg from '@/assets/img/logo/Logo_fundo_azul.png'
import Layout from '~/layout/Layout.vue';
useHead({
  title: 'Login',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Login'
    }
  ]
})
</script>
