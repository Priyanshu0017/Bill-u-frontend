import React from "react";
import { Store, MoreHorizontal } from "lucide-react";

const AdminOption = ({ admin }) => (
  <div className="grid grid-cols-6 items-center px-3 py-3 rounded-xl bg-gray-50 mb-3 text-xs md:text-sm font-medium">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg overflow-hidden">
        <img src={admin.avatar} alt={admin.name} className="w-full h-full object-cover" />
      </div>
      <span>{admin.name}</span>
    </div>
    <div className="text-center">{admin.adminId}</div>
    <div className="text-center">{admin.contact}</div>
    <div className="flex items-center justify-center gap-2">
      <Store className="w-4 h-4 text-gray-400" />
      <span>{admin.shopAssigned}</span>
    </div>
    <div className="flex justify-center">
      <span
        className={`px-2 py-1 rounded-full text-xs font-semibold ${
          admin.status === "Active"
            ? "bg-[#A5CD97] text-green-900"
            : "bg-red-100 text-red-600"
        }`}
      >
        {admin.status}
      </span>
    </div>
    <div className="flex justify-center">
      <button className="hover:text-gray-600">
        <MoreHorizontal className="w-5 h-5" />
      </button>
    </div>
  </div>
);

export default AdminOption;