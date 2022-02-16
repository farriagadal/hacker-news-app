import { useEffect, useState } from 'react'
import { Item, TextSection, LikeSection } from './styles'

export default function ArticleItem (props: any) {
  const [isFavorite, setIsFavorite] = useState(true)

  const checkFavorite = () => {
    const articlesFavs = JSON.parse(localStorage.getItem('ARTICLES_FAVS') || '[]')
    const isExist = articlesFavs.some((article: any) => article.objectID === props.article.objectID)
    console.log(isExist)
    setIsFavorite(isExist)
  }

  const addToFavorites = () => {
    let articlesFavs = JSON.parse(localStorage.getItem('ARTICLES_FAVS') || '[]')
    const articleFound = articlesFavs.find((article: any) => article.objectID === props.article.objectID)
    console.log('articleFound', articleFound)
    if (articleFound) {
      articlesFavs = articlesFavs.filter((article: any) => article.objectID !== props.article.objectID)
    } else {
      articlesFavs.push({
        author: props.article.author,
        // story_id: props.article.story_id,
        story_title: props.article.story_title,
        story_url: props.article.story_url,
        created_at: props.article.created_at,
        objectID: props.article.objectID
      })
    }
    localStorage.setItem('ARTICLES_FAVS', JSON.stringify(articlesFavs))
    checkFavorite()
  }

  useEffect(() => {
    checkFavorite()
  }, [])

  return (
    <Item>
      <TextSection>
        <span><img src="icons/icon-time.svg" alt="icon" /> {props.article.created_at}</span>
        <p>{props.article.story_title}</p>
      </TextSection>
      <LikeSection onClick={addToFavorites}>
        {
          isFavorite
            ? <img src="/icons/favorite-filled.svg" alt="heart-icon" />
            : <img src="/icons/favorite-outfilled.svg" alt="heart-icon" />
        }
      </LikeSection>
    </Item>
  )
}
