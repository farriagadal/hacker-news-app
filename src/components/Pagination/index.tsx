
import { useEffect, useState } from 'react'
import { List } from './styles'

// const totalPages = 12
const maxPages = 10 // 2 min

interface PaginationProps {
  // onChange: (page: number) => void;
  // onChange: Function
  onChange: Function,
  page: number,
  totalPages?: number
}

export default function Pagination ({ onChange, page, totalPages = 1 }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1)

  const selectPage = (page: number) => {
    console.log('selectPage', page)
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
      <button onClick={() => previousPage()}>＜</button>
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
      <button onClick={() => nextPage()}>＞</button>
    </List>
  )
}
