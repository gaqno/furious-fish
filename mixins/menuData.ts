import menuType from "~/types/menuType";

export default {
  data() {
    return {
      menuData: [
        {
          link: '/shop',
          title: 'Produtos',
          hasDropdown: false,
          megamenu: false,
        },
        {
          link: '/blog',
          title: 'Blog',
          hasDropdown: true,
          megamenu: false,
          dropdownItems: [
            { link: '/blog', title: 'Blog' },
            { link: '/blog-left-sidebar', title: 'Blog Left Sidebar' },
            { link: '/blog-no-sidebar', title: 'Blog No Sidebar' },
            { link: '/blog-2-col', title: 'Blog 2 Column' },
            { link: '/blog-2-col-mas', title: 'Blog 2 Column Masonary' },
            { link: '/blog-3-col', title: 'Blog 3 Column' },
            { link: '/blog-details', title: 'Blog Details' },
          ]
        },
        {
          link: '/shop',
          title: 'Atalhos',
          hasDropdown: true,
          megamenu: false,
          dropdownItems: [
            { link: '/wishlist', title: 'Lista de desejos' },
            { link: '/cart', title: 'Carrinho de compras' },
            { link: '/checkout', title: 'Checkout' },
            { link: '/account', title: 'Minha conta' },
            { link: '/register', title: 'Registrar' },
            { link: '/login', title: 'Login' },
            { link: '/404', title: 'Error 404' },
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