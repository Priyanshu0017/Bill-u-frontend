import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import OtpPage from "./pages/OtpPage";
import AdminsPage from "./pages/AdminsPage";
import EditAdminPage from "./pages/EditAdminPage";
import ProtectedRoute from "./components/ProtectedRoute";

// Import page components
import ShopControlPage from "./pages/ShopControlPage";
import AnalyticsPage from "./pages/AnalyticsPage";
// import AuditLogsPage from "./pages/AuditLogsPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
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
                  <Route path="/admins/edit" element={<EditAdminPage />} />
                  <Route path="/analytics" element={<AnalyticsPage />} />
                  {/* <Route path="/audit-logs" element={<AuditLogsPage />} /> */}
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
