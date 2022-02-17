import { useEffect, useState } from 'react'
import ArticlesList from 'src/components/ArticlesList'
import Pagination from 'src/components/Pagination'
import { Container } from 'src/styles/Container'
import Article from 'src/models/article'

export default function Favs () {
  const [articles, setArticles] = useState<Article[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    const articlesFavs: Article[] = JSON.parse(localStorage.getItem('ARTICLES_FAVS') || '[]')
    const articlesToShow = articlesFavs.slice((page - 1) * 8, page * 8)
    setTotalPages(Math.ceil(articlesFavs.length / 8))
    setArticles([])
    setTimeout(() => {
      setArticles(articlesToShow)
    })
  }, [page])

  return (
    <Container>
      <ArticlesList articles={articles} />
      <Pagination totalPages={totalPages} page={page} onChange={(page: number) => setPage(page)} />
    </Container>
  )
}
