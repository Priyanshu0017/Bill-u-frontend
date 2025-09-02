import React, { useState, useEffect, useRef } from "react";
import { Plus } from "lucide-react";
import Header from "../components/Header";
import ShopControlFilters from "../components/ShopControlFilters";
import ShopControlTable from "../components/ShopControlTable";
import img1 from "../images/Vector.png";
import img2 from "../images/right.svg";
import img3 from "../images/cross.svg";
import ShopControlStats from "../components/ShopControlStats";

const ShopControlPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [sortFilter, setSortFilter] = useState("Newest First");
  const statusDropdownRef = useRef(null);
  const sortDropdownRef = useRef(null);

  const shopControlStats = [
    { title: "Total Shops", value: "500", iconColor: "text-bill-yellow", bgColor: "bg-yellow-100", img: img1 },
    { title: "Active Shops", value: "325", iconColor: "text-bill-green", bgColor: "bg-emerald-500", img: img2 },
    { title: "Inactive Shops", value: "175", iconColor: "text-bill-red", bgColor: "bg-red-300", img: img3 },
  ];

  const shopControlList = [
    { id: 1, name: "Martin gixs", shopControlId: "#1516165161", owner: "Amit verma", contact: "8549452749", address: "Murlidhar Store", status: "Active", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" },
    { id: 2, name: "Martin gixs", shopControlId: "#1516165161", owner: "Amit verma", contact: "8549452749", address: "Murlidhar Store", status: "Active", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" },
    { id: 3, name: "Martin gixs", shopControlId: "#1516165161", owner: "Amit verma", contact: "8549452749", address: "Murlidhar Store", status: "Active", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" },
    { id: 4, name: "Martin gixs", shopControlId: "#1516165161", owner: "Amit verma", contact: "8549452749", address: "Murlidhar Store", status: "Active", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" },
  ];

  const filteredShops = shopControlList.filter(
    (shop) => shop.name.toLowerCase().includes(searchTerm.toLowerCase()) || shop.shopControlId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateShop = () => {
    console.log("Creating Shop...");
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    setStatusFilter("All Status");
    setSortFilter("Newest First");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (statusDropdownRef.current && !statusDropdownRef.current.contains(event.target)) {
        setStatusFilter((prev) => (prev === "open" ? "All Status" : prev));
      }
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target)) {
        setSortFilter((prev) => (prev === "open" ? "Newest First" : prev));
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <Header title="Shop Control" />
      <div className="px-3.5 py-1 bg-gray-200">
        <section className="bg-white rounded-xl mt-2 px-2 md:px-8 py-8">
          <div className="flex justify-end">
            <button onClick={handleCreateShop} className="flex items-center gap-2 px-3 py-3 bg-yellow-400 hover:bg-yellow-500 font-semibold rounded-lg transition-colors duration-200">
              <Plus className="w-5 h-5" />
              Create Shop
            </button>
          </div>
          <div className="flex flex-col sm:flex-col lg:flex-row px-3 sm:px-5 lg:px-7 gap-3 sm:gap-4 lg:gap-10 mt-2">
            {shopControlStats.map((stat, index) => (
              <ShopControlStats stat={stat} index={index} key={index} />
            ))}
          </div>
        </section>
        <div className="bg-white rounded-xl px-2 md:px-15 py-8 shadow-sm mt-3">
          <ShopControlFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleResetFilters={handleResetFilters}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            sortFilter={sortFilter}
            setSortFilter={setSortFilter}
            statusDropdownRef={statusDropdownRef}
            sortDropdownRef={sortDropdownRef}
          />
          <ShopControlTable shops={filteredShops} />
        </div>
      </div>
    </div>
  );
};

export default ShopControlPage;

