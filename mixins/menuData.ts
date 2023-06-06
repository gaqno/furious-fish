import { useAppStore } from "~/store/app";
import menuType from "~/types/menuType";

export default {
  data() {
    return {
      menuData: [
        {
          link: '/',
          title: 'Home',
          hasDropdown: false,
          megamenu: false,
        },
        {
          link: '/shop',
          title: 'Categorias',
          hasDropdown: true,
          megamenu: true,
          dropdownItems: [
            {
              link: '/shop&category=furiosa', title: 'FURIOSA',
              dropdownMenu: [
                { link: '/about?a=furiosa', title: 'Sobre' },
                { link: '/shop?category=furiosa', title: 'Produtos' },
                { link: '/shop?category=furiosa&trend=true', title: 'Tendências' },
              ]
            },
            {
              link: '/shop', title: 'INSANA',
              dropdownMenu: [
                { link: '/about?a=insana', title: 'Sobre' },
                { link: '/shop?category=furiosa', title: 'Produtos' },
                { link: '/shop?category=furiosa&trend=true', title: 'Tendências' },
              ]
            },
            {
              link: '/shop', title: 'PESQUEIRO',
              dropdownMenu: [
                { link: '/about?a=pesqueiro', title: 'Sobre' },
                { link: '/shop?category=pesqueiro', title: 'Produtos' },
                { link: '/shop?category=pesqueiro&trend=true', title: 'Tendências' },
              ]
            },
          ]
        },
        // {
        //   link: '/blog',
        //   title: 'Blog',
        //   hasDropdown: true,
        //   megamenu: false,
        //   dropdownItems: [
        //     { link: '/blog', title: 'Blog' },
        //     { link: '/blog-left-sidebar', title: 'Blog Left Sidebar' },
        //     { link: '/blog-no-sidebar', title: 'Blog No Sidebar' },
        //     { link: '/blog-2-col', title: 'Blog 2 Column' },
        //     { link: '/blog-2-col-mas', title: 'Blog 2 Column Masonary' },
        //     { link: '/blog-3-col', title: 'Blog 3 Column' },
        //     { link: '/blog-details', title: 'Blog Details' },
        //   ]
        // },
        {
          link: '/shop',
          title: 'Atalhos',
          hasDropdown: true,
          megamenu: false,
          dropdownItems: [
            { link: '/wishlist', title: 'Lista de desejos' },
            { link: '/cart', title: 'Carrinho de compras' },
            { link: '/checkout', title: 'Checkout' },
            {
              link: useAppStore().logged === true ? '/account' : '/login',
              title: useAppStore().logged === true ? 'Minha conta' : 'Login'
            },
          ]
        },
        {
          link: '/contact',
          title: 'Contato',
        },
      ] as menuType[]
    }
  }
}