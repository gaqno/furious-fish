<template>
  <layout :transparent="true">
    <CommonBreadcrumbArea title="Login" subtitle="Login"/>
    <LoginRegisterLoginArea/>
  </layout>
</template>

<script setup lang="ts">
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
