
import { Header } from './styles'
import { Container } from 'src/styles/Container'
import { Link } from 'react-router-dom'

export default function AppHeader () {
  return (
    <Header>
      <Container>
        <Link to="/">Hacker News</Link>
      </Container>
    </Header>
  )
}
