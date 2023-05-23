<template>
  <LayoutTwo>
    <main class="box-25">
      <HomeTwoHeroSlider />
      <CategoryArea :style_2="true" />
      <TrendingProductTwo />
      <ShopBanner :style_2="true" />
      <CommonModalsCookiesModal v-if="!app.cookiesConcent" />
      <!-- <SaleOffAreaTwo /> -->
      <!-- <BlogArea/> -->
      <!-- <ClientBrandSlider :style_2="true" /> -->
      <!-- <SubscribeArea :style_2="true" /> -->
    </main>
  </LayoutTwo>
</template>
<script setup lang="ts">
import LayoutTwo from "~~/layout/LayoutTwo.vue";
import HomeTwoHeroSlider from "~~/components/hero-banner/HomeTwoHeroSlider.vue";
import CategoryArea from "~~/components/category/CategoryArea.vue";
import TrendingProductTwo from "~~/components/products/TrendingProductTwo.vue";
import ShopBanner from "~~/components/shop-banner/ShopBanner.vue";
import { useAppStore } from "~/store/app";

const app = useAppStore()

useHead({
  title: "PESCA FURIOSA 🎣",
});
</script>
<style scoped></style>



