import { useEffect, useState } from 'react'
import ArticlesList from 'src/components/ArticlesList'
import Pagination from 'src/components/Pagination'
import { Container } from 'src/styles/Container'

export default function Favs () {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const articlesFavs = JSON.parse(localStorage.getItem('ARTICLES_FAVS') || '[]')
    setArticles(articlesFavs)
  }, [])

  return (
    <Container>
      <ArticlesList articles={articles} />
      <Pagination />
    </Container>
  )
}
