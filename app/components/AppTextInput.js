import React from 'react';
import { View, StyleSheet, TextInput, useState } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppColors from '../config/AppColors';
import AppFonts from '../config/AppFonts';

function AppTextInput({icon, ...otherProps}) {

    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={22}/>}
            <TextInput style={styles.textInput} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    
    container:{
        flexDirection: 'row',
        borderRadius: 40, 
        padding: 15,
        width:'80%',
        backgroundColor: AppColors.secondaryColor,
        marginVertical: 10,
        marginLeft: '10%',


    },
    textInput:{
        flex: 1,
        fontSize: 20,
        fontFamily: AppFonts.text,
        color: AppColors.FeatureTextColor,
        marginLeft: '2%',
        width:'80%',

    },
})
export default AppTextInput;