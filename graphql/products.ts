export const QUERY_ALL_PRODUCTS = `
  query getProducts($filter: ProdutoModelFilter) {
    allProdutos(filter: $filter) {
      id
      category
      newPrice
      highlight
      oldPrice
      productDescription
      productName
      quantity
      variants
      reviews {
        score
        reviewComment
        clientEmail
        replyEmail
        showReply
        replyComment
      }
      productPictures {
        id
        url
        responsiveImage {
          src
        }
      }
    }
  }
`