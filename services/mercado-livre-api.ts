import axios from 'axios'

const callApi = (url: string, method: string, data?: any) => {
  const runtimeConfig = useRuntimeConfig()
  const token = runtimeConfig.public.ACCESS_TOKEN;
  const BASE_URL = runtimeConfig.public.BASE_URL;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
    body: data,
  };

  switch (method) {
    case 'GET':
      return axios.get(BASE_URL + url, config)
    case 'POST':
      return axios.post(BASE_URL + url, data, config)
    case 'PUT':
      return axios.put(BASE_URL + url, data, config)
    case 'DELETE':
      return axios.delete(BASE_URL + url, config)
    default:
      return axios.get(BASE_URL + url, config)
  }
};


export async function getSeller() {
  return callApi('/users/me', 'GET')
}

export async function getAllProducts(userId: number) {
  return callApi(`/sites/MLB/search?seller_id=${userId}`, 'GET')
}

export async function getProductDetails(id: string) {
  return callApi(`/items/${id}`, 'GET')
}

export async function getPreference() {
  return callApi('/checkout/preferences', 'GET')
}