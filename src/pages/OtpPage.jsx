import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import LogoImage from "../images/Group 106.svg";
import BgImage from "../images/Group 145.svg";

const OtpPage = () => {
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isResending, setIsResending] = useState(false);
  const { verifyOtp, verifyOtpStatus, verifyOtpError, isOtpVerified, user, generateOtp, generateOtpStatus, generateOtpError } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOtpVerified) {
      navigate("/");
    }
  }, [isOtpVerified, navigate]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otp = otpValues.join("");
    if (user?.email && otp.length === 6) {
      verifyOtp({ email: user.email, otp });
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleResendOtp = async () => {
    if (user?.email) {
      try {
        setIsResending(true);
        
        // Clear existing OTP values
        setOtpValues(["", "", "", "", "", ""]);
        
        // Reset timer
        setTimeLeft(30);
        
        // Call backend to generate new OTP
        await generateOtp({ email: user.email });
        
        // Reset resending state after a short delay
        setTimeout(() => {
          setIsResending(false);
        }, 1000);
      } catch (error) {
        console.error("Failed to resend OTP:", error);
        setIsResending(false);
      }
    }
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
              <h2 className="text-xl font-semibold text-gray-900 text-center mb-2">Verify your OTP.</h2>
              <p className="text-xs text-gray-600 text-center mb-6">Enter the OTP we sent u on your <br/> email</p>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-700 uppercase">OTP</label>
                    <div className="text-sm text-gray-500 font-mono">
                      {formatTime(timeLeft)}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {otpValues.map((value, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        maxLength={1}
                        value={value}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        className="w-9.5 h-10 text-center border border-gray-300 rounded-lg text-lg font-semibold focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                        placeholder=""
                      />
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    disabled={timeLeft > 0 || isResending}
                    className="text-xs hover:underline focus:outline-none disabled:text-gray-400 disabled:cursor-not-allowed"
                  >
                    {isResending ? 'Sending...' : 'Resend OTP'}
                  </button>
                  {generateOtpError && (
                    <div className="text-red-500 text-xs mt-1">{generateOtpError.message}</div>
                  )}
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-[35%] py-2.5 bg-yellow-400 text-xs text-gray-900 rounded-xl shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
                    disabled={verifyOtpStatus === 'pending' || otpValues.join("").length !== 6}
                  >
                    {verifyOtpStatus === 'pending' ? 'Verifying...' : 'Verify'}
                  </button>
                </div>
                
                {verifyOtpError && <div className="text-red-500 text-center text-sm">{verifyOtpError.message}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;

