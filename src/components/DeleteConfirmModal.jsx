import React from "react";

const DeleteConfirmModal = ({ open, name, onCancel, onConfirm }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden">
        <button onClick={onCancel} className="absolute top-3 right-3 p-2 text-gray-500 hover:text-black">✕</button>
        <div className="p-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
            <span className="text-2xl">?</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Are you sure you want to delete this?</h3>
          </div>
        </div>
        <div className="flex justify-end gap-3 p-5 pt-2">
          <button onClick={onCancel} className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50">Cancel</button>
          <button onClick={onConfirm} className="px-5 py-2 rounded-lg bg-rose-300 text-black hover:bg-rose-400">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;


