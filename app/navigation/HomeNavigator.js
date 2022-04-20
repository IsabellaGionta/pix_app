import React from 'react';

import {createStackNavigator } from '@react-navigation/stack';

import CollectionScreen from '../screens/CollectionScreen';
import PhotoScreen from '../screens/PhotoScreen';
import PhotosNavigator from './PhotosNavigator';
import ProfileScreen from '../screens/ProfileScreen';

const AppNav = createStackNavigator();

const HomeNavigator = () => (
    <AppNav.Navigator screenOptions={{headerShown: false}}>
        <AppNav.Screen name="Photos1" component={PhotosNavigator}  />
        <AppNav.Screen name="Collection" component={CollectionScreen}  />
        <AppNav.Screen name="Profile2" component={ProfileScreen}  />


    </AppNav.Navigator>

)

 
export default HomeNavigator;