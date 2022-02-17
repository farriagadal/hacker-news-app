import api from 'src/api'
import FilterParams from 'src/models/filter-params'

const getArticles = (params: FilterParams) => new Promise((resolve, reject) => {
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
