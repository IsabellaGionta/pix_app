import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import IndivCollectionScreen from '../screens/IndivCollectionScreen';



const CollectionsNav = createStackNavigator();

const CollectionsNavigator = () => (
    <CollectionsNav.Navigator screenOptions={{headerShown: false}}>
                <CollectionsNav.Screen name="Collection4" component={CollectionsNavigator}  />

        <CollectionsNav.Screen name="IndivCollectionScreen4" component={IndivCollectionScreen}  />

    </CollectionsNav.Navigator>

)

 
export default CollectionsNavigator;