import { NavLink } from 'react-router-dom'
import Container from '../container/Container'

const Nav = () => {
  return (
    <nav>
        <Container>
          <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
              <li><NavLink to="/admin">Admin</NavLink></li>
          </ul>
        </Container>
    </nav>
  )
}

export default Nav