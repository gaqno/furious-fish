<template>
  <section class="footer__area grey-bg p-relative">
      <div class="footer__top pt-75 pb-60">
          <div class="container">
              <div class="row">
                  <div v-for="(item,i) in widget_data" :key="i" class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                      <div class="footer__widget mb-30">
                          <div class="footer__widget-title footer__widget-title-2 mb-25">
                              <h5>{{item.title}}</h5>
                          </div>
                          <div class="footer__widget-content">
                              <div class="footer__links footer__links-2">
                                  <ul>
                                      <li v-for="(list,i) in item.links" :key="i">
                                        <a href="#">{{list.list}}</a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="footer__bottom footer__bottom-2">
          <div class="container">
              <div class="footer__bottom-inner footer__bottom-inner-2">
                  <div class="row">
                      <div class="col-xl-6 col-lg-7">
                          <div class="footer__copyright footer__copyright-2">
                              <p>Copyright {{new Date().getFullYear()}} © <nuxt-link href="/">Outstock</nuxt-link> all rights reserved. Powered by <nuxt-link href="/">Theme_pure</nuxt-link></p>
                          </div>
                      </div>
                      <div class="col-xl-6 col-lg-5">
                          <div class="footer__social footer__social-2 f-right">
                              <ul>
                                  <social/>
                                  <li><a href="#"><i class="fas fa-share-alt"></i></a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Social from '~~/components/social/Social.vue'

export default defineComponent({
  components: { Social },
  setup () {
    const widget_data = [
          {
            id: 1,
            title: 'Minha conta',
            links: [
              {link:"#", list: 'Minha conta' },
              {link:"#", list: 'Checkout' },
              {link:"#", list: 'Carrinho de compras' },
              {link:"#", list: 'Lista de desejos' },
              {link:"#", list: 'Custom Link' },
            ]
          },
          {
            id: 2,
            title: 'Links rápidos',
            links: [
              {link:"#", list: 'Onde estamos?' },
              {link:"#", list: 'Minha conta' },
              {link:"#", list: 'Rastreio do pedido' },
              {link:"#", list: 'Guia de tamanhos' },
              {link:"#", list: 'FAQs' },
            ]
          },
          {
            id: 3,
            title: 'Informações',
            links: [
              {link:"#", list: 'Sobre nós' },
              {link:"#", list: 'Informações de entrega' },
            ]
          },
          {
            id: 4,
            title: 'Serviço ao cliente',
            links: [
              {link:"#", list: 'Sobre entrega' },
              {link:"#", list: 'Ajuda & Contato' },
              {link:"#", list: 'Retorno & Ressarciamento' },
            ]
          },
        ]
    return {widget_data}
  }
})
</script>
