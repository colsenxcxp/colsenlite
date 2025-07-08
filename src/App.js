import React, { useState } from "react";
import LockScreen from "./components/LockScreen";
import SendForm from "./components/SendForm";
import ReceiveScreen from "./components/ReceiveScreen";
import TransactionHistory from "./components/TransactionHistory";

function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [view, setView] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {!unlocked && <LockScreen onUnlock={() => setUnlocked(true)} />}

      {unlocked && view === "dashboard" && (
        <div className="p-6 text-center bg-white shadow-md rounded-lg w-80">
          <h1 className="text-2xl font-bold text-[#10141C] mb-2">🚀 Wallet Unlocked</h1>
          <p className="text-gray-600 mb-6">Welcome to ColsenLite!</p>

          <div className="grid gap-4 grid-cols-1">
            <button
              className="bg-[#F7931A] text-black font-bold py-2 px-4 rounded hover:bg-[#e5830c]"
              onClick={() => setView("send")}
            >
              💸 Send
            </button>
            <button
              className="bg-gray-200 text-black font-bold py-2 px-4 rounded hover:bg-gray-300"
              onClick={() => setView("receive")}
            >
              📥 Receive
            </button>
            <button
              className="bg-blue-200 text-black font-bold py-2 px-4 rounded hover:bg-blue-300"
              onClick={() => setView("history")}
            >
              📄 History
            </button>
          </div>
        </div>
      )}

      {unlocked && view === "send" && <SendForm onBack={() => setView("dashboard")} />}
      {unlocked && view === "receive" && <ReceiveScreen onBack={() => setView("dashboard")} />}
      {unlocked && view === "history" && <TransactionHistory onBack={() => setView("dashboard")} />}
    </div>
  );
}

export default App;  

