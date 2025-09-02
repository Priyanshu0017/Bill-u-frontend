import React from "react";
import { Search, RotateCcw } from "lucide-react";

const ShopControlFilters = ({
  searchTerm,
  setSearchTerm,
  handleResetFilters,
  statusFilter,
  setStatusFilter,
  sortFilter,
  setSortFilter,
  statusDropdownRef,
  sortDropdownRef,
}) => (
  <div
    className="flex flex-col lg:flex-row justify-between gap-4 py-5 px-10 rounded-lg items-center"
    style={{ boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.20)" }}
  >
    <div className="flex relative justify-center gap-3">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search shop by name or owner"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-96 pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-bill-yellow focus:border-transparent"
      />
      <div className="flex gap-3">
        <div className="relative" ref={statusDropdownRef}>
          <button
            onClick={() => setStatusFilter((prev) => (prev === "open" ? "closed" : "open"))}
            className="flex items-center justify-between px-6 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200 min-w-[140px]"
          >
            <span>{statusFilter}</span>
            <svg className={`w-4 h-4 ml-2 transition-transform duration-200 ${statusFilter === "open" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {statusFilter === "open" && (
            <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50">
              <div className="py-1">
                <button onClick={() => setStatusFilter("All Status")} className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150">All Status</button>
                <button onClick={() => setStatusFilter("Active")} className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150">Active</button>
                <button onClick={() => setStatusFilter("Inactive")} className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150">Inactive</button>
              </div>
            </div>
          )}
        </div>
        <div className="relative" ref={sortDropdownRef}>
          <button
            onClick={() => setSortFilter((prev) => (prev === "open" ? "closed" : "open"))}
            className="flex items-center justify-between px-6 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200 min-w-[140px]"
          >
            <span>{sortFilter === "open" ? "Newest First" : sortFilter}</span>
            <svg className={`w-4 h-4 ml-2 transition-transform duration-200 ${sortFilter === "open" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {sortFilter === "open" && (
            <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50">
              <div className="py-1">
                <button onClick={() => setSortFilter("Newest First")} className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150">Newest First</button>
                <button onClick={() => setSortFilter("Oldest First")} className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150">Oldest First</button>
                <button onClick={() => setSortFilter("Name A-Z")} className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150">Name A-Z</button>
                <button onClick={() => setSortFilter("Name Z-A")} className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150">Name Z-A</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    <button
      onClick={handleResetFilters}
      className="flex items-center gap-2 px-4 py-3 border text-sm border-gray-200 hover:bg-gray-200 text-gray-500 rounded-xl transition-colors duration-200"
    >
      <RotateCcw className="w-4 h-4" />
      Reset Filters
    </button>
  </div>
);

export default ShopControlFilters;

