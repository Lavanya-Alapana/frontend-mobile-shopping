import React, { useEffect, useState } from 'react';
import { getCartApi, removeFromCart ,updateCartItem} from '../../utils/api';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cart = await getCartApi(token);
        setCartItems(cart.items);
      } catch (error) {
        console.error("Failed to fetch cart", error);
      }
    };
    fetchCart();
  }, []);

  const increment = async(index) => {
    const updated = [...cartItems];
    updated[index].quantity += 1;
    setCartItems(updated);


    try {
      await updateCartItem(updated[index].productId._id, updated[index].quantity, token);
    } catch (error) {
      console.error("Failed to update quantity", error);
    }
  };

  const decrement = async (index) => {
    const updated = [...cartItems];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
      setCartItems(updated);


      try {
        await updateCartItem(updated[index].productId._id, updated[index].quantity, token);
      } catch (error) {
        console.error("Failed to update quantity", error);
      }
    }

   
  };

  const handleRemove = async (productId) => {
    try {
      await removeFromCart(productId, token);
      setCartItems(cartItems.filter(item => item.productId._id !== productId));
    } catch (err) {
      console.error("Failed to remove item", err);
    }
  };

  return (
    <>
      <Header />
      <div className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            {/* Header Row */}
            <div className="grid grid-cols-5 font-semibold text-gray-600 border-b pb-2 mb-4">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
              
            </div>

            {cartItems.map(({ productId, quantity }, index) => (
              <div
                key={productId._id}
                className="grid grid-cols-5 items-center gap-4 border p-4 rounded-lg mb-4 shadow-sm"
              >
                {/* Product */}
                <div className="flex items-center gap-4">
                  <img
                    src={productId.image}
                    alt={productId.name}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div>
                    <h3 className="font-bold">{productId.name}</h3>
                    <p className="text-sm text-gray-500">{productId.brand}</p>
                  </div>
                </div>

                {/* Price */}
                <p className="text-orange-500 font-semibold">
                  Rs. {productId.discountPrice}
                </p>

                {/* Quantity */}
                <div className="flex items-center gap-2">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => decrement(index)}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => increment(index)}
                  >
                    +
                  </button>
                </div>

                {/* Total */}
                <p className="font-semibold">
                  Rs. {productId.discountPrice * quantity}
                </p>

                {/* Remove button */}
                <button
                  onClick={() => handleRemove(productId._id)}
                  className="text-red-500 hover:underline text-sm cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ))}
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
