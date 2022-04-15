import React from 'react';
import {createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TabNavigator from './TabNavigator'

const AppStack = createStackNavigator();

const AuthNavigator = () => (
    <AppStack.Navigator 
    screenOptions= {{
        headerStatusBarHeight: 30 
    }}>
        <AppStack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <AppStack.Screen name="Home" component={TabNavigator} />
        <AppStack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <AppStack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
    </AppStack.Navigator>

)


export default AuthNavigator;