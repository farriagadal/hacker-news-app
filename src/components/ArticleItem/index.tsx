import { Item, TextSection, LikeSection } from './styles'

export default function ArticleItem (props: any) {
  return (
    <Item>
      <TextSection>
        <span><img src="icons/icon-time.svg" alt="icon" /> {props.article.created_at}</span>
        <p>{props.article.story_title}</p>
      </TextSection>
      <LikeSection>
        <img src="" alt="heart-icon" />
      </LikeSection>
    </Item>
  )
}
