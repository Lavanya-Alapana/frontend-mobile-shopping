import React, { useEffect, useState } from "react";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token"); // or from context/state
      const response = await fetch("https://backend-shopping-avqy.onrender.com/api/orders/get", {
        headers: {
          Authorization: token
        }
      });

      const data = await response.json();
      if (response.ok) {
        setOrders(data.orders);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order._id} className="border p-4 mb-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold">Order #{order._id}</h2>
            <p>Brand: {order.name}</p>
            <p>Address: {order.address}</p>
            <p>Total: ₹{order.totalPrice}</p>
            <ul className="mt-2">
              {order.items.map((item, idx) => (
                <li key={idx}>
                  {item.product.title} × {item.quantity} — ₹
                  {item.product.discountPrice * item.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default MyOrders;
