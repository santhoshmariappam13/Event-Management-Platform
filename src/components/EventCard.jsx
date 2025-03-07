import React from 'react';

function EventCard({ event }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
      <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{event.title}</h2>
        <p className="text-gray-600 mt-2">{event.description}</p>
        <p className="text-gray-500 mt-3">{new Date(event.date).toLocaleDateString()}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-green-500">${event.ticketPrice}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            View Event
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
