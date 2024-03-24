import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'; 

type Props = {}

const App = (props: Props) => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>App</Text>
      <LottieView style={{
        width: 250,
        height: 250,
      }} source={require('./lottieFile.json')} autoPlay loop />
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})