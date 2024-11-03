// src/App.tsx
import React from "react";
import useMetaMask from "./hooks/useMetaMask"; // Adjust the path if needed

const App = () => {
  const { account, connectWithMetaMask } = useMetaMask();

  return (
    <div>
      <button onClick={connectWithMetaMask}>
        {account
          ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}`
          : "Connect Wallet"}
      </button>
      {account && <p>Account: {account}</p>}
    </div>
  );
};

export default App;
