import React from 'react';
import { ImageBackground, StyleSheet, TouchableHighlight, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AppColors from '../config/AppColors';
import AppText from './AppText';



function AppListItem({image, imagePath, name, description, onPress, onSwipeLeft}) {
    return (
        <Swipeable renderRightActions={onSwipeLeft}>
            <TouchableHighlight onPress={onPress} underlayColor={AppColors.otherColor}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        {isFinite(image)? <ImageBackground source={image} style={styles.image}>

                        <View style={{height: '20%', backgroundColor: AppColors.black, opacity: 0.3, borderRadius: 20,top: '80%',}}> 
                            <View style={{position: 'absolute', top:-10, left: 20, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                                <AppText style={{fontSize: 40, color: AppColors.white}}>{name}</AppText>
                            </View>
                        </View>

                        </ImageBackground> :
                        <ImageBackground source={{uri: image}} style={styles.image}> 
                            <View style={{height: '20%', backgroundColor: AppColors.black, opacity: 0.3, borderRadius: 20,top: '80%',}}> 
                                <View style={{position: 'absolute', top:-10, left: 20, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                                    <AppText style={{fontSize: 40, color: AppColors.white}}>{name}</AppText>
                                </View>
                            </View>
                        </ImageBackground>}
                    </View>
                    <View style={{borderWidth:2, top: 20, width: '100%', borderRadius: 1,borderColor: 'black', borderStyle: 'dotted', margin: 20,}}/>

                </View>
         
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        
    },

    image:{
        height: 200,
        width: '100%',
        borderRadius: 37,
        marginLeft: 10,
        opacity: 0.7,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 2,
        overflow: 'hidden',

    },
    textContainer:{
        flexDirection:"column",
        width: '80%',
        marginLeft: 20,
        flex: 1,
    },
    // imageContainer: {
    //     position: 'absolute',
    // },
    // name:{
    //     fontWeight:"bold",
    //     marginVertical: 5,
    // },
    // subtitle:{
    //     fontSize:15,
    // }

    photoName: {
        fontSize: 20,
        // marginTop: '5%',
        textAlign: 'left',
    },
    photoImage:{
        height: '50%',
        width: "100%",
    },
    photoDesc: {
        // marginTop: '6%',
        // marginLeft: '2%',
        // width: '70%',
        fontSize: 14,
        textAlign: 'left',
        overflow: 'hidden',
    },
    
})

export default AppListItem;