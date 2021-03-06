import { useEffect, useState } from 'react'
import ArticlesList from 'src/components/ArticlesList'
import SelectInput from 'src/components/SelectInput'
import Pagination from 'src/components/Pagination'
import { Container } from 'src/styles/Container'
import { SelectOption } from './styles'
import ArticleService from 'src/services/article.service'
import Article from 'src/models/article'
import FilterParams from 'src/models/filter-params'

const options = [
  { value: 'angular', label: <SelectOption><img src="/icons/angular-icon.png"/>Angular </SelectOption> },
  { value: 'reactjs', label: <SelectOption><img src="/icons/react-icon.png"/>Reactjs </SelectOption> },
  { value: 'vuejs', label: <SelectOption><img src="/icons/vue-icon.png"/>Vuejs </SelectOption> }
]

const filterParams = JSON.parse(localStorage.getItem('FILTER_PARAMS') || 'null')

export default function Home () {
  const [articles, setArticles] = useState<Article[]>([])
  const [params, setParams] = useState<FilterParams>(filterParams || new FilterParams())
  const [totalPages, setTotalPages] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    ArticleService.getArticles(params).then(({ data, pages }: any) => {
      pages && setTotalPages(pages)
      setArticles([])
      setTimeout(() => {
        setArticles(data)
      })
    }).finally(() => {
      setIsLoading(false)
    })
  }, [params])

  const changeParams = (filterParams: FilterParams) => {
    setParams(filterParams)
    localStorage.setItem('FILTER_PARAMS', JSON.stringify(filterParams))
  }

  return (
    <Container>
      <SelectInput defaultValue={options.find((option) => option.value === params.query)} onChange={(data: any) => changeParams({ ...params, query: data.value })} options={options} placeholder="Select your news" />
      <ArticlesList isLoading={isLoading} articles={articles} />
      <Pagination totalPages={totalPages} page={params.page} onChange={(page: number) => changeParams({ ...params, page })} />
    </Container>
  )
}
