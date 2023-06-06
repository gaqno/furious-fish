<template>
  <div>
    <pre>{{ runtimeConfig.public.MP_TEST_ACCESS_TOKEN }}</pre>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
</script>
