<template>
  <layout :transparent="true">
    <breadcrumb-area title="Conta" subtitle="Conta"/>
    <profile-area/>
    <profile-menu-area/>
  </layout>
</template>

<script lang="ts" setup>
import Layout from "~~/layout/Layout.vue";
import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
import ProfileArea from "~~/components/profile/ProfileArea.vue";
import ProfileMenuArea from "~~/components/profile/ProfileMenuArea.vue";

useHead({ title: "Conta" });
</script>
