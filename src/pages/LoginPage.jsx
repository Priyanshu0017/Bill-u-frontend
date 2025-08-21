import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import { Mail, Lock } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loginStatus, loginError, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/otp");
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="relative min-h-screen bg-yellow-400 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 overflow-hidden">
        {[...Array(40)].map((_, index) => (
          <div 
            key={index} 
            className={`absolute w-[83px] h-[83px] rounded-[10px] border-2 border-black/10 opacity-50 animate-float`}
            style={{ 
              '--index': index,
              left: `${(index % 12) * 100}px`,
              top: `${Math.floor(index / 12) * 100}px`,
              animationDelay: `${index * 0.1}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative flex justify-center items-center min-h-screen">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex w-full max-w-2xl">
          {/* Left Dark Section */}
          <div className="bg-neutral-900 text-white py-20 px-10 flex-shrink-0 w-1/2 flex flex-col justify-center items-center">
            
            <p className="mt-4 text-lg opacity-70">Hello ! Welcome back</p>
          </div>

          {/* Right Form Section */}
          <div className="py-16 px-12 w-1/2">
            <div className="space-y-6">
              <div className="flex justify-center mb-6">
                <div className="bg-yellow-400 rounded-lg p-2">
                  <span className="text-gray-900 font-bold text-lg">B</span>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 text-center mb-4">Hello ! Welcome back</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 uppercase">Email</label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email."
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 uppercase">Password</label>
                  <div className="relative mt-1">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your password."
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="text-sm text-gray-600 hover:underline focus:outline-none">Reset Password</button>
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-yellow-400 text-gray-900 font-semibold rounded-md shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
                  disabled={loginStatus === 'pending'}
                >
                  {loginStatus === 'pending' ? 'Logging in...' : 'Login'}
                </button>
                {loginError && <div className="text-red-500 text-center text-sm">{loginError.message}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
