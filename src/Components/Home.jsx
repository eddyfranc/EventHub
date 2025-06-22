import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Marquee from "react-fast-marquee";

// Dummy data for event categories
const categories = [
  { name: "Music", icon: "🎵" },
  { name: "Business", icon: "💼" },
  { name: "Food", icon: "🍽️" },
  { name: "Tech", icon: "💻" },
  { name: "Art", icon: "🎨" },
  { name: "Sports", icon: "🏀" },
];

// Dummy data for upcoming events
const events = [
  {
    title: "Global Music Fest",
    date: "July 20, 2025",
    category: "Music",
    image: "https://source.unsplash.com/600x400/?concert",
  },
  {
    title: "Startup Growth Summit",
    date: "Aug 5, 2025",
    category: "Business",
    image: "https://source.unsplash.com/600x400/?conference",
  },
  {
    title: "TechXpo 2025",
    date: "Sep 12, 2025",
    category: "Technology",
    image: "https://source.unsplash.com/600x400/?technology",
  },
  {
    title: "Culinary Arts Festival",
    date: "Oct 1, 2025",
    category: "Food",
    image: "https://source.unsplash.com/600x400/?food-festival",
  },
  {
    title: "Digital Art Exhibition",
    date: "Nov 3, 2025",
    category: "Art",
    image: "https://source.unsplash.com/600x400/?art-exhibition",
  },
  {
    title: "Basketball Championship",
    date: "Dec 10, 2025",
    category: "Sports",
    image: "https://source.unsplash.com/600x400/?basketball-game",
  },
];

// Dummy data for testimonials
const testimonials = [
  "EventHub made planning my event seamless and fun!",
  "Reliable, polished, and perfect for promoting local experiences!",
  "Highly intuitive interface. This platform is a game changer!",
  "Finding relevant events has never been easier. Highly recommend!",
  "The best platform for professional networking events.",
  "Fantastic support and great features for event organizers.",
];

// Animation variants
const itemStaggerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function Home() {
  const categoriesRef = useRef(null);
  const categoriesInView = useInView(categoriesRef, { once: true, amount: 0.3 });

  const eventsRef = useRef(null);
  const eventsInView = useInView(eventsRef, { once: true, amount: 0.3 });

  const testimonialsRef = useRef(null);
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 });

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-32 px-6 overflow-hidden">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
            Discover & Host{" "}
            <span className="text-orange-300 drop-shadow-lg">Incredible Events</span>
          </h1>
          <p className="text-xl sm:text-2xl font-light mb-10">
            Powering communities, businesses, and creatives around the world.
          </p>
          <a
            href="#"
            className="bg-orange-500 hover:bg-orange-600 transition px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore Events
          </a>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section ref={categoriesRef} className="py-20 px-6 max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-10 text-gray-900"
          variants={sectionVariants}
          initial="hidden"
          animate={categoriesInView ? "visible" : "hidden"}
        >
          Popular Categories
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={itemStaggerVariants}
              initial="hidden"
              animate={categoriesInView ? "visible" : "hidden"}
              whileHover={{ scale: 1.08 }}
              className="bg-white shadow hover:shadow-lg rounded-xl p-6 transition-transform cursor-pointer border border-gray-100 flex flex-col items-center justify-center"
            >
              <div className="text-4xl mb-2" role="img" aria-label={cat.name}>{cat.icon}</div>
              <h3 className="text-sm font-medium text-gray-800">{cat.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section ref={eventsRef} className="py-20 bg-white px-6 max-w-7xl mx-auto rounded-xl shadow-inner">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gray-900"
          variants={sectionVariants}
          initial="hidden"
          animate={eventsInView ? "visible" : "hidden"}
        >
          Upcoming Events
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <motion.article
              key={index}
              custom={index}
              variants={itemStaggerVariants}
              initial="hidden"
              animate={eventsInView ? "visible" : "hidden"}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-xl transition-all border border-gray-200"
            >
              <img
                src={event.image}
                alt={`Event poster for ${event.title}`}
                className="w-full h-48 object-cover object-center"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/600x400/cccccc/333333?text=Event";
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{event.title}</h3>
                <p className="flex items-center gap-2 text-gray-600 text-sm mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar">
                    <path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/>
                  </svg>
                  {event.date}
                </p>
                <p className="text-sm font-medium text-orange-600 mb-4">{event.category}</p>
                <a href="#" className="inline-flex items-center text-teal-600 hover:text-teal-800 font-semibold transition group">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="#" className="inline-flex items-center text-indigo-700 font-semibold hover:underline group">
            View All Events
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-20 bg-gray-50 px-6 max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gray-900"
          variants={sectionVariants}
          initial="hidden"
          animate={testimonialsInView ? "visible" : "hidden"}
        >
          What Our Users Say
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((text, i) => (
            <motion.blockquote
              key={i}
              custom={i}
              variants={itemStaggerVariants}
              initial="hidden"
              animate={testimonialsInView ? "visible" : "hidden"}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="flex items-center mb-3 text-yellow-400">
                {[...Array(5)].map((_, idx) => (
                  <svg key={idx} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="lucide lucide-star">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic text-base">"{text}"</p>
              <footer className="mt-4 text-sm font-semibold text-gray-600">— User {i + 1}</footer>
            </motion.blockquote>
          ))}
        </div>
      </section>

      {/* Footer Marquee */}
      <footer className="sticky bottom-0 z-40">
        <Marquee
          gradient={false}
          speed={60}
          className="bg-green-700 text-white py-3 text-sm font-medium shadow-lg"
        >
          🚀 New: Real-time analytics dashboard &nbsp; | &nbsp; 🎟️ Secure ticketing now live
          &nbsp; | &nbsp; 🤖 AI-driven event promotion tools available &nbsp; | &nbsp; 💬
          Community chatrooms for hosts &nbsp; | &nbsp; ✨ Optimized for mobile experience
        </Marquee>
      </footer>
    </div>
  );
}

export default Home;
