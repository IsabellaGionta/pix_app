import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CollectionScreen from '../screens/CollectionScreen';
import IndivCollectionScreen from '../screens/IndivCollectionScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PhotosNavigator from './PhotosNavigator';




const AppNav = createStackNavigator();

const HomeNavigator = () => (
    <AppNav.Navigator screenOptions={{headerShown: false}}>
        <AppNav.Screen name="IndivCollectionScreen1" component={IndivCollectionScreen}  />
        <AppNav.Screen name="Photos1" component={PhotosNavigator}  />
        <AppNav.Screen name="Collection" component={CollectionScreen}  />
        <AppNav.Screen name="Profile2" component={ProfileScreen}  />



    </AppNav.Navigator>

)

 
export default HomeNavigator;