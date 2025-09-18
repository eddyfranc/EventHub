import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword,} from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const [isNewUser, setIsNewUser] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "user", // added userType
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsFading(true);
        setTimeout(() => navigate("/"), 300);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [navigate]);

  useEffect(() => {
    if (success) {
      const timeout = setTimeout(() => setSuccess(""), 4000);
      return () => clearTimeout(timeout);
    }
  }, [success]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      if (isNewUser) {
        await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        setSuccess("Account created successfully. You can now log in.");
        setIsNewUser(false);
      } else {
        await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        setSuccess("Logged in successfully! Redirecting...");

        setTimeout(() => {
          if (formData.userType === "admin") {
            // Check if email matches admin criteria
            if (formData.email === "admin@eventhub.com") {
              navigate("/admindashboard");
            } else {
              setError("Access denied. Not an admin account.");
            }
          } else {
            navigate("/");
          }
        }, 1500);
      }
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setError("No account found. Please sign up first.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else if (err.code === "auth/email-already-in-use") {
        setError("This email is already in use. Please log in.");
        setIsNewUser(false);
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <div
        ref={modalRef}
        className={`bg-white rounded-2xl shadow-lg p-8 w-full max-w-md transition-all duration-500 ease-in-out ${
          isFading ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <div className="flex flex-col items-center mb-6">
          
        </div>
        <h2 className="text-3xl font-bold text-center mb-6 text-orange-500">
          {isNewUser ? "Sign Up" : "Login"}
        </h2>

        {error && (
          <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />

          {/* User Type Selector to Select wheteher is a User or Admin */}
          <select
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            value={formData.userType}
            onChange={(e) =>
              setFormData({ ...formData, userType: e.target.value })
            }
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md transition duration-300"
          >
            {isNewUser ? "Sign Up" : "Login"}
          </button>

          {success && (
            <div className="mt-3 text-green-600 text-sm text-center">
              {success}
            </div>
          )}
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => {
              setError("");
              setSuccess("");
              setIsNewUser(!isNewUser);
            }}
            className="text-orange-500 hover:underline font-medium"
          >
            {isNewUser ? "Already have an account? Login" : "New user? Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
