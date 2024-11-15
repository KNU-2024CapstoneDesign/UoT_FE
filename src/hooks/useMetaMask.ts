// src/hooks/useMetaMask.ts
import { useCallback, useEffect, useState } from "react";

const useMetaMask = () => {
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState<boolean>(false);

  useEffect(() => {
    // Check if MetaMask is installed
    setIsMetaMaskInstalled(typeof window.ethereum !== "undefined");
  }, []);

  const connectWithMetaMask = useCallback(async () => {
    // Ensure MetaMask is installed
    if (!isMetaMaskInstalled) {
      console.log("MetaMask is not installed.");
      return;
    }

    try {
      // Request account access
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const message = "Please sign this message to confirm your identity."; // Customize your message
      const signature = await window.ethereum.request({
        method: "personal_sign",
        params: [accounts[0], message],
      });
      if (signature) {
        console.log("Signature:", signature); // Use the signature as needed
        return accounts[0];
      }
    } catch (e: any) {
      if (e.code === 4001) {
        console.log("User rejected the request.");
      } else {
        console.log("An error occurred during connection:", e.message);
      }
    }
  }, [isMetaMaskInstalled]);

  return { connectWithMetaMask };
};

export default useMetaMask;
