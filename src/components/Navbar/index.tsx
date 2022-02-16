import { NavLink } from 'react-router-dom'
import { List } from './styles'
// import { Container } from 'src/styles/Container'

export default function Navbar () {
  return (
    <List>
      <NavLink to="/">All</NavLink>
      <NavLink to="/favs">My faves</NavLink>
    </List>
  )
}
