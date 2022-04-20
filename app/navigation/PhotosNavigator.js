import React from 'react';

import {createStackNavigator } from '@react-navigation/stack';

import CollectionScreen from '../screens/CollectionScreen';
import PhotoScreen from '../screens/PhotoScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';

const PhotosNav = createStackNavigator();

const PhotosNavigator = () => (
    <PhotosNav.Navigator screenOptions={{headerShown: false}}>
        <PhotosNav.Screen name="PhotosScreen" component={PhotoScreen}  />
        <PhotosNav.Screen name="ProfileScreen2" component={ProfileScreen}  />
        <PhotosNav.Screen name="Collection" component={CollectionScreen}  />
        <PhotosNav.Screen name="LoginScreen" component={LoginScreen}  />


    </PhotosNav.Navigator>

)

 
export default PhotosNavigator;