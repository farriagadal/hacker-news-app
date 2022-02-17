import api from 'src/api'

const getArticles = (params: any) => new Promise((resolve, reject) => {
  api.get('/search_by_date', { params })
    .then((response) => {
      resolve(response)
    })
    .catch((err) => {
      reject(err)
    })
})

export default {
  getArticles
}
