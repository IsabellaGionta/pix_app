import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import CollectionScreen from '../screens/CollectionScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AppColors from '../config/AppColors';
import AppIcon from '../components/AppIcon';
import HomeNavigator from './HomeNavigator';
import PhotoScreen from '../screens/PhotoScreen';

const AppTab = createBottomTabNavigator();

const TabNavigator = () => (
    <AppTab.Navigator 
        screenOptions={{
            tabBarActiveTintColor: AppColors.highlightColor,
            tabBarActiveBackgroundColor: AppColors.otherColor,
            tabBarInactiveTintColor: AppColors.FeatureTextColor,
            headerShown: false,
        }}>
      <AppTab.Screen name="Profile" component={HomeNavigator} options={{ tabBarIcon: () => <AppIcon size={30} name="home" backgroundColor={AppColors.secondaryColor}/>}}/>
      <AppTab.Screen name="Photos" component={PhotoScreen} options={{tabBarIcon: () => <AppIcon size={30} name="image-multiple" backgroundColor={AppColors.secondaryColor}/>}} />
      <AppTab.Screen name="Collections" component={CollectionScreen} options={{ tabBarIcon: () => <AppIcon size={30} name="folder-image" backgroundColor={AppColors.secondaryColor}/>}} />

    </AppTab.Navigator>
  );

export default TabNavigator;