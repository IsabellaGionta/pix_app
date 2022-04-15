import React from 'react';


import {StyleSheet, Text } from 'react-native';

import AppColors from '../config/AppColors';
import AppFonts from '../config/AppFonts';

function AppText({style, children}) {
    return (
        <Text style={[styles.text, style]}> {children} </Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        fontFamily: AppFonts.text,
        fontWeight: 'bold',
        color: AppColors.FeatureTextColor,
    },
})


export default AppText;




    