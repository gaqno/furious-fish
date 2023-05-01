<template>
  <LayoutTwo>
    <main class="box-25">
      <HomeTwoHeroSlider />
      <CategoryArea :style_2="true" />
      <TrendingProductTwo />
      <ShopBanner :style_2="true" />
      <SaleOffAreaTwo />
      <!-- <BlogArea/> -->
      <ClientBrandSlider :style_2="true" />
      <SubscribeArea :style_2="true" />
    </main>
  </LayoutTwo>
</template>
<script setup lang="ts">
import LayoutTwo from "~~/layout/LayoutTwo.vue";
import HomeTwoHeroSlider from "~~/components/hero-banner/HomeTwoHeroSlider.vue";
import CategoryArea from "~~/components/category/CategoryArea.vue";
import TrendingProductTwo from "~~/components/products/TrendingProductTwo.vue";
import ShopBanner from "~~/components/shop-banner/ShopBanner.vue";
import SaleOffAreaTwo from "~~/components/products/SaleOffAreaTwo.vue";
import BlogArea from "~~/components/blogs/BlogArea.vue";
import ClientBrandSlider from "~~/components/client-brands/ClientBrandSlider.vue";
import SubscribeArea from "~~/components/subscribe/SubscribeArea.vue";
import { getAllProducts } from "~/services/mercado-livre-api";

useHead({
  title: "PESCA FURIOSA 🎣",
});

onMounted(() => {
  getAllProducts(1361737006)
    .then((res) => {
      console.log(res);
    });
})
</script>
<style scoped></style>



