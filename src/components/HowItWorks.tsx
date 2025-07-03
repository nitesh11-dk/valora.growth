import React from 'react';
import { Package, Upload, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Choose Your Package',
      description: 'Select the perfect plan that fits your growth goals and budget',
      icon: <Package className="h-8 w-8" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: 2,
      title: 'Upload Your Reels Consistently',
      description: 'Keep creating amazing content and we\'ll handle the growth',
      icon: <Upload className="h-8 w-8" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: 3,
      title: 'Watch Your Views & Followers Skyrocket',
      description: 'Track your organic growth with our 70% organic + 30% boosted strategy',
      icon: <TrendingUp className="h-8 w-8" />,
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started with our simple 3-step process and watch your Instagram grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform translate-x-1/2 z-0"></div>
              )}

              <div className="relative bg-white rounded-3xl p-8 text-center border-2 border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg z-10">
                {/* Step Number */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} text-white font-bold text-xl mb-6 shadow-lg`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} bg-opacity-10 text-gray-700 mb-6`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        
      </div>
    </section>
  );
};

export default HowItWorks;