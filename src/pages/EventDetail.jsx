import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEventById } from '../services/api';
import TicketCard from '../components/TicketCard';

function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      const data = await getEventById(id);
      setEvent(data);
    };
    fetchEvent();
  }, [id]);

  if (!event) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="event-detail container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">{event.title}</h1>
        <p className="text-gray-600 mt-4">{event.description}</p>
        <p className="text-gray-500 mt-2">Location: {event.location}</p>
        <p className="text-gray-500 mt-2">Date: {new Date(event.date).toLocaleDateString()}</p>
      </div>

      <div className="ticket-options grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {event.ticketTypes.map((ticket) => (
          <TicketCard key={ticket.name} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}

export default EventDetail;
