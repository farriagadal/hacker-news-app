import { Fragment } from 'react'
import ArticleItem from 'src/components/ArticleItem'
import { List, LoadingIcon, EmptyState } from './styles'
import Article from 'src/models/article'

type ArticlesListProps = {
  articles: Article[],
  isLoading?: boolean,
}

export default function ArticlesList ({ articles, isLoading }: ArticlesListProps) {
  return (
    <Fragment>
      {isLoading
        ? <LoadingIcon src="/icons/loading.svg" />
        : articles.length
          ? <List>
              {articles.map((article: Article, index: number) => {
                return (<ArticleItem key={index} article={article} />)
              })}
            </List>
          : <EmptyState>Empty or incomplete articles</EmptyState>
      }
    </Fragment>
  )
}
