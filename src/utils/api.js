import axios from 'axios';

const API_URL = 'https://backend-shopping-avqy.onrender.com/api/cart'; // Adjust based on your server URL

// Add item to cart
export const addToCartApi = async (productId, quantity, token) => {
  try {
    const response = await axios.post(
      `${API_URL}/add`,
      { productId, quantity },
      { headers: { Authorization: `${token}` } }
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
      headers: { Authorization: ` ${token}` }
    });
    return response.data;  // Returning the cart data
  } catch (error) {
    console.error('Error fetching cart:', error);
    throw error;
  }
};

export const removeFromCart = async (productId, token) => {
  try {
    const response = await axios.delete(`${API_URL}/remove`, {
      headers: { Authorization: `${token}` },
      data: { productId }  // ✅ Send the productId in the body
    });
    return response.data;
  } catch (error) {
    console.error("Error removing item from cart:", error);
    throw error;
  }
};

export const updateCartItem = async (productId, quantity, token) => {
  try {
    const response = await axios.put(`${API_URL}/update`, 
      { productId, quantity },
      { headers: { Authorization: `${token}` } }
    );
    return response.data;
  } catch (error) {
    console.error("Error updating cart item:", error);
    throw error;
  }
};

