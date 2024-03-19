import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import TabNavigator from './src/routes/TabNavigator';
import Login from './src/screens/Login'

const App = () => {
  // return <TabNavigator />
  return (
    <Login />
  )
}
export default App;
