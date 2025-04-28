import React from 'react';
import Header from '../../components/Header';
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';// Adjust import path
import { services } from '../../data/services';
import { Helmet } from 'react-helmet';
import FloatingContact from '../../components/FloatingContact';
import Footer from '../../components/Footer';

function Services() {
  const getPlatformIcon = (platform) => {
    switch(platform) {
      case 'Instagram 📸': return <FaInstagram className="w-6 h-6 mr-2"/>;
      case 'TikTok 🎵': return <FaTiktok className="w-6 h-6 mr-2"/>;
      case 'YouTube 🎬': return <FaYoutube className="w-6 h-6 mr-2"/>;
      default: return null;
    }
  };

  return (
    <>
        <Helmet>
            <title>Services - RiseSocial</title>
            <meta name="description" content="Explore our range of social media services to boost your online presence." />
        </Helmet>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          {services.map((platformGroup, index) => (
            <section key={index} className="mb-20">
              <div className="flex items-center mb-8">
                {getPlatformIcon(platformGroup.platform)}
                <h2 className="text-3xl font-bold text-gray-800">
                  {platformGroup.platform.replace(/ 📸| 🎵| 🎬/g, '')} Services
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {platformGroup.services.map((service, sIndex) => (
                  <div 
                    key={sIndex}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        
                        <div className="flex items-center mb-4">
                          <span className="text-2xl font-bold text-purple-600">
                            ₵{service.sellingPrice}
                          </span>
                          <span className="ml-2 text-gray-500">{service.unit}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                            ✅ Real Users
                          </span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                            ⚡ Fast Delivery
                          </span>
                          <span className="px-2 py-1 bg-pink-100 text-pink-800 text-sm rounded-full">
                            🔒 No Password Needed
                          </span>
                        </div>
                      </div>
                      
                      <button
                      onClick={() => window.location.href=`/place-order?service=${service.name}&price=${service.sellingPrice}`}
                       className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors">
                        Buy Now (Min {service.minOrder.toLocaleString()})
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <FloatingContact />
      <Footer />
    </>
  );
}

export default Services;