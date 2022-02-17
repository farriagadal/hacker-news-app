import { useEffect, useState } from 'react'
import ArticlesList from 'src/components/ArticlesList'
import Pagination from 'src/components/Pagination'
import { Container } from 'src/styles/Container'

export default function Favs () {
  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    const articlesFavs = JSON.parse(localStorage.getItem('ARTICLES_FAVS') || '[]')
    console.log('articlesFavs', articlesFavs)

    const articlesToShow = articlesFavs.slice((page - 1) * 8, page * 8)
    setTotalPages(Math.ceil(articlesFavs.length / 8))
    setArticles([])
    setTimeout(() => {
      setArticles(articlesToShow)
    }, 0)
  }, [page])

  return (
    <Container>
      <ArticlesList articles={articles} />
      <Pagination totalPages={totalPages} page={page} onChange={(page: number) => setPage(page)} />
    </Container>
  )
}
