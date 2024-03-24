import { StyleSheet } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from 'react-query';
import Index from './app/route';

type Props = {}

const App = (props: Props) => {
  const queryClient = new QueryClient()
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <QueryClientProvider client={queryClient}>
       <Index />
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({})