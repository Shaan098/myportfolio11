import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

// Project API calls
export const getProjects = (category = 'all') =>
  API.get(`/projects?category=${category}`);

export const getProjectById = (id) =>
  API.get(`/projects/${id}`);

// Contact API calls
export const sendContactMessage = (data) =>
  API.post('/contact', data);

// Health check
export const checkHealth = () =>
  API.get('/health');

export default API;
