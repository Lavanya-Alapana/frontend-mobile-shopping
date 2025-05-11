import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Products from "./components/Products/Products";
import Cart from "./pages/Cart/Cart";
import Orders from "./pages/Orders/Orders"

import ProductDetails from "./pages/ProductDetails/ProductDetails";
import MyOrders from "./components/MyOrder/MyOrder";

function App() {
  
  return (
     
      <Router>
        {/* ✅ Ensures CartContext is available after Auth */}
          <ToastContainer position="top-right" autoClose={3000} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/cart" element={<Cart/>} />
          <Route path="/order" element={<Orders/>} />
          <Route path="/orders" element={<MyOrders/>} />
          </Routes>
       
      </Router>
   
  
  );
}

export default App;
