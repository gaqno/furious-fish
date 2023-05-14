<template>
  <section class="contact__area pb-100 pt-95">
    <div class="container">
        <div class="row">
            <div class="col-xl-6 col-lg-6">
                <div class="contact__info">
                    <h3>Find us here.</h3>
                    <ul class="mb-55">
                        <li v-for="(item,i) in contactInfo" :key="i" class="d-flex mb-35">
                            <div class="contact__info-icon mr-20">
                                <i :class="item.icon"></i>
                            </div>
                            <div class="contact__info-content">
                                <h6>{{item.title}}:</h6>
                                <span>{{item.subtitle}}</span>
                            </div>
                        </li>
                    </ul>
                    <p>A Pesca Furiosa é uma loja online especializada em artigos de pesca e afins, com uma ampla variedade de produtos para atender a todos os tipos de pescadores. Nossa loja é conhecida por oferecer uma experiência de compra fácil e acessível, com uma plataforma responsiva e totalmente personalizável. Todos os nossos produtos são selecionados cuidadosamente para garantir a qualidade e a satisfação de nossos clientes. Junte-se à Pesca Furiosa e descubra o mundo da pesca com excelência e estilo.</p>
                    <div class="contact__social">
                        <ul>
                            <social/>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-6">
                <div class="contact__form">
                    <h3>Entre em contato!</h3>
                    <!-- form start -->
                    <contact-form/>
                    <!-- form end -->
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactForm from '../forms/ContactForm.vue';
import Social from '../social/Social.vue';

// info type
type InfoData = {
  icon:string,
  title:string,
  subtitle:string,
}

export default defineComponent({
  components: { Social, ContactForm },
  setup () {
    const contactInfo = [
        {
          icon: 'fal fa-map-marker-alt',
          title: 'Endereço',
          subtitle: 'R. Antonio de Couros, 182 - SALA 1.'
        },
        {
          icon: 'fal fa-envelope-open-text',
          title: 'Email',
          subtitle: 'rogerio@pescafuriosa.com'
        },
        {
          icon: 'fal fa-phone-alt',
          title: 'WhatsApp',
          subtitle: '+55 11 98901-7530'
        },
    ] as InfoData[]
    return {contactInfo}
  }
})
</script>
