import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import React from 'react';
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import AppColors from '../config/AppColors';
import AppText from './AppText';



function AppScreen({children, size='70%', imageBackground, onPress, handleBackClick, icon, back, source, title}) {


    
    return (

        <View style={styles.appscreen}>
            { imageBackground ? <ImageBackground style={styles.imageBackground} source={imageBackground} blurRadius={7} resizeMode="cover" /> : null }

                        
                <View style={styles.icons}> 
                    <TouchableOpacity style={styles.menu} onPress={handleBackClick}> 
                                { back ? <MaterialCommunityIcons
                                    name={back} 
                                    size={60}
                                    color={AppColors.FeatureTextColor}/> : null}
                    </TouchableOpacity>
                    

                    { source ? <Image style={styles.logo} source={source} /> : null }

                    { title ? <AppText style={styles.text} > {title} </AppText> : null }

                    <TouchableOpacity style={styles.account} onPress={onPress}>
                            {icon && <MaterialCommunityIcons
                                name={icon} 
                                size={60}
                                color={AppColors.FeatureTextColor}/>}
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
       backgroundColor: AppColors.backColor,
    },
    imageBackground: {
        width: '100%', 
        height: '100%',

        position: 'absolute',
    },
    icons: {
        flexDirection: 'row',

    },

    account: {
        flex:1,
        flexDirection: 'row-reverse',
        marginTop: '13%',
        marginHorizontal: '6%',

    },
    text: {
        fontSize: 40, 
        marginLeft: '6%',
        marginBottom: '2%',
        marginTop: '15%',
    },
    logo: {
        width: '50%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '10%',
        marginTop: '8%',
    },
})

export default AppScreen;
