// ContactPage.jsx
import React from "react";

export default function ContactPage() {
  return (
    <section className="min-h-screen px-6 py-16 md:px-20 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-8">Have any questions? We'd love to hear from you.</p>

        <div className="bg-gray-50 border rounded-lg p-6 mb-12">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Phone:</strong> +2547 620 190</li>
            <li><strong>Email:</strong> contact@eventhub.com</li>
            <li><strong>Help Center:</strong> <a href="#" className="text-teal-600 hover:underline">Visit Here</a></li>
          </ul>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name*"
              className="border rounded-md px-4 py-2 w-full"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border rounded-md px-4 py-2 w-full"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="border rounded-md px-4 py-2 w-full"
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            className="border rounded-md px-4 py-2 w-full"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border rounded-md px-4 py-2 w-full"
            required
          />
          <textarea
            placeholder="Message"
            className="border rounded-md px-4 py-2 w-full h-32"
            required
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-md transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
