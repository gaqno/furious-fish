import axios from "axios";

const callApi = (url: string, method: string, data?: any, graphql?: boolean) => {
  const runtimeConfig = useRuntimeConfig()
  if (graphql) {
    return axios({
      url: runtimeConfig.public.NUXT_PUBLIC_DATOCMS_URL,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': runtimeConfig.public.NUXT_PUBLIC_DATOCMS_TOKEN
      },
      data: {
        query: data.query,
        operationName: data.operation,
        variables: data.variables,
      }
    })
  } else {
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
  }
};

export async function graphqlQuery(query: any, operation?: string, variables?: any) {
  const data = {
    query,
    operation,
    variables,
  }

  return callApi('/graphql', 'POST', data, true)
}
