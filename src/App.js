import React, { useState } from "react";
import SendForm from "./components/SendForm";
import ReceiveScreen from "./components/ReceiveScreen";
import TransactionHistory from "./components/TransactionHistory";

function App() {
  const [activeTab, setActiveTab] = useState("send");

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6 font-sans">
      <div className="max-w-md mx-auto bg-zinc-800 rounded-2xl shadow-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center">🚀 ColsenLite Wallet</h1>

        {/* Tab Buttons */}
        <div className="flex justify-around text-sm">
          <button
            onClick={() => setActiveTab("send")}
            className={`px-4 py-2 rounded-full ${
              activeTab === "send" ? "bg-orange-500" : "bg-zinc-700"
            }`}
          >
            💸 Send
          </button>
          <button
            onClick={() => setActiveTab("receive")}
            className={`px-4 py-2 rounded-full ${
              activeTab === "receive" ? "bg-orange-500" : "bg-zinc-700"
            }`}
          >
            📥 Receive
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`px-4 py-2 rounded-full ${
              activeTab === "history" ? "bg-orange-500" : "bg-zinc-700"
            }`}
          >
            📄 History
          </button>
        </div>

        {/* View Renderer */}
        <div className="mt-4">
          {activeTab === "send" && <SendForm />}
          {activeTab === "receive" && <ReceiveScreen />}
          {activeTab === "history" && <TransactionHistory />}
        </div>
      </div>
    </div>
  );
}

export default App;
