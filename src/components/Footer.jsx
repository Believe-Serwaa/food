import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import social media icons

function Footer() {
  return (
    <footer className="bg-green-800 text-white py-6 text-center">
      <p>&copy; 2024 Chopbox Express. All rights reserved.</p>
      <p>Contact us at chopbox.express@gmail.com</p>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mt-4">
        <a
          href="https://www.facebook.com/chopboxexpress"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300"
        >
          <FaFacebook size={30} />
        </a>
        <a
          href="https://twitter.com/chopboxexpress"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300"
        >
          <FaTwitter size={30} />
        </a>
        <a
          href="https://www.instagram.com/chopboxexpress"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300"
        >
          <FaInstagram size={30} />
        </a>
      </div>

      {/* Useful Links Section */}
      <div className="mt-6">
        <h3 className="text-lg font-bold">Useful Links</h3>
        <div className="flex justify-center flex-wrap gap-6 mt-2">
          <a href="/privacy-policy" className="hover:text-yellow-300">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:text-yellow-300">
            Terms of Service
          </a>
          <a href="/faq" className="hover:text-yellow-300">
            FAQ
          </a>
          <a href="/contact-us" className="hover:text-yellow-300">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
