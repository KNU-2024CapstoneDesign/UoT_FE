import React, { useState } from "react";
import useMetaMask from "./hooks/useMetaMask";
import { ChakraProvider, Button, Input, Box, Flex, FormControl, FormLabel } from "@chakra-ui/react";

const App = () => {
  const { account, connectWithMetaMask } = useMetaMask();

  // State for sign-up fields
  const [name, setName] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // State for login field
  const [loginPassword, setLoginPassword] = useState("");

  const handleSignUp = async () => {
    if (!account) {
      console.log("Please connect your wallet first.");
      return;
    }

    if (signUpPassword !== confirmPassword) {
      console.log("Passwords do not match.");
      return;
    }

    const message = `Sign this message to sign up: ${new Date().toISOString()}`; // A message to sign
    try {
      // Sign the message
      const signature = await window.ethereum.request({
        method: "personal_sign",
        params: [account, message],
      });

      const requestBody = {
        account: account,
        name: name,
        password: signUpPassword,
        signature: signature,
      };

      const response = await fetch(
        "http://localhost:8080/api/auth/holder/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Server response:", data);
        // Handle successful response (e.g., navigate to dashboard)
      } else {
        console.error("Error during sign-up:", response.statusText);
      }
    } catch (error) {
      console.error("Error signing message:", error);
    }
  };

  const handleLogin = async () => {
    if (!account) {
      console.log("Please connect your wallet first.");
      return;
    }

    const message = `Sign this message to log in: ${new Date().toISOString()}`; // A message to sign
    try {
      // Sign the message
      const signature = await window.ethereum.request({
        method: "personal_sign",
        params: [account, message],
      });

      const requestBody = {
        account: account,
        password: loginPassword,
        signature: signature,
      };

      const response = await fetch(
        "http://localhost:8080/api/auth/holder/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Server response:", data);
        // Handle successful response (e.g., navigate to dashboard)
      } else {
        console.error("Error during login:", response.statusText);
      }
    } catch (error) {
      console.error("Error signing message:", error);
    }
  };

  return (
    <ChakraProvider>
      <div>
        <button onClick={connectWithMetaMask}>
          {account
            ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}`
            : "Connect Wallet"}
        </button>

        {account && (
          <Flex mt="4">
            <Box mr="8" w="40%">
              <FormControl id="sign-up" mb="4">
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl id="sign-up-password" mb="4">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={signUpPassword}
                  onChange={(e) => setSignUpPassword(e.target.value)}
                />
              </FormControl>
              <FormControl id="confirm-password" mb="4">
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </FormControl>
              <Button onClick={handleSignUp} colorScheme="teal" width="100%">
                Sign Up
              </Button>
            </Box>

            <Box w="40%">
              <FormControl id="login-password" mb="4">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </FormControl>
              <Button onClick={handleLogin} colorScheme="blue" width="100%">
                Login
              </Button>
            </Box>
          </Flex>
        )}
      </div>
    </ChakraProvider>
  );
};

export default App;
