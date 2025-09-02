import { ChevronLeft, Check } from "lucide-react";
import React, { useState } from "react";
import img1 from '../images/mage_edit.svg'

const CreateAdminWizard = ({ open, onClose, onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    roles: [],
  });

  if (!open) return null;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleRoleToggle = (role) => {
    setFormData(prev => ({
      ...prev,
      roles: prev.roles.includes(role) 
        ? prev.roles.filter(r => r !== role)
        : [...prev.roles, role]
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(formData);
    }
    onClose();
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.username.trim() && 
               formData.firstName.trim() && 
               formData.lastName.trim() && 
               formData.email.trim() && 
               formData.phone.trim();
      case 2:
        return formData.address.trim() && 
               formData.city.trim() && 
               formData.state.trim() && 
               formData.postalCode.trim() && 
               formData.country.trim();
      case 3:
        return formData.roles.length > 0;
      default:
        return true;
    }
  };

  const roleOptions = [
    { key: "manager", label: "Manager", description: "Operations + team oversight, no settings control" },
    { key: "inventory", label: "Inventory Manager", description: "Stock management, manages inventory" },
    { key: "campaign", label: "Campaign Creator", description: "Can create and manage marketing campaigns, discount offers, and coupon codes." },
    { key: "customer", label: "Customer Manager", description: "Can add, edit, and delete customer records, and view purchase history." }
  ];

  const CustomCheckbox = ({ checked, onChange }) => (
    <span className="relative inline-flex w-4 h-4 align-middle mt-1">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      <span className="block w-full h-full border-2 border-yellow-400 bg-white rounded-none pointer-events-none peer-checked:bg-yellow-400 peer-checked:border-yellow-400" />
      <Check className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-black opacity-0 peer-checked:opacity-100 pointer-events-none" strokeWidth={3} />
    </span>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 lg:pl-64 bg-black/40">
      <div
        className="relative z-10 w-[1035px] h-[486px] bg-white rounded-xl overflow-hidden shadow-xl flex flex-col md:flex-row"
        style={{ maxWidth: 1035, maxHeight: 486 }}
      >
        {/* Left Sidebar - Steps */}
        <div className="bg-yellow-400 md:w-1/3 w-full p-6 md:p-10 md: rounded-r-xl">
          <div className="space-y-6">
            {[
              { step: 1, title: "Basic Info" },
              { step: 2, title: "Address Details & Branding" },
              { step: 3, title: "Admin Roles" },
              { step: 4, title: "Review & Confirm" }
            ].map((stepInfo) => (
              <div key={`step-${stepInfo.step}`} className="flex items-center gap-4">
                <div
                  className={`w-9 h-9 flex items-center justify-center rounded-md font-semibold border-2 ${
                    currentStep === stepInfo.step
                      ? "bg-black text-white border-black"
                      : "bg-yellow-400 text-black border-black"
                  }`}
                >
                  {stepInfo.step}
                </div>
                <div>
                  <div className="text-sm">Step {stepInfo.step}</div>
                  <div className="font-semibold">{stepInfo.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

                 {/* Right Content Area */}
         <div className="md:w-2/3 w-full flex px-8 py-4 flex-col h-full">
           {/* Header */}
           <div className="flex items-start justify-between px-6 pt-4 pb-2 ">
             <div>
               <h2 className="text-2xl md:text-3xl font-semibold">
                 {currentStep === 1 && "Basic Information"}
                 {currentStep === 2 && "Address Details & Profile"}
                 {currentStep === 3 && "Admin Roles"}
                 {currentStep === 4 && "Review & Confirm"}
               </h2>
               <p className="text-gray-600 mb-2 text-sm">
                 {currentStep === 1 && (
                   <>
                     Please provide the admin's name, username, email address, and contact<br />
                     number.
                   </>
                 )}
                 {currentStep === 2 && "Please provide the shop's full address, city, state, postal code, country, and upload the profile photo."}
                 {currentStep === 3 && (
                   <>
                     Please choose the appropriate role for the admin and assign the necessary<br />
                     permissions and access levels to manage the shop’s operations effectively.
                   </>
                 )}
                 {currentStep === 4 && (
                   <>
                     Please review all the details you have entered, verify that the information is<br />
                     correct, and confirm before submitting.
                   </>
                 )}
               </p>
             </div>
             <button
               onClick={onClose}
               className="text-gray-500 hover:text-black p-2 rounded-md"
             >
               ✕
             </button>
           </div>

           {/* Step Content */}
           <div className="flex-1 px-6 ">
            {currentStep === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-800 mb-1.5">
                    Admin Username
                  </label>
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => handleInputChange('username', e.target.value)}
                    placeholder="e.g. Murlidhar store"
                    className="w-[60%] px-2 py-1.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div className="flex">
                <div className="mr-2">
                  <label className="block text-sm font-medium text-gray-800 mb-1.5">
                    Admin First Name
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="e.g. Murlidhar"
                    className="w-42.5 px-2 py-1.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1.5">
                    Admin Last Name
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="e.g. Shukla"
                    className="w-42.5 px-2 py-1.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-800  mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="e.g. Murlidhar7987@gmail.com"
                    className="w-[60%] px-2 py-1.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-800  mb-1.5">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="e.g. +91 989 238 344"
                    className="w-[30%] px-2 py-1.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {/* Left Column - Form Fields */}
                <div className="space-y-3 md:col-span-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <textarea
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="Enter your full address"
                      rows="3"
                      className="w-full px-2 py-1.5 text-sm border resize-none border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        placeholder="e.g. Indore"
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        value={formData.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        placeholder="e.g. Madhya Pradesh"
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        value={formData.postalCode}
                        onChange={(e) => handleInputChange('postalCode', e.target.value)}
                        placeholder="e.g. 452010"
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Country
                      </label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        placeholder="e.g. India"
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column - Profile Photo Upload */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Profile Photo
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500 text-sm h-full flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-2">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    Drop your Profile Photo here
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-3">
                {roleOptions.map((role) => (
                  <label key={`role-${role.key}`} className="flex items-start gap-3 cursor-pointer">
                    <CustomCheckbox
                      checked={formData.roles.includes(role.key)}
                      onChange={() => handleRoleToggle(role.key)}
                    />
                    <div>
                      <div className="font-semibold text-sm">{role.label}</div>
                      <div className="text-gray-600 text-xs">{role.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-3">
                <h3 className="font-semibold text-md">Information, Address & Roles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-start">
                  <div className="relative border rounded-lg p-3">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="text-black font-semibold text-sm">{formData.username || "Not provided"}</div>
                      <button type="button" onClick={() => setCurrentStep(1)} title="Edit Basic Info">
                        <img src={img1} alt="edit" className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-xs text-gray-800 space-y-1
                    ">
                      <div>{`${(formData.firstName || "").trim()} ${(formData.lastName || "").trim()}`.trim() || "Not provided"}</div>
                      <div>{formData.email || "Not provided"}</div>
                      <div>{formData.phone || "Not provided"}</div>
                    </div>
                  </div>
                  <div className="relative border rounded-lg p-3">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="text-black font-semibold text-sm">{formData.city || "Not provided"}</div>
                      <button type="button" onClick={() => setCurrentStep(2)} title="Edit Address">
                        <img src={img1} alt="edit" className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-xs text-gray-800 space-y-1">
                      <div>{formData.state || "Not provided"}</div>
                      <div>{formData.country || "Not provided"}</div>
                      <div>{formData.postalCode || "Not provided"}</div>
                      <div className="whitespace-pre-line">{formData.address || "Not provided"}</div>
                    </div>
                  </div>
                  <div className="relative border rounded-lg p-3">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="text-black font-semibold text-sm"></div>
                      <button type="button" onClick={() => setCurrentStep(3)} title="Edit Roles">
                        <img src={img1} alt="edit" className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-xs text-gray-800">
                      {formData.roles.length > 0 ? (
                        <ul className="list-disc list-inside space-y-1">
                          {formData.roles.map((role) => {
                            const roleInfo = roleOptions.find(r => r.key === role);
                            return <li key={`selected-role-${role}`}>{roleInfo?.label || role}</li>;
                          })}
                        </ul>
                      ) : (
                        <div>No roles selected</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

                               {/* Navigation */}
           <div className="flex items-center justify-between px-6 py-4 bg-white border-t border-gray-100 mt-auto">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center gap-1 px-4 py-2 rounded-md text-xs text-gray-600 hover:text-gray-800"
              >
                <ChevronLeft className="w-4 h-4"/>
                 Go Back
              </button>
            )}
            {currentStep === 1 && <div></div>}

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={!canProceed()}
                className={`px-5 py-2 rounded-lg text-xs ${
                  canProceed()
                    ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Next Step
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black text-xs rounded-lg"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAdminWizard;