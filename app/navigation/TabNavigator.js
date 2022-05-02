import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import AppColors from '../config/AppColors';
import AppIcon from '../components/AppIcon';
import CollectionScreen from '../screens/CollectionScreen';
import HomeNavigator from './HomeNavigator';
import PhotosNavigator from './PhotosNavigator';



const AppTab = createBottomTabNavigator();

const TabNavigator = () => (
    <AppTab.Navigator 
        screenOptions={{
            tabBarActiveTintColor: AppColors.highlightColor,
            tabBarActiveBackgroundColor: AppColors.otherColor,
            tabBarInactiveTintColor: AppColors.FeatureTextColor,
            headerShown: false,
            tabBarStyle: {height: 70}
        }}>
        <AppTab.Screen name="Profile" component={HomeNavigator} options={{  tabBarIcon: () => <AppIcon size={60} name="home" />}}/>
        <AppTab.Screen name="Photos" component={PhotosNavigator} options={{tabBarIcon: () => <AppIcon size={60} name="image-multiple" />}} />
        <AppTab.Screen name="Collections" component={CollectionScreen} options={{ tabBarIcon: () => <AppIcon size={60} name="folder-image" />}} />

    </AppTab.Navigator>
  );

export default TabNavigator;