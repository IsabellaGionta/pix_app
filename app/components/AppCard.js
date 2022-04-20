import {React, useState} from 'react';

import { View, Image, StyleSheet, TouchableOpacity, FlatList, Modal} from 'react-native'
import AppColors from '../config/AppColors';
import AppText from './AppText';
import {Overlay} from 'react-native-elements';


import {MaterialCommunityIcons} from '@expo/vector-icons';
import { Navigation } from 'react-native-navigation';


import AppAlert from './AppAlert';
import AppPickerItem from './AppPickerItem';
import AppButton from './AppButton';
import AppOverlay from './AppOverlay';
import AppTextInput from './AppTextInput';


function AppCard({overlayid, data, name, image, description, icon, icon2, navigation, onPress}) {  

    return (
        <View style={styles.container}>
            <View style={styles.cards}>
                    {isFinite(image)? <Image source={image} style={styles.photoImage}/> :<Image source={{uri: image}} style={styles.photoImage}/>}
                            <AppText style={styles.photoName}> {name} </AppText>
                        <TouchableOpacity> 
                                {icon2 && <MaterialCommunityIcons onPress={onPress} name={icon2} size={35} style={styles.icon2} />} 
                        </TouchableOpacity>                       
                        <TouchableOpacity> 
                                {icon && <MaterialCommunityIcons onPress={onPress} name={icon} size={35} style={styles.icon} />} 
                        </TouchableOpacity> 
            </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:AppColors.otherColor,
        borderRadius: 40,
        marginTop: '10%',
        overflow: 'hidden',
        width: '45%',
        flex: 1,



    }, 
    cards: {
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',

    },
    // photoName: {
    //     marginTop: '3%',
    //     marginBottom: '20%',
    //     fontSize: 40,
    //     textAlign: 'center',
    // },
    photoImage:{
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',


        width: '90%',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
 
    
})

export default AppCard;

// const styles = StyleSheet.create({
//     container:{
//         backgroundColor:AppColors.primaryColor,
//         borderRadius:20,
//         // overflow:"hidden",
//         marginTop: '10%',
//         width: '50%',

//     }, 
//     collectionImage:{
//         height: 150,
//         width: "100%",
//     },
//     collectionText: {
//         textAlign: 'center',
//         // padding: '10%',
//     }
    
// })

// export default AppCard;