import React from "react";
import {  MoreHorizontal } from "lucide-react";

const ShopControlOption = ({ shop }) => (
  <div className="grid grid-cols-7 items-center px-3 py-3 rounded-xl bg-gray-50 mb-3 text-xs md:text-sm font-medium">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg overflow-hidden">
        <img src={shop.avatar} alt={shop.name} className="w-full h-full object-cover" />
      </div>
      <span>{shop.name}</span>
    </div>
    <div className="text-center">{shop.shopControlId}</div>
    <div className="text-center">{shop.owner}</div>
    <div className="text-center">{shop.contact}</div>
    <div className="flex items-center justify-center gap-2">
      <span>{shop.address}</span>
    </div>
    <div className="flex justify-center">
      <span
        className={`px-2 py-1 rounded-full text-xs font-semibold ${
          shop.status === "Active"
            ? "bg-[#A5CD97] text-green-900"
            : "bg-red-100 text-red-600"
        }`}
      >
        {shop.status}
      </span>
    </div>
    <div className="flex justify-center">
      <button className="hover:text-gray-600">
        <MoreHorizontal className="w-5 h-5" />
      </button>
    </div>
  </div>
);

export default ShopControlOption;

