import ArticleItem from 'src/components/ArticleItem'
import { List } from './styles'

export default function ArticlesList (props: any) {
  return (
    <List>
      {props.articles.map((article: any, index: any) => {
        return (<ArticleItem key={index} article={article} />)
      })}
    </List>
  )
}
