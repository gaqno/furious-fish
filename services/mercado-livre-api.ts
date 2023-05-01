import axios from 'axios'

const runtimeConfig = useRuntimeConfig()


const BASE_URL = 'https://api.mercadolibre.com';

export async function getSeller() {
  const token = 'APP_USR-6541576124916863-042921-632fc5c4df711d957a758547efb2b8a9-1361737006';
  const response = await axios.get(`${BASE_URL}/users/1361737006`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
}

export async function getAllProducts(userId: number) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?seller_id=${userId}`;
  const response = await axios.get(url, {
    headers: {
      Authorization: 'Bearer APP_USR-6541576124916863-042921-632fc5c4df711d957a758547efb2b8a9-1361737006',
    },
  });
  const products = response.data.results;
  return products;
}