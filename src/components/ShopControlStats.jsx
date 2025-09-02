import React from "react";

const ShopControlStats = ({stat , index}) => {
  return (
    <div
      key={index}
      className="bg-white rounded-lg px-3 md:py-4 "
      style={{ boxShadow: "0 2px 10px 0 rgba(0,0,0,0.20)" }}
    >
      <div className="flex flex-col">
        <div className="flex">
          <h3 className="text-gray-600 text-xs font-medium mb-2">
            {stat.title}
          </h3>
          <div
            className={`w-8 h-8 p-1 rounded-md ml-8 ${stat.bgColor} flex items-center justify-center`}
          >
            <img src={stat.img} alt="" />
          </div>
        </div>
        <p className="text-3xl mt-6  font-bold text-bill-dark">{stat.value}</p>
      </div>
    </div>
  );
};

export default ShopControlStats;

