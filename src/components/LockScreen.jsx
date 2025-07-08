// components/LockScreen.jsx
import React, { useState, useEffect } from "react";
import useBiometricAuth from "../hooks/useBiometricAuth";

const LockScreen = ({ onUnlock }) => {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [hasPin, setHasPin] = useState(false);
  const { supported, error: biometricError } = useBiometricAuth(onUnlock);

  useEffect(() => {
    const storedPin = localStorage.getItem("userPin");
    if (!storedPin) {
      const firstPin = prompt("Set a 4-digit PIN for your wallet:");
      if (firstPin && firstPin.length === 4) {
        localStorage.setItem("userPin", firstPin);
        setHasPin(true);
      }
    } else {
      setHasPin(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const stored = localStorage.getItem("userPin");
    if (pin === stored) {
      onUnlock();
    } else {
      setError("Incorrect PIN. Try again.");
      setPin("");
    }
  };

  if (!hasPin) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-lg w-72 text-center"
      >
        <h2 className="text-lg font-semibold mb-4 text-[#10141C]">🔒 Enter Your PIN</h2>
        <input
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          maxLength={4}
          className="w-full p-2 border border-gray-400 rounded text-center mb-4"
        />
        <button
          type="submit"
          className="w-full p-2 bg-[#F7931A] text-black font-bold rounded hover:bg-[#e5830c]"
        >
          Unlock
        </button>
        {error && <p className="text-red-600 text-xs mt-3">{error}</p>}
        {biometricError && <p className="text-red-500 text-xs mt-2">{biometricError}</p>}
        {supported && (
          <p className="text-xs text-gray-600 mt-4">
            ✅ You can also use Face ID / Fingerprint
          </p>
        )}
      </form>
    </div>
  );
};

export default LockScreen;
