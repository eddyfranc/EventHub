// // import React, { useEffect, useState } from "react";

// // const categories = [
// //   "All",
// //   "Arts",
// //   "Business",
// //   "Music and Theater",
// //   "Community and Culture",
// //   "Sports and Fitness",
// //   "Education and Training",
// //   "More",
// // ];

// // const mockEvents = [
// //   {
// //     id: 1,
// //     title: "FNH - Stellars Group",
// //     location: "Burwood",
// //     category: "Community and Culture",
// //     price: "Free",
// //     dateLabel: "Multiple Dates",
// //     image: "https://placehold.co/300x200?text=Event+1"
// //   },
// //   {
// //     id: 2,
// //     title: "Paint and Sip Class in Brisbane",
// //     location: "Fortitude Valley",
// //     category: "Arts",
// //     price: "$79.00",
// //     dateLabel: "Multiple Dates",
// //     image: "https://placehold.co/300x200?text=Event+2"
// //   },
// //   {
// //     id: 3,
// //     title: "Hatha Yoga (Flagstone Community Centre)",
// //     location: "Flagstone",
// //     category: "Sports and Fitness",
// //     price: "Free",
// //     dateLabel: "Booking Ended",
// //     image: "https://placehold.co/300x200?text=Event+3"
// //   }
// // ];

// // export default function Exploreevents() {
// //   const [events, setEvents] = useState([]);
// //   const [query, setQuery] = useState("");
// //   const [selectedCategory, setSelectedCategory] = useState("All");

// //   useEffect(() => {
// //     const stored = localStorage.getItem("explore_events");
// //     if (!stored) {
// //       localStorage.setItem("explore_events", JSON.stringify(mockEvents));
// //       setEvents(mockEvents);
// //     } else {
// //       setEvents(JSON.parse(stored));
// //     }
// //   }, []);

// //   const filtered = events.filter((e) => {
// //     const inCategory = selectedCategory === "All" || e.category === selectedCategory;
// //     const inQuery = e.title.toLowerCase().includes(query.toLowerCase());
// //     return inCategory && inQuery;
// //   });

// //   return (
// //     <section className="px-6 py-12 md:px-20 bg-white min-h-screen">
// //       <h2 className="text-3xl font-bold text-gray-800 mb-4">
// //         Discover Events For All The Things You Love
// //       </h2>

// //       <div className="flex flex-col md:flex-row gap-4 mb-8">
// //         <input
// //           type="text"
// //           value={query}
// //           onChange={(e) => setQuery(e.target.value)}
// //           placeholder="Search Event"
// //           className="border p-2 rounded-md w-full md:w-1/2"
// //         />

// //         <select
// //           value={selectedCategory}
// //           onChange={(e) => setSelectedCategory(e.target.value)}
// //           className="border p-2 rounded-md w-full md:w-1/4"
// //         >
// //           {categories.map((cat) => (
// //             <option key={cat} value={cat}>{cat}</option>
// //           ))}
// //         </select>
// //       </div>

// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {filtered.map((event) => (
// //           <div
// //             key={event.id}
// //             className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
// //           >
// //             <img
// //               src={event.image}
// //               alt={event.title}
// //               className="w-full h-40 object-cover rounded-md mb-4"
// //             />
// //             <h3 className="font-semibold text-lg text-gray-800 mb-1">{event.title}</h3>
// //             <p className="text-sm text-gray-500 mb-1">{event.location}</p>
// //             <p className="text-sm text-gray-700 mb-1">{event.price}</p>
// //             <p className="text-xs text-gray-400">{event.dateLabel}</p>
// //           </div>
// //         ))}
// //       </div>

// //       {filtered.length === 0 && (
// //         <p className="text-center text-gray-500 mt-10">No events found.</p>
// //       )}
// //     </section>
// //   );
// // }


// import React, { useEffect, useState } from "react";

// const categories = [
//   "All",
//   "Arts",
//   "Business",
//   "Music and Theater",
//   "Community and Culture",
//   "Sports and Fitness",
//   "Education and Training",
//   "More",
// ];

// export default function Exploreevents() {
//   const [events, setEvents] = useState([]);
//   const [query, setQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   useEffect(() => {
//     const stored = localStorage.getItem("explore_events");

//     if (stored) {
//       try {
//         const parsedEvents = JSON.parse(stored);
//         if (Array.isArray(parsedEvents)) {
//           setEvents(parsedEvents);
//         }
//       } catch (e) {
//         console.error("Invalid JSON in localStorage");
//       }
//     }
//   }, []);

//   const filtered = events.filter((e) => {
//     const inCategory = selectedCategory === "All" || e.category === selectedCategory;
//     const inQuery = e.title.toLowerCase().includes(query.toLowerCase());
//     return inCategory && inQuery;
//   });

//   return (
//     <section className="px-6 py-12 md:px-20 bg-white min-h-screen">
//       <h2 className="text-3xl font-bold text-gray-800 mb-4">
//         Discover Events For All The Things You Love
//       </h2>

//       <div className="flex flex-col md:flex-row gap-4 mb-8">
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search Event"
//           className="border p-2 rounded-md w-full md:w-1/2"
//         />

//         <select
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           className="border p-2 rounded-md w-full md:w-1/4"
//         >
//           {categories.map((cat) => (
//             <option key={cat} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filtered.map((event) => (
//           <div
//             key={event.id}
//             className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
//           >
//             <img
//               src={event.image}
//               alt={event.title}
//               className="w-full h-40 object-cover rounded-md mb-4"
//             />
//             <h3 className="font-semibold text-lg text-gray-800 mb-1">
//               {event.title}
//             </h3>
//             <p className="text-sm text-gray-500 mb-1">{event.location}</p>
//             <p className="text-sm text-gray-700 mb-1">{event.price}</p>
//             <p className="text-xs text-gray-400">{event.dateLabel}</p>
//           </div>
//         ))}
//       </div>

//       {filtered.length === 0 && (
//         <p className="text-center text-gray-500 mt-10">No events found.</p>
//       )}
//     </section>
//   );
// }



import React, { useEffect, useState } from "react";

const categories = [
  "All",
  "Arts",
  "Business",
  "Music and Theater",
  "Community and Culture",
  "Sports and Fitness",
  "Education and Training",
  "More",
];

export default function Exploreevents() {
  const [events, setEvents] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    try {
      const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
      const formattedEvents = storedEvents.map((event, index) => ({
        id: event.id || index,
        title: event.name || "Untitled Event",
        category: event.categories?.[0] || "Uncategorized",
        location: event.venue || event.location || "Venue not specified",
        price: event.price || "Free",
        dateLabel: event.startDate || "Date not set",
        image: event.eventImagePreview || "https://placehold.co/300x200?text=Event",
      }));
      setEvents(formattedEvents);
    } catch (error) {
      console.error("Error loading events from localStorage:", error);
    }
  }, []);

  const filtered = events.filter((e) => {
    const inCategory = selectedCategory === "All" || e.category === selectedCategory;
    const inQuery = e.title.toLowerCase().includes(query.toLowerCase());
    return inCategory && inQuery;
  });

  return (
    <section className="px-6 py-12 md:px-20 bg-white min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Discover Events For All The Things You Love
      </h2>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Event"
          className="border p-2 rounded-md w-full md:w-1/2"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded-md w-full md:w-1/4"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((event) => (
          <div
            key={event.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-40 object-cover rounded-md mb-4"
              onError={(e) => {
                e.target.src = "https://placehold.co/300x200?text=Event";
              }}
            />
            <h3 className="font-semibold text-lg text-gray-800 mb-1">{event.title}</h3>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Category:</strong> {event.category}
            </p>
            {/* <p className="text-sm text-gray-600 mb-1">
              <strong>Venue:</strong> {event.venue}
            </p> */}
            <p className="text-sm text-gray-600 mb-1">
              <strong>Price:</strong> {event.price}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Date:</strong> {event.dateLabel}
            </p>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No events found.</p>
      )}
    </section>
  );
}
