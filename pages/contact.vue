<template>
  <layout :transparent="true">
    <breadcrumb-area title="Contato" subtitle="Contato"/>
    <contact-area/>
  </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "~~/layout/Layout.vue";
import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
import ContactArea from "~~/components/contact/ContactArea.vue";

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    ContactArea,
  },
  setup() {
    useHead({
      title: "Contato",
    });
  },
});
</script>
