import { useEffect, useState } from "react";

const useBiometricAuth = (onSuccess) => {
  const [supported, setSupported] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!window.PublicKeyCredential) {
      setError("Biometric authentication not supported.");
      return;
    }

    setSupported(true);

    navigator.credentials
      .get({
        publicKey: {
          challenge: new Uint8Array(26),
          timeout: 60000,
          userVerification: "required",
        },
      })
      .then(() => onSuccess())
      .catch((err) => {
        setError("Biometric auth failed or cancelled.");
        console.error(err);
      });
  }, [onSuccess]);

  return { supported, error };
};

export default useBiometricAuth;
