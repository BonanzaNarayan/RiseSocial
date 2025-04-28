import React from 'react';
import Header from '../components/Header';
import { FaWhatsapp, FaEnvelope, FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { SiMessenger } from 'react-icons/si';
import FloatingContact from '../components/FloatingContact';
import Footer from '../components/Footer';

function ContactUs() {
  const whatsappNumber = '233445535925'; // Replace with your number
  const emailAddress = 'creednarayan@gmail.com';
  const phoneNumber = '+233445535925';

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Let's Connect! 🌟
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're here to help you grow. Reach out through any channel below - 
              our team typically responds within 15 minutes!
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* WhatsApp Card */}
            <a 
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <FaWhatsapp className="text-4xl text-green-500 group-hover:text-green-600 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-2">WhatsApp Chat</h3>
                <p className="text-gray-600 mb-4">
                  Fastest response time - click to start chatting
                </p>
                <div className="text-purple-600 font-medium">
                  +{whatsappNumber.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}
                </div>
              </div>
            </a>

            {/* Email Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <FaEnvelope className="text-4xl text-red-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">
                  For detailed inquiries and documentation
                </p>
                <a 
                  href={`mailto:${emailAddress}`}
                  className="text-purple-600 font-medium break-all hover:underline"
                >
                  {emailAddress}
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <FaPhone className="text-4xl text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">
                  Available 24/7 for urgent matters
                </p>
                <a 
                  href={`tel:${phoneNumber}`}
                  className="text-purple-600 font-medium hover:underline"
                >
                  {phoneNumber}
                </a>
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Business Hours */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Business Hours ⏰</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaClock className="text-purple-600" />
                  <span className="font-medium">Monday-Friday:</span> 8 AM - 10 PM GMT
                </div>
                <div className="flex items-center gap-3">
                  <FaClock className="text-purple-600" />
                  <span className="font-medium">Weekends:</span> 9 AM - 8 PM GMT
                </div>
                <div className="mt-4 text-gray-600">
                  * Emergency support available 24/7 via WhatsApp
                </div>
              </div>
            </div>

            {/* Office Location */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Our Office 📍</h2>
              <div className="flex items-start gap-3 mb-4">
                <FaMapMarkerAlt className="text-purple-600 mt-1" />
                <div>
                  <p className="font-medium">Social Boost HQ</p>
                  <p className="text-gray-600">Accra</p>
                  <p className="text-gray-600">Madina</p>
                </div>
              </div>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.191828490238!2d-0.1621063256448537!3d5.685394432336292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9cd8324bf92d%3A0x604581e1cec6013b!2sCorn%20Mill(factory)!5e0!3m2!1sen!2sgh!4v1745865507974!5m2!1sen!2sgh" allowfullscreen loading="lazy" className='w-full h-full'></iframe>
              </div>
            </div>
          </div>

          {/* Social Media CTA */}
          <div className="mt-16 text-center bg-purple-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Connect Socially 📱</h2>
            <p className="text-gray-600 mb-6">
              Follow us for updates, tips, and exclusive offers!
            </p>
            <div className="flex justify-center gap-4">
              <a href="https://wa.me/233445535925" className="text-purple-600 hover:text-purple-700 text-3xl">
                <SiMessenger />
              </a>
              {/* Add more social icons as needed */}
            </div>
          </div>
        </section>
      </main>
      <FloatingContact />
      <Footer />
    </>
  );
}

export default ContactUs;