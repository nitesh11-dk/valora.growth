import React, { useState } from 'react';
import { Check, Crown, Zap, Star } from 'lucide-react';

const SubscriptionPlans = () => {
  const [selectedDuration, setSelectedDuration] = useState('1 Week');

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
        icon: <Zap className="h-6 w-6 text-black" />,
        color: 'bg-purple-600 hover:bg-purple-700 text-white',
        features: [
          '10K+ views guaranteed',
          '1K+ likes per reel',
          'Up to 2 reels/day',
          '70% organic + 30% boosted',
          'Basic analytics',
        ],
        message: `👋 Hello Valora Growth Team,

I am interested in your ⚡ Basic plan (1 Week):

• 👁 Views per Reel: 10K+
• ❤ Likes per Reel: 1K+
• 🎬 Max Reels per Day: 2
• 💰 Price: ₹799 per week

I would like to start this plan. Please share the payment details and let me know the next steps to begin. 🚀`
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
        icon: <Star className="h-6 w-6 text-black" />,
        color: 'bg-blue-600 hover:bg-blue-700 text-white',
        features: [
          '50K+ views guaranteed',
          '5K+ likes per reel',
          'Up to 3 reels/day',
          '70% organic + 30% boosted',
          'Advanced analytics',
        ],
        message: `👋 Hello Valora Growth Team,

I am interested in your ⭐ Standard plan (1 Week):

• 👁 Views per Reel: 50K+
• ❤ Likes per Reel: 5K+
• 🎬 Max Reels per Day: 3
• 💰 Price: ₹2,499 per week

I would like to start this plan. Please share the payment details and let me know the next steps to begin. 🚀`
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
        icon: <Crown className="h-6 w-6 text-black" />,
        color: 'bg-green-600 hover:bg-green-700 text-white',
        features: [
          '100K+ views guaranteed',
          '10K+ likes per reel',
          'Up to 5 reels/day',
          '70% organic + 30% boosted',
          'Advanced analytics',
        ],
        message: `👋 Hello Valora Growth Team,

I am interested in your 👑 Premium plan (1 Week):

• 👁 Views per Reel: 100K+
• ❤ Likes per Reel: 10K+
• 🎬 Max Reels per Day: 5
• 💰 Price: ₹4,499 per week

I would like to start this plan. Please share the payment details and let me know the next steps to begin. 🚀`
      }
    ],
    // Similarly update for '1 Month' and '3 Months' below

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
        icon: <Zap className="h-6 w-6 text-black" />,
        color: 'bg-purple-600 hover:bg-purple-700 text-white',
        features: [
          '10K+ views guaranteed',
          '1K+ likes per reel',
          'Up to 2 reels/day',
          '70% organic reach',
          'Basic analytics',
        ],
        message: `👋 Hello Valora Growth Team,

I am interested in your ⚡ Basic plan (1 Month):

• 👁 Views per Reel: 10K+
• ❤ Likes per Reel: 1K+
• 🎬 Max Reels per Day: 2
• 💰 Price: ₹2,999 per month

I would like to start this plan. Please share the payment details and let me know the next steps to begin. 🚀`
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
        icon: <Star className="h-6 w-6 text-black" />,
        color: 'bg-blue-600 hover:bg-blue-700 text-white',
        features: [
          '50K+ views guaranteed',
          '5K+ likes per reel',
          'Up to 3 reels/day',
          '70% organic + 30% boosted',
          'Advanced analytics',
        ],
        message: `👋 Hello Valora Growth Team,

I am interested in your ⭐ Standard plan (1 Month):

• 👁 Views per Reel: 50K+
• ❤ Likes per Reel: 5K+
• 🎬 Max Reels per Day: 3
• 💰 Price: ₹9,999 per month

I would like to start this plan. Please share the payment details and let me know the next steps to begin. 🚀`
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
        icon: <Crown className="h-6 w-6 text-black" />,
        color: 'bg-green-600 hover:bg-green-700 text-white',
        features: [
          '100K+ views guaranteed',
          '10K+ likes per reel',
          'Up to 5 reels/day',
          '70% organic + 30% boosted',
          'Advanced analytics',
        ],
        message: `👋 Hello Valora Growth Team,

I am interested in your 👑 Premium plan (1 Month):

• 👁 Views per Reel: 100K+
• ❤ Likes per Reel: 10K+
• 🎬 Max Reels per Day: 5
• 💰 Price: ₹17,999 per month

I would like to start this plan. Please share the payment details and let me know the next steps to begin. 🚀`
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
        icon: <Zap className="h-6 w-6 text-black" />,
        color: 'bg-purple-600 hover:bg-purple-700 text-white',
        features: [
          '10K+ views guaranteed',
          '1K+ likes per reel',
          'Up to 2 reels/day',
          '70% organic reach',
          'Basic analytics + 30% boosted',
        ],
        message: `👋 Hello Valora Growth Team,

I am interested in your ⚡ Basic plan (3 Months):

• 👁 Views per Reel: 10K+
• ❤ Likes per Reel: 1K+
• 🎬 Max Reels per Day: 2
• 💰 Price: ₹9,499 per 3 months

I would like to start this plan. Please share the payment details and let me know the next steps to begin. 🚀`
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
        icon: <Star className="h-6 w-6 text-black" />,
        color: 'bg-blue-600 hover:bg-blue-700 text-white',
        features: [
          '50K+ views guaranteed',
          '5K+ likes per reel',
          'Up to 3 reels/day',
          '70% organic + 30% boosted',
          'Advanced analytics',
        ],
        message: `👋 Hello Valora Growth Team,

I am interested in your ⭐ Standard plan (3 Months):

• 👁 Views per Reel: 50K+
• ❤ Likes per Reel: 5K+
• 🎬 Max Reels per Day: 3
• 💰 Price: ₹28,999 per 3 months

I would like to start this plan. Please share the payment details and let me know the next steps to begin. 🚀`
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
        icon: <Crown className="h-6 w-6 text-black" />,
        color: 'bg-green-600 hover:bg-green-700 text-white',
        features: [
          '100K+ views guaranteed',
          '10K+ likes per reel',
          'Up to 5 reels/day',
          '70% organic + 30% boosted',
          'Advanced analytics',
        ],
        message: `👋 Hello Valora Growth Team,

I am interested in your 👑 Premium plan (3 Months):

• 👁 Views per Reel: 100K+
• ❤ Likes per Reel: 10K+
• 🎬 Max Reels per Day: 5
• 💰 Price: ₹49,999 per 3 months

I would like to start this plan. Please share the payment details and let me know the next steps to begin. 🚀`
      }
    ]
  };

  const currentPlans = plans[selectedDuration];

  return (
    <section id="plans" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan for your Instagram growth journey
          </p>

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
          {currentPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl border-2 p-8 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? 'border-purple-300 shadow-lg scale-105'
                  : 'border-gray-200 hover:border-purple-200'
              }`}
            >
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
                  plan.name === 'Basic' ? 'bg-purple-100' :
                  plan.name === 'Standard' ? 'bg-blue-100' :
                  'bg-green-100'
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
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/919403080787?text=${encodeURIComponent(plan.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-block text-center py-4 rounded-full font-semibold transition-all duration-300 ${plan.color}`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
