import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import { UserPlus } from "lucide-react";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const { register, registerStatus, registerError, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/otp");
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ name, email, password, phone, role });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 md:p-10 flex flex-col items-center">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-yellow-400 rounded-full p-3 mb-2">
            <UserPlus className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Create your account</h2>
          <p className="text-gray-500 text-sm">Fill in your details to register</p>
        </div>
        <form className="w-full space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">Name</label>
            <input type="text" placeholder="Name" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none" required value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">Email</label>
            <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none" required value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">Password</label>
            <input type="password" placeholder="Password" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none" required value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">Phone</label>
            <input type="tel" placeholder="Phone" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none" required value={phone} onChange={e => setPhone(e.target.value)} />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-1">Role</label>
            <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none" required value={role} onChange={e => setRole(e.target.value)}>
              <option value="">Select Role</option>
              <option value="superadmin">Super Admin</option>
              <option value="admin">Admin</option>
              <option value="staff">Staff</option>
            </select>
          </div>
          <button type="submit" className="w-full py-2 font-semibold text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 transition" disabled={registerStatus === 'pending'}>
            {registerStatus === 'pending' ? 'Registering...' : 'Register'}
          </button>
          {registerError && <div className="text-red-500 text-center text-sm">{registerError.message}</div>}
        </form>
        <div className="text-center mt-6">
          <span className="text-gray-500">Already have an account? </span>
          <a href="/login" className="text-yellow-500 hover:underline font-semibold">Login</a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
