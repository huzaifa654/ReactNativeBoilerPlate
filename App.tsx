import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from './src/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import Navigation from './src/Navigation/Navigation'

export default function App() {
  return (
    <Provider store={store}>
       <PersistGate loading={false} persistor={persistor} onBeforeLift={() => { }}>
        <Navigation/>
       </PersistGate>
    </Provider>
  )
}

const styles = StyleSheet.create({})