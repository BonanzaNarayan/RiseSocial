import React, { useState } from 'react';
import { FiMenu, FiX, FiShoppingCart, FiUser } from 'react-icons/fi';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const nav = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Place Order', path: '/place-order' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="animate-fade-in-down fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo with hover effect */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-purple-600 transition duration-300 hover:text-purple-700 cursor-pointer">
          RiseSocial
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {nav.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="text-gray-600 hover:text-purple-600 transition duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FiX className="h-6 w-6 text-gray-600" />
          ) : (
            <FiMenu className="h-6 w-6 text-gray-600" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4">
            <div className="container mx-auto px-4">
              {nav.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="block py-2 text-gray-600 hover:text-purple-600 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;