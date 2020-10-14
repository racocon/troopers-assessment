import { create as createAxiosInstance } from 'axios'

const exchangeRatesApi = createAxiosInstance({
  baseURL: 'https://api.exchangeratesapi.io'
})

// this will wait for the promise to resolve the response object and then return the data property
export const getLatest = async () => (await exchangeRatesApi.get('latest')).data