import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useWalletConnectModal, WalletConnectModal } from '@walletconnect/modal-react-native'
import { verticalScale } from 'react-native-size-matters'

const App = () => {
  const projectId = 'f8b2c7dcb7f2af60169dbbeb2d8dc7eb'
  const { open, isConnected, address, provider } = useWalletConnectModal();

  const handleButton = async () => {
    if (isConnected) {
      return provider?.disconnect();
    }
    return open();
  }

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
      <Text style={{ alignSelf: "center" }}>{isConnected ? address : 'no wallet connected'}</Text>
      <TouchableOpacity
        onPress={handleButton}
        style={{ backgroundColor: "red", width: "80%", height: verticalScale(25), alignSelf: "center", marginVertical: verticalScale(25), alignItems: "center", justifyContent: "center" }}>
        <Text style={{ alignSelf: "center", textAlign: "center", fontWeight: "bold", color: "white" }}>{isConnected ? "Disconnect Wallet" : "Connect Wallet"}</Text>
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
  )
}

export default App