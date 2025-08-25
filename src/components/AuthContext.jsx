import React, { createContext, useContext, useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";

const AuthContext = createContext();

const API_BASE = "https://bill-u-backend.onrender.com/api/auth";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [isOtpVerified, setIsOtpVerified] = useState(() => localStorage.getItem("isOtpVerified") === "true");

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
    if (token) localStorage.setItem("token", token);
    else localStorage.removeItem("token");
    localStorage.setItem("isOtpVerified", isOtpVerified);
  }, [user, token, isOtpVerified]);

  // Generate OTP mutation
  const generateOtpMutation = useMutation({
    mutationFn: async (data) => {
      const res = await fetch(`${API_BASE}/generate-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send OTP");
      return res.json();
    },
  });

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: async (data) => {
      const res = await fetch(`${API_BASE}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Invalid email or password");
      return res.json();
    },
    onSuccess: async (data) => {
      setUser(data);
      setToken(data.token);
      setIsOtpVerified(false);
      // Generate OTP after successful login
      if (data?.email) {
        try {
          await generateOtpMutation.mutateAsync({ email: data.email });
        } catch (e) {
          // Optionally handle OTP error
        }
      }
    },
  });

  // Registration flow removed

  // Verify OTP mutation
  const verifyOtpMutation = useMutation({
    mutationFn: async (data) => {
      const res = await fetch(`${API_BASE}/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Invalid OTP");
      return res.json();
    },
    onSuccess: (data) => {
      setUser(data);
      setToken(data.token);
      setIsOtpVerified(true);
    },
  });

  const logout = () => {
    setUser(null);
    setToken(null);
    setIsOtpVerified(false);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("isOtpVerified");
    loginMutation.reset();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isOtpVerified,
        login: loginMutation.mutate,
        loginStatus: loginMutation.status,
        loginError: loginMutation.error,
        generateOtp: generateOtpMutation.mutate,
        generateOtpStatus: generateOtpMutation.status,
        generateOtpError: generateOtpMutation.error,
        verifyOtp: verifyOtpMutation.mutate,
        verifyOtpStatus: verifyOtpMutation.status,
        verifyOtpError: verifyOtpMutation.error,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
