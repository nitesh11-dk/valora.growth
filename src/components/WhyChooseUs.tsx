import React from 'react';
import { Target, Zap, Users, BarChart3 } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: '70% Organic Reach',
      description: 'Authentic growth through organic engagement strategies',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: '30% Boosted Reach',
      description: 'Strategic promotion to amplify your best content',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'from-yellow-50 to-yellow-100'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: '30-70% Real Audience Engagement',
      description: 'Genuine mixed audience followers who interact with your content',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      title: 'Weekly & Monthly Growth Reports',
      description: 'Detailed analytics to track your progress and optimize strategy',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine organic growth strategies with smart promotion to deliver real results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>

              {/* Decorative Gradient Line */}
              <div className={`w-12 h-1 bg-gradient-to-r ${benefit.color} rounded-full mt-6 group-hover:w-16 transition-all duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">99+</div>
              <div className="text-gray-600">Happy Creators</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10M+</div>
              <div className="text-gray-600">Views Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">12/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
