import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';

const Orders = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [productData, setProductData] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  // Fetch product info from localStorage
  useEffect(() => {
    const data = localStorage.getItem('buyNowProduct');
    if (!data) {
      toast.error("No product selected to order.");
      navigate('/');
    } else {
      setProductData(JSON.parse(data));
    }
  }, [navigate]);

  const handleSubmit = async () => {
    if (!name || !phone || !address) {
      toast.error("Please fill in all details");
      return;
    }

    try {
      const response = await axios.post(
        'https://backend-shopping-avqy.onrender.com/api/orders/place',
        {
          userId: JSON.parse(atob(token.split('.')[1])).id, // Decode token to get userId
          productId: productData.productId,
          quantity: productData.quantity,
          address,
        },
        {
          headers: { Authorization: token },
        }
      );

      toast.success("Order placed successfully!");
      localStorage.removeItem('buyNowProduct');
      navigate('/'); // Or redirect to /orders
    } catch (err) {
      console.error("Order failed:", err);
      toast.error("Order placement failed");
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-xl mx-auto mt-10 p-6 border rounded shadow bg-white">
        <h3 className="text-2xl font-bold mb-4">Enter Delivery Details</h3>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full p-2 border mb-4 rounded"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="block w-full p-2 border mb-4 rounded"
        />

        <textarea
          placeholder="Delivery Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="block w-full p-2 border mb-4 rounded"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Confirm Order
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Orders;
