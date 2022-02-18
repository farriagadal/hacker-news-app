import api from 'src/api'
import FilterParams from 'src/models/filter-params'
import Article from 'src/models/article'

export const getArticles = (params: FilterParams) => new Promise((resolve, reject) => {
  api.get('/search_by_date', { params })
    .then((response: any) => {
      const arr: any[] = response.hits.filter((hit: any[any]) => hit.author && hit.story_title && hit.story_url && hit.created_at)
      const articlesFiltered: Article[] = arr.map((article: any) => new Article(article))
      resolve({ data: articlesFiltered, pages: response.nbPages })
    })
    .catch((err) => {
      reject(err)
    })
})

export default {
  getArticles
}
