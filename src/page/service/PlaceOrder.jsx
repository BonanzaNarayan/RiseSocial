import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaMoneyBillWave, FaUpload, FaWhatsapp } from 'react-icons/fa';
import { services } from '../../data/services'; // Import your services data
import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import FloatingContact from '../../components/FloatingContact';
import Footer from '../../components/Footer';

function PlaceOrder() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    service: '',
    quantity: '',
    link: '',
    paymentProof: null
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = 'Invalid email';
    if (!formData.whatsapp.match(/^\+\d{10,14}$/)) newErrors.whatsapp = 'Invalid WhatsApp number';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.quantity || formData.quantity < 100) newErrors.quantity = 'Minimum quantity is 100';
    if (!formData.link.match(/^(http|https):\/\/[^ "]+$/)) newErrors.link = 'Invalid URL';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Format the form data for WhatsApp
      const formattedMessage = `📝 *New Order Submission* 📝
  📛 *Name:* ${formData.name}
  📧 *Email:* ${formData.email}
  📱 *WhatsApp:* ${formData.whatsapp}
  🛍️ *Service:* ${formData.service}
  🔢 *Quantity:* ${formData.quantity}
  🔗 *Link:* ${formData.link}
      `;
  
      // Encode the message for WhatsApp URL
      const encodedMessage = encodeURIComponent(formattedMessage);
      const whatsappNumber = '233554435925'; // Replace with your actual WhatsApp number
      
      // Open WhatsApp with prefilled message
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
        '_blank'
      );
  
      // Optional: Clear form after submission
      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        service: '',
        quantity: '',
        link: '',
        paymentProof: null
      });
  
      // Show confirmation message
      alert('Please send the payment proof screenshot in the next message on WhatsApp!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
        <Helmet>
            <title>Place Order - RiseSocial</title>
            <meta name="description" content="Place your order for social media growth services." />
        </Helmet>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Order Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold mb-8 text-purple-600">Place Your Order</h1>
            
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-lg"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-gray-700 mb-2">WhatsApp Number *</label>
                <div className="flex items-center">
                  <FaWhatsapp className="text-green-500 mr-2" />
                  <input
                    type="tel"
                    placeholder="+1234567890"
                    className="w-full p-3 border rounded-lg"
                    value={formData.whatsapp}
                    onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
                  />
                </div>
                {errors.whatsapp && <p className="text-red-500 text-sm">{errors.whatsapp}</p>}
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Select Service *</label>
                <select
                  className="w-full p-3 border rounded-lg"
                  value={formData.service}
                  onChange={e => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="">Choose a service</option>
                  {services.map(platform =>
                    platform.services.map(service => (
                      <option key={service.name} value={service.name}>
                        {service.name} - ₵{service.sellingPrice}/{service.unit}
                      </option>
                    ))
                  )}
                </select>
                {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Quantity *</label>
                <input
                  type="number"
                  className="w-full p-3 border rounded-lg"
                  value={formData.quantity}
                  onChange={e => setFormData({ ...formData, quantity: e.target.value })}
                />
                {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity}</p>}
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Profile/Post Link *</label>
                <input
                  type="url"
                  placeholder="https://instagram.com/yourprofile"
                  className="w-full p-3 border rounded-lg"
                  value={formData.link}
                  onChange={e => setFormData({ ...formData, link: e.target.value })}
                />
                {errors.link && <p className="text-red-500 text-sm">{errors.link}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-4 rounded-lg font-bold hover:bg-purple-700 transition-colors"
              >
                Order Via WhatsApp
              </button>
            </div>
          </form>

          {/* Payment Instructions */}
          <div className="bg-purple-50 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-purple-800">Payment Instructions</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <img src='https://c76c7bbc41.mjedge.net/wp-content/uploads/tc/2022/10/1648544928638.jpg' alt='' className="w-12 h-12 mr-3" />
                  <h3 className="text-xl font-semibold">Mobile Money Payment</h3>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">MoMo Number: <span className="text-purple-600">0554435925</span></p>
                  <p className="text-sm text-gray-600">Name: Bonanza Kweku Narayan</p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="font-bold mb-2">Important Notes:</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Orders processed within 15 minutes of payment confirmation</li>
                  <li>Contact WhatsApp support for urgent orders</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FloatingContact />
      <Footer />
    </div>
  );
}

export default PlaceOrder;