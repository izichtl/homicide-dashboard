// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/consistent-type-imports
import axios, { AxiosInstance } from 'axios'


export const instanceAXIOS = axios.create({
baseURL: import.meta.env.VITE_SERVER_URL,
// baseURL: process.env.REACT_APP_API_URL,
})

export const APIDecoratorWithBaseURI = (
  base: string | undefined = import.meta.env.VITE_SERVER_URL
// eslint-disable-next-line arrow-body-style
): AxiosInstance => {
  instanceAXIOS.defaults.baseURL = base
  // instanceAXIOS.defaults.headers.common.Authorization = 'access_token'
  return instanceAXIOS
}


