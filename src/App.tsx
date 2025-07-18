import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import SubscriptionPlans from './components/SubscriptionPlans';
import InstagramTool from './components/InstagramTool';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<><Hero /><SubscriptionPlans /><HowItWorks /><WhyChooseUs />{<Testimonials />}<Contact /></>} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;