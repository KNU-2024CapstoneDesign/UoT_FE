import React, { useState } from 'react';
import useMetaMask from "@/hooks/useMetaMask";

interface ConnectWalletButtonProps {
  onWalletConnect: (walletAddress: string) => void; // Function to pass wallet address to parent component
}

export const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({ onWalletConnect }) => {
  const [account, setAccount] = useState<string | null>(null); // Initialize account state as string or null
  const { connectWithMetaMask } = useMetaMask();

  const handleConnect = async () => {
    try {
      const connectedAccount = await connectWithMetaMask(); // Connect to MetaMask
      if (connectedAccount) {
        onWalletConnect(connectedAccount); // Pass wallet address to parent component
        setAccount(connectedAccount); // Set account state
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };

  return (
    <button onClick={handleConnect}>
      {account
        ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}`
        : "Connect Wallet"}
    </button>
  );
};
