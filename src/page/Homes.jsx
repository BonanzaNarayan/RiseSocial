import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { FaRocket, FaWallet, FaChartLine, FaQuoteLeft, FaRegCheckCircle, FaShieldAlt, FaClock } from 'react-icons/fa';
import { SiInstagram, SiTiktok, SiYoutube } from 'react-icons/si';
import { Helmet } from 'react-helmet';
import FloatingContact from '../components/FloatingContact';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

// Why Choose Us Component
const WhyChooseUs = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <FaRocket className="w-12 h-12 mb-4 text-purple-600" />,
            title: "Lightning Speed",
            text: "Get results faster than traditional growth methods. See noticeable changes within 48 hours of starting your campaign."
          },
          {
            icon: <FaWallet className="w-12 h-12 mb-4 text-green-600" />,
            title: "Affordable Pricing",
            text: "Premium services that fit any budget. Starting at just $2.99 - cheaper than your morning coffee!"
          },
          {
            icon: <FaChartLine className="w-12 h-12 mb-4 text-blue-600" />,
            title: "Real Results",
            text: "100% authentic engagement from real users. No bots, no fake accounts, just measurable growth."
          }
        ].map((item, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            {item.icon}
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Top Services Component
const TopServices = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-16">Our Top Services</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {[
          {
            platform: <SiInstagram className="w-8 h-8 mr-2 text-pink-600" />,
            title: "Instagram Followers",
            price: "GH50/1k",
            features: ["High-Quality Profiles", "Instant Delivery", "24/7 Support"]
          },
          {
            platform: <SiTiktok className="w-8 h-8 mr-2 text-black" />,
            title: "TikTok Views",
            price: "GH65/10k",
            features: ["Organic Engagement", "Safe & Secure", "Real Users"]
          },
          {
            platform: <SiYoutube className="w-8 h-8 mr-2 text-red-600" />,
            title: "YouTube Subscribers",
            price: "GH200/1000",
            features: ["Active Accounts", "Gradual Growth", "Lifetime Guarantee"]
          }
        ].map((service, index) => (
          <div key={index} className="border rounded-xl p-6 hover:border-purple-500 transition-colors">
            <div className="flex items-center mb-4">
              {service.platform}
              <h3 className="text-xl font-bold">{service.title}</h3>
            </div>
            <div className="text-3xl font-bold mb-4">{service.price}</div>
            <ul className="space-y-2 mb-6">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <FaRegCheckCircle className="text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <button onClick={()=>window.location.href = '/place-order'} className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Testimonials Component
const Testimonials = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-16">Success Stories</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            text: "Within a week of using RiseSocial, my Instagram following tripled! The engagement on my posts is now through the roof.",
            author: "Sarah Johnson",
            role: "Influencer"
          },
          {
            text: "Best investment I've made for my business. The TikTok views package helped me go viral twice this month!",
            author: "Mike Chen",
            role: "Content Creator"
          },
          {
            text: "Authentic growth at affordable prices. My YouTube channel finally hit 10k subscribers thanks to their services!",
            author: "Emma Wilson",
            role: "YouTuber"
          },
          {
            text: "The customer support team is amazing. They helped me customize a growth plan that perfectly fits my needs.",
            author: "David Martinez",
            role: "Social Media Manager"
          }
        ].map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
            <FaQuoteLeft className="text-gray-400 text-2xl mb-4" />
            <p className="text-gray-600 mb-6">{testimonial.text}</p>
            <div className="font-bold">{testimonial.author}</div>
            <div className="text-gray-500">{testimonial.role}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Place Order CTA Component
const PlaceOrderCTA = () => (
  <section className="relative py-20 bg-gradient-to-r from-purple-600 to-pink-600 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 opacity-20">
    {[...Array(5)].map((_, i) => (
      <div 
        key={i}
        className="absolute w-8 h-8 bg-white rounded-full animate-float"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${i * 2}s`,
          transform: `scale(${Math.random() * 0.5 + 0.5})`
        }}
      ></div>
    ))}
  </div>

  <div className="container mx-auto px-4 text-center relative z-10">
    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
      Ready to Dominate Social Media?
    </h2>
    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
      Join 10,000+ satisfied creators growing their platforms daily
    </p>

    <button onClick={()=> window.location.href = '/services'} className="group relative bg-white text-purple-600 px-16 py-6 rounded-full text-2xl font-bold hover:scale-105 transition-transform duration-300 shadow-2xl hover:shadow-3xl">
      <div className="flex items-center gap-3">
        <FaRocket className="inline-block animate-bounce group-hover:animate-none"/>
        Start Growing Now
        <span className="absolute -right-4 -top-4 bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-sm transform rotate-12 shadow-md">
          🔥 24H Sale!
        </span>
      </div>
    </button>

    {/* Trust badges */}
    <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-white/80">
      <div className="flex items-center gap-2">
        <FaShieldAlt className="text-green-400"/>
        <span>100% Secure Payments</span>
      </div>
      <div className="flex items-center gap-2">
        <FaClock className="text-blue-400"/>
        <span>Instant Delivery</span>
      </div>
    </div>
  </div>
</section>
);

function Home() {
  return (
    <>
      {/* SEO React Helmet */}
      <Helmet>
        <title>RiseSocial - Boost Your Social Media Presence</title>
        <meta name="description" content="Boost your social media presence with SocialBoost. Affordable, fast, and real results!" />
        <meta name="keywords" content="social media, growth, followers, engagement, boost" />
        <meta name="author" content="SocialBoost" />
        <meta property="og:title" content="SocialBoost - Boost Your Social Media Presence" />
        <meta property="og:description" content="Boost your social media presence with RiseSocial. Affordable, fast, and real results!" />
      </Helmet >
      <Header />
      <Hero />
      <main>
        <WhyChooseUs />
        <TopServices />
        <PlaceOrderCTA />
        <Testimonials />
      </main>
      <FloatingContact />
      <Footer />
    </>
  );
}

export default Home;