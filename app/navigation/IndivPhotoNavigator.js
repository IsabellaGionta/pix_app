import React from 'react';
import {createStackNavigator } from '@react-navigation/stack';
import CollectionsNavigator from './CollectionNavigator';
import IndivPhotoScreen from '../screens/IndivPhotoScreen';

const IndivPhotoNav = createStackNavigator();

const IndivPhotoNavigator = () => (
    <IndivPhotoNav.Navigator screenOptions={{headerShown: false}}>
        <IndivPhotoNav.Screen name="IndivPhotoScreen" component={IndivPhotoScreen}  />
        <IndivPhotoNav.Screen name="Collection4" component={CollectionsNavigator}  />
    </IndivPhotoNav.Navigator>

)

 
export default IndivPhotoNavigator;