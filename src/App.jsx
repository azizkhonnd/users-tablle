import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from './routes/home/Home';
import Login from './routes/login/Login';
import Nav from "./components/nav/Nav";
import Admin from './routes/admin/Admin';
import Users from './routes/admin/users/Users';
import Products from './routes/admin/products/Products';
import All from './routes/admin/all/All';
import Subscribed from './routes/admin/subscribed/Subscibed';
import Unsubscribed from './routes/admin/unsubscribed/Unsubscribed';

function App() {
  const {pathname } = useLocation();
  return (
    <>
    
    {
      !pathname.includes("/admin") && <Nav/>
    }
    <Routes>
      <Route path='' element={<Home/>} />
      <Route path='login' element={<Login/>} />
      <Route path='admin' element={<Admin/>}>
        <Route path='users' element={<Users/>}>
            <Route path='' element={<All/>}/>
            <Route path='subscribed' element={<Subscribed/>}/>
            <Route path='unsubscribed' element={<Unsubscribed/>}/>
        </Route>
        <Route path='products' element={<Products/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App;