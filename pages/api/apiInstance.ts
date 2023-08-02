import axios from 'axios'

const apiInstance = axios.create({
  baseURL: 'INVALID_URL',
})

apiInstance.interceptors.request.use(
  async function (config) {
    config.baseURL = 'https://easy-puce-angler-cuff.cyclic.cloud'
    config.headers = {
      Authorization: localStorage.getItem('Token'),
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

export { apiInstance }
