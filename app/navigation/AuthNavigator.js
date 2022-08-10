import { createStackNavigator } from '@react-navigation/stack';
import CollectionsNavigator from './CollectionNavigator';
import IndivNavigator from './IndivNavigator';
import LoginScreen from '../screens/LoginScreen';
import PhotosNavigator from './PhotosNavigator';
import React from 'react';
import RegisterScreen from '../screens/RegisterScreen';
import TabNavigator from './TabNavigator';
import WelcomeScreen from '../screens/WelcomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PhotoScreen from '../screens/PhotoScreen';
import CollectionScreen from '../screens/CollectionScreen';


const AppStack = createStackNavigator();

const AuthNavigator = () => (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Welcome" component={WelcomeScreen} />
        <AppStack.Screen name="Login" component={LoginScreen}  />
        <AppStack.Screen name="Register" component={RegisterScreen} />
        <AppStack.Screen name="Collection" component={CollectionScreen} />
        <AppStack.Screen name="Profile" component={TabNavigator} />
        <AppStack.Screen name="Photo" component={PhotoScreen} />
        <AppStack.Screen name="IndivCollectionScreen" component={IndivNavigator}  />
        <AppStack.Screen name="ProfileScreen" component={TabNavigator}  />

    </AppStack.Navigator>

)


export default AuthNavigator;