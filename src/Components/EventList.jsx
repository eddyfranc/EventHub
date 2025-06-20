import React, { useEffect, useState } from "react";
import axios from "axios";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = "YOUR_EVENTBRITE_API_TOKEN"; // Replace this with your actual token

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://www.eventbriteapi.com/v3/events/search/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              q: "technology", // search keyword
              "location.address": "Nairobi", // change as needed
              sort_by: "date",
            },
          }
        );
        setEvents(response.data.events);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
      {loading ? (
        <p>Loading events...</p>
      ) : (
        <ul className="space-y-4">
          {events.map((event) => (
            <li key={event.id} className="p-4 bg-white shadow rounded">
              <h2 className="text-xl font-semibold">{event.name.text}</h2>
              <p>{event.start.local}</p>
              <p>{event.venue?.address?.localized_address_display || "Venue TBD"}</p>
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View Event
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventList;
