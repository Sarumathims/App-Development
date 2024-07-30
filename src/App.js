// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Homepage from './Components/Home';
import Login from './Components/login';
import SignupPage from './Components/signup';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import AdminDashboard from './Components/AdminDashboard';
import CustomerDashboard from './Components/CustomerDashboard';
import ForgotPassword from './Components/ForgotPassword';
import AddPlanPage from './Components/AddPlanPage';
import PrepaidPlansPage from './Components/PrepaidPlans';
import PostpaidPlansPage from './Components/PostpaidPlans';
import RechargeFormPage from './Components/RechargePage';
import PrepaidRechargeFormPage from './Components/PrepaidRechargeForm';
import PostpaidConnection from './Components/PostpaidConnection';
import AdminPrepaidPlans from './Components/AdminPrepaidPlans';
import AdminPostpaidPlans from './Components/AdminPostpaidPlans';
import AdminAddOns from './Components/AdminAddOn';
import AdminRechargePage from './Components/AdminRechargePage';
import PaymentHistory from './Components/PaymentHistory';
import './App.css'; // Global styles

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/home" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/customer-dashboard" element={<CustomerDashboard />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/admin/add-plan" element={<AddPlanPage />} />
            <Route path="/prepaid-plans" element={<PrepaidPlansPage />} />
            <Route path="/postpaid-plans" element={<PostpaidPlansPage />} />
            <Route path="/recharge" element={<RechargeFormPage />} />
            <Route path="/prepaid-recharge" element={<PrepaidRechargeFormPage />} />
            <Route path="/get-postpaid-connection" element={<PostpaidConnection />} />
            {/* Admin specific routes */}
            <Route path="/admin/prepaid-plans" element={<AdminPrepaidPlans />} />
            <Route path="/admin/postpaid-plans" element={<AdminPostpaidPlans />} />
            <Route path="/admin/add-ons" element={<AdminAddOns />} />
            <Route path="/admin/recharge-history" element={<AdminRechargePage />} />
            <Route path="/payment-history" element={<PaymentHistory />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
