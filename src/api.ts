import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

instance.interceptors.request.use((config) => {
  return config
})

instance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
)

export default instance
