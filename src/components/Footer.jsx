import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">RiseSocial</h3>
            <p className="text-gray-400">
              Grow your social presence with authentic engagement and real results.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition">Services</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaTwitter className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} SocialBoost. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;