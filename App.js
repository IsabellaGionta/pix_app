import { StyleSheet} from 'react-native';

import AppScreen from './app/components/AppScreen';
import CollectionScreen from './app/screens/CollectionScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen'
import RegisterScreen from './app/screens/RegisterScreen';
import NewCollectionScreen from './app/screens/NewCollectionScreen';
import HomeScreen from './app/screens/HomeScreen';


import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import TabNavigator from './app/navigation/TabNavigator';


export default function App() {
  return (
    <NavigationContainer> 
      <AuthNavigator/>
    </NavigationContainer>


    
      // <NewCollectionScreen  style={styles.container}> 
      
      // </NewCollectionScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
