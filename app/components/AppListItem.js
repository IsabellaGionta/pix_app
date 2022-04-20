import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppColors from '../config/AppColors';
import AppText from './AppText';



function AppListItem({image, name, description, onPress, onSwipeLeft}) {
    return (
        <Swipeable renderRightActions={onSwipeLeft}>
            <TouchableHighlight onPress={onPress} underlayColor={AppColors.otherColor}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        {image ? <Image source={image} style={styles.image}/> : null}
                    </View>
                    <View style={styles.textContainer}>
                        <AppText style={styles.photoName}> {name} </AppText>
                        {description ? <AppText style={styles.photoDesc}> {description} </AppText> : null}
                    </View>
         
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:10,
    },
    imageContainer: {
        width: '40%',
    },
    image:{
        height: 150,
        width: '100%',
        borderRadius: 37,
        marginLeft: 10,
    },
    textContainer:{
        flexDirection:"column",
        width: '80%',
        marginLeft: 20,
    },
    // name:{
    //     fontWeight:"bold",
    //     marginVertical: 5,
    // },
    // subtitle:{
    //     fontSize:15,
    // }

    photoName: {
        fontSize: 20,
        marginTop: '5%',
        textAlign: 'left',
    },
    photoImage:{
        height: '50%',
        width: "100%",
    },
    photoDesc: {
        marginTop: '6%',
        marginLeft: '2%',
        width: '70%',
        fontSize: 14,
        textAlign: 'left',
        overflow: 'hidden',
    },
    
})

export default AppListItem;