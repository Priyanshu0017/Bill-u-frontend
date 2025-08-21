import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

const OtpPage = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [resendAvailable, setResendAvailable] = useState(false);
  const inputRefs = useRef([]);
  const { verifyOtp, verifyOtpStatus, verifyOtpError, isOtpVerified, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOtpVerified) {
      navigate("/");
    }
  }, [isOtpVerified, navigate]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setResendAvailable(true);
    }
  }, [timer]);

  const handleChange = (index, event) => {
    const newOtp = [...otp];
    const value = event.target.value;
    if (isNaN(value)) return;
    newOtp.splice(index, 1, value);
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[(index + 1)]?.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !otp[`${index}`] && index > 0) {
      inputRefs.current[(index - 1)]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    if (user?.email) {
      verifyOtp({ email: user.email, otp: enteredOtp });
    }
  };

  const handleResendOtp = () => {
    if (resendAvailable) {
      setTimer(30);
      setResendAvailable(false);
      setOtp(['', '', '', '', '', '']);
      if (inputRefs.current.length > 0) {
        inputRefs.current[(0)]?.focus();
      }
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex w-full max-w-2xl border-2 border-yellow-400">
          {/* Left Dark Section - Empty Placeholder */}
          <div className="bg-neutral-900 w-2/5 flex-shrink-0"></div>

          {/* Right Form Section */}
          <div className="py-16 px-12 w-3/5">
            <div className="space-y-6">
              <div className="flex justify-center mb-6">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-3 shadow-sm">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full mr-2"></div>
                    <span className="text-gray-900 font-bold text-lg">ill-u</span>
                  </div>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 text-center mb-2">Verify your OTP.</h2>
              <p className="text-center text-gray-600 mb-6">Enter the OTP we sent u on your email</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium text-gray-900">OTP</label>
                  <span className="text-lg font-mono font-bold text-gray-900">{formatTime(timer)}</span>
                </div>
                
                <div className="flex justify-center space-x-3">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleChange(index, e)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      ref={el => inputRefs.current[(index)] = el}
                      className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 focus:outline-none"
                    />
                  ))}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transition-colors"
                  disabled={verifyOtpStatus === 'pending'}
                >
                  {verifyOtpStatus === 'pending' ? 'Verifying...' : 'Verify'}
                </button>
                {verifyOtpError && <div className="text-red-500 text-center text-sm">{verifyOtpError.message}</div>}
              </form>

              <div className="text-center mt-6">
                {resendAvailable ? (
                  <button 
                    onClick={handleResendOtp} 
                    className="text-sm text-gray-900 hover:underline focus:outline-none"
                  >
                    Resend OTP
                  </button>
                ) : (
                  <p className="text-sm text-gray-600">
                    Resend OTP in <span className="font-semibold">{formatTime(timer)}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;

