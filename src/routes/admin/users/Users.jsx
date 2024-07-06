import { Outlet, NavLink } from 'react-router-dom'
import './Users.css'

const Users = () => {
  return (
    <>
      
      <div className='items'>
        <nav className='navInit'>
          <ul className='navMenu'>
            <li><NavLink end to="/admin/users">Xodimlar</NavLink></li>
            <li><NavLink to="/admin/users/unsubscribed"> Bo`shatilganlar</NavLink></li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  )
}

export default Users