import CategoryType from "~/types/categoryType";
import cate_img_1 from "~/assets/img/shop/banner/banner-sm-6.png";
import cate_img_2 from "~/assets/img/shop/banner/banner-sm-7.png";
import cate_img_3 from "~/assets/img/shop/banner/banner-sm-8.png";
import cate_img_4 from "~/assets/img/shop/banner/02/banner-1.webp";
import cate_img_5 from "~/assets/img/shop/banner/02/banner-2.webp";
import cate_img_6 from "~/assets/img/shop/banner/02/banner-3.webp";

export default {
  data() {
    return {
      categoryData:[
        {
          id: 1,
          img: cate_img_1,
          parentTitle: "Varas & Carretilhas",
          children:['Varas','Pesca', 'Carretilhas']
        },
        {
          id: 2,
          img: cate_img_2,
          parentTitle: "Roupas & Acessórios",
          children:['Roupas','Acessórios']
        },
        {
          id: 3,
          img: cate_img_3,
          parentTitle: "Iscas & Utencílios",
          children:['Iscas','Utencílios']
        },
        {
          id: 4,
          img: cate_img_4, 
          parentTitle: "Roupas Masculinas",
          children:['Todos', 'Camisetas', 'Calças', 'Bermudas', 'Acessórios'],
          smDesc:"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum."
        },
        {
          id: 5,
          img: cate_img_5, 
          parentTitle: "Roupas Femininas",
          children:['Todos', 'Camisetas', 'Calças', 'Bermudas', 'Acessórios'],
          smDesc:"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum."
        },
      ] as CategoryType []
    }
  },
}