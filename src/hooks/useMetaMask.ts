// src/hooks/useMetaMask.ts
import { useCallback, useEffect, useState } from "react";

const useMetaMask = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] =
    useState<boolean>(false);

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
      console.log("Connected account:", accounts[0]);
      setAccount(accounts[0]); // Save the connected account
    } catch (e: any) {
      if (e.code === 4001) {
        console.log("User rejected the request.");
      } else {
        console.log("An error occurred during connection:", e.message);
      }
    }
  }, [isMetaMaskInstalled]);

  return { account, connectWithMetaMask };
};

export default useMetaMask;
