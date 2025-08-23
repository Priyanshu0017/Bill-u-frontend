import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import BgImage from "../images/Group 145.svg"; 
import LogoImage from "../images/Group 106.svg"; 
import LockImage from "../images/material-symbols_lock.svg"; 
import MailImage from "../images/material-symbols_mail.svg";

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
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundColor: "#F6C90E",
        backgroundImage: `url(${BgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "100% auto",
      }}
    >
      <div className="relative flex justify-center items-center min-h-screen">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex w-full max-w-[41rem]">
          {/* Left Dark Section */}
          <div className="bg-neutral-900 rounded-xl text-white py-20 px-10 flex-shrink-0 w-[45%] flex flex-col justify-center items-center">
            
          </div>

          {/* Right Form Section */}
          <div className="py-16 px-12 w-[55%]">
            <div className="">
              <div className="flex justify-center mb-4">
                <div className=" rounded-md px-3 py-3 shadow-[0_0_5px_rgba(0,0,0,0.15)]">
                  <img src={LogoImage} alt="logo" />
                  
                </div>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 text-center mb-4">Hello ! Welcome back</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 uppercase">Email</label>
                  <div className="relative mt-1">
                    <img src={MailImage} alt="maillogo" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email."
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-xl  focus:ring-yellow-400 focus:border-yellow-400 text-xs"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700 uppercase">Password</label>
                  <div className="relative mt-1">
                  <img src={LockImage} alt="locklogo" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-5 text-gray-400" />
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your password."
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-yellow-400 focus:border-yellow-400 text-xs"
                    />
                  </div>
                </div>
                <div className="flex justify-end -mt-2">
                  <button className="text-xs text-gray-600 hover:underline focus:outline-none">Reset Password</button>
                </div>
                <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-[35%] py-2 bg-yellow-400 text-xs text-gray-900 rounded-lg shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
                  disabled={loginStatus === 'pending'}
                >
                  {loginStatus === 'pending' ? 'Logging in...' : 'Login'}
                </button>
                </div>
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
