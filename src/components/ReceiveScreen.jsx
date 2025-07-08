import React from "react";

const ReceiveScreen = ({ onBack }) => {
  const walletAddress = "0x1234567890ABCDEF1234567890ABCDEF12345678";

  return (
    <div className="p-6 text-center bg-white shadow-md rounded-lg w-80">
      <h2 className="text-xl font-bold mb-4">📥 Receive</h2>
      <p className="text-sm text-gray-600 mb-2">Your wallet address:</p>
      <p className="break-words font-mono text-xs mb-4">{walletAddress}</p>
      <button
        onClick={onBack}
        className="bg-gray-300 text-black font-bold py-2 px-4 rounded hover:bg-gray-400"
      >
        🔙 Back
      </button>
    </div>
  );
};

export default ReceiveScreen;
