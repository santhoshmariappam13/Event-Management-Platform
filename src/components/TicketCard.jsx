import React from 'react';

function TicketCard({ ticket }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
      <div className="p-6 text-center">
        <h4 className="text-lg font-semibold text-gray-800">{ticket.name}</h4>
        <p className="text-gray-600 mt-2">Price: ${ticket.price}</p>
        <p className="text-gray-500 mt-2">Available: {ticket.quantity}</p>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default TicketCard;
