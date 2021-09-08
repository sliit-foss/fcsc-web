import axios from 'axios'

const apiInstance = axios.create({
  baseURL: 'INVALID_URL',
})

apiInstance.interceptors.request.use(
  async function (config) {
    config.baseURL = 'https://rsvp-backend.herokuapp.com'
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
