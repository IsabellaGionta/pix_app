import React from 'react';
import { View, StyleSheet, Image, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';
import Constants from 'expo-constants';

import AppColors from '../config/AppColors';

import {MaterialCommunityIcons} from '@expo/vector-icons';



function AppScreen({children, style, onPress}) {
    return (

        <View style={styles.appscreen}>
                        
                <View style={styles.icons}> 
                    <TouchableOpacity style={styles.menu} onPress={onPress}>
                                <MaterialCommunityIcons
                                    name="menu" 
                                    size={60}
                                    color={AppColors.FeatureTextColor}/>
                    </TouchableOpacity>

                    <View>
                        <Image style={styles.logo} source={(require('../assets/logo.png'))} />
                    </View>

                    <TouchableOpacity style={styles.account} onPress={onPress}>
                            <MaterialCommunityIcons
                                name="account" 
                                size={60}
                                color={AppColors.FeatureTextColor}/>
                    </TouchableOpacity>
                    
            </View>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    appscreen:{
        flex: 1,
        marginTop: Constants.statusBarHeight,
    //    backgroundColor: AppColors.otherColor,
    },
    icons: {
        flexDirection: 'row',
        marginTop: '3%',
    },
    menu: {
        flex: 0.5,
        flexDirection: 'row',
    },
    account: {
        flex:0.5,
       flexDirection: 'row-reverse',

    },
    logo: {
        width: 150,
        height: 50,
        marginTop: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default AppScreen;
