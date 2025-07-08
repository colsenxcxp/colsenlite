// src/components/TransactionHistory.jsx
import React from "react";

const TransactionHistory = ({ onBack }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-80 text-center">
      <h2 className="text-xl font-bold mb-4">📄 Transaction History</h2>
      <p className="text-gray-600 mb-6">No transactions to show.</p>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
        onClick={onBack}
      >
        🔙 Back
      </button>
    </div>
  );
};

export default TransactionHistory;
