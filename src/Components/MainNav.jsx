import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {Calendar, ArrowUpRight, Menu, X } from "lucide-react";
import Event from "@mui/icons-material/Event";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

function MainNav() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [user, setUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchRef = useRef(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAuthClick = () => {
    if (user) {
      signOut(auth)
        .then(() => console.log("Signed out successfully"))
        .catch((error) => console.error("Sign out error", error));
    } else {
      window.location.href = "/login";
    }
  };

  const trendingSearches = [
    "tech events",
    "free events in nairobi",
    "fully funded international conferences for 2025",
    "free events",
    "singles party",
  ];

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        {/* Left Side: Logo + Links */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="flex items-center text-xl font-bold text-orange-500"
          >
            <Event className="text-2xl" />
            <span className="ml-1 text-sm text-black">EVENTHUB</span>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/features"
              className="text-sm font-medium hover:text-green-700"
            >
              Features
            </Link>
            <Link
              to="/explore"
              className="text-sm font-semibold hover:text-green-700"
            >
              Explore Events
            </Link>
          </div>
        </div>

        {/* Right Side: Search + Auth + Create */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search Input */}
          <div className="relative w-80" ref={searchRef}>
            <input
              type="text"
              placeholder="Search for events"
              onFocus={() => setIsSearchFocused(true)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:outline-none text-sm"
            />
            {isSearchFocused && (
              <div className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-lg rounded-b-md mt-1 z-40">
                <div className="px-4 py-2 font-semibold text-gray-700 border-b">
                  Popular events
                </div>
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

          {/* Auth */}
          <button
            onClick={handleAuthClick}
            className="text-sm font-semibold hover:text-green-600 flex items-center"
          >
            {user ? (
              <>
                <span className="hidden sm:inline text-sm mr-2 text-gray-700">
                  {user.email}
                </span>
                Sign out
              </>
            ) : (
              "Greetings! Sign in"
            )}
          </button>

          {/* Create Event */}
          {user ? (
            <Link
              to="/create"
              className="bg-orange-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-green-600 text-sm"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Create Event
            </Link>
          ) : (
            <button
              onClick={() => window.location.href = "/login"}
              className="bg-gray-300 text-gray-500 px-4 py-2 rounded-md flex items-center cursor-not-allowed text-sm"
              disabled
              title="Please sign in to create an event"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Create Event
            </button>
          )}
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 pt-2 border-t shadow-sm space-y-3">
          <Link
            to="/features"
            className="block text-sm font-medium text-gray-700 hover:text-green-700"
          >
            Features
          </Link>
          <Link
            to="/explore"
            className="block text-sm font-semibold text-gray-700 hover:text-green-700"
          >
            Explore Events
          </Link>

          <div className="w-full" ref={searchRef}>
            <input
              type="text"
              placeholder="Search for events"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:ring-green-500 focus:outline-none text-sm"
            />
          </div>

          <button
            onClick={handleAuthClick}
            className="block w-full text-left py-2 text-sm font-semibold text-gray-700 hover:text-green-600"
          >
            {user ? `Sign out (${user.email})` : "Greetings! Sign in"}
          </button>

          <Link
            to="/create"
            className="block w-full text-center bg-orange-500 text-white py-2 rounded-md hover:bg-green-600 text-sm"
          >
            Create Event
          </Link>
        </div>
      )}
    </nav>
  );
}

export default MainNav;
