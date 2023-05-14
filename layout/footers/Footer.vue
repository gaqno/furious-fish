<template>
    <section :class="`footer__area footer-bg ${box_style ? 'box-m-15' : ''}`">
        <div class="footer__top pt-100 pb-60">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-12">
                        <div class="footer__widget mb-30">
                            <div class="footer__widget-title mb-25">
                                <nuxt-link href="/">
                                    <img src="~/assets/img/logo/logo.png" class="w-50" alt="logo">
                                </nuxt-link>
                            </div>
                            <div class="footer__widget-content">
                                <p>A Pesca Furiosa é uma loja online especializada em artigos de pesca e afins, com uma ampla variedade de produtos para atender a todos os tipos de pescadores. Nossa loja é conhecida por oferecer uma experiência de compra fácil e acessível, com uma plataforma responsiva e totalmente personalizável. Todos os nossos produtos são selecionados cuidadosamente para garantir a qualidade e a satisfação de nossos clientes. Junte-se à Pesca Furiosa e descubra o mundo da pesca com excelência e estilo.</p>
                                <div class="footer__contact">
                                    <ul>
                                        <li>
                                            <div class="icon">
                                                <i class="fal fa-map-marker-alt"></i>
                                            </div>
                                            <div class="text">
                                                <span>Add: Rua Antonio de Couros, 182 - Sala 1, SP - BR.</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <i class="fal fa-envelope-open-text"></i>
                                            </div>
                                            <div class="text">
                                                <span>Email: rogerio@pescafuriosa.com</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="icon">
                                                <i class="fal fa-phone-alt"></i>
                                            </div>
                                            <div class="text">
                                                <span>WhatsApp: +55 11 98901-7530</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-3 col-12">
                        <div class="footer__widget mb-30">
                            <div class="footer__widget-title">
                                <h5>information</h5>
                            </div>
                            <div class="footer__widget-content">
                                <div class="footer__links">
                                    <ul>
                                        <li><a href="#">Sobre nós</a></li>
                                        <li><a href="#">Informações sobre entrega</a></li>
                                        <li><a href="#">Termos & Condições</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-3 col-12">
                        <div class="footer__widget mb-30">
                            <div class="footer__widget-title mb-25">
                                <h5>Atendimento ao Cliente</h5>
                            </div>
                            <div class="footer__widget-content">
                                <div class="footer__links">
                                    <ul>
                                        <li><a href="#">Returns & Refunds</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__bottom">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-7">
                        <div class="footer__copyright">
                            <p>Copyright {{ new Date().getFullYear() }} © <nuxt-link href="/">Pesca Furiosa</nuxt-link> Todos os direitos reservados. <br/> Desenvolvido por <nuxt-link href="https://www.linkedin.com/in/gaqno" target="_blank">gaqno development</nuxt-link></p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-5">
                        <div class="footer__social f-right">
                            <ul>
                                <social />
                                <li><a href="#"><i class="fas fa-share-alt"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Social from '~~/components/social/Social.vue';

export default defineComponent({
    components: { Social },
    props: {
        box_style: {
            type: Boolean,
            default: false,
        }
    }
})
</script>
