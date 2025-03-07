import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getEvents } from '../services/api';
import EventCard from '../components/EventCard';

function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getEvents();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-green-500 to-teal-500 p-6">
      <h1 className="text-4xl font-bold text-center text-white mb-8">Upcoming Events</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Link to={`/event/${event._id}`} key={event._id}>
            <EventCard event={event} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;