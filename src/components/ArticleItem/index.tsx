import { Item, TextSection, LikeSection } from './styles'

export default function ArticleItem (props: any) {
  const isFavorite: Boolean = true
  return (
    <Item>
      <TextSection>
        <span><img src="icons/icon-time.svg" alt="icon" /> {props.article.created_at}</span>
        <p>{props.article.story_title}</p>
      </TextSection>
      <LikeSection>
        {
          isFavorite
            ? <img src="/icons/favorite-filled.svg" alt="heart-icon" />
            : <img src="/icons/favorite-outfilled.svg" alt="heart-icon" />
        }
      </LikeSection>
    </Item>
  )
}
