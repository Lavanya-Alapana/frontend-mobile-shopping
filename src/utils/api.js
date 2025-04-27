import axios from 'axios';

const API_URL = 'http://localhost:8000/api/cart'; // Adjust based on your server URL

// Add item to cart
export const addToCartApi = async (productId, quantity, token) => {
  try {
    const response = await axios.post(
      `${API_URL}/add`,
      { productId, quantity },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;  // Returning the updated cart
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
};

// Get cart items
export const getCartApi = async (token) => {
  try {
    const response = await axios.get(`${API_URL}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;  // Returning the cart data
  } catch (error) {
    console.error('Error fetching cart:', error);
    throw error;
  }
};
