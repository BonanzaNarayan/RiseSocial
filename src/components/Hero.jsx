import React from 'react';
import { FaArrowRight, FaRegCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[800px] h-[800px] -top-[400px] -left-[400px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-rotate"></div>
        <div className="absolute w-[800px] h-[800px] -top-[300px] -right-[400px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-rotate-delayed"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-4 h-4 bg-purple-500 rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float 15s infinite ${i * 2}s`,
              transform: `scale(${Math.random() * 0.5 + 0.5})`
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
            Boost Your Social Media Presence
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Like Never Before
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Grow your followers, increase engagement, and dominate your niche with our powerful social media growth tools.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to='/services' className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all">
              Get Started Now
              <FaArrowRight className="mt-1" />
            </Link>
            <Link to='/how-it-works' className="border-2 border-gray-300 hover:border-purple-500 text-gray-700 px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all">
              How It Works
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-600">
            <FaRegCheckCircle className="text-purple-600" />
            <span>Trusted by 10,000+ social media creators</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;