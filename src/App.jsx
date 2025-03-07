import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventList from './components/EventList';
import TicketForm from './components/TicketForm';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import EventDetails from './pages/EventDetail';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { getUserProfile } from './services/api';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const fetchUser = async () => {
      try {
        const data = await getUserProfile();
        setUser(data);
      } catch (error) {
        setUser(null); // If no user found or error, user is not logged in
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <Navbar user={user} />

      <div >
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/events" element={<EventList />} />

          {/* Protected Routes */}
          {user && (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/ticket/:eventId" element={<TicketForm />} />
            </>
          )}

          {/* Redirect to login if route doesn't match */}
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;











