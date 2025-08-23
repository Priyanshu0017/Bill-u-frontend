import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Store, Users, FileText, Settings, BarChart2, LogOut } from 'lucide-react';
import { useAuth } from './AuthContext';
import LogoImage from "../images/Group 106 (1).svg";

const navItems = [
  { icon: LayoutDashboard, name: 'Dashboard', path: '/' },
  { icon: Store, name: 'Shop Control', path: '/shop-control' },
  { icon: Users, name: 'Admins', path: '/admins' },
  { icon: FileText, name: 'Analytics', path: '/analytics' },
  { icon: BarChart2, name: 'Audit Logs', path: '/audit-logs' },
  { icon: Settings, name: 'Settings', path: '/settings' },
];

const Sidebar = ({ onClose, mobile }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
    if (mobile && onClose) onClose();
  };

  return (
    <aside
      className={`w-64 flex-shrink-0 bg-white shadow-gray-500 shadow-lg z-50 rounded-r-xl flex flex-col h-full relative ${mobile ? 'fixed left-0 top-0 h-full animate-slide-in' : ''}`}
      style={mobile ? { minHeight: '100vh' } : {}}
    >
      <div className="h-20 flex items-center px-8 justify-between">
        <h1 className=" font-bold text-gray-900">
         <img src={LogoImage} alt="" className='' />
        </h1>
        {mobile && (
          <button onClick={onClose} className="ml-4 p-2 rounded-full hover:bg-gray-100 focus:outline-none">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      <nav className="flex-1 px-6 py-4">
        <ul>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center py-3 px-4 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'text-gray-500 hover:bg-gray-100'
                      : 'text-gray-500 hover:bg-gray-100'
                  }`}
                  onClick={mobile ? onClose : undefined}
                >
                  <item.icon className={`w-5 h-5 mr-3 ${isActive ? 'text-yellow-400' : ''}`} />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* Logout button at the bottom, always visible */}
      <div className="px-6 pb-6 mt-auto">
        <button
          className="flex items-center justify-center gap-2 w-full py-3 mb-4 bg-red-50 text-red-600 hover:bg-red-100 transition rounded-lg"
          style={{ boxShadow: '0 2px 10px 0 rgba(0,0,0,0.10)' }}
          onClick={handleLogout}
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;