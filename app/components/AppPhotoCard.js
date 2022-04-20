import {React, useState} from 'react';

import { View, Image, StyleSheet, TouchableOpacity, FlatList, Modal} from 'react-native'
import AppColors from '../config/AppColors';
import AppText from './AppText';
import {Overlay} from 'react-native-elements';


import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppAlert from './AppAlert';
import AppPickerItem from './AppPickerItem';
import AppButton from './AppButton';
import AppOverlay from './AppOverlay';

function AppPhotoCard({data, name, image, description, icon, navigation}) {
    const [overlayVisible, setOverlayVisible]= useState(false);

    const toggleOverlay = () => {
      setOverlayVisible(!overlayVisible);
    };

    return (
        <View style={styles.container}>
            {isFinite(image)? <Image source={image} style={styles.photoImage}/> :<Image source={{uri: image}} style={styles.image}/>}
            <View style={styles.text}> 
                <AppText style={styles.photoName}> {name} </AppText>
                <AppText style={styles.photoText}> {description} </AppText>    
                <TouchableOpacity onPress={toggleOverlay}> 
                    {icon && <MaterialCommunityIcons name={icon} size={35} style={styles.icon} />} 
                </TouchableOpacity>
            </View>

            
            <Overlay isVisible={overlayVisible} onBackdropPress={toggleOverlay}>
                <Image source={image}/>
            </Overlay>

            {/* <AppAlert visible={overlayVisible}>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem = {({item}) => 
                        <AppPickerItem 
                            onPress={() => {
                                setOverlayVisible(false);
                            }}
                            label={item.label}
                            icon={item.icon}  
                            backgroundColor={item.backgroundColor}>
                        </AppPickerItem>
                        
                        
                       }
                    />
            </AppAlert> */}
            {/* <Modal visible={overlayVisible}>


            </Modal> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:AppColors.primaryColor,
        borderRadius:20,
        borderWidth: 2,
        marginTop: '10%',
        // width: '100%',
        flex: 1,
        flexDirection: 'row',
    }, 
    text: {
        width: '100%',

    },
    photoName: {
        fontSize: 20,
        marginLeft: '20%',

    },
    photoImage:{
        height: 150,
        width: "45%",
    },
    photoText: {
        marginTop: '6%',
        marginLeft: '2%',
        width: '50%',
        fontSize: 12,
        textAlign: 'center',
    },
    icon: {
        marginLeft: '22%',
        marginTop: '4%',

    }
    
})

export default AppPhotoCard;