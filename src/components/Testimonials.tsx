import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
     
    },
    {
      
    },
    {
      
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        

        {/* Growth Showcase */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Join Us?</h3>
          <p className="text-xl mb-6 opacity-90">
            Start your Instagram growth journey today and see real results within weeks
          </p>
          <button
          onClick={() => {
            const plansSection = document.getElementById('plans');
            if (plansSection) {
              plansSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;