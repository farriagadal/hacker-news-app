
import { useEffect, useState } from 'react'
import { List } from './styles'

const maxPages = window.innerWidth > 768 ? 10 : 4 // 2 min

type PaginationProps = {
  onChange: Function,
  page: number,
  totalPages?: number
}

export default function Pagination ({ onChange, page, totalPages = 1 }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1)

  const selectPage = (page: number) => {
    onChange(page)
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      onChange(currentPage + 1)
    }
  }

  const previousPage = () => {
    if (currentPage > 1) {
      onChange(currentPage - 1)
    }
  }

  useEffect(() => {
    setCurrentPage(page)
  }, [page])

  return (
    <List>
      {totalPages > 0 && <button onClick={() => previousPage()}>＜</button>}
      {
        Array.from({ length: totalPages }).map((_, index) => {
          if (
            (currentPage < maxPages / 2 && index < maxPages) ||
            (currentPage + maxPages / 2 > index && currentPage <= index) ||
            (currentPage - maxPages / 2 <= index && currentPage > index)
          ) {
            return <button onClick={() => selectPage(index + 1)} className={ currentPage === index + 1 ? 'active' : '' } key={index}>{index + 1}</button>
          } else {
            return null
          }
        })
      }
       {totalPages > 0 && <button onClick={() => nextPage()}>＞</button>}
    </List>
  )
}
