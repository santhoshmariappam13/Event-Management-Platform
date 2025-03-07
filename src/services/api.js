import axios from 'axios';

const API_URL = 'http://localhost:5000/api';  

// Function to get authorization headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Login API function
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, { email, password });
    return response.data; 
  } catch (error) {
    console.error('Error logging in user', error);
    throw error; 
  }
};

// Fetch events
export const getEvents = async () => {
  try {
    const response = await axios.get(`${API_URL}/events`);
    return response.data;
  } catch (error) {
    console.error('Error fetching events', error);
    return [];
  }
};

// Fetch event by ID
export const getEventById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/events/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching event details', error);
    return null;
  }
};

// Buy a ticket
export const buyTicket = async (eventId, ticketType) => {
  try {
    const response = await axios.post(
      `${API_URL}/tickets`,
      { eventId, ticketType },
      {
        headers: getAuthHeaders(), 
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error buying ticket:', error);
    throw error; 
  }
};

// Fetch the user's profile
export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/users/profile`, {
      headers: getAuthHeaders(), 
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error; 
  }
};

// Register a new user
export const registerUser = async (email, password, name) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, { email, password, name });
    return response.data; 
  } catch (error) {
    console.error('Error registering user:', error);
    throw error; 
  }
};