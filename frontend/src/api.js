import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Orders API
export const createOrder = (orderData) => API.post('/orders', orderData);
export const getOrders = () => API.get('/orders');
export const updateOrderStatus = (id, status) => API.patch(`/orders/${id}`, { status });

// File Upload Helper
export const uploadFiles = async (files, orderId) => {
  const formData = new FormData();
  files.forEach(file => {
    formData.append('files', file.file);
  });
  formData.append('orderId', orderId);
  
  return API.post('/orders/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};