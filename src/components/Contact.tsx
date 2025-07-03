import React from 'react';
import { MessageCircle, Instagram, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919403080787', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/valoragrowth', '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your Instagram growth journey? Contact us today!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* WhatsApp Card */}
          <div
            onClick={handleWhatsAppClick}
            className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-green-300 transition-all duration-300 hover:shadow-xl cursor-pointer group"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">WhatsApp</h3>
                <p className="text-gray-600">Chat with us directly</p>
              </div>
            </div>
            <div className="text-2xl font-bold text-green-600 mb-2">+91 94030 80787</div>
            <p className="text-gray-600">Click to start a conversation on WhatsApp</p>
            <div className="mt-6 flex items-center text-green-600 font-medium group-hover:translate-x-2 transition-transform">
              <span>Chat Now</span>
              <MessageCircle className="h-4 w-4 ml-2" />
            </div>
          </div>

          {/* Instagram Card */}
          <div
            onClick={handleInstagramClick}
            className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-pink-300 transition-all duration-300 hover:shadow-xl cursor-pointer group"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center group-hover:from-purple-200 group-hover:to-pink-200 transition-colors">
                <Instagram className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Instagram</h3>
                <p className="text-gray-600">Follow us for tips</p>
              </div>
            </div>
            <div className="text-2xl font-bold text-purple-600 mb-2">@valoragrowth</div>
            <p className="text-gray-600">Follow for daily growth updates</p>
            <div className="mt-6 flex items-center text-purple-600 font-medium group-hover:translate-x-2 transition-transform">
              <span>Follow Now</span>
              <Instagram className="h-4 w-4 ml-2" />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 text-center shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Start Your Growth Journey</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who have already transformed their Instagram presence with Valora Growth
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <button
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Chat on WhatsApp</span>
            </button>
            <button 
            onClick={() => {
              const plansSection = document.getElementById('plans');
              if (plansSection) {
                plansSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              View Plans
            </button>
          </div>

          {/* Additional Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
            <div className="flex items-center justify-center space-x-3 text-gray-600">
              <Phone className="h-5 w-5" />
              <span>+91 94030 80787</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-600">
              <Mail className="h-5 w-5" />
              <span>valoragrowth@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;