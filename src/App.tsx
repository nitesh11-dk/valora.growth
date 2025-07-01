import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SubscriptionPlans from './components/SubscriptionPlans';
import InstagramTool from './components/InstagramTool';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <SubscriptionPlans />
      {/* <InstagramTool /> */}
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;