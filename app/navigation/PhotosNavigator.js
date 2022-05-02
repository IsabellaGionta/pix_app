import React from 'react';
import {createStackNavigator } from '@react-navigation/stack';
import CollectionScreen from '../screens/CollectionScreen';
import IndivCollectionScreen from '../screens/IndivCollectionScreen';
import LoginScreen from '../screens/LoginScreen';
import PhotoScreen from '../screens/PhotoScreen';
import ProfileScreen from '../screens/ProfileScreen';

const PhotosNav = createStackNavigator();

const PhotosNavigator = () => (
    <PhotosNav.Navigator screenOptions={{headerShown: false}}>
        <PhotosNav.Screen name="PhotosScreen" component={PhotoScreen}  />
        <PhotosNav.Screen name="ProfileScreen2" component={ProfileScreen}  />
        <PhotosNav.Screen name="Collection" component={CollectionScreen}  />
        <PhotosNav.Screen name="LoginScreen" component={LoginScreen}  />
        <PhotosNav.Screen name="IndivCollectionScreen2" component={IndivCollectionScreen}  />



    </PhotosNav.Navigator>

)

 
export default PhotosNavigator;