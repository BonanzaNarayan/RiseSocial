import React from 'react';
import Header from '../components/Header';
import { FaMousePointer, FaReceipt, FaUpload, FaRocket } from 'react-icons/fa';
import { FcMoneyTransfer } from 'react-icons/fc';
import { SiMatomo } from 'react-icons/si';
import { Helmet } from 'react-helmet';
import FloatingContact from '../components/FloatingContact';
import Footer from '../components/Footer';

function HowItWorks() {
  const steps = [
    {
      icon: <FaMousePointer className="w-8 h-8" />,
      title: "Choose & Order",
      description: "Select your preferred service and fill our simple order form"
    },
    {
      icon: <FaReceipt className="w-8 h-8" />,
      title: "Secure Payment",
      description: "Pay via Mobile Money or Bank Transfer"
    },
    {
      icon: <FaUpload className="w-8 h-8" />,
      title: "Upload Proof",
      description: "Submit your payment receipt screenshot"
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Instant Boost",
      description: "Watch your growth start immediately!"
    }
  ];

  return (
    <>
        <Helmet>
            <title>How It Works - RiseSocial</title>
            <meta name="description" content="Learn how to get started with our social media growth services." />
            
        </Helmet>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <section className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Getting Started is Easy Peasy! 🍐
            </h1>
            <p className="text-xl text-gray-600">
              Just 4 simple steps between you and social media growth
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative"
              >
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
                <div className="text-center">
                  <div className="flex justify-center text-purple-600 mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment Methods Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">Payment Options 💸</h2>
                <div className="flex items-center gap-4 mb-4">
                  <img src='https://c76c7bbc41.mjedge.net/wp-content/uploads/tc/2022/10/1648544928638.jpg' alt='' className="w-12 h-12 rounded-2xl" />
                  <FcMoneyTransfer className="w-12 h-12" />
                </div>
                <p className="text-gray-600">
                  We accept all major Mobile Money providers and bank transfers. 
                  You'll receive payment details immediately after ordering!
                </p>
              </div>
              <div className="flex-1">
                <img 
                  src="https://pbs.twimg.com/media/GIDNmNMW4AAWDkd.jpg" 
                  alt="Payment proof example"
                  className="rounded-lg border-2 border-gray-200"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Example payment proof screenshot
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4">Ready to Grow? 🌱</h3>
            <button onClick={()=> window.location.href = '/place-order'} className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors">
              Start Your Order Now
            </button>
            <p className="mt-4 text-gray-600">
              Average processing time: 15 minutes after confirmation ⏱️
            </p>
          </div>
        </section>
      </main>
      <FloatingContact />
      <Footer />
    </>
  );
}

export default HowItWorks;