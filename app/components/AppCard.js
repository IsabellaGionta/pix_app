import { MaterialCommunityIcons } from '@expo/vector-icons';
import { React } from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import AppText from './AppText';



function AppCard({borderWidth, height, borderRadius, width, image, name, icon, icon2, onPress, backgroundColor, alignItems, justifyContent, flexDirection}) {  

    return (
        <View style={styles.container}>
            <View style={styles.cards}>
                    {isFinite(image)? 
                        <ImageBackground source={image} resizeMode="contain" style={{width, borderRadius, backgroundColor, borderWidth, height, alignItems, justifyContent, flexDirection }}> 
                        </ImageBackground> 
                        : 
                        <ImageBackground source={{uri: image}} resizeMode="contain" style={styles.photoImage}>                        
                        </ImageBackground>
                    }
                    
                    <TouchableOpacity> 
                        {icon2 && <MaterialCommunityIcons onPress={onPress} name={icon2} size={35} style={styles.icon2} />} 
                    </TouchableOpacity>                       
                    <TouchableOpacity> 
                        {icon && <MaterialCommunityIcons onPress={onPress} name={icon} size={35} style={styles.icon} />} 
                    </TouchableOpacity> 
                    { name ? <AppText style={styles.photoName}> {name} </AppText> : null}

            </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        borderRadius: 30,
        borderWidth: 2,
        marginTop: '20%',
        marginLeft: '2%',
        overflow: 'hidden',
        width: 130,
        height: 150,
        flexDirection: 'row',
        flex: 1,    
    }, 
    cards: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,

    },
     photoName: {
        color: "black",
        fontSize: 20,
        width: '100%',
        height: 100,
        fontWeight: "bold",
        textAlign: "center",

    },
    
    photoImage:{
        width: '100%',
        height: '100%',
        position:'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

 
    
})

export default AppCard;