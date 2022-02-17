import { useEffect, useState } from 'react'
import ArticlesList from 'src/components/ArticlesList'
import SelectInput from 'src/components/SelectInput'
import Pagination from 'src/components/Pagination'
import { Container } from 'src/styles/Container'
import { SelectOption } from './styles'
import ArticleService from 'src/services/article.service'

const options = [
  { value: 'angular', label: <SelectOption><img src="/icons/angular-icon.png"/>Angular </SelectOption> },
  { value: 'react', label: <SelectOption><img src="/icons/react-icon.png"/>Reactjs </SelectOption> },
  { value: 'vue', label: <SelectOption><img src="/icons/vue-icon.png"/>Vuejs </SelectOption> }
]

export default function Home () {
  const [articles, setArticles] = useState([])

  const [params, setParams] = useState({ hitsPerPage: 8, page: 1 })
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    ArticleService.getArticles(params).then((data: any) => {
      console.log(data)
      const articlesFiltered = data.hits.filter((hit: any) => hit.author && hit.story_title && hit.story_url && hit.created_at)
      data.nbPages && setTotalPages(data.nbPages)
      setArticles(articlesFiltered)
    })
  }, [params])

  const changePage = (page: number) => {
    setParams({ ...params, page })
  }

  return (
    <Container>
      <SelectInput options={options} placeholder="Select your news" isSearchable={false} />
      <ArticlesList articles={articles} />
      <Pagination totalPages={totalPages} page={params.page} onChange={(page: number) => changePage(page)} />
    </Container>
  )
}
