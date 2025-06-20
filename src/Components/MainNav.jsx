import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Calendar } from "lucide-react";
import Event from "@mui/icons-material/Event";

function MainNav() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [triggerRect, setTriggerRect] = useState(null);
  const signInTriggerRef = useRef(null); // Ref for the "Greetings! Sign in" element
  const modalContentRef = useRef(null); // Ref for the modal's content div



  const navigate = useNavigate(); 

   const handleSignUpRedirect = () => {
    handleCloseModal(); // Close the modal first
    navigate('/signup'); // Navigate to the signup page
  };

  const handleSignInClick = (event) => {
    event.preventDefault();
    if (signInTriggerRef.current) {
      setTriggerRect(signInTriggerRef.current.getBoundingClientRect());
    }
    setIsModalOpen((prev) => !prev); // Toggle modal visibility
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Close modal if escape key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Close modal when clicking outside of it (excluding the trigger and modal content)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isModalOpen && // Only if modal is open
        signInTriggerRef.current &&
        !signInTriggerRef.current.contains(event.target) && // Click was not on the trigger
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target) // Click was not inside the modal content
      ) {
        handleCloseModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  // Calculate modal position dynamically based on the triggerRect
  const modalTop = triggerRect ? triggerRect.bottom + 10 : 60;
  const modalRight = triggerRect
    ? window.innerWidth - triggerRect.right + 20
    : 20;

  const modalStyle = triggerRect
    ? {
        position: "absolute",
        top: `${triggerRect.bottom + 10}px`,
        right: `${window.innerWidth - triggerRect.right}px`, // Align right edge of modal with right edge of trigger
        // Adjust left/transform if you need to fine-tune the arrow position
      }
    : {
        // Default styles if triggerRect is not available yet (e.g., on initial render)
        position: "absolute",
        top: "60px",
        right: "20px",
      };

  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 shadow-sm bg-white relative z-40">
      <div className="flex items-center gap-4">
        <Link
          to="/"
          className="flex items-center text-xl font-bold text-teal-500"
        >
          <span className="text-2xl font-extrabold">
            <Event />
          </span>
          <div className="flex flex-col ml-1 text-left">
            <span className="text-sm text-black">EVENTHUB</span>
          </div>
        </Link>
        <div className="border-l h-6 mx-4" />
        {/* Links */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link to="/features" className="hover:text-green-600">
            Features
          </Link>
          <div className="flex items-center hover:text-green-600 cursor-pointer">
            <Link to="/industry">Industry</Link>
            <ChevronDown className="w-4 h-4 ml-1" />
          </div>
          <Link to="/enterprise" className="hover:text-green-600">
            Enterprise
          </Link>
          <Link to="/explore" className="text-green-600 font-semibold">
            Explore Events
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center font-semibold hover:text-green-600 cursor-pointer relative">
          {" "}
          <Link
            to="#" // Prevent actual navigation
            ref={signInTriggerRef} // Attach the ref here
            onClick={handleSignInClick}
            className="flex items-center" // Ensure link behaves like button for click area
          >
            Greetings! Sign in
            <ChevronDown className="w-4 h-4 ml-1" />{" "}
            {/* Keep ChevronDown with the link */}
          </Link>
        </div>

        <Link
          to="/create"
          className="bg-orange-500 text-white px-4 py-2 rounded flex items-center hover:bg-green-600"
        >
          <Calendar className="w-4 h-4 mr-2" />
          Create Event
        </Link>
      </div>

      {/* The Modal Content (conditionally rendered) */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-start z-50 pt-[calc(3rem_+_10px)]" // Adjusted pt-value based on navbar height (px-6 py-3 approx 3rem)
          onClick={handleCloseModal} // Close modal when clicking on the overlay
        >
          <div
            ref={modalContentRef}
            className="bg-white p-6 rounded-lg shadow-xl text-center w-72 flex flex-col gap-4 relative"
            style={modalStyle} // Apply dynamic positioning
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
          >
            {/* Triangle arrow */}
            <div
              className="absolute w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-white"
              style={{ top: "-10px", right: "30px" }}
            ></div>

            <button className="bg-orange-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md text-lg transition-colors duration-300">
              Sign in
            </button>
            <p className="text-sm text-gray-600">
              New here?{" "}
              <a href="#" className="text-orange-500 font-bold hover:underline" onClick={handleSignUpRedirect}>
                Sign up
              </a>
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}

export default MainNav;
