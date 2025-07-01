import React, { useState } from 'react';
import { Check, Crown, Zap, Star } from 'lucide-react';

const SubscriptionPlans = () => {
  const [selectedDuration, setSelectedDuration] = useState('1 Month');

  const durations = ['1 Week', '1 Month', '3 Months'];

  const plans = {
    '1 Week': [
      {
        name: 'Basic',
        price: '₹799',
        originalPrice: '₹888',
        period: '/week',
        views: '10K+',
        likes: '1K+',
        reels: '2',
        popular: false,
        discount: '10% OFF',
        icon: <Zap className="h-6 w-6" />,
        features: [
          '10K+ views guaranteed',
          '1K+ likes per reel',
          'Up to 2 reels/day',
          '70% organic reach',
          'Basic analytics'
        ]
      },
      {
        name: 'Standard',
        price: '₹2,499',
        originalPrice: '₹3,124',
        period: '/week',
        views: '50K+',
        likes: '5K+',
        reels: '3',
        popular: true,
        discount: '20% OFF',
        icon: <Star className="h-6 w-6" />,
        features: [
          '50K+ views guaranteed',
          '5K+ likes per reel',
          'Up to 3 reels/day',
          '70% organic + 30% boosted',
          'Advanced analytics',
          'Priority support'
        ]
      },
      {
        name: 'Premium',
        price: '₹4,499',
        originalPrice: '₹6,427',
        period: '/week',
        views: '100K+',
        likes: '10K+',
        reels: '5',
        popular: false,
        discount: '30% OFF',
        icon: <Crown className="h-6 w-6" />,
        features: [
          '100K+ views guaranteed',
          '10K+ likes per reel',
          'Up to 5 reels/day',
          '70% organic + 30% boosted',
          'Premium analytics',
          'Dedicated account manager',
          'Growth strategy consultation'
        ]
      }
    ],
    '1 Month': [
      {
        name: 'Basic',
        price: '₹2,999',
        originalPrice: '₹3,528',
        period: '/month',
        views: '10K+',
        likes: '1K+',
        reels: '2',
        popular: false,
        discount: '15% OFF',
        icon: <Zap className="h-6 w-6" />,
        features: [
          '10K+ views guaranteed',
          '1K+ likes per reel',
          'Up to 2 reels/day',
          '70% organic reach',
          'Basic analytics'
        ]
      },
      {
        name: 'Standard',
        price: '₹9,999',
        originalPrice: '₹13,332',
        period: '/month',
        views: '50K+',
        likes: '5K+',
        reels: '3',
        popular: true,
        discount: '25% OFF',
        icon: <Star className="h-6 w-6" />,
        features: [
          '50K+ views guaranteed',
          '5K+ likes per reel',
          'Up to 3 reels/day',
          '70% organic + 30% boosted',
          'Advanced analytics',
          'Priority support'
        ]
      },
      {
        name: 'Premium',
        price: '₹17,999',
        originalPrice: '₹27,690',
        period: '/month',
        views: '100K+',
        likes: '10K+',
        reels: '5',
        popular: false,
        discount: '35% OFF',
        icon: <Crown className="h-6 w-6" />,
        features: [
          '100K+ views guaranteed',
          '10K+ likes per reel',
          'Up to 5 reels/day',
          '70% organic + 30% boosted',
          'Premium analytics',
          'Dedicated account manager',
          'Growth strategy consultation'
        ]
      }
    ],
    '3 Months': [
      {
        name: 'Basic',
        price: '₹9,499',
        originalPrice: '₹11,874',
        period: '/3 months',
        views: '10K+',
        likes: '1K+',
        reels: '2',
        popular: false,
        discount: '20% OFF',
        icon: <Zap className="h-6 w-6" />,
        features: [
          '10K+ views guaranteed',
          '1K+ likes per reel',
          'Up to 2 reels/day',
          '70% organic reach',
          'Basic analytics'
        ]
      },
      {
        name: 'Standard',
        price: '₹28,999',
        originalPrice: '₹41,427',
        period: '/3 months',
        views: '50K+',
        likes: '5K+',
        reels: '3',
        popular: true,
        discount: '30% OFF',
        icon: <Star className="h-6 w-6" />,
        features: [
          '50K+ views guaranteed',
          '5K+ likes per reel',
          'Up to 3 reels/day',
          '70% organic + 30% boosted',
          'Advanced analytics',
          'Priority support'
        ]
      },
      {
        name: 'Premium',
        price: '₹49,999',
        originalPrice: '₹83,332',
        period: '/3 months',
        views: '100K+',
        likes: '10K+',
        reels: '5',
        popular: false,
        discount: '40% OFF',
        icon: <Crown className="h-6 w-6" />,
        features: [
          '100K+ views guaranteed',
          '10K+ likes per reel',
          'Up to 5 reels/day',
          '70% organic + 30% boosted',
          'Premium analytics',
          'Dedicated account manager',
          'Growth strategy consultation'
        ]
      }
    ]
  };

  const currentPlans = plans[selectedDuration as keyof typeof plans];

  return (
    <section id="plans" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan for your Instagram growth journey
          </p>

          {/* Duration Selector */}
          <div className="flex justify-center mt-12">
            <div className="bg-gray-100 p-1 rounded-full">
              {durations.map((duration) => (
                <button
                  key={duration}
                  onClick={() => setSelectedDuration(duration)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedDuration === duration
                      ? 'bg-white text-purple-600 shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {duration}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl border-2 p-8 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? 'border-purple-300 shadow-lg scale-105'
                  : 'border-gray-200 hover:border-purple-200'
              }`}
            >
              {/* Discount Badge */}
              <div className="absolute -top-3 -right-3">
                <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg transform rotate-12">
                  {plan.discount}
                </div>
              </div>

              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  plan.name === 'Basic' ? 'bg-blue-100 text-blue-600' :
                  plan.name === 'Standard' ? 'bg-purple-100 text-purple-600' :
                  'bg-yellow-100 text-yellow-600'
                }`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center mb-2">
                  <span className="text-lg text-gray-500 line-through mr-2">{plan.originalPrice}</span>
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                  <span>{plan.views} views</span>
                  <span>•</span>
                  <span>{plan.likes} likes</span>
                  <span>•</span>
                  <span>{plan.reels} reels/day</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg transform hover:scale-105'
                  : 'border-2 border-gray-300 text-gray-700 hover:border-purple-300 hover:text-purple-600'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Highlight */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 px-6 py-3 rounded-full">
            <Star className="h-5 w-5 text-purple-600" />
            <span className="text-purple-700 font-medium">70% Organic Reach + 30% Boosted Reach</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;