import menuType from "~/types/menuType";

export default {
  data() {
    return {
      menuData: [
        {
          link: '/',
          title: 'Início',
          hasDropdown: true,
          megamenu: false,
          dropdownItems: [
            { link: '/', title: 'Início' },
          ]
        },
        {
          link: '/shop',
          title: 'Shop',
          hasDropdown: true,
          megamenu: true,
          dropdownItems: [
            {
              link: '/shop',
              title: 'Shop Pages',
              dropdownMenu: [
                { link: '/shop', title: 'Standard Shop Page' },
                // { link: '/shop-right', title: 'Shop Right Sidebar' },
                // { link: '/shop-4-col', title: 'Shop 4 Column' },
                // { link: '/shop-3-col', title: 'Shop 3 Column' },
              ]
            },
            {
              link: '/shop',
              title: 'Products Pages',
              dropdownMenu: [
                { link: '/product-details', title: 'Product Details' },
              ]
            },
            {
              link: '/shop',
              title: 'Other Shop Pages',
              dropdownMenu: [
                { link: '/wishlist', title: 'Wishlist' },
                { link: '/compare', title: 'Compare' },
                { link: '/cart', title: 'Shopping Cart' },
                { link: '/checkout', title: 'Checkout' },
                { link: '/register', title: 'Register' },
                { link: '/login', title: 'Login' },
              ]
            },
          ]
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
          title: 'Pages',
          hasDropdown: true,
          megamenu: false,
          dropdownItems: [
            { link: '/wishlist', title: 'Wishlist' },
            { link: '/cart', title: 'Shopping Cart' },
            { link: '/checkout', title: 'Checkout' },
            { link: '/account', title: 'Account' },
            { link: '/register', title: 'Register' },
            { link: '/login', title: 'Login' },
            { link: '/404', title: 'Error 404' },
          ]
        },
        {
          link: '/contact',
          title: 'Contact',
        },
      ] as menuType[]
    }
  }
}