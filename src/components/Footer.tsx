import React from 'react';
import { Instagram, MessageCircle, Shield, FileText } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919403080787', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/valora.growth', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Instagram className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Valora Growth
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Helping creators grow their Instagram presence with authentic engagement and strategic promotion. 
              70% organic + 30% boosted reach for maximum impact.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleInstagramClick}
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('plans')}
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('tools')}
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Instagram Tools
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-2">
                  <FileText className="h-4 w-4" />
                  <span>Terms of Service</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Valora Growth. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Made with ❤️ in India</span>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>+91 94030 80787</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-center">
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">1000+ Happy Creators</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm">50M+ Views Generated</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-sm">95% Success Rate</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;