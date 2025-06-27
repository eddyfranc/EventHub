import { useEffect, useState } from "react";


function HomePage() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const categories = [
    "Music",
    "Arts & Culture",
    "Sports",
    "Food & Drink",
    "Technology",
    "Business",
  ];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // tried to create backend fo my data to retrieve data from database, but we'll implement later
        const res = await axios.get("http://localhost:3000/api/events"); 
        const data = res.data;

        const mappedEvents = data.events.map((event) => ({
          title: event.name.text,
          category: event.category_id || "Uncategorized",
          date: new Date(event.start.local).toDateString(),
          location: event.venue?.address?.localized_address_display || "Unknown location",
          imageUrl: event.logo?.url || "https://via.placeholder.com/400x200?text=No+Image",
        }));

        setEvents(mappedEvents);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter
      ? event.category === categoryFilter
      : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="px-4 md:px-16 py-5 flex justify-center">
      <div className="max-w-[960px] w-full flex flex-col space-y-8">
        {/* Hero Section */}
        <div
          className="relative min-h-[480px] flex flex-col justify-center items-center p-4 rounded-lg bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('/Images/homeimage.png')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 rounded-lg" />
          <div className="relative max-w-2xl text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Discover events happening near you
            </h1>
            <p className="text-sm md:text-base mb-6">
              Explore concerts, workshops, festivals, and more. Find your next unforgettable experience.
            </p>
            <div className="flex flex-col md:flex-row max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search for events"
                className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="mt-2 md:mt-0 md:ml-2 px-4 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
                onClick={() => {}}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Browse by Category */}
        <section>
          <h2 className="text-[#0d141c] text-2xl font-bold mb-4 px-4">
            Browse by Category
          </h2>
          <div className="flex flex-wrap gap-3 px-4 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`h-8 px-3 rounded-lg ${
                  categoryFilter === cat
                    ? "bg-orange-500 text-white"
                    : "bg-[#e7edf4] text-[#0d141c]"
                } font-medium text-sm transition hover:bg-green-500 hover:text-white`}
              >
                {cat}
              </button>
            ))}
            {categoryFilter && (
              <button
                onClick={() => setCategoryFilter("")}
                className="ml-2 h-8 px-3 rounded-lg bg-gray-300 text-gray-700 font-medium text-sm transition hover:bg-gray-400"
              >
                All
              </button>
            )}
          </div>
        </section>

        {/* Upcoming Events */}
        <section>
          <h2 className="text-[#0d141c] text-2xl font-bold mb-4 px-4">
            Upcoming Events
          </h2>
          {filteredEvents.length === 0 ? (
            <p className="px-4 text-gray-500 mb-4">No events found.</p>
          ) : (
            filteredEvents.map((event, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 border-b last:border-b-0"
              >
                <div
                  className="w-full md:w-1/3 aspect-video bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url(${event.imageUrl})` }}
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{event.category}</p>
                  <p className="text-sm text-gray-500 mb-2">
                    {event.location} | {event.date}
                  </p>
                  <button
                    className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-green-700 transition"
                    onClick={() => alert(`Viewing details for ${event.title}`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </div>
  );
}

export default HomePage;
