import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: `${API_BASE_URL}/api/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchBlogs = async () => {
  const res = await api.get('blogs/');
  return res.data;
};

export const addBlog = async (blogData) => {
  const res = await api.post('blogs/', blogData);
  return res.data;
};

export default api; 