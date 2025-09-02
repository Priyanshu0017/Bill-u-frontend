import React from "react";
import ShopControlOption from "./ShopControlOption";

const ShopControlTable = ({ shops }) => (
  <div
    className="bg-white rounded-xl overflow-hidden px-10 py-6 mb-4 mt-4"
    style={{ boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.20)" }}
  >
    <h2 className="text-lg">Shops List</h2>
    <div className="px-3 py-8">
      <div className="grid grid-cols-7 items-center px-3 py-3 rounded-xl bg-gray-50 mb-3 text-xs md:text-sm font-bold text-gray-700">
        <div className="text-left flex items-center gap-2">Shop Name</div>
        <div className="text-center">Shop ID</div>
        <div className="text-center">Owner</div>
        <div className="text-center">Email/Phone</div>
        <div className="text-center">Address</div>
        <div className="text-center">Status</div>
        <div className="text-center">Actions</div>
      </div>
      <div>
        {shops.map((shop) => (
          <ShopControlOption key={shop.id} shop={shop} />
        ))}
      </div>
    </div>
  </div>
);

export default ShopControlTable;

