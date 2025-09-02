import React, { useEffect, useRef, useState } from "react";
import { Store, MoreHorizontal, Pencil, Eye, Trash2, Phone, Mail } from "lucide-react";

const AdminOption = ({ admin, onEdit, onView, onDelete }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      {/* Card layout for mobile/tablet */}
      <div className="md:hidden relative rounded-xl bg-gray-50 mb-3 px-0 py-3 text-sm">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-start gap-2">
            <div className="w-11 h-11 rounded-lg overflow-hidden">
              <img src={admin.avatar} alt={admin.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <div className="font-semibold leading-5">{admin.name}</div>
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${admin.status === "Active" ? "bg-[#A5CD97] text-green-900" : "bg-red-100 text-red-600"}`}>
                  {admin.status}
                </span>
              </div>
              <div className="text-[11px] text-gray-500 leading-4">{admin.adminId}</div>
            </div>
          </div>
          <div className="relative" ref={menuRef}>
            <button className="hover:text-gray-600" onClick={() => setOpen((v) => !v)} aria-haspopup="menu" aria-expanded={open}>
              <MoreHorizontal className="w-5 h-5" />
            </button>
            {open && (
              <div className="absolute right-0 top-7 z-20 w-40 bg-white rounded-xl shadow-lg border border-gray-100 py-1 overflow-hidden">
                <button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-yellow-400 hover:text-black" onClick={() => { setOpen(false); onEdit && onEdit(admin); }}>
                  <Pencil className="w-4 h-4 text-yellow-500" />
                  <span>Edit</span>
                </button>
                <button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-yellow-400 hover:text-black" onClick={() => { setOpen(false); onView && onView(admin); }}>
                  <Eye className="w-4 h-4 text-yellow-500" />
                  <span>View</span>
                </button>
                <button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-yellow-400 hover:text-black" onClick={() => { setOpen(false); onDelete && onDelete(admin); }}>
                  <Trash2 className="w-4 h-4 text-yellow-500" />
                  <span>Delete</span>
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="mt-3 space-y-2.5">
          <div className="flex items-center gap-2 flex-wrap md:justify-start md:gap-4">
            <div className="flex items-center gap-1.5 text-gray-800">
              <Phone className="w-4 h-4 text-gray-500" />
              <span className="font-medium">{admin.contact}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center">
                <Store className="w-3.5 h-3.5 text-yellow-600" />
              </div>
              <span className="text-sm font-medium text-gray-800">{admin.shopAssigned}</span>
            </div>
          </div>
          {admin.email && (
            <div className="flex items-center gap-1.5 text-gray-800">
              <Mail className="w-4 h-4 text-gray-500" />
              <span className="font-medium">{admin.email}</span>
            </div>
          )}
        </div>
      </div>

      {/* Table row layout for large screens */}
      <div className="hidden md:grid grid-cols-6 items-center px-3 py-3 rounded-xl bg-gray-50 mb-3 text-xs md:text-sm font-medium">
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
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${admin.status === "Active" ? "bg-[#A5CD97] text-green-900" : "bg-red-100 text-red-600"}`}>
            {admin.status}
          </span>
        </div>
        <div className="flex justify-center relative" ref={menuRef}>
          <button className="hover:text-gray-600" onClick={() => setOpen((v) => !v)} aria-haspopup="menu" aria-expanded={open}>
            <MoreHorizontal className="w-5 h-5" />
          </button>
          {open && (
            <div className="absolute right-0 top-7 z-20 w-40 bg-white rounded-xl shadow-lg border border-gray-100 py-1 overflow-hidden">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-yellow-400 hover:text-black" onClick={() => { setOpen(false); onEdit && onEdit(admin); }}>
                <Pencil className="w-4 h-4 text-yellow-500" />
                <span>Edit</span>
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-yellow-400 hover:text-black" onClick={() => { setOpen(false); onView && onView(admin); }}>
                <Eye className="w-4 h-4 text-yellow-500" />
                <span>view</span>
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-yellow-400 hover:text-black" onClick={() => { setOpen(false); onDelete && onDelete(admin); }}>
                <Trash2 className="w-4 h-4 text-yellow-500" />
                <span>Delete</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminOption;