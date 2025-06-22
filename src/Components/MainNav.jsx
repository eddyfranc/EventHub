import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Calendar, ArrowUpRight } from "lucide-react";
import Event from "@mui/icons-material/Event";

function MainNav() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef(null);

  const trendingSearches = [
    "tech events",
    "free events in nairobi",
    "fully funded international conferences for 2025",
    "free events",
    "singles party",
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 shadow-sm bg-white sticky top-0 z-50">
      {/* Left - Logo and Links */}
      <div className="flex items-center gap-4">
        <Link to="/" className="flex items-center text-xl font-bold text-orange-500">
          <Event className="text-2xl" />
          <div className="ml-1 text-sm text-black">EVENTHUB</div>
        </Link>
        <div className="border-l h-6 mx-4" />
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link to="/features" className="hover:text-green-700">Features</Link>
          <Link to="/enterprise" className="hover:text-green-700">Enterprise</Link>
          <Link to="/explore" className=" hover:text-green-700 font-semibold">Explore Events</Link>
        </div>
      </div>

      {/* Right - Search, Sign In, Create Event */}
      <div className="relative flex items-center gap-4" ref={searchRef}>
        {/* Search Input */}
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search for events"
            onFocus={() => setIsSearchFocused(true)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:outline-none transition text-sm"
          />
          {/* Dropdown */}
          {isSearchFocused && (
            <div className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-lg rounded-b-md mt-1 z-40">
              <div className="px-4 py-2 font-semibold text-gray-700 border-b">Trending Searches</div>
              <ul className="py-2">
                {trendingSearches.map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 cursor-pointer flex items-center gap-2"
                  >
                    <ArrowUpRight className="w-4 h-4 text-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sign In */}
        <Link
          to="/login"
          className="font-semibold hover:text-green-600 flex items-center"
        >
          Greetings! Sign in
          <ChevronDown className="w-4 h-4 ml-1" />
        </Link>

        {/* Create Event */}
        <Link
          to="/create"
          className="bg-orange-500 text-white px-4 py-2 rounded flex items-center hover:bg-green-600"
        >
          <Calendar className="w-4 h-4 mr-2" />
          Create Event
        </Link>
      </div>
    </nav>
  );
}

export default MainNav;
