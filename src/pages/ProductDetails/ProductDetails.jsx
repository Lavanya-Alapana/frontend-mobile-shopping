import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { addToCartApi } from "../../utils/api";

const ProductDetails = ({ product }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [quantity, setQuantity] = useState(1); // <-- Track quantity

  if (!product) {
    return <div className="text-center text-gray-500">Product not found</div>;
  }

  const handleAddToCart = async () => {
    try {
      await addToCartApi(product._id, parseInt(quantity), token);
      toast.success("Added to cart!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add to cart");
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-center items-center">
          <img src={product.image} alt={product.name} className="w-96 h-96 object-contain rounded-lg" />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
          <p className="text-gray-600 text-sm uppercase">Brand: {product.brand}</p>

          <div className="flex items-center gap-4">
            <p className="line-through text-gray-500 text-lg">Rs. {product.originalPrice}</p>
            <p className="text-orange-500 font-bold text-2xl">Rs. {product.discountPrice}</p>
          </div>

          <h3 className="text-lg font-semibold">Description</h3>
          <p className="text-gray-700">{product.description}</p>

          <div className="flex items-center gap-2">
            <span className="text-gray-700">Quantity:</span>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-16 p-1 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex gap-4">
            <button 
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-bold">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
