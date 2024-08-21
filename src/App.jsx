import Home from "./pages/home/Home"
import { Routes, Route } from "react-router-dom"
import Wishlist from "@/pages/wishlist/Wishlist"
import Login from "@/pages/login/Login"
import Layout from "./pages/layout/Layout"
import Newcart from "./components/cart/Newcart"
import Cart from "./pages/cart/Cart"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>  
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="" element={<Home/>}/>
          <Route path="wishlist" element={<Wishlist/>}/>
          <Route path="Cart" element={<Cart/>}/>
        </Route>
          <Route path="login" element={<Login/>}/>
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App