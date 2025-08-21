import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import OtpPage from "./pages/OtpPage";
import ProtectedRoute from "./components/ProtectedRoute";

// Placeholder components for other pages
const ShopControlPage = () => <div className="p-8">Shop Control Page</div>;
const AdminsPage = () => <div className="p-8">Admins Page</div>;
const AnalyticsPage = () => <div className="p-8">Analytics Page</div>;
const AuditLogsPage = () => <div className="p-8">Audit Logs Page</div>;
const SettingsPage = () => <div className="p-8">Settings Page</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Layout>
                <Routes>
                  <Route path="/" element={<DashboardPage />} />
                  <Route path="/shop-control" element={<ShopControlPage />} />
                  <Route path="/admins" element={<AdminsPage />} />
                  <Route path="/analytics" element={<AnalyticsPage />} />
                  <Route path="/audit-logs" element={<AuditLogsPage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                </Routes>
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
