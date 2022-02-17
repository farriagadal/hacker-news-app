import { useEffect, useState } from 'react'
import ArticlesList from 'src/components/ArticlesList'
import SelectInput from 'src/components/SelectInput'
import Pagination from 'src/components/Pagination'
import { Container } from 'src/styles/Container'
import { SelectOption } from './styles'
import ArticleService from 'src/services/article.service'

const options = [
  { value: 'angular', label: <SelectOption><img src="/icons/angular-icon.png"/>Angular </SelectOption> },
  { value: 'reactjs', label: <SelectOption><img src="/icons/react-icon.png"/>Reactjs </SelectOption> },
  { value: 'vuejs', label: <SelectOption><img src="/icons/vue-icon.png"/>Vuejs </SelectOption> }
]

const filterParams = JSON.parse(localStorage.getItem('FILTER_PARAMS') || 'null')

export default function Home () {
  const [articles, setArticles] = useState([])
  const [params, setParams] = useState(filterParams || { hitsPerPage: 8, page: 1, query: null })
  const [totalPages, setTotalPages] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    ArticleService.getArticles(params).then((data: any) => {
      console.log(data)
      const articlesFiltered = data.hits.filter((hit: any) => hit.author && hit.story_title && hit.story_url && hit.created_at)
      data.nbPages && setTotalPages(data.nbPages)
      setArticles([])
      setTimeout(() => {
        setArticles(articlesFiltered)
      }, 0)
    }).finally(() => {
      setIsLoading(false)
    })
  }, [params])

  const changeParams = (filterParams: any) => {
    setParams(filterParams)
    localStorage.setItem('FILTER_PARAMS', JSON.stringify(filterParams))
  }

  return (
    <Container>
      <SelectInput defaultValue={options.find((option) => option.value === params.query)} onChange={(data: any) => changeParams({ ...params, query: data.value })} options={options} placeholder="Select your news" isSearchable={false} />
      <ArticlesList isLoading={isLoading} articles={articles} />
      <Pagination totalPages={totalPages} page={params.page} onChange={(page: number) => changeParams({ ...params, page })} />
    </Container>
  )
}
