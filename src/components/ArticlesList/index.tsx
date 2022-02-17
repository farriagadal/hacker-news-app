import { Fragment } from 'react'
import ArticleItem from 'src/components/ArticleItem'
import { List, LoadingIcon, EmptyState } from './styles'
import Article from 'src/models/article'

export default function ArticlesList (props: any) {
  return (
    <Fragment>
      {props.isLoading
        ? <LoadingIcon src="/icons/loading.svg" />
        : props.articles.length
          ? <List>
              {props.articles.map((article: Article, index: number) => {
                return (<ArticleItem key={index} article={article} />)
              })}
            </List>
          : <EmptyState>Empty or incomplete articles</EmptyState>
      }
    </Fragment>
  )
}
