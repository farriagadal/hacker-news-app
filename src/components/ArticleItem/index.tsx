import { useEffect, useState } from 'react'
import { Card, TextSection, LikeSection } from './styles'
import { formatDistance } from 'date-fns'
import Article from 'src/models/article'

type ArticleItemProps = {
  article: Article
}

export default function ArticleItem ({ article }: ArticleItemProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    checkFavorite()
  }, [])

  const timeAgo = formatDistance(new Date(article.createdAt), new Date(), { addSuffix: true })

  const checkFavorite = () => {
    const articlesFavs = JSON.parse(localStorage.getItem('ARTICLES_FAVS') || '[]')
    const isExist = articlesFavs.some((a: Article) => a.objectID === article.objectID)
    setIsFavorite(!!isExist)
  }

  const addToFavorites = () => {
    let articlesFavs = JSON.parse(localStorage.getItem('ARTICLES_FAVS') || '[]')
    const articleFound = articlesFavs.find((a: Article) => a.objectID === article.objectID)
    if (articleFound) {
      articlesFavs = articlesFavs.filter((a: Article) => a.objectID !== article.objectID)
    } else {
      articlesFavs.push(new Article(article))
    }
    localStorage.setItem('ARTICLES_FAVS', JSON.stringify(articlesFavs))
    checkFavorite()
  }

  return (
    <Card>
      <TextSection href={article.storyUrl} target="_blank">
        <span><img src="icons/icon-time.svg" alt="icon" /> {timeAgo} by {article.author}</span>
        <p>{article.storyTitle}</p>
      </TextSection>
      <LikeSection onClick={addToFavorites}>
        {
          isFavorite
            ? <img src="/icons/favorite-filled.svg" alt="heart-icon" />
            : <img src="/icons/favorite-outfilled.svg" alt="heart-icon" />
        }
      </LikeSection>
    </Card>
  )
}
