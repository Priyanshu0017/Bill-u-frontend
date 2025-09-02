import React from "react";
import AdminOption from "./AdminOption";

const AdminTable = ({ admins, onEdit, onView, onDelete }) => (
  <div className="bg-white rounded-xl overflow-hidden px-6 md:px-10 py-6 mb-4 mt-4" style={{ boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.20)" }}>
    <h2 className="text-lg">Admin List</h2>
    <div className="px-0 md:px-3 py-4">
      <div className="hidden md:grid grid-cols-6 items-center px-3 py-3 rounded-xl bg-gray-50 mb-3 text-xs md:text-sm font-bold text-gray-700">
        <div className="text-left flex items-center gap-2">Admin Name</div>
        <div className="text-center">Admin ID</div>
        <div className="text-center">Email/Phone</div>
        <div className="text-center">Shop Assigned</div>
        <div className="text-center">Status</div>
        <div className="text-center">Actions</div>
      </div>
      <div>
        {admins.map((admin, index) => (
          <AdminOption key={`${admin.id ?? 'no-id'}-${index}`} admin={admin} onEdit={onEdit} onView={onView} onDelete={onDelete} />
        ))}
      </div>
    </div>
  </div>
);

export default AdminTable;