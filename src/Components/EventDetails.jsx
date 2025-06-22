import React from "react";
import { useParams } from "react-router-dom";

function EventDetails() {
  const { id } = useParams();
  const allEvents = JSON.parse(localStorage.getItem("explore_events")) || [];
  const event = allEvents[parseInt(id)];

  if (!event) {
    return <p className="text-center text-red-500 mt-10">Event not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-4xl font-bold mb-2 text-orange-600">{event.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{event.date}</p>
      <p className="text-lg font-medium text-gray-700 mb-2">
        Category: <span className="text-orange-500">{event.category}</span>
      </p>
      {event.price && (
        <p className="text-lg font-medium text-gray-700 mb-2">
          Price: <span className="text-green-600">{event.price}</span>
        </p>
      )}
      {event.location && (
        <p className="text-lg font-medium text-gray-700 mb-2">
          Location: <span className="text-blue-600">{event.location}</span>
        </p>
      )}
      <p className="mt-6 text-gray-600">
        This event brings together enthusiasts from all over to celebrate, learn, and network. Don't miss it!
      </p>
    </div>
  );
}

export default EventDetails;
