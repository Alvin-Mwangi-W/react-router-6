import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import Login from './pages/Login'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import SharedLayout from './pages/SharedLayout'

function App() {
  const [user, setUser] = useState(null);
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="products" element={<Products />}/>
        <Route path="products/:productId" element={<SingleProduct/>}/>
        <Route path="dashboard" element={<Login user={user}></Login>}/>
        <Route path="login" element={<Login setUser={setUser}></Login>}/>
        <Route path="*" element={<Error />}/>
      </Route>
      
      <Route path="singleproduct" element={<SingleProduct />}/>
    </Routes>
  </BrowserRouter>
}

export default App;
