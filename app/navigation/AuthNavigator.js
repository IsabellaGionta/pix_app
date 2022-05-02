import { createStackNavigator } from '@react-navigation/stack';
import CollectionsNavigator from './CollectionNavigator';
import IndivNavigator from './IndivNavigator';
import LoginScreen from '../screens/LoginScreen';
import PhotosNavigator from './PhotosNavigator';
import React from 'react';
import RegisterScreen from '../screens/RegisterScreen';
import TabNavigator from './TabNavigator';
import WelcomeScreen from '../screens/WelcomeScreen';


const AppStack = createStackNavigator();

const AuthNavigator = () => (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Welcome" component={WelcomeScreen} />
        <AppStack.Screen name="Login" component={LoginScreen}  />
        <AppStack.Screen name="Register" component={RegisterScreen} />
        <AppStack.Screen name="Collection" component={CollectionsNavigator} />
        <AppStack.Screen name="PhotosScreen" component={PhotosNavigator} />
        <AppStack.Screen name="IndivCollectionScreen" component={IndivNavigator}  />
        <AppStack.Screen name="ProfileScreen" component={TabNavigator}  />

    </AppStack.Navigator>

)


export default AuthNavigator;