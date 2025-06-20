import Event from "@mui/icons-material/Event";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   console.log("Searching for:", searchQuery);
  // };

  const closeModal = () => {
    setShowSignup(false);
    setShowLogin(false);
  };

  return (
    <>
      <div className="relative flex min-h-screen flex-col bg-slate-50 overflow-x-hidden">
        <div className="flex flex-col flex-grow">
          <header className="flex items-center justify-between border-b border-[#e7edf4] px-10 py-3 bg-white">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4 text-black">
                <Event />
                <h2 className="text-lg font-bold text-black">EventHub</h2>
              </div>
              <nav className="flex items-center gap-9">
                <a href="#" className="text-sm font-medium text-black">
                  Browse
                </a>
                <a href="#" className="text-sm font-medium text-black">
                  Create Event
                </a>
                <a href="#" className="text-sm font-medium text-black">
                  Help
                </a>
              </nav>
            </div>
            <div className="flex flex-1 justify-end gap-8">
              <div className="flex items-center w-40 max-w-64 h-10">
                <div className="flex items-center justify-center bg-[#e7edf4] rounded-l-lg pl-4 h-full">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full h-full rounded-r-lg bg-[#e7edf4] text-black placeholder:text-[#49739c] px-2 text-base outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <button
                  className="h-10 px-4 bg-orange-500 text-white text-sm font-bold rounded-lg"
                  onClick={() => setShowSignup(true)}
                >
                  Sign Up
                </button>
                <button
                  className="h-10 px-4 bg-black text-orange-500 text-sm font-bold rounded-lg"
                  onClick={() => setShowLogin(true)}
                >
                  Log In
                </button>
              </div>
            </div>
          </header>
        </div>
      </div>

      {/* Sign Up Modal */}
      {showSignup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-sm space-y-4">
            <h2 className="text-xl font-bold text-orange-500 text-center">Sign Up</h2>
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 border rounded text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded text-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded text-black"
            />
            <button
              onClick={() => alert("Signed up!")}
              className="w-full bg-orange-500 text-white py-2 rounded font-bold"
            >
              Submit
            </button>
            <button
              onClick={closeModal}
              className="w-full text-sm text-gray-500 underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Log In Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-sm space-y-4">
            <h2 className="text-xl font-bold text-black text-center">Log In</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded text-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded text-black"
            />
            <button
              onClick={() => alert("Logged in!")}
              className="w-full bg-black text-orange-500 py-2 rounded font-bold"
            >
              Submit
            </button>
            <button
              onClick={closeModal}
              className="w-full text-sm text-gray-500 underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
