import React, { useEffect, useState } from "react";

function Home() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const url =
        "https://eventbrite-api4.p.rapidapi.com/search_bycat?city=smyrna&state=ga&page=1&selected_date=Do_Not_Include&category=Business&selected_languages=Do_Not_Include&currency=Do_Not_Include&format=Do_Not_Include&price=Do_Not_Include";

      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": "115be28990mshc33651e7daab00bp1d7957jsnf8b4579955ec",
          "x-rapidapi-host": "eventbrite-api4.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error("Failed to fetch events.");
        const data = await response.json();
        setEvents(data?.data || []); // assuming API returns events in `data.data`
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>Error loading events: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {events.map((event, index) => (
        <div key={index} className="bg-white shadow-md p-4 rounded-lg">
          <img
            src={event?.logo || "https://via.placeholder.com/300"}
            alt={event?.title || "Event"}
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="text-lg font-semibold mt-2">{event?.title}</h2>
          <p className="text-sm text-gray-600">{event?.venue_name}</p>
          <p className="text-sm text-gray-500">{event?.start_time}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
