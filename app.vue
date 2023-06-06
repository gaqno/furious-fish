<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useAppStore } from './store/app';
import { useClientStore } from './store/client';
import { useCartStore } from './store/useCart';
import { graphqlQuery } from './services/datacms-api'
import { QUERY_ALL_PRODUCTS } from '@/graphql/products'
import { useGraphQLStore } from './store/useGraphQL';

const cart = useCartStore();
const client = useClientStore();
const app = useAppStore();

// verify env variables



// const ml_products = useProductsStore();
const graphql_products = useGraphQLStore()
// const productsMLList = ref([])
const productsGraphQLList = ref([])

// const fetchMercadoLivreProducts = () => {
//   return new Promise((resolve, reject) => {
//     getAllProducts(1361737006)
//       .then((res: any) => {
//         res.data.results.map((item: any) => {
//           getProductDetails(item.id)
//             .then((i: any) => {
//               let obj = {
//                 banner: false,
//                 banner_img: i.data.thumbnail,
//                 brand: 'Nike',
//                 category: i.data.category_id,
//                 colors: ["Gray", "Yellow"],
//                 details: {
//                   details_list: [
//                     "Claritas est etiam processus dynamicus.",
//                     "Qui sequitur mutationem consuetudium lectorum.",
//                     "Claritas est etiam processus dynamicus.",
//                     "Qui sequitur mutationem consuetudium lectorum.",
//                     "Claritas est etiam processus dynamicus.",
//                     "Qui sequitur mutationem consuetudium lectorum."
//                   ],
//                   details_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
//                   details_text_2: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release."
//                 },
//                 id: i.data.id,
//                 img: i.data.thumbnail,
//                 old_price: i.data.original_price,
//                 parentCategory: "Varas de Pesca",
//                 price: i.data.price,
//                 quantity: i.data.available_quantity,
//                 rating: 4,
//                 related_images: i.data.pictures.map((i: any) => i.url),
//                 sizes: ["S", "M", "L", "XL"],
//                 sm_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//                 thumb_img: i.data.thumbnail,
//                 big_img: i.data.pictures[0].url,
//                 title: i.data.title,
//                 trending: true,
//                 weight: 0.25,
//                 reviews: [{
//                   children: true,
//                   img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.iscaecompanhia.com.br%2Fp%2FVara-Lumis-Viper-VPC6017-6-17lb-60-180m-Carretilha-Inteirica%2F4098%2F36%2F&psig=AOvVaw0Av4aVTf1tLcHl5b6ji1px&ust=1684117589623000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNiqvIjh8_4CFQAAAAAdAAAAABAI",
//                   name: "Geralt of Rivia",
//                   rating: 5,
//                   time: "2 days ago",
//                 }]
//               }
//               productsMLList.value.push(obj as never)
//               ml_products.setProducts(productsMLList.value)
//               resolve(true)
//             })
//             .catch((err: any) => {
//               console.log(err)
//               reject(err)
//             })
//         })
//       })
//       .catch((err: any) => {
//         console.log(err)
//         reject(err)
//       })
//   })
// }

const fetchGraphQLProducts = () => {
  return new Promise((resolve, reject) => {
    productsGraphQLList.value = []
    graphqlQuery(
      QUERY_ALL_PRODUCTS,
      'getProducts',
      {
        filter: {
          highlight: {
            eq: true
          }
        }
      }
    )
      .then(res => {
        let obj = res.data.data.allProdutos.map((i: any) => ({
          banner: false,
          banner_img: i.productPictures[0].url,
          brand: 'Nike',
          category: i.category,
          colors: i.variants.map((i: any) => i.key === 'Cor' ? i.value : null),
          productDescription: i.productDescription,
          id: i.id,
          img: i.productPictures[0].url,
          old_price: i.oldPrice,
          parentCategory: i.category[0],
          price: i.newPrice,
          quantity: i.quantity,
          rating: 4,
          related_images: i.productPictures.map((i: any) => i.url),
          sizes: i.va,
          thumb_img: i.productPictures[0].url,
          big_img: i.productPictures[0].url,
          title: i.productName,
          trending: true,
          weight: i.variants.map((i: any) => i.key === 'Peso' ? i.value : null),
          variants: i.variants,
          highlight: i.highlight,
          reviews: i.reviews
        }))
        productsGraphQLList.value.push(obj as never)
        graphql_products.setProducts(productsGraphQLList.value[0])
        resolve(true)
      })
      .catch(err => {
        reject(err)
      })
  })
}

onMounted(() => {
  cart.get_cart_products;
  client.started;


  let cachedUser = localStorage.getItem('sb-gtqsnnaskkxelbrnleow-auth-token')
    ? localStorage.getItem('sb-gtqsnnaskkxelbrnleow-auth-token')
    : null;

  watchEffect(() => cachedUser && app.$patch({
    logged: true,
    client: JSON.parse(cachedUser)
  }))

  watchEffect(() => {
    setInterval(() => {
      fetch('/notifications')
        .then(res => res.json())
        .then(res => console.log({ notifications: res }))
        .catch(err => console.log(err))
    }, 5000)
  })

  fetchGraphQLProducts()
})
</script>

