<template>
  <layout>
    <home-hero-slider />
    <category-area />
    <trending-products />
    <shop-banner/>
    <sale-off-product/>
    <client-brand-slider/>
    <blog-area/>
    <subscribe-area/>
  </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHeroSlider from "~~/components/hero-banner/HomeHeroSlider.vue";
import Layout from "~~/layout/Layout.vue";
import CategoryArea from "~~/components/category/CategoryArea.vue";
import TrendingProducts from "~~/components/products/TrendingProducts.vue";
import ShopBanner from "~~/components/shop-banner/ShopBanner.vue";
import SaleOffProduct from "~~/components/products/SaleOffProduct.vue";
import ClientBrandSlider from "~~/components/client-brands/ClientBrandSlider.vue";
import BlogArea from "~~/components/blogs/BlogArea.vue";
import SubscribeArea from "~~/components/subscribe/SubscribeArea.vue";

export default defineComponent({
  components: {
    Layout,
    HomeHeroSlider,
    CategoryArea,
    TrendingProducts,
    ShopBanner,
    SaleOffProduct,
    ClientBrandSlider,
    BlogArea,
    SubscribeArea,
  },
  setup() {
    useHead({
      title: "Loja de Pesca Online - Varas de Pesca, Iscas, Acessórios | PESCA FURIOSA",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "A loja online da PESCA FURIOSA oferece uma ampla seleção de artigos de pesca, incluindo varas, iscas e acessórios para pescaria em água doce e salgada.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "PESCA, PESCARIA, PEIXE, VARAS, VARAS DE PESCA, ISCAS DE PESCA",
        },
        {
          hid: "robots",
          name: "robots",
          content: "index, follow",
        },
        {
          hid: "author",
          name: "author",
          content: "PESCA FURIOSA",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Loja de Pesca Online - Varas de Pesca, Iscas, Acessórios | PESCA FURIOSA",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "A loja online da PESCA FURIOSA oferece uma ampla seleção de artigos de pesca, incluindo varas, iscas e acessórios para pescaria em água doce e salgada.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "/images/logo.png",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Loja de Pesca Online - Varas de Pesca, Iscas, Acessórios | PESCA FURIOSA",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "A loja online da PESCA FURIOSA oferece uma ampla seleção de artigos de pesca, incluindo varas, iscas e acessórios para pescaria em água doce e salgada.",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "/images/logo.png",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
      link: [
        {
          hid: "sitemap",
          rel: "sitemap",
          type: "application/xml",
          href: "/sitemap.xml",
        },
      ],
    });
  },
});

</script>
