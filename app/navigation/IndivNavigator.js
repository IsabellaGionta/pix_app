import React from 'react';
import {createStackNavigator } from '@react-navigation/stack';
import CollectionsNavigator from './CollectionNavigator';
import IndivCollectionScreen from '../screens/IndivCollectionScreen';


const IndivNav = createStackNavigator();

const IndivNavigator = () => (
    <IndivNav.Navigator screenOptions={{headerShown: false}}>
        <IndivNav.Screen name="IndivCollectionScreen4" component={IndivCollectionScreen}  />
        <IndivNav.Screen name="Collection4" component={CollectionsNavigator}  />




    </IndivNav.Navigator>

)

 
export default IndivNavigator;