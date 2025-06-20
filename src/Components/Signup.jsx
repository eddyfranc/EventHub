import { useState, useNavigate } from 'react';
import HomePage from "./Components/HomePage";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    alert(`Attempting to sign in with: ${email}`);
  };

  const navigate = useNavigate(); 
  
     const handleSignUpRedirect = () => {
      handleCloseModal(); // Close the modal first
      navigate('/HomePage'); // Navigate to the home page
    };

    const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  


  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('public/Images/background signup.png')" }}>
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50 px-4 py-8"> {/* Dark overlay and centering */}
        <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome!</h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-6">What's your email?</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md text-lg transition duration-300 ease-in-out"
            >
              Continue onClick={handleSignUpRedirect}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;