import React from 'react';

import { View, Image, StyleSheet} from 'react-native'
import AppColors from '../config/AppColors';
import AppText from './AppText';


function AppCard({name, image}) {
    return (
        <View style={styles.container}>
            {isFinite(image)? <Image source={image} style={styles.collectionImage}/> :<Image source={{uri: image}} style={styles.image}/>}
            <AppText style={styles.collectionText}> {name} </AppText>    
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:AppColors.primaryColor,
        borderRadius:20,
        overflow:"hidden",
        marginBottom: 25,
        width: '30%',
        height: '60%',
    }, 
    collectionImage:{
        height: '60%',
        width: "100%",
    },
    collectionText: {
        textAlign: 'center',
        padding: '10%',
    }
    
})

export default AppCard;