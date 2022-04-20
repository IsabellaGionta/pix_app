import React from 'react';
import {createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TabNavigator from './TabNavigator'
import CollectionScreen from '../screens/CollectionScreen';
import PhotoScreen from '../screens/PhotoScreen';
import PhotosNavigator from './PhotosNavigator';
import HomeNavigator from './HomeNavigator';

const AppStack = createStackNavigator();

const AuthNavigator = () => (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Welcome" component={WelcomeScreen} />
        <AppStack.Screen name="Login" component={LoginScreen}  />
        <AppStack.Screen name="Register" component={RegisterScreen} />
        <AppStack.Screen name="Collection" component={CollectionScreen} />
        <AppStack.Screen name="PhotosScreen" component={PhotosNavigator} />
        <AppStack.Screen name="ProfileScreen" component={TabNavigator}  />

    </AppStack.Navigator>

)


export default AuthNavigator;