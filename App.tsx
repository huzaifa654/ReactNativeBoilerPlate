import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useWalletConnectModal, WalletConnectModal } from '@walletconnect/modal-react-native';
import { verticalScale } from 'react-native-size-matters';
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";

const networks = {
  polygon: {
    chainId: `0x${Number(137).toString(16)}`, // Polygon Mainnet
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18
    },
    rpcUrls: ["https://polygon-rpc.com/"],
    blockExplorerUrls: ["https://polygonscan.com/"]
  },
  bsc: {
    chainId: `0x${Number(56).toString(16)}`, // Binance Smart Chain Mainnet
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18
    },
    rpcUrls: [
      "https://bsc-dataseed1.binance.org",
      // Add other BSC RPC URLs if needed
    ],
    blockExplorerUrls: ["https://bscscan.com"]
  }
};

const App = () => {
  const projectId = 'f8b2c7dcb7f2af60169dbbeb2d8dc7eb';
  const { open, isConnected, address, provider, } = useWalletConnectModal();
  const [error, setError] = useState(null);
  let web3;

  const handleButton = async () => {
    if (isConnected) {
      return provider?.disconnect();
    }
    return open();
  }

  const handleNetworkSwitch = async (networkName) => {
    setError(null); // Reset error state
    try {
      if (!provider) throw new Error("No provider found");

      // Use WalletConnectModal's methods to switch chains
      await provider.request({
        method: "wallet_addEthereumChain",
        params: [networks[networkName]]
      });

      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: networks[networkName].chainId }]
      });
    } catch (err) {
      setError(err.message);
      console.error("Failed to switch network:", err);
    }
  };

  useEffect(() => {
    if (provider) {
      const networkChanged = (chainId) => {
        console.log("Network changed to:", chainId);
        // You can update UI here based on the new chainId
      };

      provider.on("chainChanged", networkChanged);

      return () => {
        provider.off("chainChanged", networkChanged);
      };
    }
  }, [provider]);

  const providerMetadata = {
    name: 'YOUR_PROJECT_NAME',
    description: 'YOUR_PROJECT_DESCRIPTION',
    url: 'https://www.google.co.uk/',
    icons: ['https://your-project-logo.com/'],
    redirect: {
      native: 'https://www.google.co.uk/',
      universal: 'https://www.google.co.uk/',
    },
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      {error && <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>}
      <Text style={{ alignSelf: "center" }}>{isConnected ? address : 'No wallet connected'}</Text>
      <TouchableOpacity
        onPress={handleButton}
        style={{ backgroundColor: "red", width: "80%", height: verticalScale(50), alignSelf: "center", marginVertical: verticalScale(25), alignItems: "center", justifyContent: "center" }}>
        <Text style={{ alignSelf: "center", textAlign: "center", fontWeight: "bold", color: "white" }}>{isConnected ? "Disconnect Wallet" : "Connect Wallet"}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleNetworkSwitch('polygon')}
        style={{ backgroundColor: "blue", width: "80%", height: verticalScale(50), alignSelf: "center", marginVertical: verticalScale(10), alignItems: "center", justifyContent: "center" }}>
        <Text style={{ alignSelf: "center", textAlign: "center", fontWeight: "bold", color: "white" }}>Switch to Polygon</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleNetworkSwitch('bsc')}
        style={{ backgroundColor: "green", width: "80%", height: verticalScale(50), alignSelf: "center", marginVertical: verticalScale(10), alignItems: "center", justifyContent: "center" }}>
        <Text style={{ alignSelf: "center", textAlign: "center", fontWeight: "bold", color: "white" }}>Switch to Binance Smart Chain</Text>
      </TouchableOpacity>

      <WalletConnectModal
        explorerRecommendedWalletIds={[
          'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
        ]}
        explorerExcludedWalletIds={'ALL'}
        projectId={projectId}
        providerMetadata={providerMetadata}
      />
    </View>
  );
};

export default App;