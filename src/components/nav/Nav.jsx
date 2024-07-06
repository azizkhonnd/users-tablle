import { NavLink } from 'react-router-dom'
import Container from '../container/Container'

const Nav = () => {
  return (
    <nav>
        <Container>
          <ul>
             
              <li><NavLink to="/admin">Admin</NavLink></li>
          </ul>
        </Container>
    </nav>
  )
}

export default Nav