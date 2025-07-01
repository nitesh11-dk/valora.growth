import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Fitness Coach',
      content: 'Valora Growth took my reels from 500 views to 50K+ consistently within weeks! The organic growth strategy really works.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      growth: '+10K followers'
    },
    {
      name: 'Rahul Gupta',
      role: 'Beauty Brand Owner',
      content: 'I loved their organic + boosted strategy. Real results for my skincare brand. My engagement rates have never been better!',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      growth: '+25K followers'
    },
    {
      name: 'Ananya Patel',
      role: 'Food Blogger',
      content: 'The team at Valora Growth understands the Indian audience perfectly. My food content now reaches thousands of engaged viewers daily.',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      growth: '+15K followers'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Creators Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful creators who have transformed their Instagram presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-12 w-12 text-purple-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-200"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-green-600">{testimonial.growth}</div>
                  <div className="text-xs text-gray-500">in 3 months</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Growth Showcase */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Join Them?</h3>
          <p className="text-xl mb-6 opacity-90">
            Start your Instagram growth journey today and see real results within weeks
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;