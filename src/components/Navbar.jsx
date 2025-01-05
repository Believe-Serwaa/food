import React, { useState } from "react";
import { FaShoppingCart, FaUserPlus, FaAngleDown } from "react-icons/fa"; // FontAwesome icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage the dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (event) => {
    event.preventDefault(); // Prevent default link behavior
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  return (
    <nav className="bg-green-800 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold">
              Chopbox Express
            </a>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="/" className="hover:text-yellow-300">
              Home
            </a>
            <a href="/products" className="hover:text-yellow-300">
              Products
            </a>
            <a href="/about" className="hover:text-yellow-300">
              About Us
            </a>
            <a href="/contact" className="hover:text-yellow-300">
              Contact
            </a>

            {/* Signup Link without Icon */}
            <a
              href="/signup"
              className="hover:text-yellow-300"
            >
              Signup
            </a>

            {/* Direct Login Link */}
            <a
              href="/login"
              className="hover:text-yellow-300"
            >
              Login
            </a>

            {/* Cart Icon with Badge */}
            <a
              href="/cart"
              className="flex items-center space-x-2 hover:text-yellow-300 relative"
            >
              <FaShoppingCart />
              <span>Cart</span>
              {/* Optional: Add a cart item count */}
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 flex justify-center items-center rounded-full">
                2
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-700">
          <a
            href="/"
            className="block px-4 py-2 hover:bg-green-600 hover:text-yellow-300"
          >
            Home
          </a>
          <a
            href="/products"
            className="block px-4 py-2 hover:bg-green-600 hover:text-yellow-300"
          >
            Products
          </a>
          <a
            href="/about"
            className="block px-4 py-2 hover:bg-green-600 hover:text-yellow-300"
          >
            About Us
          </a>
          <a
            href="/contact"
            className="block px-4 py-2 hover:bg-green-600 hover:text-yellow-300"
          >
            Contact
          </a>
          <a
            href="/signup"
            className="block px-4 py-2 hover:bg-green-600 hover:text-yellow-300"
          >
            Signup
          </a>
          <a
            href="/login"
            className="block px-4 py-2 hover:bg-green-600 hover:text-yellow-300"
          >
            Login
          </a>
          <a
            href="/cart"
            className="block px-4 py-2 hover:bg-green-600 hover:text-yellow-300"
          >
            Cart
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
