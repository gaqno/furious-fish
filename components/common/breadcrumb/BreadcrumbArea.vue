<template>
  <section class="page__title p-relative d-flex align-items-center">
    <div class="container">
        <div class="row">
            <div class="col-xl-12">
                <div class="page__title-inner text-center">
                    <h1 class="">{{title}}</h1>
                    <div class="page__title-breadcrumb">                                 
                        <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item"><nuxt-link href="/">Home</nuxt-link></li>
                            <li class="breadcrumb-item active" aria-current="page">{{subtitle}}</li>
                        </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import bg from '~/assets/img/slider/brand_banner_1.png';

export default defineComponent({
  props:{
    title:{
      type:String,
      required:true,
    },
    subtitle:{
      type:String,
      required:true,
    },
  },
  data() {
    return {
      bg
    }
  },
})
</script>
