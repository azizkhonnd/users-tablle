import "./Admin.css";
import Sidebar from '../../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Admin