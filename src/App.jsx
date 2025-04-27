import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Products from "./components/Products/Products";
import Cart from "./pages/Cart/Cart";

import ProductDetails from "./pages/ProductDetails/ProductDetails";

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
          </Routes>
       
      </Router>
   
  
  );
}

export default App;
