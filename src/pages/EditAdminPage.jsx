import React, { useState } from "react";
import Header from "../components/Header";

const EditAdminPage = () => {
  const [form, setForm] = useState({
    adminId: "#65165151",
    username: "Murlidhar store",
    firstName: "Murlidhar",
    lastName: "Shukla",
    email: "Murlidhar7987@mail.com",
    phone: "+91 989 238 344",
    address: "123 Vijay Nagar Main Road, Opposite C21 Mall, Indore, Madhya Pradesh",
    city: "Indore",
    state: "Madhya Pradesh",
    country: "India",
    postalCode: "452010",
    roles: ["manager", "inventory", "campaign", "customer"],
    status: "Active",
  });

  const handleChange = (field, value) => setForm((p) => ({ ...p, [field]: value }));

  const handleSave = () => {
    // Placeholder save handler
    console.log("Saving admin", form);
  };

  return (
    <div>
      <Header title="Edit Admin" />
      <div className="px-3.5 py-1 bg-gray-200">
        <section className="bg-white rounded-xl mt-2 px-4 md:px-8 py-6">
          <h2 className="text-2xl font-semibold mb-1">Edit Admin</h2>
          <p className="text-sm text-gray-600 mb-6">Update shop details and you can also assign admin here.</p>

          <div className="flex items-center justify-center mb-6">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face" className="w-24 h-24 rounded-full object-cover" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Admin ID</label>
              <input className="w-full px-3 py-2 border rounded-lg" value={form.adminId} onChange={(e) => handleChange("adminId", e.target.value)} />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Username</label>
              <input className="w-full px-3 py-2 border rounded-lg" value={form.username} onChange={(e) => handleChange("username", e.target.value)} />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Admin First Name</label>
              <input className="w-full px-3 py-2 border rounded-lg" value={form.firstName} onChange={(e) => handleChange("firstName", e.target.value)} />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Admin Last Name</label>
              <input className="w-full px-3 py-2 border rounded-lg" value={form.lastName} onChange={(e) => handleChange("lastName", e.target.value)} />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" className="w-full px-3 py-2 border rounded-lg" value={form.email} onChange={(e) => handleChange("email", e.target.value)} />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Contact Number</label>
              <input className="w-full px-3 py-2 border rounded-lg" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">Address</label>
              <textarea className="w-full px-3 py-2 border rounded-lg" rows="3" value={form.address} onChange={(e) => handleChange("address", e.target.value)} />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">City</label>
              <input className="w-full px-3 py-2 border rounded-lg" value={form.city} onChange={(e) => handleChange("city", e.target.value)} />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">State</label>
              <input className="w-full px-3 py-2 border rounded-lg" value={form.state} onChange={(e) => handleChange("state", e.target.value)} />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Country</label>
              <input className="w-full px-3 py-2 border rounded-lg" value={form.country} onChange={(e) => handleChange("country", e.target.value)} />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Postal Code</label>
              <input className="w-full px-3 py-2 border rounded-lg" value={form.postalCode} onChange={(e) => handleChange("postalCode", e.target.value)} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <div className="text-sm font-semibold mb-2">Roles</div>
              <div className="space-y-2 text-sm">
                {[
                  {key:'manager', label:'Manager — Operations + team oversight, no settings control'},
                  {key:'inventory', label:'Inventory Manager — Stock management manages inventory.'},
                  {key:'campaign', label:'Campaign Creator — Can create and manage marketing campaigns, discount offers, and coupon codes.'},
                  {key:'customer', label:'Customer Manager — Can add, edit, and delete customer records, and view purchase history.'},
                ].map(r => (
                  <label key={r.key} className="flex items-start gap-2">
                    <input type="checkbox" checked={form.roles.includes(r.key)} onChange={(e)=>{
                      const checked = e.target.checked;
                      setForm(prev=>({
                        ...prev,
                        roles: checked ? [...prev.roles, r.key] : prev.roles.filter(k=>k!==r.key)
                      }))
                    }} className="mt-1 w-4 h-4 text-yellow-400 border-gray-300 rounded"/>
                    <span>{r.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold mb-2">Status</div>
              <div className="flex items-center gap-3">
                <button type="button" onClick={()=>setForm(p=>({ ...p, status:'Active'}))} className={`px-3 py-1 rounded-full text-sm ${form.status==='Active' ? 'bg-[#A5CD97] text-green-900' : 'bg-gray-100 text-gray-600'}`}>Active</button>
                <button type="button" onClick={()=>setForm(p=>({ ...p, status:'Inactive'}))} className={`px-3 py-1 rounded-full text-sm ${form.status==='Inactive' ? 'bg-red-200 text-red-700' : 'bg-gray-100 text-gray-600'}`}>Inactive</button>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-8">
            <button className="px-5 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">Cancel</button>
            <button onClick={handleSave} className="px-5 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 font-semibold">Save Changes</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditAdminPage;


