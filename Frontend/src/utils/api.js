import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.reagancodes.com';

const api = axios.create({
  baseURL: `${API_BASE_URL}/api/`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchBlogs = async (params = {}) => {
  const res = await api.get('blogs/', { params });
  return res.data;
};

export const addBlog = async (blogData) => {
  const res = await api.post('blogs/', blogData);
  return res.data;
};

export const fetchTags = async () => {
  const res = await api.get('tags/');
  return res.data;
};

export default api; 