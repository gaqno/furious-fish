export const QUERY_ALL_PRODUCTS = `
{
  allProdutos {
    id
    category
    newPrice
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
}`