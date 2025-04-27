import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";
import ProductCard from "../../pages/ProductCard/ProductCard";

function Products() {
  const { id } = useParams(); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/allProducts")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);


  const product = id ? products.find((item) => item._id === id) : null;

  return (
    <div>
      {!id ? (
        <ProductCard products={products} />
      ) : product ? (
        <ProductDetails product={product} />
      ) : (
        <div className="text-center text-gray-500">Product not found</div>
      )}
    </div>
  );
}

export default Products;
