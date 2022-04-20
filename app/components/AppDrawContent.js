

import React from 'react';
import { StyleSheet, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppColors from '../config/AppColors';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
  

function AppDrawContent(props) {
    return (
        <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      </DrawerContentScrollView>
    );
  }
const styles = StyleSheet.create({
    
})

export default AppDrawContent;