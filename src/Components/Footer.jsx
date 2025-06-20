import React from 'react';
import Event from "@mui/icons-material/Event";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start">
        <Event/>
        <div className="text-orange-500 text-3xl font-bold mb-6 md:mb-0">
          EventHub
        </div>

        {/* Useful Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="index.html" className="text-gray-400 hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <a href="products.html" className="text-gray-400 hover:text-orange-500">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                About
              </a>
            </li>
            <li>
              <a href="contact.html" className="text-gray-400 hover:text-orange-500">
                Contact
              </a>
            </li>
        
          </ul>
        </div>

        {/* Email Newsletter */}
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-2">Email Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter and get 10% off your first purchase
          </p>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 text-gray-900 rounded focus:outline-none"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-6 pt-4">
        <hr className="border-t border-gray-700 mb-2" />
        <div className="text-center text-gray-400 text-sm">
          Copyright © 2025 - Eddy ⚡
        </div>
      </div>
    </footer>
  );
}

export default Footer;