import { NavLink } from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <li><NavLink to="/admin/users" activeClassName="active">Users</NavLink></li>
      </ul>
    </div>
  );
};

export default Sidebar;
