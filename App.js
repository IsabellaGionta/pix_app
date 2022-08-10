import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import AuthNavigator from './app/navigation/AuthNavigator';





export default function App() {
  return (
    <NavigationContainer> 
      <AuthNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
