import React from "react";

const AdminViewOverlay = ({ open, admin, onClose }) => {
  if (!open || !admin) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-4 md:p-8 lg:pl-64">
      <div className="relative bg-white w-full max-w-4xl rounded-2xl shadow-xl overflow-hidden">
        <div className="flex items-start justify-between p-5 border-b border-gray-100">
          <div>
            <h3 className="text-2xl font-semibold">Admin Details</h3>
            <p className="text-sm text-gray-600">View complete shop details.</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="p-2 rounded-md text-gray-500 hover:text-black">✕</button>
          </div>
        </div>
        <div className="p-6">
          <div className="rounded-xl border border-gray-100 p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={admin.avatar} alt={admin.name} className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <div className="text-2xl font-semibold">{admin.name}</div>
                  <div className="text-xs text-gray-500">ID: {admin.adminId}</div>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${admin.status === 'Active' ? 'bg-[#A5CD97] text-green-900' : 'bg-red-100 text-red-600'}`}>{admin.status}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            <div className="rounded-xl border border-gray-100 p-5">
              <div className="font-semibold mb-3">Admin Details</div>
              <div className="text-sm text-gray-700 space-y-1">
                <div><span className="text-gray-500">Username</span>: {admin.name}</div>
                <div><span className="text-gray-500">Email Address</span>: —</div>
                <div><span className="text-gray-500">Contact Number</span>: {admin.contact}</div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-100 p-5">
              <div className="font-semibold mb-3">Address</div>
              <div className="text-sm text-gray-700 space-y-1">
                <div><span className="text-gray-500">City</span>: —</div>
                <div><span className="text-gray-500">State</span>: —</div>
                <div><span className="text-gray-500">Country</span>: —</div>
                <div><span className="text-gray-500">Postal code</span>: —</div>
                <div><span className="text-gray-500">Full Address</span>: —</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            <div className="rounded-xl border border-gray-100 p-5">
              <div className="font-semibold mb-3">Shop Assigned</div>
              <div className="text-sm text-gray-700">{admin.shopAssigned}</div>
            </div>
            <div className="rounded-xl border border-gray-100 p-5">
              <div className="font-semibold mb-3">Dates</div>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                <div>
                  <div className="text-gray-500">Created Date</div>
                  <div>—</div>
                </div>
                <div>
                  <div className="text-gray-500">Last Updated</div>
                  <div>—</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2 p-5 border-t border-gray-100">
          <button onClick={onClose} className="px-4 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 font-semibold">Close</button>
        </div>
      </div>
    </div>
  );
};

export default AdminViewOverlay;


