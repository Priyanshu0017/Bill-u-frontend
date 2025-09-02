import React, { useState, useEffect, useRef } from "react";
import { Plus } from "lucide-react";
import Header from "../components/Header";
import AdminStats from "../components/AdminStats";
import AdminFilters from "../components/AdminFilters";
import AdminTable from "../components/AdminTable";
import CreateAdminWizard from "../components/CreateAdminWizard";
import DeleteConfirmModal from "../components/DeleteConfirmModal";
import AdminViewOverlay from "../components/AdminViewOverlay";
import { useNavigate } from "react-router-dom";
import img1 from "../images/imgprofile.svg";
import img2 from "../images/right.svg";
import img3 from "../images/cross.svg";

const AdminsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [sortFilter, setSortFilter] = useState("Newest First");
  const statusDropdownRef = useRef(null);
  const sortDropdownRef = useRef(null);
  const [wizardOpen, setWizardOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const navigate = useNavigate();

  // Mock data for admin statistics
  const adminStats = [
    {
      title: "Total Admins",
      value: "254",
      iconColor: "text-bill-yellow",
      bgColor: "bg-yellow-100",
      img: img1,
    },
    {
      title: "Active Admins",
      value: "200",
      iconColor: "text-bill-green",
      bgColor: "bg-emerald-500",
      img: img2,
    },
    {
      title: "Inactive Admins",
      value: "54",
      iconColor: "text-bill-red",
      bgColor: "bg-red-300",
      img: img3,
    },
  ];

  // Mock data for admin list
  const adminList = [
    {
      id: 1,
      name: "Martin gixs",
      adminId: "#1516165161",
      contact: "8549452749",
      shopAssigned: "Murlidhar Store",
      status: "Active",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 1,
      name: "Martin gixs",
      adminId: "#1516165161",
      contact: "8549452749",
      shopAssigned: "Murlidhar Store",
      status: "Active",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 1,
      name: "Martin gixs",
      adminId: "#1516165161",
      contact: "8549452749",
      shopAssigned: "Murlidhar Store",
      status: "Active",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 1,
      name: "Martin gixs",
      adminId: "#1516165161",
      contact: "8549452749",
      shopAssigned: "Murlidhar Store",
      status: "Active",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 1,
      name: "Martin gixs",
      adminId: "#1516165161",
      contact: "8549452749",
      shopAssigned: "Murlidhar Store",
      status: "Active",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 1,
      name: "Martin gixs",
      adminId: "#1516165161",
      contact: "8549452749",
      shopAssigned: "Murlidhar Store",
      status: "Active",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 1,
      name: "Martin gixs",
      adminId: "#1516165161",
      contact: "8549452749",
      shopAssigned: "Murlidhar Store",
      status: "Active",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 1,
      name: "Martin gixs",
      adminId: "#1516165161",
      contact: "8549452749",
      shopAssigned: "Murlidhar Store",
      status: "deactive",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 1,
      name: "Martin gixs",
      adminId: "#1516165161",
      contact: "8549452749",
      shopAssigned: "Murlidhar Store",
      status: "Active",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    },
    
  ];

  // Filtered admin list based on searchTerm
  const filteredAdmins = adminList.filter(
    (admin) =>
      admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.adminId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateAdmin = () => {
    setWizardOpen(true);
  };

  const handleWizardSubmit = (data) => {
    console.log("Wizard submit", data);
    setWizardOpen(false);
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    setStatusFilter("All Status");
    setSortFilter("Newest First");
  };

  const handleEdit = (admin) => {
    setSelectedAdmin(admin);
    navigate("/admins/edit");
  };

  const handleView = (admin) => {
    setSelectedAdmin(admin);
    setViewOpen(true);
  };

  const handleDelete = (admin) => {
    setSelectedAdmin(admin);
    setConfirmOpen(true);
  };

  const confirmDelete = () => {
    setConfirmOpen(false);
    setSelectedAdmin(null);
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
      <Header title="Admin Control" />
      <div className="px-3.5 py-1 bg-gray-200">
        <section className="bg-white rounded-xl mt-2 px-2 md:px-8 py-8">
          {/* Create Admin Button */}
          <div className="flex justify-end">
            <button
              onClick={handleCreateAdmin}
              className="flex items-center gap-2 px-3 py-3 bg-yellow-400 hover:bg-yellow-500 font-semibold rounded-lg transition-colors duration-200"
            >
              <Plus className="w-5 h-5" />
              Create Admin
            </button>
          </div>
          {wizardOpen && (
            <CreateAdminWizard
              open={wizardOpen}
              onClose={() => setWizardOpen(false)}
              onSubmit={handleWizardSubmit}
            />
          )}
          {/* Admin Statistics Cards */}
          <div className="flex flex-col sm:flex-col lg:flex-row px-3 sm:px-5 lg:px-7 gap-3 sm:gap-4 lg:gap-10 mt-2">
            {adminStats.map((stat, index) => (
              <AdminStats stat={stat} index={index} key={index} />
            ))}
          </div>
        </section>
        {/* Search and Filters Section */}
        <div className="bg-white rounded-xl px-2 md:px-15 py-8 shadow-sm mt-3">
          <AdminFilters
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
          <AdminTable admins={filteredAdmins} onEdit={handleEdit} onView={handleView} onDelete={handleDelete} />
        </div>
      </div>
      <DeleteConfirmModal open={confirmOpen} name={selectedAdmin?.name} onCancel={() => setConfirmOpen(false)} onConfirm={confirmDelete} />
      <AdminViewOverlay open={viewOpen} admin={selectedAdmin} onClose={() => setViewOpen(false)} />
    </div>
  );
};

export default AdminsPage;