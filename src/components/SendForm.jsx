import React, { useState } from "react";

const SendForm = () => {
  const [toAddress, setToAddress] = useState("");
  const [amount, setAmount] = useState("");

  const handleSend = () => {
    alert(`Sending ${amount} CXP to ${toAddress}`);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Send Tokens</h2>
      <input
        type="text"
        className="w-full p-2 rounded bg-zinc-700 text-white"
        placeholder="Recipient Address"
        value={toAddress}
        onChange={(e) => setToAddress(e.target.value)}
      />
      <input
        type="number"
        className="w-full p-2 rounded bg-zinc-700 text-white"
        placeholder="Amount (CXP)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        onClick={handleSend}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded"
      >
        Send
      </button>
    </div>
  );
};

export default SendForm;
