import React from "react";

const mockTransactions = [
  { id: 1, type: "Send", amount: "50 CXP", to: "0xabc...123" },
  { id: 2, type: "Receive", amount: "120 CXP", from: "0xdef...456" },
];

const TransactionHistory = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-center">Transaction History</h2>
      <ul className="space-y-2">
        {mockTransactions.map((tx) => (
          <li
            key={tx.id}
            className="bg-zinc-700 p-3 rounded flex justify-between items-center"
          >
            <div>
              <strong>{tx.type}</strong>
              <div className="text-sm text-zinc-300">
                {tx.type === "Send" ? `To: ${tx.to}` : `From: ${tx.from}`}
              </div>
            </div>
            <span className="text-orange-400">{tx.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
