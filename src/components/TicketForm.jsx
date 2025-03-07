// src/components/TicketForm.jsx
import React, { useState } from 'react';
import { buyTicket } from '../services/api';  // Assuming an API call function for purchasing tickets
import { useNavigate } from 'react-router-dom';

const TicketForm = ({ eventId, ticketTypes }) => {
  const [ticketType, setTicketType] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await buyTicket(eventId, ticketType, quantity);
      history.push(`/events/${eventId}`);  // Redirect back to event details page
    } catch (err) {
      setError('Failed to buy ticket. Please try again.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Buy Tickets</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="ticketType" className="block text-sm font-semibold">Ticket Type</label>
          <select
            id="ticketType"
            className="w-full p-2 mt-2 border rounded-md"
            value={ticketType}
            onChange={(e) => setTicketType(e.target.value)}
            required
          >
            <option value="">Select a ticket type</option>
            {ticketTypes.map((ticket) => (
              <option key={ticket._id} value={ticket.name}>{ticket.name} - ${ticket.price}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-semibold">Quantity</label>
          <input
            type="number"
            id="quantity"
            className="w-full p-2 mt-2 border rounded-md"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Purchase Ticket
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
