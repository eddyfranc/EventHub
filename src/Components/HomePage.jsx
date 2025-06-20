import { useState } from "react";
import axios from 'axios'



function HomePage() {

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const categories = [ "Music", "Arts & Culture", "Sports", "Food & Drink", "Technology", "Business",];

  const events = [ { title: "Indie Rock Night", category: "Music", date: "Jul 16, 2025", location: "The Roxy, London",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAFRfUHMC6S4D08dF_B6uICVvRg2_g9V--jDMMEOihV9PwvCRS7Bz75tS64NMYL5JHg4S2QRr_AojzWM6tzOdCKysoxOsyS0Avjwe1GZBcPOd1tNkHoy9qHeY5zGhNDB_ROdRoG7QSqtjI1RP3kvrCkHBuQpO6AlWWzZIbjC6mEL5CT5DLFe25EQLBvoQPdeAVgqxTylm2Nw2pgZ8kMlLPAP4yaznaXi8LyvXc1Pz2DKFp_R1fWKvO_E-kx_0YvgwIvshRHN-wGXBZx",
    },

    
    {
      title: "Modern Art Symposium",
      category: "Arts & Culture",
      date: "June 23, 2024",
      location: "National Gallery, London",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD-ON0YEpqXCBjs3lV8QBsq5nOo7hpwT1MOpvrKVwUVers780oEYD1HZF3idY8PSRh7dYSuaysJ08JuClbRpvVGsWWzG31ETQi_UsN6177_YIcIrW9nf-uJodMWy4nVfyxwrmF2x5DsJeNL2QCxZ49MePNSAvHqcFtGBzK9nXyuaugXciqEdudJUuDTxMGoTmqcZ_Pc38Sz89xKmYxUkvGeq6uYko-cd14vMdbGDE7bf8i6u0uQl8WzBL9jGJ3w2umSDE4ZP-nFTtyl",
    },
    {
      title: "City Marathon",
      category: "Sports",
      date: "Jul 22, 2024",
      location: "City Center, London",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC19kQe1BMFLNENeQciQVlhcaXPeLnd02SUq7raDA8cZuwzMlqKIgl6C6EeVm-cStdBA-8Hg8SkCwYnWz3tyHEr3gz5vcze_8lj1KHeR7qp458RYK-4KyguliIbJLZIHp9v6y6FfVIuQk-s6wKKcLsjAHXjDJ1fcCMa_p6nZCudq6GDDr4q3lmkcE53uYJX5nTlv7FcG2ICTBngru3CnqsRgHOY38zbdSoU_nNAeoxuhcn_6ODN8RMDygCYkFS1Jjg3OdMxlXGaqheI",
    },
    {
      title: "Summer Wine Tasting",
      category: "Food & Drink",
      date: "Jul 25, 2024",
      location: "Vineyard Estate, London",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCQlAJXmwmB0sXapsbTTwQSFGjIFZ5KRsgrrx38X3N5kvqH7Xskol-nRmnpUPHAzXhfd0XkC6ZrCbW40S5U2QYHJIPOG4reUJ9WC_f7bCpgUJaCx3sDcLurKtttLp-WcAQzcVUsF21h7RtYljIzySVH2CB_7_LS49E09aeETid6KCcc6sEJMQ61taMmbp5e5XLaFKnCpWaiGMqaW-YPGFDcZh1rC9hpK-yxpxvPMVdm9sBGax0Zh_fAQezJDzif2bTnEZe5PYWEwtJA",
    },
  ];

  // Filter events based on search term and selected category
  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter
      ? event.category === categoryFilter
      : true;
    return matchesSearch && matchesCategory;
  });


  axios.get('https://www.eventbriteapi.com/v3/users/me/?token=VP5DL2P4TIULES5JXKGJ')
  .then(response => {console.log(response.data)})
  .catch(error => {console.log(error)})

  return (
    <div className="px-4 md:px-16 py-5 flex justify-center">
      <div className="max-w-[960px] w-full flex flex-col space-y-8">
        {/* Hero Section */}
        <div
          className="relative min-h-[480px] flex flex-col justify-center items-center p-4 rounded-lg bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9YX2MPSK9KBYK0b5rORxMwcjuFes5M6-fFCWzulmKV4O1Gf3J1pHHhvYl4z4EFeUoRRR0mIPKgs3oJ43RTSK4KZFB_MbNG0PUE80Qca7Hskj1j30VdZ_bLwrsmt5KsRBSIiWr7AtOhvq5eFV7gZvxfRwO0UXIYofIGiVTYf5f9tLdpjiPk9hiwuQjwi_GF6UeRm3n8IZoZocqajt01SU89iHXj5ym4RZs6Ghjg_aEt6PFL-E4Wh8mw-MG1OBoj8t7-GkX9fQxpuDV')",
          }}
        >
          {/* Overlay for gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 rounded-lg" />

          {/* Content */}
          <div className="relative max-w-2xl text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter mb-4">
              Discover events happening near you
            </h1>
            <p className="text-sm md:text-base font-normal leading-normal mb-6">
              Explore a wide range of events, from concerts and workshops to sports and festivals. Find your next unforgettable experience.
            </p>
            {/* Search Input */}
            <div className="flex flex-col md:flex-row max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search for events"
                className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="mt-2 md:mt-0 md:ml-2 px-4 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-green-500 transition"
                onClick={() => alert(`Searching for "${searchTerm}"`)}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Featured Events */}
        <section>
          <h2 className="text-[#0d141c] text-2xl font-bold mb-4 px-4">
            Featured Events
          </h2>
          <div className="flex overflow-x-auto space-x-4 px-4 scrollbar-hide">
            {events.map((event, index) => (
              <div key={index} className="min-w-[240px] flex flex-col rounded-lg overflow-hidden shadow-lg bg-white">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${event.imageUrl})` }}
                />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.category}</p>
                    <p className="text-sm text-gray-500">{event.location} | {event.date}</p>
                  </div>
                  <button
                    className="mt-4 bg-orange-600 text-white py-2 px-4 rounded hover:bg-green-500 transition"
                    onClick={() => alert(`Viewing ${event.title}`)}
                  >
                    View Event
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

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
                  categoryFilter === cat ? "bg-orange-500 text-white" : "bg-[#e7edf4] text-[#0d141c]"
                } font-medium text-sm transition hover:bg-green-500 hover:text-white`}
              >
                {cat}
              </button>
            ))}
            {/* Optional: clear filter button */}
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
              <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 border-b last:border-b-0">
                <div
                  className="w-full md:w-1/3 aspect-video bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url(${event.imageUrl})` }}
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{event.category}</p>
                  <p className="text-sm text-gray-500 mb-2">{event.location} | {event.date}</p>
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