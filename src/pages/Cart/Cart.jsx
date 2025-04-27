import React, { useEffect, useState } from 'react';
import { getCartApi } from '../../utils/api';
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

  return (
    <>
      <Header />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map(({ productId, quantity }) => (
              <li key={productId._id} className="border-b py-4">
                <h3 className="font-semibold">{productId.name}</h3>
                <p>Price: Rs. {productId.discountPrice}</p>
                <p>Quantity: {quantity}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
