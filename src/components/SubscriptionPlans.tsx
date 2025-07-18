import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Check, Crown, Zap, Star } from 'lucide-react';

const ICON_MAP = {
  zap: <Zap className="h-6 w-6 text-black" />,
  star: <Star className="h-6 w-6 text-black" />,
  crown: <Crown className="h-6 w-6 text-black" />,
};

const SubscriptionPlans = () => {
  const [selectedDuration, setSelectedDuration] = useState('1 Week');
  const [plans, setPlans] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const durations = ['1 Week', '1 Month', '3 Months'];

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setLoading(true);
        const res = await axios.get('http://localhost:5000/api/plans');
        setPlans(res.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load plans');
        setLoading(false);
      }
    };
    fetchPlans();
  }, []);

  if (loading) return <div className="text-center py-10">Loading plans...</div>;
  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select a plan that fits your Instagram growth journey
          </p>
        </div>
        <div className="flex justify-center mb-10">
          {durations.map((duration) => (
            <button
              key={duration}
              className={`mx-2 px-6 py-2 rounded-full font-semibold border transition-all duration-200 ${selectedDuration === duration ? 'bg-purple-600 text-white border-purple-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-purple-50'}`}
              onClick={() => setSelectedDuration(duration)}
            >
              {duration}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans[selectedDuration]?.map((plan: any, idx: number) => (
            <div
              key={plan.name}
              className={`rounded-2xl shadow-lg p-8 flex flex-col items-center ${plan.color}`}
            >
              <div className="mb-4">{ICON_MAP[plan.icon] || <Zap className="h-6 w-6 text-black" />}</div>
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-center mb-2">
                <span className="text-3xl font-bold mr-2">{plan.price}</span>
                <span className="text-gray-400 line-through mr-2">{plan.originalPrice}</span>
                <span className="bg-white text-purple-600 text-xs font-semibold px-2 py-1 rounded-full">{plan.discount}</span>
              </div>
              <div className="text-gray-600 mb-4">{plan.period}</div>
              <ul className="mb-6 space-y-2 text-left">
                {plan.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" /> {feature}
                  </li>
                ))}
              </ul>
              <button
                className="mt-auto bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  const msg = encodeURIComponent(plan.message);
                  window.open(`https://wa.me/919403080787?text=${msg}`, '_blank');
                }}
              >
                Start Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
