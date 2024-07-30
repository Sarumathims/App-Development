import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import AdminPrepaidPlans from './AdminPrepaidPlans';
import AdminPostpaidPlans from './AdminPostpaidPlans';
import AdminAddOns from './AdminAddOn';
import AdminRechargeHistory from './AdminRechargePage';
import './AdminDashboard.css'; // Ensure this CSS file is correctly placed

export default function AdminDashboard() {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        <h1 className="dashboard-title">Admin Dashboard</h1>
        <ul className="dashboard-list">
          <li className="dashboard-list-item">
            <Link to="/admin/prepaid-plans" className="dashboard-link">
              Prepaid Plans
            </Link>
          </li>
          <li className="dashboard-list-item">
            <Link to="/admin/postpaid-plans" className="dashboard-link">
              Postpaid Plans
            </Link>
          </li>
          <li className="dashboard-list-item">
            <Link to="/admin/add-ons" className="dashboard-link">
              Add-ons
            </Link>
          </li>
          <li className="dashboard-list-item">
            <Link to="/admin/recharge-history" className="dashboard-link">
              Recharge History
            </Link>
          </li>
        </ul>
      </div>

      {/* Routes for different sections */}
      <Routes>
        <Route path="/admin/prepaid-plans" element={<AdminPrepaidPlans />} />
        <Route path="/admin/postpaid-plans" element={<AdminPostpaidPlans />} />
        {/* Add routes for Add-ons and Recharge History */}
        <Route path="/admin/add-ons" element={<div>Add-ons Section</div>} />
        <Route path="/admin/recharge-history" element={<div>Recharge History Section</div>} />
      </Routes>
    </div>
  );
}
