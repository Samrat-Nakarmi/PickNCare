import React, { useState } from "react";
import Button from "./Button";
import ZipCodeIcon from "@/components/icons/ZipCodeIcon";

const TabSwitch = () => {
  const [activeTab, setActiveTab] = useState("findCare"); // State to manage the active tab

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-[10px] shadow-md">
      {/* Tabs */}
      <div className="flex justify-between mb-4 border-b border-gray-300">
        <button
          className={`flex-1 py-2 text-center font-semibold ${
            activeTab === "findCare"
              ? "text-black border-b-2 border-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("findCare")}
        >
          Find Care
        </button>
        <button
          className={`flex-1 py-2 text-center font-semibold ${
            activeTab === "sitter"
              ? "text-black border-b-2 border-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("sitter")}
        >
          I'm a sitter
        </button>
      </div>

      {/* Zip Code Input */}
      <div className="mb-4">
        <div className="relative">
          <input
            id="zipCode"
            type="text"
            placeholder="Zip Code"
            className="w-full pl-10 py-4 border border-brown rounded-[10px] focus:outline-none"
          />
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <ZipCodeIcon />
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div>
        <Button>Search</Button>
      </div>
    </div>
  );
};

export default TabSwitch;
