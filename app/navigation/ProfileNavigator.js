import React from 'react';
import {createStackNavigator } from '@react-navigation/stack';
import CollectionScreen from '../screens/CollectionScreen';
import LoginScreen from '../screens/LoginScreen';
import PhotosNavigator from './PhotosNavigator';
import ProfileScreen from '../screens/ProfileScreen';

const ProfileNav = createStackNavigator();

const ProfileNavigator = () => (
    <ProfileNav.Navigator screenOptions={{headerShown: false}}>
        <ProfileNav.Screen name="PhotosScreen3" component={PhotosNavigator}  />
        <ProfileNav.Screen name="ProfileScreen3" component={ProfileScreen}  />
        <ProfileNav.Screen name="Collection3" component={CollectionScreen}  />
        <ProfileNav.Screen name="LoginScreen3" component={LoginScreen}  />


    </ProfileNav.Navigator>

)

 
export default ProfileNavigator;