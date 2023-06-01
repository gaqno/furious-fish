<template>
  <section
    :class="`extra__info transition-3 ${showSidebar ? 'info-opened' : ''}`"
  >
    <div class="extra__info-inner">
      <div class="extra__info-close text-end" @click="showSidebar = false">
        <a
          @click.prevent="showSidebar = false"
          href="#"
          class="extra__info-close-btn"
        >
          <i class="fal fa-times"></i>
        </a>
      </div>

      <!-- side-mobile-menu start -->
      <nav class="side-mobile-menu d-block d-lg-none mm-menu">
        <ul>
          <template v-for="(menu, i) in mobile_menus" :key="i">
            <li
              v-if="menu.dropdownMenu"
              :class="`menu-item-has-children has-droupdown 
              ${activeMenu === menu.title ? 'active' : ''}`"
            >
              <a @click.prevent="handleOpenMenu(menu.title)">
               {{menu.title}}
              </a>
              <ul
                @click.prevent="showSidebar = false"
                :class="`sub-menu ${activeMenu === menu.title ? 'active' : ''}`"
              >
                <li v-for="(sub_m, index) in menu.dropdownMenu" :key="index">
                  <nuxt-link :href="`${sub_m.link}`">
                   {{sub_m.title}}
                  </nuxt-link>
                </li>
              </ul>
            </li>

            <li v-if="!menu.dropdownMenu">
              <nuxt-link :href="`${menu.link}`">{{ menu.title }}</nuxt-link>
            </li>
          </template>
        </ul>
      </nav>
      <!-- side-mobile-menu end -->
    </div>
  </section>

  <!--  body overlay  -->
  <div
    @click="showSidebar = false"
    :class="`body-overlay transition-3 ${showSidebar ? 'opened' : ''}`"
  ></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useAppStore } from "~/store/app";
import menuData from "~~/mixins/menuData";

// menu type
type MenuDataType = {
  title: string;
  link?: string;
  dropdown?: boolean;
  dropdownMenu?: {
    link: string;
    title: string;
  }[];
};

export default defineComponent({
  mixins: [menuData],
  data() {
    return {
      activeMenu: "",
      showSidebar: false,
    };
  },
  methods: {
    OpenOffcanvas() {
      this.showSidebar = true;
    },
    handleOpenMenu(navTitle: string) {
      if (navTitle === this.activeMenu) {
        this.activeMenu = "";
      } else {
        this.activeMenu = navTitle;
      }
    },
  },
  setup() {
    const mobile_menus = ref<MenuDataType[]>([
      {
        title: "Início",
        dropdown: true,
        link: "/",
      //   dropdownMenu: [
      //     { link: "/", title: "Home Style 1" },
      //     { link: "/home-2", title: "Home Style 2" },
      //     { link: "/home-3", title: "Home Style 3" },
      //     { link: "/home-4", title: "Home Style 4" },
      //     { link: "/home-5", title: "Home Style 5" },
      //     { link: "/home-6", title: "Home Style 6" },
      //     { link: "/home-7", title: "Home Style 7" },
      //   ],
      },
      {
        title: "Shop",
        dropdown: false,
        link: "/shop",
      },
      {
        title: "Atalhos",
        dropdown: true,
        dropdownMenu: [
          { link: "/wishlist", title: "Lista de desejos" },
          { link: "/cart", title: "Carrinho" },
          { link: "/compare", title: "Compare" },
          { link: "/checkout", title: "Checkout" },
          { link: "/register", title: "Registrar" },
          {
            link: useAppStore().logged === true ? '/account' : '/login',
            title: useAppStore().logged === true ? 'Minha conta' : 'Login'
          },
        ],
      },
      // {
      //   title: "Blog",
      //   dropdown: true,
      //   dropdownMenu: [
      //     { link: "/blog", title: "Blog" },
      //     { link: "/blog-left-sidebar", title: "Blog Left Sidebar" },
      //     { link: "/blog-no-sidebar", title: "Blog No Sidebar" },
      //     { link: "/blog-2-col", title: "Blog 2 Column" },
      //     { link: "/blog-3-col", title: "Blog 3 Column" },
      //     { link: "/blog-2-col-mas", title: "Blog 2 Col Masonry" },
      //     { link: "/blog-details", title: "Blog Details" },
      //   ],
      // },
      {
        title: "Contato",
        dropdown: false,
        link: "/contact",
      },
    ]);
    return { mobile_menus };
  },
});
</script>
