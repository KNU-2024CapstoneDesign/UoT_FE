import React from 'react';
import useMetaMask from "@/hooks/useMetaMask";

interface ConnectWalletButtonProps {
  onWalletConnect: (walletAddress: string) => void; // 지갑 주소를 부모 컴포넌트로 전달하는 함수
}

export const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({ onWalletConnect }) => {
  const { account, connectWithMetaMask } = useMetaMask();

  const handleConnect = async () => {
    try {
      await connectWithMetaMask(); // MetaMask와 연결
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const walletAddress = accounts[0];
      onWalletConnect(walletAddress); // 지갑 주소를 부모 컴포넌트로 전달
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
