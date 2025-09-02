import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useAuth } from "./AuthContext";
import { Link, useLocation } from "react-router-dom";
import LogoImage from "../images/Group 106 (1).svg";

import {
  LayoutDashboard,
  Store,
  Users,
  FileText,
  Settings,
  BarChart2,
  LogOut,
} from "lucide-react";

const Layout = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  const { logout } = useAuth();
  const navItems = [
    { icon: LayoutDashboard, name: "Dashboard", path: "/" },
    { icon: Store, name: "Shop Control", path: "/shop-control" },
    { icon: Users, name: "Admins", path: "/admins" },
    { icon: FileText, name: "Analytics", path: "/analytics" },
    { icon: BarChart2, name: "Audit Logs", path: "/audit-logs" },
    { icon: Settings, name: "Settings", path: "/settings" },
  ];
  const location = useLocation();

  // Dummy logout handler removed; using context logout

  return (
    <div className="flex h-screen bg-gray-50 font-sans relative">
      {/* Desktop Sidebar (visible from lg and up) */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      {/* Mobile Navbar */}
      <nav className="flex lg:hidden items-center justify-between px-4 py-3 bg-white shadow z-30 w-full fixed top-0 left-0 right-0">
        <div className="text-2xl font-bold text-bill-dark">
          <img src={LogoImage} alt="" />
        </div>
        <button
          className="bg-white shadow rounded-full p-2 flex items-center justify-center focus:outline-none"
          onClick={() => setNavOpen(true)}
          aria-label="Open navigation menu"
        >
          <svg
            width="28"
            height="28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="text-gray-700"
          >
            <circle cx="5" cy="12" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="19" cy="12" r="2" />
          </svg>
        </button>
      </nav>
      {/* Mobile/Tablet Dropdown Menu */}
      {navOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col lg:hidden animate-fade-in">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
            <div className="text-xl font-bold text-bill-dark">
              <span className="text-bill-yellow">B</span>ill-U
            </div>
            <button
              onClick={() => setNavOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 focus:outline-none"
            >
              <svg
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center space-y-3 pt-4 pb-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center px-4 py-2 rounded-lg text-base font-semibold w-10/12 justify-center transition-colors duration-200 ${
                    isActive
                      ? "bg-bill-yellow/20 text-bill-yellow"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setNavOpen(false)}
                >
                  <item.icon
                    className={`w-5 h-5 mr-2 ${
                      isActive ? "text-yellow-400" : "text-gray-400"
                    }`}
                  />
                  {item.name}
                </Link>
              );
            })}
            {/* Logout button */}
            <button
              className="flex items-center justify-center gap-2 w-10/12 py-3 mt-6 bg-red-50 text-red-600 hover:bg-red-100 transition rounded-lg font-semibold"
              style={{ boxShadow: "0 2px 10px 0 rgba(0,0,0,0.10)" }}
              onClick={() => {
                logout();
                setNavOpen(false);
              }}
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </nav>
        </div>
      )}
      {/* Main content, with top padding for mobile/tablet navbar */}
      <main className="flex-1 overflow-y-auto w-full pt-14 lg:pt-0">
        {children}
      </main>
    </div>
  );
};

export default Layout;
