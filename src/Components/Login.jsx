import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const [isNewUser, setIsNewUser] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const [formData, setFormData] = useState({ email: "", password: "" });

  // Detect click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsFading(true); // Trigger fade-out animation
        setTimeout(() => {
          navigate("/"); // Navigate after fade completes
        }, 300); // Delay to allow fade-out to finish
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let userCredential;
      if (isNewUser) {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        alert("Signed up successfully!");
      } else {
        userCredential = await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        alert("Logged in successfully!");
      }

      console.log("User:", userCredential.user);
      navigate("/"); // Redirect to home
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/background signup.png')" }}
    >
      <div
        ref={modalRef}
        className={`bg-white rounded-2xl shadow-lg p-8 w-full max-w-md
    transition-all duration-500 ease-in-out 
    ${isFading ? "opacity-0 scale-95" : "opacity-100 scale-100"
                         
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-orange-500">
          {isNewUser ? "Sign Up" : "Login"}
        </h2>

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

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md transition duration-300"
          >
            {isNewUser ? "Sign Up" : "Login"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsNewUser(!isNewUser)}
            className="text-orange-500 hover:underline font-medium"
          >
            {isNewUser
              ? "Already have an account? Login"
              : "New user? Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
