
import { useState } from 'react'
import { List } from './styles'

const totalPages = 12
const maxPages = 10 // 2 min

export default function Pagination () {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <List>
      <button onClick={() => setCurrentPage(currentPage - 1)}>＜</button>
      {
        Array.from({ length: totalPages }).map((_, index) => {
          if (
            (currentPage < maxPages / 2 && index < maxPages) ||
            (currentPage + maxPages / 2 > index && currentPage <= index) ||
            (currentPage - maxPages / 2 <= index && currentPage > index)
          ) {
            return <button className={ currentPage === index + 1 ? 'active' : '' } key={index}>{index + 1}</button>
          } else {
            return null
          }
        })
      }
      <button onClick={() => setCurrentPage(currentPage + 1)}>＞</button>
    </List>
  )
}
