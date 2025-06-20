import { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData,
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    alert("User data saved successfully!");
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form
        onSubmit={handleSubmit}
        className="bg-orange-500 text-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6"
      >
        <h1 className="text-3xl font-bold text-center">Sign Up</h1>


        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 rounded text-black"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="p-2 rounded text-black"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-black hover:bg-gray-800 text-orange-500 font-bold py-2 px-4 rounded transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
