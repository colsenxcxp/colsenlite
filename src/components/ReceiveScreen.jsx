import React from "react";

const ReceiveScreen = () => {
  const walletAddress = "0xYourWalletAddressHere";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    alert("Wallet address copied!");
  };

  return (
    <div className="space-y-4 text-center">
      <h2 className="text-lg font-semibold">Receive Tokens</h2>
      <div className="bg-zinc-700 p-4 rounded break-words">{walletAddress}</div>
      <button
        onClick={copyToClipboard}
        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
      >
        Copy Address
      </button>
    </div>
  );
};

export default ReceiveScreen;
