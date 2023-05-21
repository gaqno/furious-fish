export const QUERY_ALL_PRODUCTS = `
  {
    allProdutos {
      id
      nomeDoProduto
      fotoDoProduto {
        url
        id
      }
      valorProduto
      descricaoProduto
      categoria
      _status
      _firstPublishedAt
    }
    _allProdutosMeta {
      count
    }
  }`