import React from 'react';
import { StyleSheet, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppColors from '../config/AppColors';

function AppIcon({name, size=40, backgroundColor, iconColor, style}) {
    return (
        <View style={{width: size, height: size, backgroundColor, iconColor, borderRadius: size, alignItems:"center", justifyContent:"center"}}>
            <MaterialCommunityIcons name={name} size={size*0.6} />
        </View>
    );
}
const styles = StyleSheet.create({
    
})

export default AppIcon;