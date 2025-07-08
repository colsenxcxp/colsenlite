// src/components/SendForm.jsx
import React from "react";

const SendForm = ({ onBack }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg w-80 text-center">
      <h2 className="text-xl font-bold text-[#10141C] mb-4">💸 Send</h2>
      <p className="text-gray-600 mb-4">Send crypto coming soon.</p>
      <button
        onClick={onBack}
        className="bg-gray-200 text-black font-bold py-2 px-4 rounded hover:bg-gray-300"
      >
        ← Back
      </button>
    </div>
  );
};

export default SendForm;
