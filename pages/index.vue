<template>
  <LayoutTwo>
    <main class="box-25">
      <HomeTwoHeroSlider />
      <CategoryArea :style_2="true" />
      <TrendingProductTwo />
      <ShopBanner :style_2="true" />
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
import SaleOffAreaTwo from "~~/components/products/SaleOffAreaTwo.vue";
import BlogArea from "~~/components/blogs/BlogArea.vue";
import ClientBrandSlider from "~~/components/client-brands/ClientBrandSlider.vue";
import SubscribeArea from "~~/components/subscribe/SubscribeArea.vue";
import { getAllProducts, getProductDetails } from "~/services/mercado-livre-api";
import { useProductsStore } from "~/store/useProducts";

const products = useProductsStore()

const productsList = ref([])
useHead({
  title: "PESCA FURIOSA 🎣",
});

const fetchProducts = () => {
  return new Promise((resolve, reject) => {
    getAllProducts(1361737006)
      .then((res: any) => {
        res.data.results.map((item: any) => {
          getProductDetails(item.id)
            .then((i: any) => {
              let obj = {
                banner: false,
                banner_img: i.data.thumbnail,
                brand: 'Nike',
                category: i.data.category_id,
                colors: ["Gray", "Yellow"],
                details: {
                  details_list: [
                    "Claritas est etiam processus dynamicus.",
                    "Qui sequitur mutationem consuetudium lectorum.",
                    "Claritas est etiam processus dynamicus.",
                    "Qui sequitur mutationem consuetudium lectorum.",
                    "Claritas est etiam processus dynamicus.",
                    "Qui sequitur mutationem consuetudium lectorum."
                  ],
                  details_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
                  details_text_2: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release."
                },
                dimentsion: "62 x 56 x 12",
                id: i.data.id,
                img: i.data.thumbnail,
                old_price: i.data.original_price,
                parentCategory: "Varas de Pesca",
                price: i.data.price,
                quantity: i.data.available_quantity,
                rating: 4,
                related_images: i.data.pictures.map((i: any) => i.url),
                sizes: ["S", "M", "L", "XL"],
                sm_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                thumb_img: i.data.thumbnail,
                big_img: i.data.pictures[0].url,
                title: i.data.title,
                trending: true,
                weight: 0.25,
                reviews: [{
                  children: true,
                  img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.iscaecompanhia.com.br%2Fp%2FVara-Lumis-Viper-VPC6017-6-17lb-60-180m-Carretilha-Inteirica%2F4098%2F36%2F&psig=AOvVaw0Av4aVTf1tLcHl5b6ji1px&ust=1684117589623000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNiqvIjh8_4CFQAAAAAdAAAAABAI",
                  name: "Geralt of Rivia",
                  rating: 5,
                  time: "2 days ago",
                }]
              }
              productsList.value.push(obj as never)
              products.setProducts(productsList.value)
              resolve(true)
            })
            .catch((err: any) => {
              console.log(err)
              reject(err)
            })
        })
      })
      .catch((err: any) => {
        console.log(err)
        reject(err)
      })
  })
}

onMounted(() => {
  fetchProducts()
    .then(() => {
      console.log('done')
    })
    .catch((err) => {
      console.log(err)
    })
})
</script>
<style scoped></style>



